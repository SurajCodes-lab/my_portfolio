import { Client, CaseStudy, Project, SkillCategory, ProcessStep } from "@/types";

export const clients: Client[] = [
  {
    id: "client-1",
    name: "TechCorp",
    logo: "/clients/techcorp.svg",
    website: "https://techcorp.com",
  },
  {
    id: "client-2",
    name: "StartupXYZ",
    logo: "/clients/startupxyz.svg",
    website: "https://startupxyz.com",
  },
  {
    id: "client-3",
    name: "Enterprise Co",
    logo: "/clients/enterprise.svg",
    website: "https://enterprise.co",
  },
  {
    id: "client-4",
    name: "Digital Agency",
    logo: "/clients/digitalagency.svg",
    website: "https://digitalagency.com",
  },
  {
    id: "client-5",
    name: "FinTech Inc",
    logo: "/clients/fintech.svg",
    website: "https://fintech.com",
  },
  {
    id: "client-6",
    name: "HealthTech",
    logo: "/clients/healthtech.svg",
    website: "https://healthtech.com",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    clientName: "Triveni Cabs",
    clientLogo: "/clients/trivenicabs.svg",
    industry: "Transportation & Travel",
    role: "Full-Stack Developer & SEO Lead",
    problem:
      "Triveni Cabs needed a modern, high-performance booking platform to serve 500+ routes across India, handling cab rentals, wedding cars, airport transfers, and tour packages with seamless user experience.",
    solution:
      "Built a complete Next.js website with optimized booking flows, real-time availability, WhatsApp integration, and comprehensive SEO strategy. Implemented responsive design with modern UI featuring yellow accent colors and clean typography. Also managing their social media presence.",
    techStack: ["Next.js", "React", "Tailwind CSS", "SEO", "Social Media", "Vercel"],
    impact: [
      "Achieved 4.8-star rating with 2,847+ customer reviews",
      "Serving 500+ routes across major Indian cities",
      "Improved organic search rankings significantly",
      "Streamlined booking process for multiple vehicle types",
    ],
    websiteUrl: "https://trivenicabs.in",
    featured: true,
  },
  {
    id: "case-2",
    clientName: "Artiriy",
    clientLogo: "/clients/artiriy.svg",
    industry: "E-commerce / Art Marketplace",
    role: "Full-Stack Developer & Architect",
    problem:
      "Artiriy needed a global multi-vendor eCommerce platform for artists to buy and sell paintings, digital art, sculptures, and handmade crafts with secure international payment processing.",
    solution:
      "Architected and developed the complete platform from database design to deployment. Built robust backend with .NET Core WebAPI, Entity Framework ORM, and MySQL. Integrated PayPal and PayU for international payments. Implemented AWS infrastructure with SNS and SES for notifications.",
    techStack: ["React.js", ".NET Core", "WebAPI", "Entity Framework", "MySQL", "AWS", "PayPal", "PayU", "SNS", "SES"],
    impact: [
      "Successfully launched global art marketplace",
      "Dual payment gateway integration (PayPal + PayU)",
      "Scalable multi-vendor architecture",
      "Automated notification system via AWS SNS/SES",
    ],
    websiteUrl: "https://artiriy.com",
    featured: true,
  },
  {
    id: "case-3",
    clientName: "Judicium Arbitration",
    clientLogo: "/clients/judicium.svg",
    industry: "Legal Services",
    role: "UI/UX Designer & Developer",
    problem:
      "A prestigious law firm specializing in arbitration and dispute resolution needed a professional web presence to showcase their 20+ years of experience, 500+ cases won, and presence across 8 North Indian cities.",
    solution:
      "Designed and developed a premium, trust-building website with clean navigation, prominent CTAs, and organized service sections covering 20+ practice areas including corporate law, IP rights, and cybersecurity.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    impact: [
      "Professional online presence for 8-city law firm",
      "Showcasing 98% success rate and credentials",
      "Clear service categorization for 20+ practice areas",
      "Improved client consultation scheduling",
    ],
    websiteUrl: "https://judicium-aribitration.vercel.app",
    featured: true,
  },
  {
    id: "case-4",
    clientName: "Dhruv Rugs Global",
    clientLogo: "/clients/dhruvrugs.svg",
    industry: "Luxury Home Decor",
    role: "Full-Stack Developer",
    problem:
      "Dhruv Rugs Global, a premium handwoven carpet exporter from Bhadohi, India, had a React.js website that was slow and not optimized for search engines, affecting their international market reach.",
    solution:
      "Executed a complete migration from React.js to Next.js, implementing server-side rendering and static generation for optimal performance. Enhanced SEO structure and meta tags for better international visibility.",
    techStack: ["Next.js", "React", "Tailwind CSS", "SSR", "SEO", "Vercel"],
    impact: [
      "Successful React to Next.js migration",
      "Improved page load speed by 60%",
      "Better search engine rankings",
      "Enhanced international market reach",
    ],
    websiteUrl: "https://dhruvrugs.global",
    featured: true,
  },
  {
    id: "case-5",
    clientName: "DhruvRugs.in",
    clientLogo: "/clients/dhruvrugs.svg",
    industry: "Content & Blogging",
    role: "Full-Stack Developer & Designer",
    problem:
      "Dhruv Rugs needed a premium blog platform to showcase their expertise in luxury handwoven carpets, covering design tips, trade show coverage, and craftsmanship stories for the Indian market.",
    solution:
      "Designed and developed an elegant blog platform featuring a dark gradient aesthetic (indigo to purple to pink), glassmorphism cards, smooth hover animations, and responsive grid layouts. Content covers India Carpet Expo, design trends, and artisanal heritage.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Glassmorphism", "Framer Motion", "Vercel"],
    impact: [
      "Premium luxury brand presentation",
      "Glassmorphism design with dark gradients",
      "Coverage of 50th India Carpet Expo 2026",
      "Engaging content on hand-knotted craftsmanship",
    ],
    websiteUrl: "https://dhruvrugs.in",
    featured: true,
  },
  {
    id: "case-6",
    clientName: "DhruvRugs.com",
    clientLogo: "/clients/dhruvrugs.svg",
    industry: "Content & Blogging",
    role: "Full-Stack Developer & Designer",
    problem:
      "A separate blog platform was needed targeting international audiences, featuring trade show coverage (Canton Fair, Heimtextil Frankfurt, BDNY) and modern luxury interior design content.",
    solution:
      "Built a sophisticated blog with burgundy and warm gold color palette, Playfair serif typography, and six content categories including Traditional Rugs, Maintenance, Design Tips, and Sustainability. Optimized for global SEO.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Typography", "SEO", "Vercel"],
    impact: [
      "Elegant burgundy & gold luxury aesthetic",
      "International trade show coverage",
      "Six curated content categories",
      "Global audience engagement",
    ],
    websiteUrl: "https://dhruvrugs.com",
    featured: true,
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    name: "Open Source Component Library",
    description:
      "A comprehensive React component library with 50+ accessible, customizable components. Built with TypeScript and styled with Tailwind CSS. Features include dark mode support, RTL compatibility, and extensive documentation.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Jest"],
    githubUrl: "https://github.com/yourusername/component-library",
    liveUrl: "https://components.yoursite.com",
    image: "/projects/component-library.png",
  },
  {
    id: "project-2",
    name: "AI-Powered Code Review Tool",
    description:
      "An intelligent code review assistant that uses GPT-4 to analyze pull requests, suggest improvements, and identify potential bugs. Integrates with GitHub and GitLab.",
    techStack: ["Python", "FastAPI", "OpenAI API", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/yourusername/ai-code-review",
    liveUrl: "https://codereview.yoursite.com",
    image: "/projects/code-review.png",
  },
  {
    id: "project-3",
    name: "Real-time Collaboration Platform",
    description:
      "A Notion-like workspace with real-time collaboration features. Supports rich text editing, nested pages, databases, and team permissions.",
    techStack: ["Next.js", "TypeScript", "Prisma", "WebSocket", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/collab-platform",
    image: "/projects/collab-platform.png",
  },
  {
    id: "project-4",
    name: "DevOps Dashboard",
    description:
      "A unified dashboard for monitoring CI/CD pipelines, server health, and deployment status across multiple cloud providers.",
    techStack: ["React", "Node.js", "GraphQL", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/yourusername/devops-dashboard",
    image: "/projects/devops-dashboard.png",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Redux" },
      { name: "Context API" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "ASP.NET Core" },
      { name: "ASP.NET MVC" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Entity Framework" },
      { name: "LINQ" },
      { name: "REST APIs" },
      { name: "JWT Auth" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL Server" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Oracle" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS EC2" },
      { name: "AWS S3" },
      { name: "Route 53" },
      { name: "SES" },
      { name: "SNS" },
      { name: "Lambda" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitLab" },
      { name: "Jenkins" },
      { name: "Docker" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "Python" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Data Analysis" },
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep dive into your business goals, technical requirements, and user needs. We align on scope, timeline, and success metrics.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Design scalable system architecture and create detailed technical specifications. Choose the right technologies for your needs.",
    icon: "Boxes",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Agile development with regular updates and demos. Clean, maintainable code with comprehensive documentation.",
    icon: "Code",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Rigorous testing including unit tests, integration tests, and performance optimization. Security audits and accessibility checks.",
    icon: "TestTube",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "Smooth deployment with monitoring setup. Ongoing support, maintenance, and iterative improvements based on user feedback.",
    icon: "Rocket",
  },
];
