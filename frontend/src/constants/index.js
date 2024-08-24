import {
  educationIcon,
  experianceIcon,
  pc,
  algo,
  skns,
  
} from "../assets/images";

import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  nodejs,
  tailwindcss,
  threejs,
  react,
  java,
  androidDev,
  webDev,
  
} from "../assets/icons";
import { e } from "maath/dist/index-0332b2ed.esm";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Programming Language",
  },
];

export const education = [
  {
    title: "Anjuman-I-Islam's Kalsekar Technical Campus, Panvel",
    date: "Dec 2021 - Aug 2025   |   CGPA: 7.83",
    icon: educationIcon,
    iconBg: "#00c6ff",
    points: [
      "I am currently pursuing my undergraduate degree with a focus on B.E. in Computer Engineering at Mumbai University.",
      "Through rigorous coursework and hands-on projects, I am developing a strong foundation in various domians of Computer Science, preparing myself for a successful career in Software Development.",
    ],
  },
  {
    title: "Sainath Jr College, Vashi",
    date: "Aug 2019 - July 2021  |   Grade: 82%",
    icon: educationIcon,
    iconBg: "#00c6ff",
    points: [
      "I successfully completed the Higher Secondary Certificate from Maharastra Board, acquiring comprehensive knowledge in the feild Physics, Chemistry and Maths.",
      "This educational foundation equips me to excel in my professional endeavors and contribute effectively to the field.",
    ],
  },
  {
    title: "S S High School, Seawoods",
    date: "June 2013 - Mar 2019   |   Percentage: 66%",
    icon: educationIcon,
    iconBg: "#00c6ff",
    points: [
      "I successfully navigated a rigorous high school curriculum, demonstrating exceptional academic aptitude and a commitment to excellence.",
      "Engaging in diverse extracurricular activities, I honed leadership and interpersonal skills, fostering a well-rounded educational experience.",
    ],
  },
];

export const experiance = [ 
  {
    title: "Freelancer",
    date: "Dec 2022 - Aug 2025",
    empolyer: "Self-Employed",
    icon: experianceIcon,
    iconBg: "#00c6ff",
    points: [
      "Engaged in freelancing for various clients, crafting creative solutions tailored to their requirements",
      "Specializes in multi-domain software development.",
      "Completed four distinct projects to date.",
    ],
  },
  {
    title: "Web Devlopment Intern",
    date: "Aug 2023 - Nov 2023",
    empolyer: "Envee Wheels Limited",
    icon: experianceIcon,
    iconBg: "#00c6ff",
    points: [
      "Designed and developed the front-end of the Envee Wheels Limited using HTML, Javascript, Tailwind CSS, and PHP, resulting in a seamless user experience",
      "Integrated Payment Gateway to the development of website work closely with research and Development Team.",
      "Experienced in deploying websites using cPanel, managing files, databases, and server configurations.",
    ],
  },
  {
    title: "Technical Lead",
    date: "Aug 2023 - July 2024",
    empolyer: "Programmers Club AIKTC",
    icon: experianceIcon,
    iconBg: "#00c6ff",
    points: [
      "Took charge as a core member of the Programmers Club, organizing and leading numerous workshops on diverse technologies to enrich the skills of club members and foster a vibrant learning community.",
    ],
  },
  {
    title: "Web Member",
    date: "Aug 2023 - July 2024",
    empolyer: "GDSC AIKTC",
    icon: experianceIcon,
    iconBg: "#00c6ff",
    points: [
      "As a member of GDSC AIKTC, I organized and conducted a hands-on workshop on React.js, empowering fellow students with practical skills in modern web development.",
    ],
  },
  {
    title: "Tech Lead",
    date: "Jan 2024 - Feb 2024",
    empolyer: "Algorithm 8.0 Hackathon",
    icon: experianceIcon,
    iconBg: "#00c6ff",
    points: [
      "Managed a team of 10 individuals to create the official registration and management system for Algorithm 8.0, a yearly national hackathon hosted by our college.",
      "The system comprised an Android application for event organization and a website for registration.",
      "Created a user-centric website facilitating 500+ interactions and attracting over 200+ teams registered for the hackathon, ensuring seamless registration and engagement.",
      "Strategically shortlisted the top 40 teams after rigorous technical evaluations, ensuring the participation of the most qualified and innovative candidates for the hackathon event.",
    ],
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/adil-ahmad-669191248/",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/adil2705" ,
  },
];

export const projects = [
  {
    iconUrl: pc,
    theme: "btn-back-blue",
    name: "Programmers Club",
    description:
      "Designed and Developed a platform for the Programmers Club, A internal Club of AIKTC which aims 'For the Student By the Students'",
    link: "https://github.com/adil2705/pc-web-frontend",
  },
  
  {
    iconUrl: skns,
    theme: "btn-back-blue",
    name: "Skns Solution",
    description:
      "SKNS & SONS Solutions Pvt. Ltd., has emerged as one of the largest System Integration Company with presence in Bihar and neighbouring States.",
    link: "https://sknssolutions.in/",
  },
  {
    iconUrl:   Algorithm 8.O Hackathon,
    theme: "btn-back-blue",
    name: "algo",
    description:
      "Algorithm 8.0 is an unique and innovative event that encourages innovation and collaboration in the tech community. It provides a platform for our participants to challenge themselves, expand their knowledge, and create meaningful solutions to real-world problems related to social awareness. Whether you are a seasoned developer or a newcomer to the field, Algorithm 8.0 offers a unique opportunity to be a part of something truly impactful and make a difference in the world",
    link: "https://github.com/adil2705/Algorithm-8.0",
  },

];

export const services = [
  {
    iconUrl: webDev,
    theme: "btn-back-blue",
    name: "Full-Stack Web Development",
    description:
      "I develop static and dynamic websites and web applications using the latest technologies available in the market along with responsive design.",
    link: "https://www.mongodb.com/mern-stack",
  },
  {
    iconUrl: androidDev,
    theme: "btn-back-blue",
    name: "Native Android App Development",
    description:
      "I build native Android apps using Java and Kotlin. I utilize the technologies such as Jetpack Compose to create modern Android apps.",
    link: "https://www.android.com/intl/en_in/",
  },

];
