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
      title: "IT Support and Maintainance",
      icon: mobile,
    },
    {
      title: "SQL Database Management",
      icon: backend,
    },
    {
      title: "Network Support Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS ",
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
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "intern Desktop support Engineer",
      company_name: "zetech University ",
      
     
      date: "feb 2023 - june 2023",
      points: [
        "Diagnosing and resolving hardware and software problems encountered by end-users.",
        "Perform routine maintenance tasks such as system updates, patch management, and antivirus software installations to ensure desktop systems are up to date and secure.",
        "Provide direct support to end-users by addressing their queries and resolving technical issues",
        "Ensuring network connectivity and resolving network-related issues.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Naretu travel agency",
      
     
      date: "Jan 2022 - march 2023",
      points: [
        "Developing and maintaining web applications using wordpress,html,css and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Team lead Data Annotation",
      company_name: "Samasource Impact Sourcing",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2021 - october 2022",
      points: [
        "maintained team databases, files and documentation in alignment with established regulations.",
        "Implemented incentive programs and process improvement to bolster underperforming areas.",
        "Reduced corporate risks by identifying and reporting compliance issues or violations.",
        "Motivated team members to consistently achieve or exceed performance expectations.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Chris proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "glum beauties",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Chris does.",
      name: "Eric paul",
      designation: "CEO",
      company: "Alte dropshipping",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Chris optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Tarick",
      designation: "CEO",
      company: "Naretu travel",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shop management system",
      description:
        "Web-based platform that allows Enterpreneurs to ordely sort and maintain their daily shop procedures for better management and maximum profitability.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "SQL,php",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      demo_link: "http://www.demo.com" ,
    },
    {
      name: "Naretu Travel company",
      description:
        "Is a user-friendly online platform that offers a wide range of travel-related products and services. It provides an intuitive interface where users can search and discover various destinations, browse through comprehensive travel guides.",
      tags: [
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "html/css",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
      demo_link: "http://www.demo.com" ,
    },
    {
      name: "Stephanie Legals",
      description:
        "Is a professional online platform that provides essential information about a law firm's services, expertise, and team members. It serves as a central hub for potential clients to learn about the firm's legal practice areas, inquire about legal services, and access relevant resources..",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      demo_link: "http://www.demo.com" ,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };