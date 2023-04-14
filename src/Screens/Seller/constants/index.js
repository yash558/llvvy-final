import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  livvy,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  youtube,
  rightangle,
  growthri,
  user,
  doc,
  cash, live, man, pack, shoot, shop,
  right,
  left,
  middown,
  blank,
  midarrow,

} from "../../../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Work = [
  {
    title: "Register on Livvy",
    icon: user,
    no: "1",

  },
  {
    title: "List Your Product",
    icon: pack,
    no: "2",

  },
  {
    title: "Connect with creators",
    icon: live,
    no: "3",

  },
  {
    title: "Go Live with your products",
    icon: shoot,
    no: "4",

  },
  {
    title: "Be found by customer",
    icon: doc,
    no: "5",

  },
  {
    title: "Customer make a purchase",
    icon: shop,
    no: "6",
  },
  {
    title: "Deliver goods to customer",
    icon: man,
    no: "7",

  },
  {
    title: "Get payment for the goods sold",
    icon: cash,
    no: "8",

  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Content Creator",
    company_name: "YouTube",
    icon: youtube,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Teaching and developing web , Mobile development and DSA.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Right Angle Academy",
    icon: rightangle,
    iconBg: "#E6DEDD",
    date: "sep 2022 - Dec 2022",
    points: [
      "Developing a Educational Website from Scratch with awesome feature using React.js and other related technologies.",
      "Create a interior design website from scratch with whatsapp chat feature and filtering section.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Grow-Thri",
    icon: growthri,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },


];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but yash proved me wrong.",
    name: "Umesh Jangid",
    designation: "Founder",
    company: "Right Angle Academy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    index: 1,
    name: "Livvy Website",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    category: "Web App",
    image: livvy,
    source_code_link: "https://github.com/",
    live_link: "",
  },
  {
    index: 2,
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    category: "Web App",
    image: jobit,
    source_code_link: "https://github.com/",
    live_link: ""
  },
  {
    index: 3,
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    category: "Mobile App",
    image: tripguide,
    source_code_link: "https://github.com/",
    live_link: "",
  },


];

export { Work, technologies, experiences, testimonials, projects };