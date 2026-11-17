
export const PROFILE = {
  name: "Novani Alefn iar".replace(" ", ""),
  first: "Novani",
  last: "Alefn iar".replace(" ", ""),
  role: "Information Systems Graduate",
  focus: "Web & Laravel Developer",
  city: "Bekasi, West Java",
  email: "novanialefniar2211@gmail.com",
  phone: "+62 813-1509-9780",
  linkedin: "https://linkedin.com/in/novani-alefniar",
  github: "https://github.com/nvnalvnr",
  portrait: "/portrait.jpg",
  cv: "/Novani-Alefniar-CV/Novani-Alefniar-CV.pdf",
  statement: [
    "I'm an Information Systems graduate who builds clear, reliable web applications.",
    "Clean data, sensible logic and interfaces people enjoy using.",
  ],
  about:
    "I studied Information Systems at Gunadarma University and learned to treat a website as a system: data, logic and the people who use it. My projects cover authentication, role-based access, CRUD workflows and responsive interfaces in Laravel, native PHP, MySQL and Tailwind CSS. I am early in my career, and I work carefully and learn fast.",
};

export const NAV_LINKS = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Background", "background"],
  ["Contact", "contact"],
];

export const STATS = [
  ["5", "Projects built"],
  ["4", "Certifications"],
];

export const SKILLS = [
  {
    group: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    group: "Backend Development",
    items: ["PHP", "Laravel", "MySQL", "REST API"],
  },
  {
    group: "Tools & Workflow",
    items: ["Git", "GitHub", "VS Code", "Responsive Design"],
  },
];

export const PATH = [
  {
    title: "Bachelor of Information Systems",
    when: "2017 — 2022",
    place: "Gunadarma University",
    text: "Studied information systems, database management, business processes and web application development.",
  },
  {
    title: "Administrative Intern",
    when: "Aug — Nov 2020",
    place: "Ditjen Strahan, Ministry of Defense",
    text: "Supported administrative activities and document management during an internship.",
  },
];

export const LANGS = [
  ["HTML & CSS", "Frontend"],
  ["JavaScript", "Frontend"],
  ["PHP & Laravel", "Backend"],
  ["MySQL", "Database"],
  ["Git & GitHub", "Tools"],
];

export const STRENGTHS = [
  [
    "Problem Solving",
    "Able to break down problems and approach them with logical, structured solutions.",
  ],
  [
    "Attention to Detail",
    "Careful when working with data, application logic and interface consistency.",
  ],
  [
    "Adaptability",
    "Willing to learn new technologies and adapt to different tools and workflows.",
  ],
  [
    "Continuous Learning",
    "Motivated to improve technical knowledge through practice and independent learning.",
  ],
  [
    "Team Collaboration",
    "Open to feedback, communication and working together to achieve shared goals.",
  ],
];

export const CERTS = [
  ["Dicoding", "Belajar Dasar Pemrograman Web"],
  ["Dicoding", "Belajar Membuat Aplikasi Web dengan React"],
  ["Dicoding", "Belajar Dasar Pemrograman JavaScript"],
  ["Coursera", "Introduction to Web Development"],
];

export const FILTERS = ["All", "Laravel", "PHP", "E-commerce", "Frontend"];

export const WORKS = [
  {
    name: "ResepKu",
    type: "Recipe management website",
    cat: ["Laravel", "PHP"],
    stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
    desc: "Manage, discover and save recipes, with separate responsive dashboards for users and administrators, search and saved favourites.",
    points: [
      "User and administrator roles",
      "Recipe management and CRUD",
      "Search and saved favourites",
      "Responsive dashboard",
    ],
    link: null,
  },
  {
    name: "Cookies Shop",
    type: "Shop management system",
    cat: ["PHP", "E-commerce"],
    stack: ["Native PHP", "MySQL", "Tailwind", "MVC"],
    desc: "Product and order management for a cookie shop, built on a hand-structured MVC architecture.",
    points: [
      "Product management",
      "Order management",
      "MVC architecture",
      "MySQL database",
    ],
    link: null,
  },
  {
    name: "Nov Sport",
    type: "E-commerce website",
    cat: ["PHP", "E-commerce"],
    stack: ["PHP", "MySQL"],
    desc: "My academic final project: an online store for presenting products, with product data managed through PHP and MySQL.",
    points: [
      "Online product catalogue",
      "Product data management",
      "PHP and MySQL integration",
    ],
    link: null,
  },
  {
    name: "Explore Wisata",
    type: "Tourism information website",
    cat: ["Frontend"],
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "A responsive destination guide for desktop and mobile, with search, category filters and consistent navigation.",
    points: [
      "Destination information",
      "Search and category filters",
      "Responsive interface",
    ],
    link: null,
  },
  {
    name: "Glow Clinic",
    type: "Clinic landing page",
    cat: ["Frontend"],
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "A landing page that explains a clinic's services in an organised, responsive layout, published online on Vercel.",
    points: [
      "Clinic service presentation",
      "Responsive layout",
      "Live website deployment",
    ],
    link: "https://glow-clinic-sandy.vercel.app",
  },
];