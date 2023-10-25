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
    netherland,
    youtube,
    website,
    react,
    cv,
    spotify,
    insta,
    threejs,
    linkedinicon,
    spotifyicon,
    instagramicon,
  } from "../assets";

  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "me",
      title: "Me",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Javascript Developer",
      icon: mobile,
    },
    {
      title: "React.js Developer",
      icon: backend,
    },
    {
      title: "Three.js Developer",
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
      title: "Expanding Cards ",
      company_name: "for My Github",
      company_link: "https://github.com/iammfatihnaziroglu/Expanding_Cards",
      icon: netherland,
      iconBg: "#383E56",
      date: "6 August 2023 ",
      points: [
        "HTML: I structured the content using HTML elements, providing a foundation for the cards and their associated images.",
        "CSS: By employing CSS styling, I brought the cards to life with visual enhancements and animations, ensuring a captivating user interface.",
        "JavaScript: Through JavaScript, I implemented the functionality that allows users to click on a card to expand it, revealing additional content or details.",
        "Visual Design: I carefully designed the layout and transitions to enhance the visual aesthetics and ensure a seamless user experience.",
      ],
    },
    {
      title: "Youtube Clone App",
      company_name: "for My Github",
      company_link: "https://github.com/iammfatihnaziroglu/YoutubeClone",
      icon: youtube,
      iconBg: "#E6DEDD",
      date: "August 2023 - August 2023",
      points: [
        "React.js: I designed comprehensive component structures to create an interactive user interface.",
        "HTML and CSS: I customized the application's appearance and layout, striving for a user-friendly experience.",
        "API Integration: Utilizing the YouTube Data API, I fetched and displayed real-time videos.",
        "User Experience (UX) and User Interface (UI): I designed an intuitive interface that allows users to navigate easily and discover content.",
        " Responsive Design: I ensured the design was mobile-responsive, providing seamless access from mobile devices.",
      ],
    },
    {
      title: "3D Portfolio this Web Site",
      company_name: "for My Github",
      company_link: "https://github.com/iammfatihnaziroglu/3d_portfolio",
      icon: react,
      iconBg: "#383E56",
      date: "August 2023 - August 2023",
      points: [
        "React.js: Leveraging the power of React's component-based architecture, I designed a seamless user experience that facilitates easy navigation through my portfolio content.",
        "Tailwind CSS: I harnessed the utility-first approach of Tailwind CSS to rapidly and consistently style components, resulting in a polished and responsive design.",
        "Vite.js: With Vite's lightning-fast development server, I ensured swift iteration and rapid prototyping during the project's development phases.",
        "Three.js: The heart of the project was Three.js, which enabled me to integrate captivating 3D elements, animations, and interactive scenes into the portfolio. This technology allowed me to showcase my work in an engaging and memorable manner.",
        "User Interaction and UI/UX: I paid meticulous attention to user interaction, incorporating intuitive navigation, smooth transitions, and engaging animations to guide visitors through the portfolio's content. ",
      ],
    },
    {
      title: "As Soon As Possible..",
      company_name: "As Soon As Possible..",
      company_link: "https://github.com/iammfatihnaziroglu?tab=repositories",
      icon: website,
      iconBg: "#E6DEDD",
      date: "As Soon As Possible..",
      points: [
        "As Soon As Possible..",
        "As Soon As Possible..",
        "As Soon As Possible..",
        "As Soon As Possible..",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Mehmet Fatih proved me wrong.",
      name: "Sara Van der linden",
      designation: "Project Manager",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like M.Fatih does.",
      name: "Chris Mayer",
      designation: "Customer",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Mehmet Fatih optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "HR",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Linkedln",
      icon: linkedinicon,
      description:
        "Sometimes I post videos of my own projects here, also you can find part of my CV here. (not all, if you want all, contact me and I will send it to you in pdf. also pdf cv in english and linkedin account cv in turkish, for now) ",
      tags: [
        {
          name: "business",
          color: "blue-text-gradient",
        },
        {
          name: "experiences",
          color: "green-text-gradient",
        },
        {
          name: "cv",
          color: "pink-text-gradient",
        },
      ],
      image: cv,
      source_code_link: "https://www.linkedin.com/in/iammfatihnaziroglu/",
    },
    {
      name: "Spotify Artist",
      icon: spotifyicon,
      description:
        "I am also a musician, apart from being a front-end developer. I can say that I really enjoy producing, playing and singing music, it's a stress reliever! Feel free to listen and share. Have a great time.",
      tags: [
        {
          name: "rock'n roll",
          color: "blue-text-gradient",
        },
        {
          name: "grunge",
          color: "green-text-gradient",
        },
        {
          name: "instrumental",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://open.spotify.com/artist/0zVLrU3dy9r76FIFJrhE23?si=5jX6s7WsQquAY-En5svVYg",
    },
    {
      name: "Instagram",
      icon: instagramicon,
      description:
        "This is my instagram account. Sometimes I am happy to share photos while doing what I love. Music posts, nature photos, my photos from the places I have travelled... In short, classic instagram account :)",
      tags: [
        {
          name: "cool",
          color: "blue-text-gradient",
        },
        {
          name: "travel",
          color: "green-text-gradient",
        },
        {
          name: "hobbies",
          color: "pink-text-gradient",
        },
      ],
      image: insta,
      source_code_link: "https://www.instagram.com/iammfatihnaziro/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
