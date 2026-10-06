// French copy. Typography:   is a non-breaking space (before « ? », « : », « ! »).
// This file defines the shape of the content; en.ts must match it.

export const fr = {
  meta: {
    title: 'Technogix — Nadège Lemperiere, ingénieure conseil',
    description:
      'Systèmes sur mesure de bout en bout, développement métier assisté par IA, audit et sécurité. Ingénieure, plus de 20 ans chez Thales.',
    ogLocale: 'fr_FR',
  },

  ui: {
    skip: 'Aller au contenu',
    navLabel: 'Navigation principale',
    home: 'accueil',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    contactCta: 'Prendre contact',
    switchLabel: 'English version',
    legal: 'Mentions légales',
  },

  nav: [
    { id: 'services', label: 'Services' },
    { id: 'approach', label: 'Approche' },
    { id: 'work', label: 'Réalisations' },
    { id: 'background', label: 'Parcours' },
    { id: 'contact', label: 'Contact' },
  ],

  hero: {
    eyebrow: 'Technogix · Ingénierie logicielle et conseil',
    title: 'Développer plus vite avec l’IA, en toute sécurité.',
    lead:
      'De l’interface à l’infrastructure, Technogix conçoit, construit et déploie vos systèmes : front, back, données, cloud ou sur site, et outille vos équipes métier pour qu’elles développent avec l’IA sur des bases fiables.',
    primary: 'Discutons de votre projet',
    secondary: 'Voir les réalisations',
    facts: [
      { value: '20+', label: 'ans d’ingénierie' },
      { value: '9', label: 'équipes accompagnées vers le cloud et le DevSecOps' },
      { value: '4', label: 'brevets déposés' },
      { value: '5', label: 'publications scientifiques' },
      { value: '4', label: 'ans de coaching et d’enseignement' },
    ],
    card: {
      label: 'En bref',
      role: 'Fondatrice, Technogix',
      rows: [
        { term: 'Formation', value: 'Ingénieure, Institut d’Optique (Paris-Saclay)' },
        { term: 'Expérience', value: '25 ans, de la R&D au pilotage de transformations' },
        { term: 'Domaines', value: ['DevSecOps', 'Cloud', 'Systèmes distribués', 'Réseau et sécurité', 'Machine learning', 'Embarqué temps réel'] },
        { term: 'Basée à', value: 'Issy-les-Moulineaux' },
      ],
    },
  },

  services: {
    eyebrow: 'Services',
    title: 'Trois façons de vous aider',
    lead: 'Du développement d’un outil précis à la mise en place d’un cadre pour toute l’entreprise.',
    items: [
      {
        title: 'Systèmes sur mesure, de bout en bout',
        pitch: 'Un système conçu pour durer, du prototype à la production.',
        points: [
          'Applications web et mobiles, front-end et back-end',
          'Bases de données et stockage',
          'Infrastructure cloud ou sur site, décrite en code',
          'Tests, intégration et déploiement continus',
        ],
      },
      {
        title: 'Développement métier assisté par IA',
        pitch: 'Vos équipes créent leurs propres outils avec l’IA. Technogix pose le cadre qui les rend fiables.',
        points: [
          'Choix des outils et des règles d’usage',
          'Gestion du code, revue et tests automatiques',
          'Droits d’accès, secrets et données protégés',
          'Formation et accompagnement des équipes',
        ],
      },
      {
        title: 'Audit, sécurité et reprise',
        pitch: 'Un diagnostic clair de l’existant et un plan d’action priorisé.',
        points: [
          'Analyse de risque proportionnée à votre taille',
          'Sécurité réseau, accès distants, sauvegardes',
          'Revue et reprise d’applications existantes',
          'Réponse aux questionnaires sécurité de vos clients et assureurs',
        ],
      },
    ],
  },

  approach: {
    eyebrow: 'Approche',
    title: 'L’IA ouvre le développement à tous. Encore faut-il le cadrer.',
    intro: [
      'Avec l’IA, un collaborateur métier peut écrire en une après-midi l’outil qu’il attendait depuis des mois. C’est une chance pour l’entreprise, à condition que ce code soit traité comme du code (versionné, relu, testé, sauvegardé) et qu’il préserve la confidentialité, l’intégrité et la disponibilité des données de l’entreprise et de ses clients.',
      'Le rôle de Technogix est de mettre en place ce cadre sans casser l’élan. Des garde-fous automatiques plutôt que des procédures, et des équipes qui comprennent pourquoi ils existent.',
    ],
    guardrails: [
      { title: 'Usage maîtrisé de l’IA', text: 'Des outils d’IA choisis et paramétrés pour gagner en productivité sans exposer votre propriété intellectuelle : pas d’entraînement sur vos données, pas de fuite de code.' },
      { title: 'Code versionné et relu', text: 'Chaque outil vit dans un dépôt, avec son historique, et aucune modification n’est intégrée sans relecture, humaine ou outillée.' },
      { title: 'Tests et déploiement automatisés', text: 'Chaque changement est testé puis déployé par un pipeline DevSecOps : contrôles de sécurité, validation, retour arrière possible.' },
      { title: 'Droits et secrets', text: 'Accès au strict nécessaire, mots de passe et clés hors du code.' },
      { title: 'Sauvegardes vérifiées', text: 'Les données critiques sont sauvegardées, et la restauration est testée.' },
      { title: 'Supervision et traçabilité', text: 'Journaux, alertes et historique des accès : on sait ce qui tourne, qui a fait quoi, et l’on est alerté avant les utilisateurs.' },
    ],
    proof: {
      text: 'Une méthode que Technogix applique depuis des années à ses propres outils : des modules Terraform AWS standardisés et testés dès 2022, et aujourd’hui sa propre infrastructure, décrite en code et publique.',
      links: { aws: 'Modules AWS (2022-2023)', infra: 'Infrastructure Technogix' },
    },
    methodTitle: 'Méthode',
    steps: [
      { title: 'Comprendre', text: 'Vos enjeux, vos contraintes, vos équipes.' },
      { title: 'Diagnostiquer', text: 'L’existant, les risques, les priorités.' },
      { title: 'Construire', text: 'Par étapes courtes, livrées et vérifiées.' },
      { title: 'Transmettre', text: 'Documenter et former, pour que vous restiez autonomes.' },
    ],
  },

  projects: {
    eyebrow: 'Réalisations',
    title: 'Des projets menés de bout en bout',
    lead: 'De la grande industrie aux projets indépendants, avec le même souci de fiabilité.',
    groups: [
      {
        title: 'Industrie et recherche',
        items: [
          {
            period: '2019 – 2022',
            context: 'Thales SIX',
            title: 'Transformation cloud d’une division',
            text: 'Faire passer les solutions d’une division vers le cloud Azure et le modèle SaaS.',
            points: ['Création d’un centre de compétences digitales', '9 équipes agiles mises en place', 'Expertise mutualisée\u00a0: agilité à l’échelle, UX, DevSecOps, cybersécurité, exploitabilité', 'Pratiques de développement et briques réutilisables pour toute la direction technique'],
            tags: ['Cloud', 'DevSecOps', 'Agilité à l’échelle'],
          },
          {
            period: '2015 – 2018',
            context: 'Thales SIX',
            title: 'Produit d’analyse vidéo',
            text: 'Extraire des données de très grands réseaux de caméras, en temps réel.',
            points: ['Responsable produit et technique\u00a0: étude de marché, évaluation de fournisseurs', 'Industrialisation de solutions de laboratoire', 'Passage d’une architecture historique aux microservices et au cloud natif'],
            tags: ['Microservices', 'GPU', 'Deep learning'],
          },
          {
            period: '2009 – 2014',
            context: 'Thales SIX',
            title: 'Reconnaissance biométrique',
            text: 'Améliorer les algorithmes de reconnaissance d’empreintes, d’iris et de visage.',
            points: ['Direction de l’équipe traitement d’image et science des données, encadrement de doctorants', 'Intégration continue pour valider la non-régression des algorithmes', 'Brevets et publications sur la reconnaissance d’iris'],
            tags: ['Biométrie', 'Machine learning', 'Intégration continue'],
          },
          {
            period: '2001 – 2009',
            context: 'Thales Optronique',
            title: 'Veille infrarouge (IRST)',
            text: 'Détecter, pister et classifier des cibles en temps réel sur du matériel embarqué durci.',
            points: ['Référente technique d’une équipe de quatre', 'Responsable de la précision de toute la chaîne\u00a0: algorithme, logiciel, matériel', 'Brevets sur la détection et le pistage de cibles'],
            tags: ['Temps réel', 'Embarqué', 'Filtrage de Kalman'],
          },
          {
            period: '1999 – 2001',
            context: 'CEA',
            title: 'Mesure des séismes par satellite',
            text: 'Mesurer les déplacements du sol provoqués par les séismes à partir d’images satellite optiques.',
            points: ['Méthode de mesure de décalages subpixel', 'Publication dans Applied Optics, citée 150 fois'],
            tags: ['Traitement d’image', 'Modélisation capteur', 'FFT'],
          },
        ] as Project[],
      },
      {
        title: 'Projets indépendants',
        items: [
          {
            period: '2026',
            context: 'Marque de salles d’escalade',
            title: 'Jeu mobile iOS et Android',
            status: 'En phase de test',
            text: 'Concevoir et livrer un jeu mobile d’escalade sur les deux plateformes.',
            points: ['Architecture du jeu sous Unity', 'Intégration continue jusqu’à TestFlight et Google Play', 'Distribution sur les stores en préparation'],
            tags: ['Unity', 'Mobile', 'CI/CD'],
          },
          {
            period: '2022 – 2026',
            context: 'Infrastructure as code',
            title: 'Plateformes AWS puis OVHcloud',
            text: 'Décrire toute une infrastructure en code, testée et déployée par pipeline.',
            points: ['Une vingtaine de modules Terraform AWS standardisés et testés', 'Infrastructure souveraine de Technogix sur OVHcloud, déployée avec approbation'],
            tags: ['Terraform', 'AWS', 'OVHcloud'],
            link: { href: 'https://github.com/nadegelemperiere-aws', label: 'Modules AWS' },
          },
        ] as Project[],
      },
      {
        title: 'Transmission',
        items: [
          {
            period: '2022 – 2026',
            context: 'FASNY, New York',
            title: 'Enseignement et coaching en robotique',
            text: 'Apprendre à des non-spécialistes à concevoir et programmer des systèmes réels\u00a0: le même défi que l’ouverture du développement aux équipes métier.',
            points: ['Une année d’enseignement\u00a0: 20 classes du CM1 à la Seconde, 3 programmes refondus', 'Équipes de robotique de niveau collège et lycée qualifiées pour des compétitions internationales (Long Beach en 2023 et 2024 en FLL, et South Bend, Indiana, en 2026 en FTC)'],
            tags: ['Pédagogie', 'Robotique', 'Python'],
          },
          {
            period: '2023 – 2026',
            context: 'Coaching robotique',
            title: 'Simulateur de robotique pédagogique',
            text: 'Permettre à des élèves de programmer et tester leurs robots sans matériel.',
            points: ['Simulateur web de robots LEGO SPIKE Prime, programmables en Python ou en blocs', 'Documentation pensée pour des collégiens'],
            tags: ['Python', 'Web', 'Pédagogie'],
            link: { href: 'https://github.com/nadegelemperiere-robotics/fll-spike-mock', label: 'Dépôt' },
          },
        ] as Project[],
      },
    ],
  },

  career: {
    eyebrow: 'Parcours',
    title: '25 ans entre recherche, industrie et transmission',
    education: 'Classes préparatoires MP*, puis diplôme d’ingénieure de l’Institut d’Optique, aujourd’hui école de l’Université Paris-Saclay. Un socle de mathématiques appliquées et de traitement du signal, puis une culture logicielle forgée dans des industries où la fiabilité n’est pas une option : défense, sécurité, systèmes critiques.',
    items: <CareerItem[]>[
      { period: '2022 – 2026', title: 'Coaching et enseignement', place: 'École franco-américaine de New York (FASNY)' },
      { period: '2019 – 2022', title: 'Création du centre de compétences digitales', place: 'Thales SIX' },
      { period: '2015 – 2018', title: 'Responsable produit et technique, analyse vidéo', place: 'Thales SIX' },
      { period: '2009 – 2014', title: 'Responsable de l’équipe traitement d’image biométrique', place: 'Thales SIX' },
      { period: '2001 – 2009', title: 'Conceptrice d’algorithmes, veille infrarouge', place: 'Thales Optronique' },
      { period: '1999 – 2001', title: 'Apprentie en traitement d’image', place: 'CEA, département de recherche' },
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
        ] as Credential[],
      },
      {
        title: 'Brevets',
        items: [
          { label: 'Recherche de contours paramétrés pour la comparaison d’iris', href: 'https://patents.google.com/patent/WO2012156333A1' },
          { label: 'Comparaison d’images d’iris par sélection intelligente de zones de texture', href: 'https://patents.google.com/patent/US9031289B2' },
          { label: 'Détection d’un objet dans une scène comportant des artefacts', href: 'https://patents.google.com/patent/US8558891B2' },
          { label: 'Détection et pistage de cibles ponctuelles dans un système de surveillance optronique', href: 'https://patents.google.com/patent/WO2006032650A1' },
        ] as Credential[],
      },
      {
        title: 'Certifications',
        items: [
          { label: 'HashiCorp Terraform Associate (2022)' },
          { label: 'Microsoft Azure Fundamentals (2022)' },
          { label: 'AWS Certified Cloud Practitioner' },
        ] as Credential[],
      },
    ],
  },

  formats: {
    eyebrow: 'Formats',
    title: 'Comment travailler ensemble',
    lead: 'Selon votre besoin, une intervention ponctuelle ou un accompagnement dans la durée.',
    items: [
      { title: 'Mission au forfait', text: 'Un périmètre défini, un livrable, un prix. Pour un audit, une application, une reprise.' },
      { title: 'Temps partagé', text: 'Quelques jours par mois, comme DSI ou CTO à temps partiel, pour piloter dans la durée.' },
      { title: 'Formation des équipes', text: 'Ateliers pratiques sur le développement assisté par IA et les bonnes pratiques associées.' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Parlons de votre projet.',
    text: 'Un premier échange de trente minutes, sans engagement, pour comprendre votre besoin et voir si Technogix est le bon partenaire pour y répondre.',
    book: 'Réserver un échange de 30 minutes',
  },

  legal: {
    title: 'Mentions légales',
    eyebrow: 'Informations légales',
    description: 'Mentions légales du site technogix.dev',
    publisherTitle: 'Éditeur du site',
    company: 'société à responsabilité limitée au capital de',
    address: 'Siège social',
    vat: 'TVA intracommunautaire',
    contact: 'Contact',
    director: 'Directrice de la publication',
    hostTitle: 'Hébergement',
    privacyTitle: 'Données personnelles',
    privacy: [
      'Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience. Les polices de caractères sont hébergées sur le site lui-même. Comme tout hébergeur, GitHub peut enregistrer des données techniques de connexion, dont l’adresse IP, pour assurer le fonctionnement et la sécurité du service.',
      'Les informations que vous transmettez par courriel sont utilisées uniquement pour vous répondre et ne sont jamais cédées. Vous pouvez demander leur consultation, leur rectification ou leur suppression à l’adresse',
    ],
    booking: 'La prise de rendez-vous passe par Google Agenda\u00a0: les informations que vous y saisissez sont traitées par Google, sur une page extérieure à ce site.',
    ipTitle: 'Propriété intellectuelle',
    ip: 'Les textes, le logo et les éléments graphiques de ce site sont la propriété de',
  },
};

export type Project = {
  period: string;
  context: string;
  title: string;
  text: string;
  tags: string[];
  status?: string;
  points?: string[];
  link?: { href: string; label: string };
};

/** A step of the career; only the steps without a case study keep a text and results. */
export type CareerItem = { period: string; title: string; place: string; text?: string; points?: string[] };

/** A publication, patent or certification, linked when a public record exists. */
export type Credential = { label: string; href?: string };

export type Content = typeof fr;
