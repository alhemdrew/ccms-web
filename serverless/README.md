# Serverless mail bridge for admissions submissions

This project expects a serverless endpoint that accepts multipart form uploads and sends them to Gmail.

Recommended setup:
- Google Apps Script web app or a small Node serverless function
- It must accept `multipart/form-data`
- It must read the uploaded file(s)
- It must send the message to the Gmail address configured in the app

Environment variables expected by the frontend:
- `VITE_CONTACT_FORM_ENDPOINT`: the deployed upload endpoint URL
- `VITE_FORM_MODE`: set to `script` when using the upload-capable serverless endpoint

Example:

```bash
VITE_CONTACT_FORM_ENDPOINT=https://script.google.com/macros/s/AKfycbw.../exec
VITE_FORM_MODE=script
```

The browser code in `src/pages/AdmissionsPage.tsx` is already prepared for this flow and will use the configured endpoint instead of the Gmail `mailto:` fallback when available.
