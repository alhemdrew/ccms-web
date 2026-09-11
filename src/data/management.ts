import { asset } from '../utils/assets';

export const managementStaff = [
  {
    id: 'head-of-school',
    name: 'Olubukola Odomo (Mrs.)',
    role: 'Head of School & Director',
    image: asset(encodeURI('/images/mgt/Head of School & Director.png')),
    photoAlt: 'Olubukola Odomo — Head of School & Director',
    bio: `Mrs. Olubukola Odomo is an accomplished educational leader with 20 years of professional experience, including 16 years of dedicated service at Cuddles Childminders & Schools. She holds a degree in Industrial Chemistry, a Diploma and Postgraduate Diploma in Education, and has undertaken specialised training in Paediatric First Aid, British Play Construct, and Neurodiversity/Neurodivergence.

As Head of School and Director, she provides strategic leadership in academic development, administration, staff growth, learner wellbeing, inclusion, and school improvement. Her passion lies in creating purposeful, child-centred learning experiences that recognise individual strengths, support diverse learning needs, and equip learners with the knowledge, confidence, character and practical skills to thrive.`,
    responsibilities: [
      'Strategic leadership in academic development',
      'Administration and staff growth',
      'Learner wellbeing, inclusion and school improvement',
    ],
    qualifications:
      'Degree in Industrial Chemistry; Diploma and Postgraduate Diploma in Education; specialised training in Paediatric First Aid, British Play Construct, and Neurodiversity/Neurodivergence.',
  },
  {
    id: 'head-of-bel',
    name: 'Nwabugu Chinonso N. / Mrs. Chinonso',
    role: 'Head of BEL, Cuddles Childminders & Schools',
    image: asset(encodeURI('/images/mgt/HOB.png')),
    photoAlt: 'Nwabugu Chinonso N. — Head of BEL',
    bio: `I provide leadership and coordination for the Basic Education and Learning (BEL) section at Cuddles Childminders & Schools, ensuring that academic activities, staff responsibilities and day-to-day operations are properly organised and effectively delivered.

I work closely with the Head of School to implement school policies, coordinate academic and administrative activities, support staff, resolve operational challenges and maintain the standards that help create an organised and effective learning environment.`,
    responsibilities: ['Academic coordination', 'Staff support', 'Operational oversight'],
    qualifications: '',
    status: 'active',
  },
  {
    id: 'head-of-nursery',
    name: 'Miss Cynthia Nwokolo',
    role: 'Preceptor and Head of the Nursery Department',
    image: asset(encodeURI('/images/mgt/hon.png')),
    photoAlt: 'Miss Cynthia Nwokolo — Preceptor and Head of the Nursery Department',
    bio: `Miss Cynthia Nwokolo is an educator serving as a Preceptor and Head of the Nursery Department at Cuddles Childminders and Schools.

As the Head of the Nursery Department, she provides leadership and direction, coordinates staff and activities, and supports the smooth running of academic and daily operations within the department. She works closely with the Head of School, Mrs Bukola Odomo, to implement school policies, maintain standards, and ensure the effective running of the school.

As a Preceptor, she is passionate about guiding and supporting others through training, mentorship, and practical learning, with a strong interest in leadership, effective communication, and continuous professional development.`,
    responsibilities: [
      'Nursery department leadership',
      'Staff coordination and mentoring',
      'Academic and daily operations oversight',
    ],
    qualifications: '',
    status: 'active',
  },
  {
    id: 'human-resources',
    name: 'Mr. Obande',
    role: 'Human Resources Manager',
    image: asset(encodeURI('/images/mgt/hr.jpeg')),
    photoAlt: 'Mr. Obande — Human Resources Manager',
    bio: 'Mr. Obande provides leadership for the school’s people and operations by supporting recruitment, staff development, wellbeing and the effective coordination of people and processes across the school.',
    responsibilities: ['Staff support', 'Recruitment coordination', 'People operations'],
    qualifications: '',
    status: 'active',
  },
  {
    id: 'head-of-events',
    name: 'Mr. Ogenyi Joseph Ochai',
    role: 'Programme, Events, and Project Lead',
    image: asset(encodeURI('/images/mgt/pc.png')),
    photoAlt: 'Ogenyi Joseph Ochai — Programme, Events and Project Lead',
    bio: `I design and coordinate academic programmes, school-wide events and special projects that extend learning beyond the classroom and create meaningful real-world experiences for learners.

I work across teaching, programme planning, events and project coordination to ensure that initiatives are well organised, purposeful and aligned with the vision of Cuddles Childminders & Schools and The Cuddles Hall.`,
    responsibilities: ['Programme design', 'Event planning', 'Project management'],
    qualifications: '',
    status: 'active',
  },
  {
    id: 'facilities-logistics',
    name: 'Mr. Segun',
    role: 'Facilities & Logistics Manager / Head of Security',
    image: asset(encodeURI('/images/mgt/security lead.jpeg')),
    photoAlt: 'Mr. Segun — Facilities & Logistics Manager / Head of Security',
    bio: `I am a dedicated and experienced Facilities & Logistics Manager and Head of Security, committed to ensuring the smooth, safe, and efficient operation of the school environment.

I provide strategic and operational oversight of facilities management, logistics, transportation, maintenance, security, utilities, and support services, working closely with Management and various departments to ensure that the school remains safe, functional, organised, and conducive to teaching and learning.

As Head of Security, I lead and coordinate security operations with a strong focus on safeguarding students, staff, visitors, school assets, and infrastructure. I am proactive in identifying risks, resolving operational challenges, improving processes, and ensuring compliance with established safety and security procedures.

My leadership approach is built on professionalism, accountability, teamwork, proactive problem-solving, effective communication, and continuous improvement.`,
    responsibilities: ['Facilities oversight', 'Security management', 'Logistics coordination'],
    qualifications: '',
    status: 'active',
  },
];

export default managementStaff;
