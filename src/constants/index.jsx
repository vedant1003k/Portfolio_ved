import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
// import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiJavaLine,
  RiCommandFill,
  RiPhpFill,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Vedant Kashyap",
  role: "Full Stack Developer",
  subheading:
    "With 2 years of full-stack development experience, I build efficient, scalable web applications. The job hunt is on, but always curious about interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Social Media App",
    description:
      "A real-time social media app with chat, notifications, customizable profile page and real time messaging. Built with React, Node, and Express for state management.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    imgSrc: project1,
    link: "https://github.com/vedant1003k/Social-App",
  },
  {
    id: 2,
    title: "Collaborative Code Editor",
    description:
      "Built a full-stack real-time code editor for seamless collaboration. This application allows multiple users to write, edit, and view code simultaneously, with real-time updates via WebSockets.",
    techStack: ["React", "Express", "Socket.io"],
    imgSrc: project2,
    link: "https://collaborative-editor-1.onrender.com/",
  },
  {
    id: 3,
    title: "Hand Gesture Presentation",
    description:
      "Created a gesture-controlled presentation tool with slide navigation, pointer control, drawing, and erasing features using hand gestures for an interactive experience.",
    techStack: ["OpenCv", "Mediapipe", "cvzone", "numpy"],
    imgSrc: project3,
    link: "https://github.com/vedant1003k/Gesture_Control_Presentation",
  },
  {
    id: 4,
    title: "Contact App",
    description:
      "Built a React contact app with secure CRUD operations and search functionality, optimizing Firebase policies to reduce unauthorized access by 30%",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://firebase-contact-app-b.netlify.app/",
  },
  {
    id: 5,
    title: "Online Voting System ",
    description:
      "Developed a secure online voting platform using PHP, JavaScript, HTML, and CSS, featuring encrypted registration and authentication systems to protect user data.",
    techStack: ["PHP", "HTML/CSS", "SQL", "JavaScript"],
    imgSrc: project5,
    link: "https://github.com/vedant1003k/Online_Voting_system",
  },
  {
    id: 6,
    title: "News App",
    description:
      "I've developed an incredible API website that's revolutionizing online experiences.",
    techStack: ["HTML/CSS", "JavaScript"],
    imgSrc: project6,
    link: "https://github.com/vedant1003k/News_api",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "SQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: "Java",
    icon: <RiJavaLine className="text-red-400" />,
  },
  {
    name: "Express",
    icon: <RiCommandFill className="text-blue-100 " />,
  },
  {
    name: "PHP",
    icon: <RiPhpFill className="text-purple-500" />,
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Graphic Era University",
    duration: "2021 - 2025",
    cgpa:"CGPA : 8.71",
    description:
      "Pursuing Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  {
    id: 2,
    degree: "Higher Secondary School",
    institution: "Brilliant Public School ",
    duration: "2021",
    cgpa:"Percentage : 90%",
    description:
      "Successfully completed Higher Secondary with an excellent 90% score, demonstrating strong academic performance and dedication.",
  },
];