// English copy (British spelling). Must match the shape of fr.ts.
import type { Content } from './fr';

export const en: Content = {
  meta: {
    title: 'Technogix — Nadège Lemperiere, consulting engineer',
    description:
      'End-to-end custom systems, AI-assisted development for business teams, audit and security. Engineer with over 20 years at Thales.',
    ogLocale: 'en_GB',
  },

  ui: {
    skip: 'Skip to content',
    navLabel: 'Main navigation',
    home: 'home',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    contactCta: 'Get in touch',
    switchLabel: 'Version française',
    legal: 'Legal notice',
  },

  nav: [
    { id: 'services', label: 'Services' },
    { id: 'approach', label: 'Approach' },
    { id: 'work', label: 'Work' },
    { id: 'background', label: 'Background' },
    { id: 'contact', label: 'Contact' },
  ],

  hero: {
    eyebrow: 'Technogix · Software engineering and consulting',
    title: 'Build faster with AI, without compromising security.',
    lead:
      'From the interface down to the infrastructure, Technogix designs, builds and deploys your systems: front end, back end, data, cloud or on-premises, and equips your business teams to build with AI on solid foundations.',
    primary: 'Discuss your project',
    secondary: 'See the work',
    facts: [
      { value: '20+', label: 'years of engineering' },
      { value: '9', label: 'teams guided to the cloud and DevSecOps' },
      { value: '4', label: 'patents filed' },
      { value: '5', label: 'scientific publications' },
      { value: '4', label: 'years of coaching and teaching' },
    ],
    card: {
      label: 'At a glance',
      role: 'Founder, Technogix',
      rows: [
        { term: 'Education', value: 'Engineer, Institut d’Optique (Paris-Saclay)' },
        { term: 'Experience', value: '25 years, from R&D to leading transformations' },
        { term: 'Fields', value: ['DevSecOps', 'Cloud', 'Distributed systems', 'Networking and security', 'Machine learning', 'Real-time embedded'] },
        { term: 'Based in', value: 'Paris area, France' },
      ],
    },
  },

  services: {
    eyebrow: 'Services',
    title: 'Three ways Technogix can help',
    lead: 'From building one specific tool to setting up a framework for the whole company.',
    items: [
      {
        title: 'End-to-end custom systems',
        pitch: 'Systems built to last, from prototype to production.',
        points: [
          'Web and mobile applications, front end and back end',
          'Databases and storage',
          'Cloud or on-premises infrastructure, described as code',
          'Testing, continuous integration and deployment',
        ],
      },
      {
        title: 'AI-assisted development for business teams',
        pitch: 'Your teams build their own tools with AI. Technogix sets up the framework that makes them reliable.',
        points: [
          'Choice of tools and usage rules',
          'Source control, review and automated tests',
          'Protected access rights, secrets and data',
          'Team training and coaching',
        ],
      },
      {
        title: 'Audit, security and takeover',
        pitch: 'A clear assessment of what you have and a prioritised action plan.',
        points: [
          'Risk analysis scaled to your organisation',
          'Network security, remote access, backups',
          'Review and takeover of existing applications',
          'Answers to security questionnaires from clients and insurers',
        ],
      },
    ],
  },

  approach: {
    eyebrow: 'Approach',
    title: 'AI opens software development to everyone. It still needs a framework.',
    intro: [
      'With AI, someone on a business team can write in an afternoon the tool they have been waiting months for. That is an opportunity, provided the code is treated as code (versioned, reviewed, tested, backed up) and preserves the confidentiality, integrity and availability of the company’s and its customers’ data.',
      'The role of Technogix is to put that framework in place without killing the momentum: automated guardrails rather than procedures, and teams who understand why they exist.',
    ],
    guardrails: [
      { title: 'Controlled use of AI', text: 'AI tools chosen and configured to boost productivity without giving away your intellectual property: no training on your data, no code leaking out.' },
      { title: 'Versioned, reviewed code', text: 'Every tool lives in a repository, with its history, and no change is merged without a review, human or automated.' },
      { title: 'Automated testing and deployment', text: 'Every change is tested, then deployed by a DevSecOps pipeline: security checks, approval, rollback.' },
      { title: 'Access and secrets', text: 'Least-privilege access; passwords and keys kept out of the code.' },
      { title: 'Verified backups', text: 'Critical data is backed up, and restores are tested.' },
      { title: 'Monitoring and traceability', text: 'Logs, alerts and access history: you know what runs, who did what, and you are alerted before your users are.' },
    ],
    proof: {
      text: 'A method Technogix has applied to its own tools for years: standardised, tested Terraform modules for AWS from 2022, and today its own infrastructure, described as code and public.',
      links: { aws: 'AWS modules (2022-2023)', infra: 'Technogix infrastructure' },
    },
    methodTitle: 'Method',
    steps: [
      { title: 'Understand', text: 'Your goals, constraints and teams.' },
      { title: 'Assess', text: 'What exists, the risks, the priorities.' },
      { title: 'Build', text: 'In short increments, delivered and verified.' },
      { title: 'Hand over', text: 'Documentation and training, so you stay autonomous.' },
    ],
  },

  projects: {
    eyebrow: 'Work',
    title: 'Projects delivered end to end',
    lead: 'From large industrial programmes to independent projects, with the same focus on reliability.',
    groups: [
      {
        title: 'Industry and research',
        items: [
          {
            period: '2019 – 2022',
            context: 'Thales SIX',
            title: 'Cloud transformation of a business unit',
            text: 'Move a business unit’s solutions to Azure and the SaaS model.',
            points: ['Created a digital competence centre', '9 agile teams set up', 'Shared expertise: agile at scale, UX, DevSecOps, cybersecurity, operability', 'Development practices and reusable building blocks for the whole technical directorate'],
            tags: ['Cloud', 'DevSecOps', 'Agile at scale'],
          },
          {
            period: '2015 – 2018',
            context: 'Thales SIX',
            title: 'Video analytics product',
            text: 'Extract data from very large CCTV networks, in real time.',
            points: ['Product owner and technical lead: market survey, supplier evaluation', 'Industrialisation of lab solutions', 'Move from a legacy architecture to microservices and cloud native'],
            tags: ['Microservices', 'GPU', 'Deep learning'],
          },
          {
            period: '2009 – 2014',
            context: 'Thales SIX',
            title: 'Biometric recognition',
            text: 'Improve fingerprint, iris and face recognition algorithms.',
            points: ['Led the image processing and data science team, PhD supervision', 'Continuous integration to check algorithms for regressions', 'Patents and publications on iris recognition'],
            tags: ['Biometrics', 'Machine learning', 'Continuous integration'],
          },
          {
            period: '2001 – 2009',
            context: 'Thales Optronique',
            title: 'Infrared search and track (IRST)',
            text: 'Detect, track and classify targets in real time on ruggedised embedded hardware.',
            points: ['Technical lead of a team of four', 'Responsible for the accuracy of the whole chain: algorithm, software, hardware', 'Patents on target detection and tracking'],
            tags: ['Real time', 'Embedded', 'Kalman filtering'],
          },
          {
            period: '1999 – 2001',
            context: 'CEA',
            title: 'Measuring earthquakes from space',
            text: 'Measure ground displacement caused by earthquakes from optical satellite images.',
            points: ['Subpixel shift measurement method', 'Published in Applied Optics, cited 150 times'],
            tags: ['Image processing', 'Sensor modelling', 'FFT'],
          },
        ],
      },
      {
        title: 'Independent projects',
        items: [
          {
            period: '2026',
            context: 'Climbing gym brand',
            title: 'Mobile game for iOS and Android',
            status: 'In testing',
            text: 'Design and ship a climbing game on both mobile platforms.',
            points: ['Game architecture in Unity', 'Continuous integration up to TestFlight and Google Play', 'Store release in preparation'],
            tags: ['Unity', 'Mobile', 'CI/CD'],
          },
          {
            period: '2022 – 2026',
            context: 'Infrastructure as code',
            title: 'AWS, then OVHcloud platforms',
            text: 'Describe a whole infrastructure as code, tested and deployed through a pipeline.',
            points: ['About twenty standardised, tested Terraform modules for AWS', 'The sovereign Technogix infrastructure on OVHcloud, deployed with approval'],
            tags: ['Terraform', 'AWS', 'OVHcloud'],
            link: { href: 'https://github.com/nadegelemperiere-aws', label: 'AWS modules' },
          },
        ],
      },
      {
        title: 'Teaching',
        items: [
          {
            period: '2022 – 2026',
            context: 'FASNY, New York',
            title: 'Teaching and robotics coaching',
            text: 'Teaching non-specialists to design and program real systems: the same challenge as opening software development to business teams.',
            points: ['One year of teaching: 20 classes from 4th to 10th grade, 3 curricula redesigned', 'Middle and high school robotics teams qualified for international competitions (Long Beach in 2023 and 2024 in FLL, and South Bend, Indiana, in 2026 in FTC)'],
            tags: ['Education', 'Robotics', 'Python'],
          },
          {
            period: '2023 – 2026',
            context: 'Robotics coaching',
            title: 'Educational robotics simulator',
            text: 'Let students program and test their robots without the hardware.',
            points: ['Web simulator for LEGO SPIKE Prime robots, programmable in Python or with blocks', 'Documentation written for middle-school students'],
            tags: ['Python', 'Web', 'Education'],
            link: { href: 'https://github.com/nadegelemperiere-robotics/fll-spike-mock', label: 'Repository' },
          },
        ],
      },
    ],
  },

  career: {
    eyebrow: 'Background',
    title: '25 years across research, industry and teaching',
    education: 'Mathematics preparatory classes (MP*), then an engineering degree from the Institut d’Optique, now part of Université Paris-Saclay. A grounding in applied mathematics and signal processing, then a software culture forged in industries where reliability is not optional: defence, security, critical systems.',
    items: [
      { period: '2022 – 2026', title: 'Coaching and teaching', place: 'French-American School of New York (FASNY)' },
      { period: '2019 – 2022', title: 'Set up the digital competence centre', place: 'Thales SIX' },
      { period: '2015 – 2018', title: 'Product and technical lead, video analytics', place: 'Thales SIX' },
      { period: '2009 – 2014', title: 'Head of the biometric image processing team', place: 'Thales SIX' },
      { period: '2001 – 2009', title: 'Algorithm designer, infrared search and track', place: 'Thales Optronique' },
      { period: '1999 – 2001', title: 'Image processing apprentice', place: 'CEA, research department' },
    ],
    credentials: [
      {
        title: 'Publications',
        items: [
          { label: 'Measuring earthquakes from optical satellite images — Applied Optics, 150 citations', href: 'https://doi.org/10.1364/AO.39.003486' },
          { label: 'Effective elliptic fitting for iris normalization — Computer Vision and Image Understanding', href: 'https://doi.org/10.1016/j.cviu.2013.01.005' },
          { label: 'Fusion of novel iris segmentation quality metrics for failure detection — ICIAR', href: 'https://doi.org/10.1007/978-3-642-39094-4_12' },
          { label: 'How a local quality measure can help improving iris recognition — BIOSIG', href: 'https://dl.gi.de/items/3395d393-0428-451d-87ca-c77d0010eab9' },
          { label: 'Quality driven iris recognition improvement', href: 'https://hal.science/hal-01265553v1' },
        ],
      },
      {
        title: 'Patents',
        items: [
          { label: 'Method of searching for parametrized contours for comparing irises', href: 'https://patents.google.com/patent/WO2012156333A1' },
          { label: 'Method of comparing images of irises by intelligent selection of texture zones', href: 'https://patents.google.com/patent/US9031289B2' },
          { label: 'Method of detecting an object in a scene comprising artifacts', href: 'https://patents.google.com/patent/US8558891B2' },
          { label: 'Method for detecting and tracking punctual targets in an optoelectronic surveillance system', href: 'https://patents.google.com/patent/WO2006032650A1' },
        ],
      },
      {
        title: 'Certifications',
        items: [
          { label: 'HashiCorp Terraform Associate (2022)' },
          { label: 'Microsoft Azure Fundamentals (2022)' },
          { label: 'AWS Certified Cloud Practitioner' },
        ],
      },
    ],
  },

  formats: {
    eyebrow: 'Engagement',
    title: 'How we can work together',
    lead: 'Depending on your needs, a one-off engagement or long-term support.',
    items: [
      { title: 'Fixed-scope project', text: 'A defined scope, a deliverable, a price. For an audit, an application, a takeover.' },
      { title: 'Part-time leadership', text: 'A few days a month as a part-time CIO or CTO, to steer things over time.' },
      { title: 'Team training', text: 'Hands-on workshops on AI-assisted development and the practices around it.' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about your project.',
    text: 'A first thirty-minute call, with no commitment, to understand your needs and see whether Technogix is the right partner to help.',
    book: 'Book a 30-minute call',
  },

  legal: {
    title: 'Legal notice',
    eyebrow: 'Legal information',
    description: 'Legal notice for technogix.dev',
    publisherTitle: 'Publisher',
    company: 'French limited liability company (SARL) with a share capital of',
    address: 'Registered office',
    vat: 'EU VAT number',
    contact: 'Contact',
    director: 'Publication director',
    hostTitle: 'Hosting',
    privacyTitle: 'Personal data',
    privacy: [
      'This site sets no cookies and uses no analytics. Fonts are served from the site itself. Like any host, GitHub may log technical connection data, including IP addresses, to run and secure the service.',
      'Information you send by email is used only to reply to you and is never shared. You can ask to access, correct or delete it by writing to',
    ],
    booking: 'Appointments are booked through Google Calendar: what you enter there is processed by Google, on a page outside this site.',
    ipTitle: 'Intellectual property',
    ip: 'The text, logo and graphics on this site are the property of',
  },
};
