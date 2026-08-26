import { asset } from '../utils/assets';
import { useEffect } from 'react';

const SITE_URL = 'https://cuddleschildmindersandschools.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/campus/sch_build.jpeg`;

export const schoolInfo = {
  name: 'Cuddles Childminders & Schools',
  shortName: 'CCMS',
  url: SITE_URL,
  email: 'info@cuddleschildmindersandschools.com',
  phonePrimary: '07030137246',
  phoneSecondary: '07044442651',
  address: 'Plot 1802 Cadastral Zone C, 12 Apo Expressway, Apo, Abuja 900104, Federal Capital Territory',
  city: 'Abuja',
  state: 'Federal Capital Territory',
  country: 'Nigeria',
  logo: `${SITE_URL}/images/logo/ccms.png`,
  image: DEFAULT_IMAGE,
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: schoolInfo.name,
  url: schoolInfo.url,
  email: schoolInfo.email,
  telephone: [schoolInfo.phonePrimary, schoolInfo.phoneSecondary],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot 1802 Cadastral Zone C, 12 Apo Expressway',
    addressLocality: 'Apo',
    addressRegion: 'Federal Capital Territory',
    postalCode: '900104',
    addressCountry: 'NG',
  },
  areaServed: 'Abuja, Federal Capital Territory, Nigeria',
  description:
    'Cuddles Childminders & Schools is a warm, purpose-led learning environment in Abuja focused on literacy, creativity, character, leadership and family-centred education.',
  image: DEFAULT_IMAGE,
  logo: schoolInfo.logo,
  sameAs: [],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: schoolInfo.name,
  url: schoolInfo.url,
  description:
    'Official website for Cuddles Childminders & Schools in Abuja, Nigeria.',
  inLanguage: 'en-NG',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export function buildPageSchema({
  title,
  description,
  path,
  breadcrumb = [],
}: {
  title: string;
  description: string;
  path: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: 'en-NG',
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
    ...(breadcrumb.length > 0
      ? {
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumb.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.name,
              item: `${SITE_URL}${item.url}`,
            })),
          },
        }
      : {}),
  };
}

export type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
};

function setMetaTag(tagName: string, attributes: Record<string, string>) {
  let tag = document.head.querySelector(tagName);

  if (!tag) {
    tag = document.createElement(tagName);
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag?.setAttribute(key, value);
  });
}

function setMetaContent(name: string, content: string, attr = 'name') {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

export function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = [],
  structuredData,
  noIndex = false,
}: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMetaContent('description', description);
    setMetaContent('robots', noIndex ? 'noindex,nofollow' : 'index,follow');
    setMetaContent('keywords', keywords.join(', '));

    setMetaTag('meta', { property: 'og:title', content: title });
    setMetaTag('meta', { property: 'og:description', content: description });
    setMetaTag('meta', { property: 'og:type', content: type });
    setMetaTag('meta', { property: 'og:url', content: url });
    setMetaTag('meta', { property: 'og:image', content: image });
    setMetaTag('meta', { property: 'og:site_name', content: schoolInfo.name });
    setMetaTag('meta', { property: 'og:locale', content: 'en_NG' });

    setMetaTag('meta', { name: 'twitter:card', content: 'summary_large_image' });
    setMetaTag('meta', { name: 'twitter:title', content: title });
    setMetaTag('meta', { name: 'twitter:description', content: description });
    setMetaTag('meta', { name: 'twitter:image', content: image });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    const existingScript = document.querySelector('script[data-seo="json-ld"]');
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo', 'json-ld');
      script.textContent = JSON.stringify(
        Array.isArray(structuredData) ? structuredData : [structuredData],
      );
      document.head.appendChild(script);
    }
  }, [title, description, path, image, type, keywords, structuredData, noIndex]);

  return null;
}

export const pageSeo = {
  home: {
    title: 'Cuddles Childminders & Schools | Early Years and School Education in Abuja',
    description:
      'Cuddles Childminders & Schools in Abuja offers warm, purposeful learning, strong values, creativity, leadership and a connected journey from early years to senior school preparation.',
    path: '/',
    keywords: ['Cuddles Childminders & Schools', 'school in Abuja', 'nursery in Abuja', 'primary school in Abuja', 'early years education'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'Cuddles Childminders & Schools | Early Years and School Education in Abuja',
      description:
        'Cuddles Childminders & Schools in Abuja offers warm, purposeful learning, strong values, creativity, leadership and a connected journey from early years to senior school preparation.',
      path: '/',
    })],
  },
  about: {
    title: 'About Cuddles Childminders & Schools | Purpose-Led Education in Abuja',
    description:
      'Learn about Cuddles Childminders & Schools, our learning philosophy, values and the child-first approach that shapes confident, curious learners in Abuja.',
    path: '/about',
    keywords: ['about Cuddles Childminders & Schools', 'school philosophy Abuja', 'child-centred education'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'About Cuddles Childminders & Schools | Purpose-Led Education in Abuja',
      description:
        'Learn about Cuddles Childminders & Schools, our learning philosophy, values and the child-first approach that shapes confident, curious learners in Abuja.',
      path: '/about',
    })],
  },
  learning: {
    title: 'Learning at Cuddles | Inquiry, Creativity and Character in Abuja',
    description:
      'Explore how Cuddles helps children think clearly, create confidently and grow with purpose through active, human-centred learning in Abuja.',
    path: '/learning',
    keywords: ['school curriculum Abuja', 'creative learning Abuja', 'inquiry-based learning'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'Learning at Cuddles | Inquiry, Creativity and Character in Abuja',
      description:
        'Explore how Cuddles helps children think clearly, create confidently and grow with purpose through active, human-centred learning in Abuja.',
      path: '/learning',
    })],
  },
  childminders: {
    title: 'Cuddles Childminders School | Nurturing Early Learning in Abuja',
    description:
      'Discover Cuddles Childminders School, a warm early years learning environment where confidence, language, security and joyful discovery grow together.',
    path: '/childminders',
    keywords: ['Cuddles Childminders School', 'nursery in Abuja', 'early years education Abuja'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'Cuddles Childminders School | Nurturing Early Learning in Abuja',
      description:
        'Discover Cuddles Childminders School, a warm early years learning environment where confidence, language, security and joyful discovery grow together.',
      path: '/childminders',
    })],
  },
  hall: {
    title: 'The Cuddles Hall | School Pathway for Growth and Leadership in Abuja',
    description:
      'The Cuddles Hall offers a purposeful next stage of learning with deeper thinking, stronger identity, independence and leadership development in Abuja.',
    path: '/the-cuddles-hall',
    keywords: ['The Cuddles Hall', 'school pathway Abuja', 'middle school Abuja'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'The Cuddles Hall | School Pathway for Growth and Leadership in Abuja',
      description:
        'The Cuddles Hall offers a purposeful next stage of learning with deeper thinking, stronger identity, independence and leadership development in Abuja.',
      path: '/the-cuddles-hall',
    })],
  },
  life: {
    title: 'Life at Cuddles | School Culture, Joy and Student Growth in Abuja',
    description:
      'See what life at Cuddles looks like through daily school experiences rooted in warmth, curiosity, belonging and confident growth.',
    path: '/life-at-cuddles',
    keywords: ['life at Cuddles', 'school environment Abuja', 'student life Abuja'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'Life at Cuddles | School Culture, Joy and Student Growth in Abuja',
      description:
        'See what life at Cuddles looks like through daily school experiences rooted in warmth, curiosity, belonging and confident growth.',
      path: '/life-at-cuddles',
    })],
  },
  achievements: {
    title: 'CCMS Achievements | Student Success, Innovation and Creative Excellence',
    description:
      'Explore student achievements, competitions, displays and creative recognition from Cuddles Childminders & Schools in Abuja.',
    path: '/achievements',
    keywords: ['CCMS achievements', 'school competitions Abuja', 'student excellence'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'CCMS Achievements | Student Success, Innovation and Creative Excellence',
      description:
        'Explore student achievements, competitions, displays and creative recognition from Cuddles Childminders & Schools in Abuja.',
      path: '/achievements',
    })],
  },
  innovation: {
    title: 'Innovation at Cuddles | Technology, Creativity and Future Skills in Abuja',
    description:
      'Discover how Cuddles encourages students to explore technology, build ideas, create value and grow future-ready skills with confidence.',
    path: '/innovation',
    keywords: ['innovation at Cuddles', 'technology learning Abuja', 'future skills school'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'Innovation at Cuddles | Technology, Creativity and Future Skills in Abuja',
      description:
        'Discover how Cuddles encourages students to explore technology, build ideas, create value and grow future-ready skills with confidence.',
      path: '/innovation',
    })],
  },
  events: {
    title: 'School Events at Cuddles | Exhibitions, Presentations and Community Experiences',
    description:
      'Find out about school events, creative showcases and community experiences that help children grow in confidence, creativity and belonging.',
    path: '/events',
    keywords: ['school events Abuja', 'student exhibitions', 'school community events'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'School Events at Cuddles | Exhibitions, Presentations and Community Experiences',
      description:
        'Find out about school events, creative showcases and community experiences that help children grow in confidence, creativity and belonging.',
      path: '/events',
    })],
  },
  gallery: {
    title: 'School Gallery | Student Life, Creativity and Learning at Cuddles',
    description:
      'Browse Cuddles student life photos, classroom moments, creativity, presentations and everyday learning experiences from Abuja.',
    path: '/gallery',
    keywords: ['Cuddles gallery', 'school photos Abuja', 'student life'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'School Gallery | Student Life, Creativity and Learning at Cuddles',
      description:
        'Browse Cuddles student life photos, classroom moments, creativity, presentations and everyday learning experiences from Abuja.',
      path: '/gallery',
    })],
  },
  leadership: {
    title: 'Leadership at Cuddles | Values, Culture and Student Growth in Abuja',
    description:
      'Learn about leadership and school culture at Cuddles, where values, responsibility and confident public voice are shaped through daily experience.',
    path: '/leadership',
    keywords: ['school leadership Abuja', 'student leadership', 'Cuddles values'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'Leadership at Cuddles | Values, Culture and Student Growth in Abuja',
      description:
        'Learn about leadership and school culture at Cuddles, where values, responsibility and confident public voice are shaped through daily experience.',
      path: '/leadership',
    })],
  },
  admissions: {
    title: 'Admissions at Cuddles Childminders & Schools | Join Our School in Abuja',
    description:
      'Begin the admissions journey with Cuddles Childminders & Schools in Abuja and learn how we support families through clear, welcoming guidance.',
    path: '/admissions',
    keywords: ['school admissions Abuja', 'enroll in school Abuja', 'Cuddles admissions'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'Admissions at Cuddles Childminders & Schools | Join Our School in Abuja',
      description:
        'Begin the admissions journey with Cuddles Childminders & Schools in Abuja and learn how we support families through clear, welcoming guidance.',
      path: '/admissions',
    })],
  },
  contact: {
    title: 'Contact Cuddles Childminders & Schools | Admissions, Visits and Enquiries in Abuja',
    description:
      'Contact Cuddles Childminders & Schools in Abuja for admissions enquiries, school visits, general questions and family support.',
    path: '/contact',
    keywords: ['contact Cuddles school Abuja', 'admissions enquiry Abuja', 'school contact'],
    structuredData: [organizationSchema, websiteSchema, buildPageSchema({
      title: 'Contact Cuddles Childminders & Schools | Admissions, Visits and Enquiries in Abuja',
      description:
        'Contact Cuddles Childminders & Schools in Abuja for admissions enquiries, school visits, general questions and family support.',
      path: '/contact',
    })],
  },
};
