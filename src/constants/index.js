import { image1, image2, image3, image4, FaGithub, FaYoutube, FaHome } from '../assets'



import {project1, project2, project3, project4, project5, carousel1, carousel2, carousel3, carousel4,
  mcportfolio, mcbiobees, mcwatchlist, mcmixtape, mcmovies, mcwedding, mcblog} from '../assets'

export const navLinks = [

    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
  },
    {
      id: "projects",
      title: "Projects",
    },

  ];

  export const aboutImages = [
    {
      id:'image-1',
      img: image1
    },
    {
      id:'image-2',
      img: image2,
    },
    {
      id:'image-3',
      img: image3,
    },
    {
      id:'image-4',
      img: image4,
    },
  ]

export const ProjectData = [
  {
    id:'project-6',
    color:'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-gray-300 to-blue-800',
    title: 'TX Coding Club',
    date: 'In Progress*',
    image: mcblog,
    tech: 'GitHub, React, Tailwind',
    stack:'Front End',
    type: 'Blog',
    details: ' is a blog co-founded and designed with fellow developer Christine Hoang. Inspired by western themes, the blog shares tech insights from industry professionals in the North Texas area. ',


    links: [
      {url:'https://xinexport.github.io/vite-ghpages/', icon: FaHome},
      { url: 'https://github.com/XINEXPORT/vite-ghpages', icon: FaGithub },
    ]
  },
  {
    id:'project-6',
    color:'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-gray-300 to-blue-800',
    title: 'Tinh Wedding',
    date: 'In Progress*',
    image: mcwedding,
    tech: 'JavaScript, React, Express',
    stack:'Full Stack',
    type: 'Registry',
    details: ' is a full-stack wedding registry website. The website provides information on the event details and a database that stores RSVP information.',


    links: [
      {url:'https://flotinhdowntheaisle.com/', icon: FaHome},
      { url: 'https://github.com/Trigger7812/The_Tinhs_Website', icon: FaGithub },
    ]
  },
  {
    id:'project-5',
    color:'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-gray-300 to-blue-800',
    title: 'Portfolio',
    date: 'March 2024',
    image: mcportfolio,
    tech: 'JavaScript, Bootstrap, Tailwind CSS',
    stack:'Front End',
    type: 'Landing Page',
    details: ' a project showcasing various front-end and data-handling skills. This project organizes all projects that received contributions or have been created entirely by Joe.',


    links: [
      {url:'https://joeoverflowcode.github.io/zportfolio/', icon: FaHome},
      { url: 'https://github.com/joeoverflowcode/zportfolio', icon: FaGithub },

    ]
  },
  {
    id:'project-1',
    color:'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-gray-300 to-purple-800',
    title: 'Bio Behavioral',
    date: 'January 2024',
    image: mcbiobees,
    tech: 'JavaScript, React, Tailwind CSS',
    stack:'Front End',
    type: 'Landing Page',
    details: ' a professional minimum viable product (MVP) coded for a behavioral clinic based out of New York City. The solo project required logo redesign, data handling, screen responsiveness and deployment solutions.',


    links: [
      {url:'https://porter.protokeg.com/', icon: FaHome},
      { url: 'https://github.com/joeoverflowcode/bio_behavioral_institute', icon: FaGithub },
    ]
  },
  {
    id:'project-3',
    color:'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-gray-300 to-blue-800',
    title: 'My Watchlist',
    date: 'November 2023',
    image: mcwatchlist,
    tech: 'API, PostgreSQL, Redux' ,
    stack:'Full Stack',
    type: 'Stock Market',
    details: 'is a stock market app that provides real-time financial data. Users are able to get quotes for the NASDAQ daily top traded stock. Ticker symbols can be added and removed to a users watchlist.',


    links: [
      { url: 'https://github.com/joeoverflowcode/soloProject', icon: FaGithub },

    ]
  },
  {
    id:'project-2',
    color:'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-700 via-gray-300 to-red-600',
    title: 'Mix Tape',
    date: 'December 2023',
    image: mcmixtape,
    tech: 'Express, PostgreSQL, Sequelize',
    stack:'Back End',
    type: 'Music Player',
    details: 'is a group project with 4 other developers. The app is designed to let users create and listen to music playlists. Users can add, follow and like friend playlists. Top playlists are listed on the main dashboard.',


    links: [
      { url: 'https://github.com/lukasnes/mix-tape-webdev-dallas-2', icon: FaGithub },
    ]
  },
  {
    id:'project-4',
    color:'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-700 via-gray-300 to-green-600',
    title: 'Movies Ratings',
    date: 'October 2023',
    image: mcmovies,
    tech: 'JavaScript, Redux, Express',
    stack:'Full Stack',
    type: 'User Ratings',
    details: 'is an application designed to browse movies and give ratings. Users can create an account to add their ratings and review all their contributed ratings.',


    links: [
      { url: 'https://github.com/joeoverflowcode/dm-movies', icon: FaGithub },

    ]
  },
]