import { asset } from '../utils/assets';

export type DocumentRef = {
  id: string;
  title: string;
  type: 'Yearly expectations' | 'Registration form' | 'Health form' | 'School policy' | 'Official statement';
  href: string;
  year?: string;
  className?: string;
  available: boolean;
};

export type AdmissionClass = {
  id: string;
  name: string;
  stage: 'Cuddles Childminders School' | 'The Cuddles Hall';
  category: 'Preschool' | 'Basic Elementary' | 'Secondary';
  description: string;
  requirements: string[];
  yearlyExpectations?: DocumentRef | null;
  registrationDocument?: DocumentRef | null;
  healthDocument?: DocumentRef | null;
  nextSteps: string[];
};

const docHref = (filename: string) => asset(encodeURI(`/ad_documentation/${filename}`));

export const documentLibrary: DocumentRef[] = [
  {
    id: 'nursery-1-prior',
    title: 'Nursery 1 Yearly Expectations 2026/2027',
    type: 'Yearly expectations',
    href: docHref('NURSERY 1 YEARLY EXPECTATIONS 20262027 PDF.pdf'),
    year: '2026/2027',
    className: 'Nursery 1',
    available: true,
  },
  {
    id: 'nursery-2-prior',
    title: 'Nursery 2 Yearly Expectations 2026/2027',
    type: 'Yearly expectations',
    href: docHref('NURSERY 2 YEARLY EXPECTAIONS 20262027 PDF.pdf'),
    year: '2026/2027',
    className: 'Nursery 2',
    available: true,
  },
  {
    id: 'reception-prior',
    title: "Reception's Yearly Expectations 2026/2027",
    type: 'Yearly expectations',
    href: docHref("RECEPTION'S YEARLY EXPECTATIONS 20262027 PDF.pdf"),
    year: '2026/2027',
    className: 'Reception',
    available: true,
  },
  {
    id: 'bel-4-prior',
    title: 'BEL 4 Yearly Expectations 2026/2027',
    type: 'Yearly expectations',
    href: docHref('BEL 4 YEARLY EXPECTATIONS 20262027 PDF.pdf'),
    year: '2026/2027',
    className: 'BEL 4',
    available: true,
  },
  {
    id: 'bel-5-prior',
    title: 'BEL 5 Yearly Expectations 2026/2027',
    type: 'Yearly expectations',
    href: docHref('BEL 5 YEARLY EXPECTATIONS 20262027 PDF.pdf'),
    year: '2026/2027',
    className: 'BEL 5',
    available: true,
  },
  {
    id: 'bel-6-prior',
    title: 'BEL 6 Yearly Expectations 2026/2027',
    type: 'Yearly expectations',
    href: docHref('BEL 6 YEARLY EXPECTATIONS 20262027 PDF.pdf'),
    year: '2026/2027',
    className: 'BEL 6',
    available: true,
  },
  {
    id: 'hbel-prior',
    title: 'HBEL Yearly Expectations 2026/2027',
    type: 'Yearly expectations',
    href: docHref('HBEL YEARLY EXPECTATIONS 20262027 PDF.pdf'),
    year: '2026/2027',
    className: 'HBEL',
    available: true,
  },
  {
    id: 'pre-school-registration-canonical',
    title: 'Pre-Schoolers Registration Form',
    type: 'Registration form',
    href: docHref('PRE-SCHOOLERS CCMS REGISTRATION FORM  PDF.pdf'),
    className: 'Preschool',
    available: true,
  },
  {
    id: 'basic-elementary-registration',
    title: 'Basic Elementary Registration Form',
    type: 'Registration form',
    href: docHref('BASIC ELEMENTARY LEVEL REGISTRATION FORM PDF.pdf'),
    className: 'BEL',
    available: true,
  },
  {
    id: 'secondary-registration',
    title: 'Secondary School Registration Form',
    type: 'Registration form',
    href: docHref('SECONDARY SCHOOLREGISTRATION FORM PDF.pdf'),
    className: 'SHL',
    available: true,
  },
  {
    id: 'preschool-health-history',
    title: 'Preschool Classes Health History Form',
    type: 'Health form',
    href: docHref('PRESCHOOL CLASSES HEALTH HISTORY FORM PDF.pdf'),
    className: 'Preschool',
    available: true,
  },
  {
    id: 'primary-secondary-health',
    title: 'Primary & Secondary School Health Form',
    type: 'Health form',
    href: docHref('PRIMARY & SECONDARY SCHOOL  HEALTH FORM PDF.pdf'),
    className: 'Primary / Secondary',
    available: true,
  },
  {
    id: 'school-policy',
    title: 'School Policy',
    type: 'School policy',
    href: docHref('SCHOOL POLICY PDF.pdf'),
    className: 'All',
    available: true,
  },
  {
    id: 'social-media-policy',
    title: 'Social Media Policy',
    type: 'School policy',
    href: docHref('SOCIAL MEDIA POLICY  PDF.pdf'),
    className: 'All',
    available: true,
  },
  {
    id: 'student-code-of-conduct',
    title: "Students' Code of Conduct & Disciplinary Actions",
    type: 'School policy',
    href: docHref("STUDENTS' CODE OF CONDUCT & DISCIPLINARY ACTIONS PDF.pdf"),
    className: 'All',
    available: true,
  },
  {
    id: 'vision-mission',
    title: 'Vision & Mission Statements',
    type: 'Official statement',
    href: docHref('Vision & Mission Statements.docx'),
    className: 'All',
    available: true,
  },
];

export const classOptions: AdmissionClass[] = [
  {
    id: 'pre-nursery',
    name: 'PRE-NURSERY',
    stage: 'Cuddles Childminders School',
    category: 'Preschool',
    description: 'Early years learning built around secure routines, curiosity, play and meaningful early literacy and social development.',
    requirements: [
      'Completed preschool registration form.',
      'Current health history information.',
      'Any relevant supporting information as requested by the admissions team.',
    ],
    yearlyExpectations: null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'pre-school-registration-canonical') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'preschool-health-history') || null,
    nextSteps: [
      'Download the preschool registration and health documents.',
      'Review the parent information and required forms.',
      'Continue with the school registration process.',
    ],
  },
  {
    id: 'nursery-1',
    name: 'NURSERY 1',
    stage: 'Cuddles Childminders School',
    category: 'Preschool',
    description: 'A warm foundation for early communication, independence and a confident readiness for school routines.',
    requirements: [
      'Completed preschool registration form.',
      'Current health history information.',
      'Any family information requested by the admissions team.',
    ],
    yearlyExpectations: documentLibrary.find((doc) => doc.id === 'nursery-1-prior') || null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'pre-school-registration-canonical') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'preschool-health-history') || null,
    nextSteps: [
      'Review the Nursery 1 yearly expectations document.',
      'Complete the registration and health forms.',
      'Submit the completed documents through the admissions process.',
    ],
  },
  {
    id: 'nursery-2',
    name: 'NURSERY 2',
    stage: 'Cuddles Childminders School',
    category: 'Preschool',
    description: 'A more structured phase of early learning focused on confidence, communication, independence and school readiness.',
    requirements: [
      'Completed preschool registration form.',
      'Current health history information.',
      'Supporting information requested during the registration process.',
    ],
    yearlyExpectations: documentLibrary.find((doc) => doc.id === 'nursery-2-prior') || null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'pre-school-registration-canonical') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'preschool-health-history') || null,
    nextSteps: [
      'Review the Nursery 2 yearly expectations document.',
      'Complete all forms in full.',
      'Continue the registration journey and contact admissions if you need guidance.',
    ],
  },
  {
    id: 'reception',
    name: 'RECEPTION',
    stage: 'Cuddles Childminders School',
    category: 'Preschool',
    description: 'A purposeful transition into formal learning with a strong focus on readiness, independence and daily confidence.',
    requirements: [
      'Completed preschool registration form.',
      'Health history information.',
      'Any documentation requested during the application review.',
    ],
    yearlyExpectations: documentLibrary.find((doc) => doc.id === 'reception-prior') || null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'pre-school-registration-canonical') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'preschool-health-history') || null,
    nextSteps: [
      'Review the Reception yearly expectations document.',
      'Complete the required forms.',
      'Continue registration and contact the school for support if needed.',
    ],
  },
  {
    id: 'bel-1',
    name: 'BEL 1',
    stage: 'Cuddles Childminders School',
    category: 'Basic Elementary',
    description: 'A foundational elementary stage where literacy, numeracy, inquiry and responsibility are developed together.',
    requirements: [
      'Completed Basic Elementary registration form.',
      'Recent health information from the school health form.',
      'Any additional information requested by the admissions team.',
    ],
    yearlyExpectations: null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'basic-elementary-registration') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'primary-secondary-health') || null,
    nextSteps: [
      'Review the class-specific expectations and required forms.',
      'Complete the registration and health information.',
      'Continue to the registration process and ask for guidance if needed.',
    ],
  },
  {
    id: 'bel-2',
    name: 'BEL 2',
    stage: 'Cuddles Childminders School',
    category: 'Basic Elementary',
    description: 'The early primary years continue to build independence, literacy confidence and purposeful classroom routines.',
    requirements: [
      'Completed Basic Elementary registration form.',
      'Health information and supporting forms.',
      'Additional school details if requested.',
    ],
    yearlyExpectations: null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'basic-elementary-registration') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'primary-secondary-health') || null,
    nextSteps: [
      'Confirm the appropriate class and relevant documents.',
      'Complete the school registration form.',
      'Contact the admissions team for any questions.',
    ],
  },
  {
    id: 'bel-3',
    name: 'BEL 3',
    stage: 'Cuddles Childminders School',
    category: 'Basic Elementary',
    description: 'A year of deeper learning, greater literacy confidence and stronger classroom independence.',
    requirements: [
      'Completed Basic Elementary registration form.',
      'Signed health form and supporting information.',
      'Any class-specific information required by the school.',
    ],
    yearlyExpectations: null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'basic-elementary-registration') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'primary-secondary-health') || null,
    nextSteps: [
      'Download the required registration and health documents.',
      'Complete the forms carefully.',
      'Submit the documents through the admissions journey.',
    ],
  },
  {
    id: 'bel-4',
    name: 'BEL 4',
    stage: 'Cuddles Childminders School',
    category: 'Basic Elementary',
    description: 'A growing stage of academic confidence where inquiry, independence and consistent learning habits develop further.',
    requirements: [
      'Completed Basic Elementary registration form.',
      'Health information and family details.',
      'Any documents requested by the school during enquiry or registration.',
    ],
    yearlyExpectations: documentLibrary.find((doc) => doc.id === 'bel-4-prior') || null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'basic-elementary-registration') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'primary-secondary-health') || null,
    nextSteps: [
      'Review the BEL 4 expectations document.',
      'Complete the administration and health forms.',
      'Continue registration with the school team.',
    ],
  },
  {
    id: 'bel-5',
    name: 'BEL 5',
    stage: 'Cuddles Childminders School',
    category: 'Basic Elementary',
    description: 'Students continue to deepen their thinking, communication and self-management skills in a purposeful classroom environment.',
    requirements: [
      'Completed Basic Elementary registration form.',
      'Health form and relevant information.',
      'School-specific details requested at application.',
    ],
    yearlyExpectations: documentLibrary.find((doc) => doc.id === 'bel-5-prior') || null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'basic-elementary-registration') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'primary-secondary-health') || null,
    nextSteps: [
      'Review the BEL 5 expectations document.',
      'Download and fill in the required forms.',
      'Submit the completed forms and continue with school support.',
    ],
  },
  {
    id: 'bel-6',
    name: 'BEL 6',
    stage: 'Cuddles Childminders School',
    category: 'Basic Elementary',
    description: 'The upper primary stage prepares children for deeper inquiry, responsibility and confident transition to the next educational stage.',
    requirements: [
      'Completed Basic Elementary registration form.',
      'Updated health information.',
      'Any additional requirements notified by the school.',
    ],
    yearlyExpectations: documentLibrary.find((doc) => doc.id === 'bel-6-prior') || null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'basic-elementary-registration') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'primary-secondary-health') || null,
    nextSteps: [
      'Review the BEL 6 yearly expectations document.',
      'Complete the required registration and health forms.',
      'Continue registration and reach out if assistance is needed.',
    ],
  },
  {
    id: 'hbel',
    name: 'HBEL',
    stage: 'The Cuddles Hall',
    category: 'Secondary',
    description: 'A senior preparatory phase designed to strengthen leadership thinking, deeper reasoning and future-ready learning habits.',
    requirements: [
      'Relevant registration documents for the selected stage.',
      'Health information.',
      'Any additional information provided by the school during inquiry or registration.',
    ],
    yearlyExpectations: documentLibrary.find((doc) => doc.id === 'hbel-prior') || null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'basic-elementary-registration') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'primary-secondary-health') || null,
    nextSteps: [
      'Review the HBEL yearly expectations document.',
      'Complete the required registration and health forms.',
      'Proceed with the registration journey and contact admissions for support.',
    ],
  },
  {
    id: 'shl',
    name: 'SHL',
    stage: 'The Cuddles Hall',
    category: 'Secondary',
    description: 'A senior school-learning environment focused on self-directed learning, deeper thinking and confident preparation for future study.',
    requirements: [
      'Secondary registration form.',
      'Health form details.',
      'Any additional information requested by the school during the application process.',
    ],
    yearlyExpectations: null,
    registrationDocument: documentLibrary.find((doc) => doc.id === 'secondary-registration') || null,
    healthDocument: documentLibrary.find((doc) => doc.id === 'primary-secondary-health') || null,
    nextSteps: [
      'Review the registration requirements for the selected class.',
      'Complete the secondary registration form and supporting documents.',
      'Continue with the formal registration process and contact admissions if needed.',
    ],
  },
];

export const admissionsSteps = [
  'Explore the school and identify the appropriate class.',
  'Review the class-specific requirements and documents.',
  'Download the relevant registration and health forms.',
  'Complete the required information in full.',
  'Continue with registration and submit completed documents.',
  'Contact the school for support if assistance is needed.',
];

export const faqItems = [
  {
    question: 'Which classes can I apply for?',
    answer: 'Families may review the class list on this page and select the class that matches their child’s current stage. The specific class requirements are shown after selection.',
  },
  {
    question: 'What documents do I need?',
    answer: 'The required documents vary by class. Relevant registration and health documents are shown when a class is selected.',
  },
  {
    question: 'Where can I download the forms?',
    answer: 'The admissions page provides the relevant forms and document links where they are available in the project files.',
  },
  {
    question: 'How do I submit completed documents?',
    answer: 'After you complete the required forms, you can continue with the school’s admissions process and contact the Admissions team for guidance on the next step.',
  },
  {
    question: 'What if I need help?',
    answer: 'Families can contact the school through the admissions support section, by phone, or by using the WhatsApp option when the official number is configured.',
  },
];

export const admissionsData = classOptions;
export default admissionsData;
