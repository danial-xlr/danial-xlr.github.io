// Site content, mirrored from the LaTeX résumé (/mnt/d/Resume/resume.tex).
// Keep this file in sync with the résumé — it is the only place content lives.

export const profile = {
  name: 'Danial Nahofteh',
  headline: 'Computer Engineering',
  tagline:
    "M.Sc. student in Software Engineering at Amirkabir University of Technology, researching energy-aware serverless computing, and a backend & blockchain developer.",
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
    points: [
      'Conducting research on optimizing placement of serverless functions (FaaS) to reduce cold-start latency and energy consumption in cloud environments.',
      'Developing an energy-aware scheduling and resource allocation model using simulation tools such as CloudSim and real-world cold-start traces.',
      'Aiming to contribute to sustainable and high-performance cloud computing by balancing latency reduction and energy efficiency.',
    ],
  },
  {
    title: 'Sustainable Cloud Computing Through Task Assignment',
    kind: 'Seminar report (AUT)',
    period: 'September 2024 – September 2025',
    supervisor: 'Supervisor: Dr. Amir Kalbasi, Course Teacher: Dr. Mohammad Reza Meybodi',
    points: [
      'Investigated energy-efficient and carbon-aware task scheduling strategies for sustainable cloud computing.',
      'Reviewed multi-objective optimization techniques, including heuristic, metaheuristic, and AI-based task assignment algorithms.',
    ],
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
  },
];

export const work = [
  {
    role: 'Backend and Blockchain Developer (Part time)',
    company: 'kifpool.me',
    url: 'https://kifpool.me/',
    period: 'September 2024 – Now',
    points: [
      'Developed web services using Golang and a microservices-based architecture.',
      'Designed and implemented blockchain-based backend services for a cryptocurrency exchange platform.',
      'Built a high-performance matching engine for P2P user order matching.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Nasim Telecom',
    url: 'https://nasimtelecom.com/en/',
    period: 'November 2021 – September 2024',
    points: [
      'Designed and implemented a distributed web application using Golang, Microservices architecture, gRPC, and GraphQL.',
      'Developed a distributed call center software cluster leveraging ETCD, Python, and Golang.',
      'Built and configured a Kubernetes cluster for a cloud XaaS platform using Docker.',
    ],
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

export const skills = [
  {
    group: 'Programming Languages',
    items: ['Golang', 'Python', 'Solidity', 'Java', 'C++', 'C', 'SQL', 'Matlab', 'Html&Css', 'Latex'],
  },
  { group: 'Software Libraries', items: ['scikit-learn', 'Numpy', 'Pandas', 'Keras', 'Matplotlib'] },
  { group: 'Frameworks', items: ['Pytorch', 'TensorFlow', 'Django', 'DjangoRest', 'Gin'] },
  { group: 'Databases', items: ['MongoDB', 'Etcd', 'Redis', 'Neo4j', 'MySql', 'SqlServer'] },
  { group: 'Operating Systems', items: ['Linux', 'Windows', 'MacOS'] },
  {
    group: 'Other Related Skills',
    items: [
      'AWS',
      'Terraform',
      'Kubernetes',
      'Docker',
      'Git',
      'gRpc',
      'proto3',
      'GraphQL',
      'Microservices',
      'Clean Coding',
      'Nats',
      'Web3Storage',
      'Postman',
      'grpcUI',
    ],
  },
];

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
