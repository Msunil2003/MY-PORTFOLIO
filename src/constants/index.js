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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ecommerce,
  github,
  gpage,
  fo,
  motioncut,
  jpmorgan,
  smartinterz,
  odjms,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "PHP",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "CERTIFIED FULL STACK DEVELOPER AT SMART INTERZ",
    icon: smartinterz,
    iconBg: "#E6DEDD",
    date: "JUNE 2024 - JULY 2024",
    points: [
      "During this program, I gained hands-on experience with MongoDB, Express.js, React, and Node.js",
      "building dynamic and full-featured web applications. This training has enhanced my skills in full-stack development", 
      " I had the opportunity to contribute to various projects, progressing  from basic to advanced levels",
      "certificate link : https://shorturl.at/h7wJp " 
      
    ],
  },
 
  {
    title: "VIRTUAL WEB DEVELOPER INTERN AT MOTION CUT",
    icon: motioncut,
    iconBg: "#E6DEDD",
    date: "JUNE 2024 - AUGUST 2024",
    points: [
      "the completion of my internship at Motion Cut! During my time there", 
      "I enhanced my skills in HTML, CSS, JavaScript, ReactJS, NodeJS, and MongoDB.",
      " I had the opportunity to contribute to various projects, including the Price Landing Page, Registration Form Development, To-Do List, and a Tiffin Service Web Application, progressing  from basic to advanced levels",
      
    ],
  },
  {
    title: "J.P. Morgan Software Engineering Virtual Experience on Forage ",
    icon: jpmorgan,
    iconBg: "#E6DEDD",
    date: "JULY 2024 - AUGUST 2024",
    points: [
      "Set up a local dev environment by downloading the necessary files, tools and dependencies",
      "Fixed broken files in the repository to make web application output correctly.",
      "Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.", 
      "certificate link : https://shorturl.at/YYXua " 
    ],
  },
  {
    title: "J.P. Morgan Agile Simulation Virtual Experience on Forage ",
    icon: jpmorgan,
    iconBg: "#E6DEDD",
    date: "AUGUST 2024 - SEPTEMBER 2024",
    points: [
      "Drafted eight user stories using Trello and prioritized them by estimating the relative level of effort required",
      " Ran the Scrum team’s daily standup to effectively plan the day and energize the team members",
      " Conducted a sprint review to gather feedback on the Scrum’s work and a sprint retrospective to align on opportunities for improvement in future sprints", 
      "certificate link : https://shorturl.at/04Ety " 
    ],
  },
  
   
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "DEMO",
    designation: "DEMO",
    company: "DEMO",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "DEMO",
    designation: "DEMO",
    company: "DEMO",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "DEMO",
    designation: "DEMO",
    company: "DEMO",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Basic E-Commerce",
    description:
      "Web-based platform that allows users to search, book, and manage orders from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe Integration",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    // image:
    image: ecommerce,
    source_code_link: "https://github.com/Msunil2003/Basic-E-Commerce-Website-With-Stripe-Payment-Integration.git",
  },
  {
    name: "MY GITHUB PROFILE",
    description:
      "VIEW ALL MY REPOSITORIES ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    
      
    ],
    image: gpage,
    source_code_link: "https://github.com/Msunil2003",
  },
  {
    name: "Food Ordering System",
    description:
      "A comprehensive foodtravel booking platform that allows users to buy the food form the restaurants,  and offers many type of food items.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: fo,
    source_code_link: "https://github.com/Msunil2003/Food-Ordering-Webapp.git",
  },
  {
    name: "Online DJ Management System",
    description:
      "◦	Developed a web-based Online DJ Management System that allows customers to book DJ services, view booking details, and make secure payments. The system tracks payment status, displays detailed booking information, and offers seamless payment processing through an integrated payment gateway. The project features a user-friendly interface, booking search functionality, and automated status updates, ensuring an efficient and transparent booking experience..",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      
    ],
    image: odjms,
    source_code_link: "https://github.com/Msunil2003/ODJMS.git",
  },
];

export { services, technologies, experiences, testimonials,  projects };
