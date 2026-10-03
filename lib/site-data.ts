export const academy = {
  name: 'Ilmora Academy',
  shortName: 'Ilmora',
  tagline: 'Prepare with purpose.',
  city: 'Lahore, Pakistan',
  address: 'Main Boulevard, Gulberg III, Lahore, Pakistan',
  phoneDisplay: '+92 317 518 8034',
  phoneE164: '923175188034', // Academy WhatsApp number in digits-only international format (no +).
  email: 'hello@ilmora.example',
  hours: 'Monday – Saturday, 9:00 am – 7:00 pm',
  mapQuery: 'Main Boulevard, Gulberg III, Lahore, Pakistan',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ''),
};

export const programs = [
  {
    id: 'ielts',
    name: 'IELTS Preparation',
    type: 'International English',
    detail: 'Build all four skills with guided practice, feedback and full-length mock tests.',
    duration: '8 weeks',
    badge: 'Popular',
    icon: '✦',
  },
  {
    id: 'mdcat',
    name: 'MDCAT Preparation',
    type: 'Medical Entry Test',
    detail: 'A structured path through core concepts, timed practice and weekly progress checks.',
    duration: '12 weeks',
    badge: 'Admissions',
    icon: '⌬',
  },
  {
    id: 'ecat',
    name: 'ECAT Preparation',
    type: 'Engineering Entry Test',
    detail: 'Strengthen problem-solving with concept sessions and exam-style question practice.',
    duration: '10 weeks',
    badge: 'Focused',
    icon: '⟡',
  },
  {
    id: 'fsc',
    name: 'FSc Support',
    type: 'Intermediate Sciences',
    detail: 'Small-group support for Physics, Chemistry, Biology and Mathematics.',
    duration: 'By term',
    badge: 'Small groups',
    icon: '◈',
  },
  {
    id: 'spoken-english',
    name: 'Spoken English',
    type: 'Communication Skills',
    detail: 'Practice everyday fluency, confidence and clear communication in a friendly group.',
    duration: '6 weeks',
    badge: 'All levels',
    icon: 'Aa',
  },
];

export const faculty = [
  {
    name: 'Ayesha Rahman',
    role: 'IELTS & English Communication',
    credential: 'MA English Literature · CELTA',
    bio: 'Helps learners turn language goals into clear, repeatable practice habits.',
    initials: 'AR',
    color: 'rose',
  },
  {
    name: 'Usman Qureshi',
    role: 'Biology & MDCAT',
    credential: 'MPhil Biological Sciences',
    bio: 'Makes complex biology easier to review through connected concepts and question practice.',
    initials: 'UQ',
    color: 'sage',
  },
  {
    name: 'Hamza Siddiqui',
    role: 'Physics & ECAT',
    credential: 'MS Applied Physics',
    bio: 'Builds confidence in physics by focusing on the why behind every formula.',
    initials: 'HS',
    color: 'sand',
  },
  {
    name: 'Mariam Khalid',
    role: 'Chemistry & FSc',
    credential: 'MSc Chemistry',
    bio: 'Brings structure to challenging topics with approachable examples and steady feedback.',
    initials: 'MK',
    color: 'lilac',
  },
];

export const packages = [
  {
    name: 'Focused Start',
    course: 'Spoken English · 6 weeks',
    price: 'PKR 12,500',
    note: 'one-time sample fee',
    features: ['Three guided sessions each week', 'Small-group speaking practice', 'Weekly progress check-in'],
    featured: false,
  },
  {
    name: 'IELTS Intensive',
    course: 'IELTS Preparation · 8 weeks',
    price: 'PKR 24,500',
    note: 'one-time sample fee',
    features: ['Four skills, taught step by step', 'Writing and speaking feedback', 'Two full-length mock tests'],
    featured: true,
  },
  {
    name: 'Entry Test Journey',
    course: 'MDCAT or ECAT · 12 weeks',
    price: 'PKR 32,000',
    note: 'one-time sample fee',
    features: ['Topic-wise concept sessions', 'Timed practice and review', 'Weekly progress check-in'],
    featured: false,
  },
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${academy.phoneE164}?text=${encodeURIComponent(message)}`;
}

// General, top-level enquiry. This template is a demo academy, so the default
// message is a prospective client asking for a similar website to be built.
export const primaryMessage = `Assalam-o-Alaikum. I came across this academy website and I am very impressed with its professional design. I would like you to build a similar website for me too. Kindly share your packages, pricing and the next steps.`;

// Course-specific enquiry. Mentions the exact course the visitor clicked.
export function courseMessage(courseName: string) {
  return `Assalam-o-Alaikum. I am interested in the ${courseName} course at ${academy.name}. Kindly share the next batch schedule, course duration, fee structure and admission details.`;
}

// Package / fee-plan enquiry. Mentions the plan name and the course it covers.
export function planMessage(planName: string, course: string) {
  return `Assalam-o-Alaikum. I am interested in the ${planName} package (${course}) at ${academy.name}. Kindly share the fee structure, what is included and how to enrol.`;
}

// Admissions enquiry used by the admission-focused buttons.
export const admissionsMessage = `Assalam-o-Alaikum. I am interested in admissions at ${academy.name}. Kindly share the available courses, batch timings, fee structure and the admission process.`;

// Enquiry to arrange a visit or appointment.
export const visitMessage = `Assalam-o-Alaikum. I would like to visit ${academy.name}. Kindly confirm your visiting hours and a suitable time for me to come by.`;

// Enquiry about the academy and its teaching approach.
export const aboutMessage = `Assalam-o-Alaikum. I would like to know more about ${academy.name} and your teaching approach. Kindly share the details.`;

// Enquiry about faculty and instructors.
export const facultyMessage = `Assalam-o-Alaikum. I would like to know more about the faculty and instructors at ${academy.name}. Kindly share their qualifications and how the classes are taught.`;

// Enquiry about current packages, fees and upcoming batches.
export const feesMessage = `Assalam-o-Alaikum. Kindly share the current course packages, fee details and upcoming batch timings at ${academy.name}.`;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/programs/', label: 'Programs' },
  { href: '/faculty/', label: 'Faculty' },
  { href: '/packages/', label: 'Packages' },
  { href: '/location/', label: 'Location' },
];
