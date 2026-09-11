// Google Apps Script deployment endpoint for admissions submissions.
// Deploy this as a Web App, then copy the URL into VITE_CONTACT_FORM_ENDPOINT.

function doPost(e) {
  try {
    const contentType = e && e.postData && e.postData.type ? e.postData.type : '';
    const payload = e && e.postData && e.postData.contents ? e.postData.contents : '';
    Logger.log('Request content type: ' + contentType);
    Logger.log('Request bytes length: ' + String(payload ? payload.length : 0));

    const parsed = contentType && contentType.includes('multipart/form-data') ? parseMultipartForm(payload, contentType) : { fields: {}, files: [] };
    const directParameters = e && e.parameters ? e.parameters : {};
    const directFields = {};

    Object.keys(directParameters).forEach((key) => {
      const value = directParameters[key];
      directFields[key] = Array.isArray(value) ? value[0] : value;
    });

    const fields = { ...directFields, ...(parsed.fields || {}) };
    const files = parsed.files || [];

    Logger.log('Received field names: ' + Object.keys(fields).join(', '));
    Logger.log('Files received: ' + String(files.length));
    Logger.log('File names: ' + files.map((file) => file.filename).join(', ') || 'none');
    Logger.log('File MIME types: ' + files.map((file) => file.blob.getContentType()).join(', ') || 'none');

    const recipient = 'bukola@cuddleschildmindersandschools.com';
    const subject = 'Admissions registration for ' + (fields.classApplyingFor || 'new applicant');
    const message = buildMessage(fields, files);
    const attachments = files.map((file) => file.blob);

    Logger.log('Attachment count before send: ' + String(attachments.length));

    GmailApp.sendEmail(recipient, subject, message, {
      attachments: attachments.length ? attachments : undefined,
      replyTo: fields.email || '',
      noReply: false,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, attachmentCount: attachments.length, message: 'Admissions form submitted successfully.' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Submission error: ' + (error && error.message ? error.message : String(error)));
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error && error.message ? error.message : 'Submission failed.' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function parseMultipartForm(rawBody, contentType) {
  const fields = {};
  const files = [];

  if (!rawBody || !contentType || !contentType.includes('multipart/form-data')) {
    return { fields, files };
  }

  const boundaryMatch = contentType.match(/boundary=(.*)$/i);
  if (!boundaryMatch) {
    return { fields, files };
  }

  const boundary = '--' + String(boundaryMatch[1]).replace(/"/g, '').trim();
  const bodyBytes = Utilities.newBlob(rawBody).getBytes();
  const boundaryBytes = Utilities.newBlob(boundary).getBytes();
  const parts = splitMultipartParts(bodyBytes, boundaryBytes);

  parts.forEach((part) => {
    if (!part || !part.length) {
      return;
    }

    const headerEnd = indexOfSequence(part, [13, 10, 13, 10]);
    if (headerEnd < 0) {
      return;
    }

    const headersBytes = part.slice(0, headerEnd);
    const contentBytes = part.slice(headerEnd + 4);
    const headers = Utilities.newBlob(headersBytes).getDataAsString();
    const nameMatch = headers.match(/name="([^"]+)"/i);
    if (!nameMatch) {
      return;
    }

    const fieldName = nameMatch[1];
    const fileNameMatch = headers.match(/filename="([^"]*)"/i);
    const cleanedContentBytes = trimMultipartTail(contentBytes);

    if (fileNameMatch && fileNameMatch[1]) {
      const fileName = fileNameMatch[1];
      const mimeTypeMatch = headers.match(/Content-Type:\s*([^\r\n]+)/i);
      const mimeType = mimeTypeMatch ? mimeTypeMatch[1].trim() : 'application/octet-stream';
      files.push({
        name: fieldName,
        filename: fileName,
        blob: Utilities.newBlob(cleanedContentBytes, mimeType, fileName),
      });
      return;
    }

    const textValue = Utilities.newBlob(cleanedContentBytes).getDataAsString();
    fields[fieldName] = textValue;
  });

  return { fields, files };
}

function splitMultipartParts(bodyBytes, boundaryBytes) {
  const parts = [];
  let startIndex = 0;

  while (startIndex < bodyBytes.length) {
    const boundaryIndex = indexOfSequence(bodyBytes, boundaryBytes, startIndex);
    if (boundaryIndex < 0) {
      break;
    }

    const nextBoundaryIndex = indexOfSequence(bodyBytes, boundaryBytes, boundaryIndex + boundaryBytes.length);
    if (nextBoundaryIndex < 0) {
      break;
    }

    const segmentStart = boundaryIndex + boundaryBytes.length;
    const segmentEnd = nextBoundaryIndex;
    let segment = bodyBytes.slice(segmentStart, segmentEnd);

    if (segment.length >= 2 && segment[0] === 13 && segment[1] === 10) {
      segment = segment.slice(2);
    }

    if (segment.length >= 2 && segment[segment.length - 2] === 13 && segment[segment.length - 1] === 10) {
      segment = segment.slice(0, -2);
    }

    if (segment.length > 0) {
      parts.push(segment);
    }

    startIndex = nextBoundaryIndex + boundaryBytes.length;
  }

  return parts;
}

function trimMultipartTail(bytes) {
  let trimmed = bytes;

  while (trimmed.length >= 2 && trimmed[trimmed.length - 2] === 13 && trimmed[trimmed.length - 1] === 10) {
    trimmed = trimmed.slice(0, -2);
  }

  if (trimmed.length >= 1 && trimmed[trimmed.length - 1] === 10) {
    trimmed = trimmed.slice(0, -1);
  }

  if (trimmed.length >= 1 && trimmed[trimmed.length - 1] === 13) {
    trimmed = trimmed.slice(0, -1);
  }

  return trimmed;
}

function indexOfSequence(bytes, pattern, startIndex) {
  if (!bytes || !pattern || pattern.length === 0) {
    return -1;
  }

  for (let i = startIndex; i <= bytes.length - pattern.length; i++) {
    let matches = true;
    for (let j = 0; j < pattern.length; j++) {
      if (bytes[i + j] !== pattern[j]) {
        matches = false;
        break;
      }
    }

    if (matches) {
      return i;
    }
  }

  return -1;
}

function buildMessage(fields, files) {
  const lines = [
    'Admissions registration submitted',
    '---',
    formatField('Child first name', fields.childFirstName),
    formatField('Child middle name', fields.childMiddleName),
    formatField('Child surname', fields.childSurname),
    formatField('Date of birth', fields.dob),
    formatField('Gender', fields.gender),
    formatField('Nationality', fields.nationality),
    formatField('Current school', fields.currentSchool),
    formatField('Class applying for', fields.classApplyingFor),
    formatField('Parent / guardian full name', fields.parentName),
    formatField('Relationship to child', fields.relationship),
    formatField('Email address', fields.email),
    formatField('Primary phone number', fields.phone),
    formatField('Alternative phone number', fields.altPhone),
    formatField('Residential address', fields.address),
    formatField('City', fields.city),
    formatField('State', fields.state),
    formatField('Emergency contact name', fields.emergencyName),
    formatField('Emergency contact relationship', fields.emergencyRelationship),
    formatField('Emergency phone number', fields.emergencyPhone),
    formatField('Additional notes', fields.notes),
    files.length ? 'Attachments: ' + files.map((file) => file.filename).join(', ') : 'Attachments: None',
  ];

  return lines.filter(Boolean).join('\n\n');
}

function formatField(label, value) {
  return label + ': ' + (value || 'N/A');
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ready' })).setMimeType(ContentService.MimeType.JSON);
}
