// Site content. Core facts mirror the LaTeX résumé (/mnt/d/Resume/resume.tex); the website
// carries longer descriptions (summaries, stacks, the Profile internship) that the
// two-page résumé leaves out. This file is the only place content lives.

export const profile = {
  name: 'Danial Nahofteh',
  headline: 'Computer Engineering',
  tagline:
    'M.Sc. student in Software Engineering at Amirkabir University of Technology, researching energy-aware serverless computing, and a backend & blockchain developer.',
  location: 'Tehran, Iran',
  email: 'danialnahofte@gmail.com',
  // The phone number is in the downloadable CV; set showPhone to true to also list it on the page.
  phone: '+98 9155509819',
  showPhone: false,
  linkedin: { label: 'danial-nahofteh', url: 'https://www.linkedin.com/in/danial-nahofteh-43567b1a1/' },
  github: { label: 'danial-xlr', url: 'https://github.com/danial-xlr' },
  cv: '/Danial_Nahofteh_CV.pdf',
};

export const researchInterests = [
  'Cloud, Edge Computing',
  'Distributed Systems',
  'Blockchain',
  'Artificial Intelligence',
];

// ----------------------------------------------------------------------

export const about = {
  paragraphs: [
    "I'm a Master's student in Software Engineering at Amirkabir University of Technology (Tehran Polytechnic). My thesis, supervised by Dr. Amir Kalbasi, looks at where to place serverless functions so that cold-start latency goes down without paying for it in energy — part of a broader interest in sustainable, high-performance cloud computing.",
    'Alongside research I have been building backend systems professionally since 2021. At Nasim Telecom I worked on distributed systems end to end — a microservices web application in Go with gRPC and GraphQL, a clustered call-center platform coordinated through etcd, and the Kubernetes infrastructure behind a cloud XaaS product. Today I work on blockchain-based backend services and a P2P order-matching engine for a cryptocurrency exchange at kifpool. Before that, I interned at the Profile social network, working on its user-follow recommendation system.',
    'I have also competed in programming contests — ICPC Asia Tehran Regional, ACPC and TCPC — and taught Python, Django and web design, as well as introducing freshman students to C++, the STL, time complexity and programming contests.',
  ],
  facts: [
    { label: 'Studying', value: 'M.Sc. Software Engineering, AUT' },
    { label: 'Research', value: 'Serverless cold starts & energy-aware placement' },
    { label: 'Working at', value: 'kifpool.me — backend & blockchain' },
    { label: 'Main stack', value: 'Go · gRPC · Kubernetes · AWS' },
  ],
};

// ----------------------------------------------------------------------

export const education = [
  {
    school: 'Amir Kabir University of Technology (Tehran Polytechnic), Iran',
    degree: "Master's degree in Software Engineering",
    period: 'September 2024 – Present',
    points: [
      'GPA: 16/20 (3.2/4)',
      'Master’s Thesis: Cold Start Mitigation through Energy Aware Serverless Functions Placement.',
      'Supervisor: Dr. Amir Kalbasi.',
      'Selected Courses: Cloud Computing (18.6/20), Distributed Systems (17/20), Performance Evaluation of Computer Systems (17/20).',
    ],
  },
  {
    school: 'Islamic Azad University of Mashhad, Iran',
    degree: 'Bachelor in Computer Engineering',
    period: 'September 2019 – September 2023',
    points: [
      'GPA: 18.09/20 (3.62/4)',
      'Top 10% students of the University (based on GPA 3.62/4.0 (18.09/20)).',
      'Selected Courses (grade 4/4): Fundamentals of Computer and Programming, Systems Analysis and Design, Computational Intelligence, Fundamentals of Speech and Language Possessing.',
    ],
  },
];

export const research = [
  {
    title: 'Cold Start Mitigation through Energy Aware Serverless Functions Placement',
    kind: 'Master Thesis (AUT)',
    period: 'June 2025 – December 2026 (expected)',
    supervisor: 'Supervisor: Dr. Amir Kalbasi',
    overview:
      'Serverless (FaaS) platforms start function instances on demand, so a request that arrives when no warm instance is available pays a cold-start delay. Keeping instances warm hides that delay but costs energy. This thesis studies function placement as a way to balance the two.',
    points: [
      'Conducting research on optimizing placement of serverless functions (FaaS) to reduce cold-start latency and energy consumption in cloud environments.',
      'Developing an energy-aware scheduling and resource allocation model using simulation tools such as CloudSim and real-world cold-start traces.',
      'Aiming to contribute to sustainable and high-performance cloud computing by balancing latency reduction and energy efficiency.',
    ],
    tags: ['Serverless / FaaS', 'Cold start', 'Energy efficiency', 'CloudSim'],
  },
  {
    title: 'Sustainable Cloud Computing Through Task Assignment',
    kind: 'Seminar report (AUT)',
    period: 'September 2024 – September 2025',
    supervisor: 'Supervisor: Dr. Amir Kalbasi, Course Teacher: Dr. Mohammad Reza Meybodi',
    overview:
      'A survey of how the assignment of tasks to cloud resources can reduce energy use and carbon footprint, and of the optimization methods used to make those decisions.',
    points: [
      'Investigated energy-efficient and carbon-aware task scheduling strategies for sustainable cloud computing.',
      'Reviewed multi-objective optimization techniques, including heuristic, metaheuristic, and AI-based task assignment algorithms.',
    ],
    tags: ['Green cloud', 'Carbon-aware scheduling', 'Multi-objective optimization'],
  },
];

export const publications = [
  {
    title: 'SpeQ: Speech Quality Estimation in MoQ',
    authors: [
      'M. Esfandiari Sabzevar',
      'D. Nahofteh',
      'B. Barghbani',
      'M. Hoi',
      'M. Dolati',
      'F. Tashtarian',
    ],
    self: 'D. Nahofteh',
    venue: 'Mile High Video Conference (MHV)',
    status: 'Submitted (under review)',
    summary:
      'Studied subscriber-side speech-quality estimation in Media over QUIC (MoQ) as a signal for adaptive Opus bitrate selection in real-time voice streaming.',
    details: [
      'Media over QUIC (MoQ) is being standardized by the IETF for scalable, low-latency media delivery. It follows a publish/subscribe model, can deliver media through relays, and uses QUIC streams, datagrams, priorities and partial reliability — a good fit for live podcasting, interactive audio rooms and in-game voice chat.',
      'For real-time speech, a higher bitrate improves codec quality but is harder to deliver when demand exceeds network capacity. HTTP adaptive players pick bitrates from the throughput of downloaded segments; in MoQ, objects are pushed to subscribers as they are produced, so client-side rate adaptation remains an open challenge.',
      'SpeQ investigates whether a subscriber can estimate the quality of the speech it receives, and use that estimate as a signal for future Opus bitrate adaptation.',
    ],
    tags: ['Media over QUIC', 'Speech quality', 'Opus', 'Rate adaptation'],
  },
];

export const work = [
  {
    role: 'Backend and Blockchain Developer',
    company: 'kifpool.me',
    url: 'https://kifpool.me/',
    period: 'September 2024 – Now',
    summary:
      'Backend and blockchain engineering for a cryptocurrency exchange platform, building Go services in a microservices architecture.',
    points: [
      'Developed web services using Golang and a microservices-based architecture.',
      'Designed and implemented blockchain-based backend services for a cryptocurrency exchange platform.',
      'Built a high-performance matching engine for P2P user order matching.',
    ],
    stack: ['Go', 'Microservices', 'Blockchain', 'Order matching'],
  },
  {
    role: 'Backend Developer',
    company: 'Nasim Telecom',
    url: 'https://nasimtelecom.com/en/',
    period: 'November 2021 – September 2024',
    summary:
      'Nearly three years building distributed backend systems for a telecom company — from a microservices web application to a clustered call-center platform and the Kubernetes infrastructure behind a cloud XaaS product.',
    points: [
      'Designed and implemented a distributed web application using Golang, Microservices architecture, gRPC, and GraphQL.',
      'Developed a distributed call center software cluster leveraging ETCD, Python, and Golang.',
      'Built and configured a Kubernetes cluster for a cloud XaaS platform using Docker.',
    ],
    stack: ['Go', 'Python', 'gRPC', 'GraphQL', 'etcd', 'Kubernetes', 'Docker'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Profile',
    url: 'https://profile.ir/',
    period: 'Internship · 3 months',
    summary:
      'Profile is a social network. During a three-month internship I worked on its user-follow recommendation system.',
    points: [
      'Developed a user-follow recommendation system for the Profile social network.',
      'Built the system with Go, gRPC, NATS, and the Neo4j graph database.',
    ],
    stack: ['Go', 'gRPC', 'NATS', 'Neo4j'],
  },
];

export const teaching = [
  {
    title: 'Teacher Assistant',
    points: [
      'Teaching python programing and Django (python web framework) and basic web Design to students.',
    ],
  },
  {
    title: 'Advanced Programming',
    points: [
      'Teaching freshman students programming topics, including the STL library of C++, Time Complexity, and Introduction to Programming Contests.',
    ],
  },
];

// ----------------------------------------------------------------------
// Skills, grouped for the website. `core: true` marks skills used in the work
// experience or projects above; they are highlighted on the page.

export const skills = [
  {
    key: 'languages',
    title: 'Languages',
    blurb: 'Go is my main language for backend services; Python for tooling, data work and ML.',
    items: [
      { name: 'Go', core: true },
      { name: 'Python', core: true },
      { name: 'Rust' },
      { name: 'Solidity' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'C' },
      { name: 'SQL' },
      { name: 'MATLAB' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend, APIs & Web',
    blurb: 'Building services and their interfaces — REST, gRPC with Protocol Buffers, and GraphQL.',
    items: [
      { name: 'gRPC', core: true },
      { name: 'Protocol Buffers', core: true },
      { name: 'GraphQL', core: true },
      { name: 'Gin' },
      { name: 'Django' },
      { name: 'Django REST' },
      { name: 'React' },
    ],
  },
  {
    key: 'distributed',
    title: 'Distributed Systems',
    blurb:
      'Microservice architectures, messaging and coordination — from a call-center cluster to a P2P matching engine.',
    items: [
      { name: 'Microservices', core: true },
      { name: 'NATS', core: true },
      { name: 'etcd', core: true },
      { name: 'Clean Code' },
    ],
  },
  {
    key: 'cloud',
    title: 'Cloud & DevOps',
    blurb: 'Containers, orchestration and infrastructure as code on AWS and GCP, including serverless platforms.',
    items: [
      { name: 'AWS', core: true },
      { name: 'GCP', core: true },
      { name: 'Kubernetes', core: true },
      { name: 'Docker', core: true },
      { name: 'Terraform' },
      { name: 'Vault' },
      { name: 'OpenWhisk' },
      { name: 'Git' },
    ],
  },
  {
    key: 'data',
    title: 'Databases',
    blurb: 'Relational, document, key-value and graph stores.',
    items: [
      { name: 'Neo4j', core: true },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'MySQL' },
      { name: 'SQL Server' },
    ],
  },
  {
    key: 'research',
    title: 'Research & Simulation',
    blurb: 'Simulators for evaluating scheduling and placement strategies in cloud environments.',
    items: [{ name: 'CloudSim', core: true }, { name: 'SimGrid' }],
  },
  {
    key: 'ml',
    title: 'Machine Learning & Data',
    blurb: 'Deep learning frameworks and the Python data stack.',
    items: [
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'Keras' },
      { name: 'scikit-learn' },
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'Matplotlib' },
    ],
  },
];

export const operatingSystems = ['Linux', 'Windows', 'macOS'];

// ----------------------------------------------------------------------

export const projects = [
  {
    title: 'Cloud Ticket Reservation System',
    url: 'https://github.com/danial-xlr/cloud-ticket-reservation-system',
    description:
      'Developed a scalable, serverless event ticketing system on AWS using Lambda, DynamoDB, SQS, and S3 with real-time seat reservation and queue-based purchase handling.',
    tags: ['AWS Lambda', 'DynamoDB', 'SQS', 'S3'],
  },
  {
    title: 'Cloud Live Migration (Google Cloud to AWS)',
    description:
      'Researched, planned, and executed a full live migration of services and data from Google Cloud Platform (GCP) to Amazon Web Services (AWS), ensuring minimal downtime and full workload compatibility.',
    tags: ['GCP', 'AWS', 'Migration'],
  },
  {
    title: 'Real Estate Management Backend System — National Elites Foundation',
    description:
      'Designed and developed the backend of a comprehensive property management and monitoring platform for the National Elites Foundation, enabling secure data handling and efficient asset oversight.',
    tags: ['Backend'],
  },
];

export const languages = [
  { name: 'Persian', level: 'Native' },
  {
    name: 'English',
    level: 'Advanced',
    detail: 'IELTS 6.5 (Reading 6.5, Listening 6, Speaking 6.5, Writing 6)',
  },
];

export const honors = [
  {
    year: '2024',
    text: 'Ranked 94th nationwide among participants in the Iranian M.Sc. entrance exam in Computer Engineering.',
  },
  {
    year: '2024',
    text: 'Certificates in Python, Pandas, Data Cleaning, and Data Visualization.',
    link: {
      label: 'View certificates',
      url: 'https://drive.google.com/file/d/1NSt4-td9iPthuIo0Q0UrlDEyPhvSrUmD/view?usp=drive_link',
    },
  },
  { year: '2021', text: 'Ranked 5th, 2021 TCPC competitions of Tabriz University.' },
  { year: '2021', text: 'Ranked 42th, 2021 ACPC competitions of AmirKabir University of Tehran.' },
  { year: '2021', text: 'Selected top lecturer, in webinars organized in 2021 at Azad university of Mashhad.' },
  {
    year: '2020',
    text: 'Ranked 39th, 2020 ICPC Asia Tehran Regional Contest.',
    link: {
      label: 'View certificate',
      url: 'https://drive.google.com/file/d/1Mj-uijwUaE5NnRTor7g-iBOhfbllLHBD/view?usp=drive_link',
    },
  },
  { year: '2020', text: 'Ranked 2nd, 2020 Internal competitions of Azad University of Mashhad.' },
];
