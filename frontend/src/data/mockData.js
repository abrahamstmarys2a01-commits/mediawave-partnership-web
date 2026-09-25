export const companyInfo = {
  name: "Media Wave Technologies",
  tagline: "Building Future-Ready Tech Talent",
  subheading: "Connecting technology, education and industry through innovative solutions, hands-on training and meaningful industry-academia partnerships.",
  about: "Media Wave Technology is a technology-driven organization focused on building innovative digital solutions while helping students and institutions bridge the gap between academic learning and industry requirements. We partner with premier universities and colleges to deliver immersive technical workshops, industry-grade internships, MoU-backed skill ecosystems, and enterprise software engineering.",
  phone: "+91 63691 53235",
  email: "info@mediawavetech.com",
  admissionsEmail: "info@mediawavetech.com",
  address: "WD-54, Anandha bhavan complex, Second floor, 17/52, Puthur High Rd, Tiruchirappalli, Tamil Nadu 620017",
  branches: [
    "Head Office: Puthur High Rd, Tiruchirappalli",
    "Karur Tech Hub: Kovai Road, Karur",
    "Pudukkottai & Thirumaiyam Center"
  ],
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
  }
};

export const impactStats = [
  { id: "colleges", count: 10, suffix: "+", label: "Colleges Connected", desc: "Top engineering & arts institutions" },
  { id: "students", count: 1500, suffix: "+", label: "Students Trained", desc: "Empowered with modern industry tech" },
  { id: "workshops", count: 25, suffix: "+", label: "Workshops Conducted", desc: "Hands-on coding bootcamps" },
  { id: "projects", count: 15, suffix: "+", label: "Industry Projects", desc: "Live client & academic deployments" },
  { id: "programs", count: 20, suffix: "+", label: "Technology Programs", desc: "Comprehensive full-stack & AI curricula" }
];

export const trustedColleges = [
  {
    id: "nsn-karur",
    name: "NSN College of Engineering and Technology",
    location: "Karur, Tamil Nadu",
    type: "Engineering & Technology Institution",
    logoText: "NSN College",
    logoColor: "bg-blue-600",
    established: "2011",
    mouDate: "18 Jan 2026",
    workshopConducted: "Full Stack Web Development Bootcamp",
    studentsBenefited: 340,
    partnershipType: "MoU Signed & Training Program",
    badge: "MoU Signed",
    badge2: "Workshop Conducted",
    image: "/workshops/nsncet-workshop.jpg",
    mouImage: "/workshops/nsncet-workshop.jpg",
    gallery: [
      "/workshops/nsncet-workshop.jpg",
      "/workshops/nsncet-group.jpg",
      "/workshops/nsncet-lab-1.jpg",
      "/workshops/nsncet-lab-2.jpg"
    ],
    description: "Collaborative framework establishing a dedicated full-stack web engineering center, modern JavaScript bootcamps, and priority placement drives for engineering students in Karur."
  },
  {
    id: "krce-trichy",
    name: "K. Ramakrishnan College of Engineering",
    location: "Tiruchirappalli, Tamil Nadu",
    type: "Autonomous Engineering College",
    logoText: "KRCE Trichy",
    logoColor: "bg-red-700",
    established: "2008",
    mouDate: "24 Feb 2026",
    workshopConducted: "Java Full Stack & Spring Boot Microservices",
    studentsBenefited: 480,
    partnershipType: "MoU Signed & Center of Excellence",
    badge: "MoU Signed",
    badge2: "Center of Excellence",
    image: "/mou/krce-mou.png",
    mouImage: "/mou/krce-mou.png",
    gallery: [
      "/mou/krce-mou.png"
    ],
    description: "Specialized training in enterprise Java Spring Boot architectures, cloud API endpoints, relational SQL optimization, and capstone mentoring for CS & IT departments."
  },
  {
    id: "st-josephs-trichy",
    name: "St. Joseph's College (Autonomous)",
    location: "Tiruchirappalli, Tamil Nadu",
    type: "Heritage Autonomous Arts & Science College (Est. 1844)",
    logoText: "St. Joseph's",
    logoColor: "bg-amber-600",
    established: "1844",
    mouDate: "12 Nov 2026",
    workshopConducted: "Web Development Bootcamp",
    studentsBenefited: 520,
    partnershipType: "MoU Signed & Skill Development Partner",
    badge: "MoU Signed",
    badge2: "Workshop Conducted",
    image: "/workshops/st-joseph-trainer-speech.png",
    mouImage: "/workshops/st-joseph-trainer-speech.png",
    gallery: [
      "/workshops/st-joseph-trainer-speech.png",
      "/workshops/st-joseph-workshop-1.jpg",
      "/workshops/st-joseph-workshop-2.jpg",
      "/workshops/st-joseph-workshop-3.jpg"
    ],
    description: "Empowering undergraduate and postgraduate computer applications students in AI integration, React frontend engineering, and real-world project portfolios."
  },
  {
    id: "shanmugam-thirumaiyam",
    name: "Shanmugam College of Engineering",
    location: "Thirumaiyam, Pudukkottai, Tamil Nadu",
    type: "Engineering & Technical Institution",
    logoText: "Shanmugam",
    logoColor: "bg-emerald-700",
    established: "2001",
    mouDate: "08 Oct 2026",
    workshopConducted: "Full Stack Web Development Bootcamp",
    studentsBenefited: 280,
    partnershipType: "MoU Signed & Training Partner",
    badge: "MoU Signed",
    badge2: "Skill Development Partner",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80",
    mouImage: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Collaborative training framework focusing on modern Full Stack development, cloud APIs, database architectures, and career placement enablement for engineering students."
  }
];

export const mouHighlights = [
  {
    id: "mou-1",
    collegeId: "nsn-karur",
    year: "2026",
    collegeName: "NSN College of Engineering and Technology",
    location: "Karur, TN",
    date: "18 Jan 2026",
    mouSigned: "MoU Signed: 18 Jan 2026",
    title: "Official Industry-Academia Skill Development Agreement",
    shortDesc: "Establishing dedicated full-stack development lab toolchains, live coding bootcamps and student internships.",
    image: "/workshops/nsncet-workshop.jpg",
    gallery: [
      "/workshops/nsncet-workshop.jpg",
      "/workshops/nsncet-group.jpg",
      "/workshops/nsncet-lab-1.jpg",
      "/workshops/nsncet-lab-2.jpg"
    ],
    scope: [
      "Dedicated Full-Stack and Cloud Curriculum Module",
      "Guaranteed Internship slots for top 25 performers",
      "Faculty Development Programs (FDP) on Modern Frameworks",
      "Joint Hackathon sponsorships"
    ]
  },
  {
    id: "mou-2",
    collegeId: "krce-trichy",
    year: "2026",
    collegeName: "K. Ramakrishnan College of Engineering",
    location: "Trichy, TN",
    date: "24 Feb 2026",
    mouSigned: "MoU Signed: 24 Feb 2026",
    title: "Enterprise Java & Cloud Architecture Center of Excellence",
    shortDesc: "Comprehensive Spring Boot microservices labs, database performance tuning and placement coaching.",
    image: "/mou/krce-mou.png",
    gallery: [
      "/mou/krce-mou.png"
    ],
    scope: [
      "Advanced Java Spring Boot & Microservices live project allocation",
      "Industry Mentor office hours weekly",
      "Final year Capstone project co-guidance",
      "Campus recruitment priority channel"
    ]
  },
  {
    id: "mou-3",
    collegeId: "st-josephs-trichy",
    year: "2026",
    collegeName: "St. Joseph's College (Autonomous)",
    location: "Trichy, TN",
    date: "12 Nov 2026",
    mouSigned: "MoU Signed: 12 Nov 2026",
    title: "Web Engineering & AI Innovations Alliance",
    shortDesc: "Collaboration with the Department of Computer Science & BCA for modern web software engineering.",
    image: "/workshops/st-joseph-trainer-speech.png",
    gallery: [
      "/workshops/st-joseph-trainer-speech.png",
      "/workshops/st-joseph-workshop-1.jpg",
      "/workshops/st-joseph-workshop-2.jpg",
      "/workshops/st-joseph-workshop-3.jpg"
    ],
    scope: [
      "React JS and Node Full-Stack certification training",
      "Live SQL/NoSQL performance tuning workshops",
      "Mock technical interviews & code reviews"
    ]
  },
  {
    id: "mou-4",
    collegeId: "shanmugam-thirumaiyam",
    year: "2026",
    collegeName: "Shanmugam College of Engineering",
    location: "Thirumaiyam, TN",
    date: "08 Oct 2026",
    mouSigned: "MoU Signed: 08 Oct 2026",
    title: "Full Stack & Cloud Technologies Skill Alliance",
    shortDesc: "Building full-stack engineering proficiency using React, Node.js, Express, and modern databases.",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    ],
    scope: [
      "Full Stack Development & REST API Bootcamps",
      "Modern Web Architecture & Cloud Deployment",
      "Real-world student client app development"
    ]
  }
];

export const workshops = [
  {
    id: "web-dev",
    title: "Web Development Workshop",
    techCategory: "NSNCET",
    techTags: ["HTML5", "CSS3", "JavaScript", "React JS"],
    collegeName: "NSN College of Engineering and Technology",
    collegeId: "nsn-karur",
    date: "Sep 18 & 19, 2026",
    duration: "2 Days (48 Hours)",
    attendees: 70,
    shortDesc: "Foundational to modern interactive web development with real-world component design.",
    fullDesc: "An intensive 2-day hands-on bootcamp for 70 students on modern web application development. Students mastered frontend web architecture, component lifecycle, React with Vite setup, state management, and deployed live interactive projects.",
    image: "/workshops/nsncet-workshop.jpg",
    gallery: [
      "/workshops/nsncet-workshop.jpg",
      "/workshops/nsncet-lab-1.jpg",
      "/workshops/nsncet-lab-2.jpg",
      "/workshops/nsncet-group.jpg"
    ],
    instructor: "Senior Frontend Architect, Media Wave Tech",
    outcomes: ["Setting up React Projects with Vite", "Component Design & Hooks", "Live Code Debugging & Deployment", "Project Portfolio Certification"]
  },
  {
    id: "st-joseph-web-dev",
    title: "Web Development Workshop",
    techCategory: "St. Joseph's",
    techTags: ["HTML5", "CSS3", "JavaScript", "React JS"],
    collegeName: "St. Joseph's College (Autonomous), Trichy",
    collegeId: "st-josephs-trichy",
    date: "Sep 21 & 22, 2026",
    duration: "2 Days (48 Hours)",
    attendees: 50,
    shortDesc: "Modern frontend web architecture, responsive UI components, state management and live app building.",
    fullDesc: "An intensive 2-day hands-on bootcamp for 50 students on modern web application development. Students gained practical experience in responsive design, modern JavaScript (ES6+), React component architecture, state hooks, and live interactive project deployment.",
    image: "/workshops/st-joseph-trainer-speech.png",
    gallery: [
      "/workshops/st-joseph-trainer-speech.png",
      "/workshops/st-joseph-workshop-1.jpg",
      "/workshops/st-joseph-workshop-2.jpg",
      "/workshops/st-joseph-workshop-3.jpg"
    ],
    instructor: "Senior Frontend Architect, Media Wave Tech",
    outcomes: ["Semantic HTML5 & Responsive CSS3", "Modern JavaScript & React Hooks", "Interactive UI Component Architecture", "Live Web App Project Deployment"]
  },
  {
    id: "shanmugam-full-stack",
    title: "Full Stack Development",
    techCategory: "Shanmugam",
    techTags: ["React", "Node.js", "Express", "MongoDB"],
    collegeName: "Shanmugam College of Engineering",
    collegeId: "shanmugam-thirumaiyam",
    date: "08 Oct 2026",
    duration: "3 Days Workshop",
    attendees: 160,
    shortDesc: "End-to-end full stack web engineering with REST APIs, authentication, and database schemas.",
    fullDesc: "Comprehensive full stack development workshop covering client-side React, Node.js & Express server architecture, MongoDB schema design, JWT authentication, and full stack application deployment.",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    ],
    instructor: "Full Stack Tech Lead, Media Wave Tech",
    outcomes: ["Full Stack Architecture & REST APIs", "Node.js & Express Server Setup", "MongoDB Database & CRUD Operations", "End-to-End Application Deployment"]
  }
];

export const courses = [
  {
    id: "course-web-dev",
    title: "Web Development",
    category: "Frontend Engineering",
    level: "Beginner to Advanced",
    duration: "8 Weeks (60 Hours)",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+", "React JS", "Tailwind CSS"],
    shortDesc: "Master foundational and modern frontend development to create responsive, dynamic web applications.",
    fullDesc: "A complete journey from the fundamentals of semantic HTML and CSS styling to advanced React patterns, hooks, state management, and modern component architecture.",
    handsOnProjects: "3 Real-World Web Apps (Portfolio, E-Commerce UI, Dashboard)",
    modules: [
      "Semantic HTML5, CSS Grid, Flexbox, & Modern Layouts",
      "JavaScript Core, Async/Await, Fetch API, ES6 Modules",
      "React JS Component Lifecycle, Hooks, State & Context",
      "Tailwind CSS, Glassmorphism, & Micro-animations",
      "Deployment with Git, GitHub Actions & Vercel"
    ],
    careerRoles: ["Frontend Developer", "UI Engineer", "React Developer"],
    icon: "Layout"
  },
  {
    id: "course-full-stack",
    title: "Full Stack Development",
    category: "Full Stack MERN",
    level: "Intermediate",
    duration: "12 Weeks (90 Hours)",
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    shortDesc: "End-to-end full stack web architecture with MongoDB, Express backend, React UI, and Node runtime.",
    fullDesc: "Build production-grade web systems from the database schema layer up to interactive user interfaces with full authentication, authorization, and cloud database integration.",
    handsOnProjects: "Full Stack ERP Portal & Social Media Web Platform",
    modules: [
      "Node.js Runtime & Express Server Setup",
      "MongoDB Schema Design, Aggregations & Mongoose",
      "JWT Authentication, Role-based Access Control & Security",
      "State Management with Redux Toolkit / Zustand",
      "Docker basics and Cloud Deployment on AWS/Render"
    ],
    careerRoles: ["Full Stack Engineer", "MERN Stack Specialist", "Web Application Developer"],
    icon: "Layers"
  },
  {
    id: "course-java-stack",
    title: "Java Full Stack",
    category: "Enterprise Software",
    level: "Intermediate to Advanced",
    duration: "14 Weeks (100 Hours)",
    techStack: ["Core Java", "Advanced Java", "Spring Boot", "SQL", "Hibernate"],
    shortDesc: "Build enterprise software architectures using Java, Spring Boot microservices, and relational databases.",
    fullDesc: "Designed for industry scalability, focusing on object-oriented system design, microservices, Spring Data JPA, RESTful API contracts, and SQL query tuning.",
    handsOnProjects: "Banking Transaction Microservice & Inventory Management System",
    modules: [
      "OOP Concepts, Collections Framework & Multithreading",
      "Spring Boot Architecture, Dependency Injection & REST",
      "JPA, Hibernate ORM & Complex Relational SQL Queries",
      "Microservices Communication with Eureka & Gateway",
      "Unit Testing with JUnit and Mockito"
    ],
    careerRoles: ["Java Software Engineer", "Backend Architect", "Enterprise App Developer"],
    icon: "Server"
  },
  {
    id: "course-mobile-app",
    title: "Mobile App Development",
    category: "Cross-Platform Mobile",
    level: "Intermediate",
    duration: "8 Weeks (60 Hours)",
    techStack: ["React Native", "Expo", "Native APIs", "Firebase"],
    shortDesc: "Create smooth, cross-platform native mobile applications for iOS and Android using React Native.",
    fullDesc: "Learn how to build high-performance mobile apps with intuitive touch interactions, push notifications, offline storage, camera access, and app store deployment.",
    handsOnProjects: "Food Delivery App with Live Maps & Fitness Tracker App",
    modules: [
      "React Native Fundamentals & Mobile Navigation (React Navigation)",
      "Native Device Features (Camera, Geolocation, Storage)",
      "Async Data Fetching & Firebase Realtime Database",
      "Performance Optimization & Animation Libraries",
      "Building and Publishing APKs to Google Play Store"
    ],
    careerRoles: ["Mobile App Developer", "React Native Engineer", "Cross-Platform Developer"],
    icon: "Smartphone"
  },
  {
    id: "course-backend-db",
    title: "Backend & Database",
    category: "Backend Engineering",
    level: "Intermediate to Advanced",
    duration: "10 Weeks (75 Hours)",
    techStack: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs"],
    shortDesc: "Master server-side architecture, API security, relational & NoSQL databases, and performance tuning.",
    fullDesc: "Focus solely on backend engineering, data modeling, caching strategies (Redis), message queues, API gateway design, and high-concurrency database queries.",
    handsOnProjects: "High-Throughput Payment Processing API & Real-Time Analytics Engine",
    modules: [
      "Advanced Node.js Event Loop & Streams",
      "PostgreSQL / MySQL Schema Normalization & Indexing",
      "MongoDB Sharding & Replication Architectures",
      "API Security (CORS, Rate Limiting, Helmet, OAuth)",
      "Automated CI/CD Pipeline Configuration"
    ],
    careerRoles: ["Backend Engineer", "Database Administrator", "API Engineer"],
    icon: "Database"
  },
  {
    id: "course-ai-tech",
    title: "AI & Emerging Tech",
    category: "Artificial Intelligence",
    level: "Intermediate to Advanced",
    duration: "8 Weeks (60 Hours)",
    techStack: ["AI Tools", "AI Integration", "Automation", "Python APIs"],
    shortDesc: "Harness modern AI tools, agentic workflows, LLM APIs, and intelligent automation for real-world software.",
    fullDesc: "Step into the next era of software development by connecting modern web apps with AI models, automating manual business operations, and building intelligent agents.",
    handsOnProjects: "AI Document Assistant & Automated Business Invoice Extractor",
    modules: [
      "Introduction to Modern AI Models & LLM APIs",
      "Prompt Engineering & Context Management",
      "Building RAG (Retrieval-Augmented Generation) Systems",
      "Agentic Workflows and Automation Frameworks",
      "Deploying and Securing AI Web Services"
    ],
    careerRoles: ["AI Integration Specialist", "Automation Engineer", "AI Solutions Developer"],
    icon: "Cpu"
  }
];

export const realProjects = [
  {
    id: "proj-erp",
    title: "Enterprise ERP Solution",
    category: "ERP Solutions",
    tagline: "Comprehensive Institutional & Business Management",
    techStack: ["React JS", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "An integrated academic ERP automating student enrollments, fee management, examination grading, attendance tracking, and faculty portals for educational colleges.",
    metrics: "12,000+ Active Student Records Processed"
  },
  {
    id: "proj-ecommerce",
    title: "E-Commerce Platform",
    category: "Web Applications",
    tagline: "Scalable Omnichannel Retail Infrastructure",
    techStack: ["React", "Express", "MongoDB", "Stripe API"],
    image: "/projects/ecommerce-platform.jpg",
    description: "Full-featured online shopping experience with instant cart management, multi-gateway payments, inventory synchronization, and seller analytics.",
    metrics: "99.9% Uptime with Sub-Second Search"
  },
  {
    id: "proj-mobile-app",
    title: "Campus Connect Mobile App",
    category: "Mobile Applications",
    tagline: "Cross-Platform Student & Faculty Companion",
    techStack: ["React Native", "Expo", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    description: "Instant access to academic timetables, exam alerts, digital hall tickets, campus announcements, and peer discussion forums on iOS and Android.",
    metrics: "4.8 Star Rating on Play Store"
  },
  {
    id: "proj-ai-dashboard",
    title: "AI Business Automation & Analytics Dashboard",
    category: "AI Integration",
    tagline: "Smart Analytics & Automated Workflow Engine",
    techStack: ["React", "Python FastAPI", "OpenAI API", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "Intelligent analytics system that summarizes financial reports, predicts seasonal trends, and automates customer enquiry ticket routing.",
    metrics: "60% Reduction in Ticket Response Times"
  }
];

export const journeySteps = [
  {
    stepNumber: "01",
    title: "College Visit",
    subtitle: "Building relationships",
    desc: "Our tech leadership and academic coordinators visit college campuses, meet department heads, and assess student skill requirements.",
    image: "/workshops/st-joseph-workshop-3.jpg"
  },
  {
    stepNumber: "02",
    title: "Workshop",
    subtitle: "Sharing knowledge",
    desc: "Interactive hands-on bootcamps introducing students to modern web development, full stack workflows, and software development practices.",
    image: "/workshops/nsncet-workshop.jpg"
  },
  {
    stepNumber: "03",
    title: "MoU Signing",
    subtitle: "Formal partnership",
    desc: "Institutional agreements establishing official multi-year collaborations, faculty training programs, and direct campus recruitment pathways.",
    image: "/mou/krce-mou.png"
  },
  {
    stepNumber: "04",
    title: "Training",
    subtitle: "Skill development",
    desc: "Intensive 30 to 90 hour specialized modular courses equipping students with production-grade coding standards and architecture skills.",
    image: "/workshops/st-joseph-workshop-1.jpg"
  },
  {
    stepNumber: "05",
    title: "Industry Project",
    subtitle: "Real-world solutions",
    desc: "Mentored project development where student teams build live client applications, deploy cloud architectures, and handle real datasets.",
    image: "/workshops/nsncet-lab-1.jpg"
  },
  {
    stepNumber: "06",
    title: "Student Engagement",
    subtitle: "Growing together",
    desc: "Continuous mentorship, alumni tech talks, hackathons, internship recommendations, and placement support ensuring long-term success.",
    image: "/workshops/nsncet-group.jpg"
  }
];

export const studentReviews = [
  {
    id: "rev-1",
    name: "Akash K",
    college: "NSN College of Engineering",
    course: "Web Development Workshop",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
    review: "The hands-on workshop helped me understand how technologies are actually used in real-world projects. The trainers from Media Wave were very supportive, knowledgeable and friendly. Building a live React app gave me huge confidence!"
  },
  {
    id: "rev-2",
    name: "Priya Sundaram",
    college: "K. Ramakrishnan College of Engineering",
    course: "Java Full Stack Development",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    review: "Media Wave Technologies training was the turning point in my engineering journey. We connected Spring Boot microservices, SQL databases and React seamlessly. It directly helped me crack my campus technical interview!"
  },
  {
    id: "rev-3",
    name: "Vigneshwaran R",
    college: "St. Joseph's College (Autonomous)",
    course: "Full Stack Development",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    review: "The MERN stack concepts were taught with extreme practical clarity. Rather than theoretical syntax, we built real REST APIs and solved complex database queries with real mentor guidance."
  },
  {
    id: "rev-4",
    name: "Deepika Murugan",
    college: "Shanmugam College of Engineering",
    course: "Full Stack Development",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    review: "Learning Full Stack engineering with Media Wave mentors was phenomenal. We deployed our app on cloud environments and integrated live databases. Highly recommended for every college!"
  }
];

export const galleryPhotos = [
  {
    id: "gal-sjc-speech",
    title: "Lead Trainer Addressing Students on Modern Web Engineering",
    category: "Workshops",
    college: "St. Joseph's College (Autonomous), Trichy",
    date: "Sep 21 & 22, 2026",
    image: "/workshops/st-joseph-trainer-speech.png",
    caption: "Media Wave senior mentor presenting key frontend architectural concepts and interactive industry project standards in the St. Joseph's lab."
  },
  {
    id: "gal-krce-mou",
    title: "Institutional MoU Signing Ceremony & Leadership Assembly",
    category: "MoU Signing",
    college: "K. Ramakrishnan College of Engineering, Trichy",
    date: "24 Feb 2026",
    image: "/mou/krce-mou.png",
    caption: "Official MoU Signing Ceremony with Dr. D. Srinivasan (Principal), Chief Guest, Heads of Departments, and Media Wave Technologies executives."
  },
  {
    id: "gal-nsn-workshop",
    title: "Web Development Live Coding & Projector Demonstration",
    category: "Workshops",
    college: "NSN College of Engineering and Technology, Karur",
    date: "Sep 18 & 19, 2026",
    image: "/workshops/nsncet-workshop.jpg",
    caption: "Interactive live coding demonstration on web application architecture and modern JavaScript in the NSNCET computer laboratory."
  },
  {
    id: "gal-nsn-group",
    title: "Workshop Participants & Faculty Recognition Group",
    category: "Events",
    college: "NSN College of Engineering and Technology, Karur",
    date: "Sep 19, 2026",
    image: "/workshops/nsncet-group.jpg",
    caption: "Celebration of successful bootcamp completion with 70+ students, professors, and Media Wave mentors."
  },
  {
    id: "gal-sjc-workshop-1",
    title: "Web Development Architecture & VS Code Projector Drill",
    category: "Workshops",
    college: "St. Joseph's College (Autonomous), Trichy",
    date: "Sep 21 & 22, 2026",
    image: "/workshops/st-joseph-workshop-1.jpg",
    caption: "Live interactive code breakdown with VS Code, component design, and architecture explanation at St. Joseph's College lab."
  },
  {
    id: "gal-sjc-workshop-2",
    title: "One-on-One Technical Mentorship & Lab Guidance",
    category: "Training",
    college: "St. Joseph's College (Autonomous), Trichy",
    date: "Sep 21 & 22, 2026",
    image: "/workshops/st-joseph-workshop-2.jpg",
    caption: "Media Wave senior trainer assisting students individually with modern JavaScript, state management, and debugging."
  },
  {
    id: "gal-sjc-workshop-3",
    title: "Computer Center Web Engineering Bootcamp Session",
    category: "College Visits",
    college: "St. Joseph's College (Autonomous), Trichy",
    date: "Sep 21 & 22, 2026",
    image: "/workshops/st-joseph-workshop-3.jpg",
    caption: "50+ students actively engaged in building and deploying responsive web applications in the campus computer center."
  },
  {
    id: "gal-nsn-lab-1",
    title: "Hands-on Frontend & React Lab Implementation",
    category: "Training",
    college: "NSN College of Engineering and Technology, Karur",
    date: "Sep 18, 2026",
    image: "/workshops/nsncet-lab-1.jpg",
    caption: "Engineering students building practical responsive frontend web modules on dedicated workstation systems."
  },
  {
    id: "gal-nsn-lab-2",
    title: "Real-time Code Debugging & Pair Programming",
    category: "Workshops",
    college: "NSN College of Engineering and Technology, Karur",
    date: "Sep 19, 2026",
    image: "/workshops/nsncet-lab-2.jpg",
    caption: "Collaborative pair programming, Git workflows, and live bug debugging session at NSNCET."
  }
];
