export const contactConfig = {
  whatsappNumber: '2347044442651',
  whatsappMessage: 'Hello Cuddles Childminders & Schools, I would like to make an enquiry about admission.',
  phoneNumber: '07030137246',
  email: 'bukola@cuddleschildmindersandschools.com',
  formspreeEndpoint: (import.meta.env as any).VITE_FORMSPREE_ENDPOINT || '',
  formSubmissionEndpoint: (import.meta.env as any).VITE_CONTACT_FORM_ENDPOINT || 'https://script.google.com/macros/s/AKfycbzguLtN2-wykeOsvwdK0_nRte_AP35MyeWi8GbMeb1y3FPCoZjecIaH90wt0T8GjKB9/exec',
  formMode: (import.meta.env as any).VITE_FORM_MODE || 'script',
};

export default contactConfig;
