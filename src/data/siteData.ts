import { asset } from '../utils/assets';
export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Learning', href: '/learning' },
  { label: 'Childminders', href: '/childminders' },
  { label: 'The Cuddles Hall', href: '/the-cuddles-hall' },
  { label: 'Life at Cuddles', href: '/life-at-cuddles' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Management', href: '/management' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

export const philosophyPoints = [
  'Critical thinking',
  'Creativity',
  'Leadership',
  'Independence',
  'Practical learning',
  'Character',
];

export const journeyStages = [
  {
    title: 'Cuddles Childminders School',
    subtitle: 'Creche • Nursery • Primary 1–6',
    description: 'A warm, nurturing foundation for early development and school readiness.',
  },
  {
    title: 'The Cuddles Hall',
    subtitle: 'JSS 1–3 • SS 1',
    description: 'A confident next step where thinking, leadership and innovation deepen.',
  },
];

export const featureCards = [
  {
    title: 'Critical thinking',
    text: 'Questions, exploration and independent reasoning shape the learning experience.',
  },
  {
    title: 'Literacy',
    text: 'Rich language, confidence in expression and a love for reading begin early.',
  },
  {
    title: 'Creativity',
    text: 'Art, design and imagination are part of the rhythm of everyday learning.',
  },
  {
    title: 'Character',
    text: 'Kindness, responsibility and resilience are modelled and practiced.',
  },
];

export const learningHighlights = featureCards;

export const experienceMoments = [
  'Coding',
  'Science experiments',
  'Art & exhibitions',
  'Presentations',
  'Student projects',
  'Business ideas',
];

export const galleryStory = [
  {
    label: 'They explore.',
    title: 'Curiosity meets real-world learning.',
    image: asset('/images/they-explore.png'),
  },
  {
    label: 'They question.',
    title: 'Ideas are tested, discussed and refined.',
    image: asset('/images/they-question.png'),
  },
  {
    label: 'They create.',
    title: 'Projects, art and innovation become tangible.',
    image: asset('/images/they-create.png'),
  },
  {
    label: 'They present.',
    title: 'Confidence grows through public speaking and demonstration.',
    image: asset('/images/they-present.png'),
  },
  {
    label: 'They lead.',
    title: 'Children learn to take responsibility and inspire others.',
    image: asset('/images/they-lead.png'),
  },
];

export const achievements = [
  {
    title: 'Abuja Hackathon for AI, IoT & Open Innovation',
    result: '1st Place',
    year: '2026',
    slides: [asset('/images/achievements/hackathon.png'), asset('/images/achievements/iot.png')],
  },
  {
    title: 'iCode Competition',
    result: '2nd Place',
    year: '2026',
    slides: [asset('/images/achievements/icode.png')],
  },
  {
    title: 'Nigerian Army Competition/Award',
    result: 'Recognition received',
    year: '2025',
    slides: [asset('/images/achievements/military-art-award.png')],
  },
  {
    title: 'Additional Recognition',
    result: '2nd Place / 3rd Place',
    year: '2025',
    slides: [asset('/images/achievements/art-award.png'), asset('/images/achievements/iot-award.png')],
  },
];

export const events = [
  {
    title: 'Art Work Exhibition',
    date: '[Date to be supplied]',
    description: 'A showcase of imagination, craft and student expression.',
  },
  {
    title: 'Business Pitch Presentation',
    date: '[Date to be supplied]',
    description: 'Students present and refine entrepreneurial ideas with confidence.',
  },
  {
    title: 'Coding Event',
    date: '[Date to be supplied]',
    description: 'Practical technology experiences that build problem-solving skills.',
  },
];

export const schoolProgrammes = [
  'Creche',
  'Nursery',
  'Primary 1',
  'Primary 2',
  'Primary 3',
  'Primary 4',
  'Primary 5',
  'Primary 6',
  'JSS 1',
  'JSS 2',
  'JSS 3',
  'SS 1',
];
