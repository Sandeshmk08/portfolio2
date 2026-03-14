export const portfolioData = {
  name: "Sandesh Khamkar",
  initials: "SK",
  location: "Latur, Maharashtra, India",
  hero: {
    greeting: "Hello! I'm",
    titleLineOne: "Aspiring Java Developer",
    titleLineTwo: "& Web Developer",
  },
  about:
    "I am an aspiring developer focused on building clean, practical web applications with Java and modern frontend technologies. I enjoy turning ideas into usable products, strengthening my problem-solving skills, and growing through hands-on academic and project experience.",
  education: [
    {
      degree: "MCA (Pursuing)",
      institute: "ASM IBMR",
      year: "Now",
      description:
        "Currently strengthening my software development foundation through postgraduate study with a focus on application design, databases, and industry-ready problem solving.",
    },
    {
      degree: "BCA",
      institute: "COCSIT College",
      year: "Completed",
      description:
        "Built core knowledge in programming, web development, and database systems while working on practical academic projects and team-based assignments.",
    },
    {
      degree: "HSC",
      institute: "Sri Chaitanya IIT Academy, Hyderabad",
      year: "Earlier",
      description:
        "Developed a disciplined academic base and analytical approach that continues to support my technical learning journey.",
    },
  ],
  skillCards: [
    {
      title: "WEB DEVELOPMENT",
      subtitle: "Building responsive interfaces",
      description:
        "I create clean and user-friendly web pages with a strong focus on structure, styling, and interactive frontend behavior.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      title: "JAVA & BACKEND",
      subtitle: "Learning practical application logic",
      description:
        "I build beginner-friendly backend and database-driven projects using Java, PHP, and MySQL, with attention to functionality and maintainable code.",
      tags: ["Java", "PHP", "MySQL", "Servlets"],
    },
  ],
  projects: [
    {
      title: "ReclaimHub",
      category: "Lost and Found Web System",
      tools:
        "Built with HTML, CSS, JavaScript, PHP, and MySQL to let users report, search, and manage lost and found items through a simple web interface.",
      image: "/images/reclaimhub.svg",
    },
    {
      title: "Enterprise Underwriting Reports (EUR)",
      category: "Insurance Policy Management Application",
      tools:
        "Java Servlet based web application for organizing underwriting workflows, handling insurance policy data, and improving report management for enterprise use cases.",
      image: "/images/eur.svg",
    },
  ],
  coreSkills: [
    "/images/html5.svg",
    "/images/css3.svg",
    "/images/javascript-skill.svg",
    "/images/java.svg",
    "/images/mysql-skill.svg",
    "/images/php.svg",
  ],
  contact: {
    email: "sandesh.khamkar.dev@example.com",
    linkedin: "https://www.linkedin.com/in/sandesh-khamkar",
    linkedinLabel: "LinkedIn Profile",
    hobby: "Playing Cricket",
  },
  footerYear: 2026,
} as const;
