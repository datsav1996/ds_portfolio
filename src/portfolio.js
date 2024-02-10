/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dattatray Savant",
  title: "Hi all, I'm Dattatray",
  subTitle: emoji(
    "Welcome to the realm of a Full Stack JavaScript Developer, where expertise in NodeJS, VueJS, Angular, React, MongoDB, and Azure Cloud Services converge to craft digital excellence. Innovation and meticulous testing drive the creation of scalable solutions, powered by a passion for pushing boundaries. Explore a portfolio that embodies the fusion of technology and creativity, promising to elevate your digital experience." ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/datsav1996",
  linkedin: "https://www.linkedin.com/in/dattatray-savant-5316a5118/",
  gmail: "dsavant28@gmail.com",
  gitlab: "https://gitlab.com/datsav1996",
  facebook: "https://www.facebook.com/dattatray.savant75",
  medium: "https://medium.com/@datsav1996",
  stackoverflow: "https://stackoverflow.com/users/23362059/dattatray-savant",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK JAVASCRIPT DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Azure/ AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-mdb"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "chatgpt",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/unipune.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2014 - April 2018",
      desc: "Ranked top 5% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Cognizant Technology Solutions",
      companylogo: require("./assets/images/cts.png"),
      date: "Dec 2021 – Present",
      desc: "Orchestrated sophisticated web architectures by harnessing the power of Vue.js and Angular, integrating with comprehensive toolkits to craft immersive user experiences. Streamlined deployment and delivery through adept implementation of Rio CI/CD pipelines, optimizing code transitions from development to production."
    },
    {
      role: "Software Engineer",
      company: "Atos Syntel",
      companylogo: require("./assets/images/atossyntel.png"),
      date: "Nov 2018 – Dec 2021",
      desc: "Leveraged Angular 10, MEAN stack, and Azure Cloud Services to develop scalable Single Page Applications and REST APIs, focusing on performance, user experience, and efficient project delivery through collaboration with cross-functional teams."
    },
    {
      role: "Software Engineer Intern",
      company: "Emtarang TechLabs Pvt. Ltd.",
      companylogo: require("./assets/images/logituit_logo.jpg"),
      date: "May 2018 – Nov 2018",
      desc: "The application was developed using Agile methodology with Angular 6 for front-end design, incorporating iterative development, weekly sprints, and REST API integration with NodeJS and ExpressJS for backend, leveraging MongoDB for data storage. It employed Jasmine, Karma, and Mocha for testing, and was deployed on the Heroku cloud platform."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The Complete Node.js Developer Course",
      subtitle:
        "Taught by Andrew Mead, Rob Percival on Udemy.",
      image: require("./assets/images/nodejslogo.png"),
      imageAlt: "node js certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-192a4549-2835-48fa-a583-8bf82f5740ac/"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Angular - The Complete Guide",
      subtitle:
        "Taught by Maximilian Schwarzmüller on Udemy.",
      image: require("./assets/images/angularlogo.png"),
      imageAlt: "angular logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-fea4275c-9462-4d73-bc61-a1bd45c72a5c/"
        }
      ]
    },

    {
      title: "ChatGPT - The Complete Guide to ChatGPT & OpenAI APIs",
      subtitle: "Taught by Academind by Maximilian Schwarzmüller, Manuel Lorenz on Udemy.",
      image: require("./assets/images/chatgptlogo.png"),
      imageAlt: "chatgpt Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://cognizant.udemy.com/certificate/UC-6f7fd4ba-bc9e-4e90-8a90-45e22d8ab055/"
        }
      ]
    },
    {
      title: "Microsoft Certified Azure Fundamentals",
      subtitle: "The AZ-900 certifies foundational Azure cloud service knowledge.",
      image: require("./assets/images/az900.png"),
      imageAlt: "az900 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/0d843269-750a-4e42-85e5-efe0a56b4c7a/linked_in"
        }
      ]
    },
    {
      title: "Microsoft Certified Azure Developer Associate",
      subtitle: "The AZ-204 certificate validates skills in developing Azure-based solutions.",
      image: require("./assets/images/az204.png"),
      imageAlt: "az204 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/9f7d4714-22ab-42b8-be08-fef3de325367/linked_in"
        }
      ]
    },
    {
      title: "Microsoft Certified DevOps Engineer Expert",
      subtitle: "The AZ-400 certificate focuses on DevOps engineering skills.",
      image: require("./assets/images/az400.png"),
      imageAlt: "az400 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/db56399b-032c-4381-a343-3f11ad249e99/linked_in"
        }
      ]
    },
    {
      title: "Microsoft Certified Azure Data Scientist Associate",
      subtitle: "DP-100 certificate validates skills in designing and implementing data science solutions.",
      image: require("./assets/images/dp100.png"),
      imageAlt: "dp100 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/1d5ffd7f-6ec4-474c-b909-6a17590d94ea"
        }
      ]
    },
    {
      title: "Azure Serverless Functions and Logic Apps",
      subtitle: "Azure Serverless Functions and Logic Apps course taught by Scott Duffy on Udemy. ",
      image: require("./assets/images/logicapps.png"),
      imageAlt: "logicapp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-0ec0a396-b43d-49ad-9ed4-bbefc7ca17ae/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@datsav1996/complete-node-js-setup-guide-on-mac-and-windows-e74f2779456a",
      title: "Complete Node.Js Setup Guide on Mac and Windows",
      description:
        "Welcome to the ultimate guide for setting up Node.js on your computer, regardless of whether you’re using a Mac or a Windows machine."
    },
    {
      url: "https://medium.com/@datsav1996/unraveling-the-art-of-full-stack-javascript-development-5798de46b930",
      title: "Unraveling the Art of Full Stack JavaScript Development",
      description:
        "Full Stack JavaScript Development has emerged as a beacon for developers looking to master both the frontend and backend of web applications."
    },
    {
      url: "https://medium.com/@datsav1996/science-vs-spirituality-navigating-the-pathways-of-understanding-ba8f54363e2b",
      title: "Science vs. Spirituality: Navigating the Pathways of Understanding",
      description:
        "In the quest for understanding the mysteries of our existence and the universe, two paths have been eternally juxtaposed, often seen as mutually exclusive: science and spirituality."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "PASSION",
  subtitle: emoji(
    "HERE'S A LIST THAT ENCOMPASSES SOME OF THE COMMON PASSIONS AND INTERESTS OF MINE 😅"
  ),

  talks: [
    {
      title: "Learning New JavaScript Frameworks",
      subtitle: "Staying up-to-date with the latest frameworks and libraries like React, Angular, Vue.js for the front end, and Node.js for the back end.",
      // slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    {
      title: "Exploring UI/UX Design",
      subtitle: "Passion for creating engaging user interfaces and experiences, and a keen interest in responsive design principles and accessibility standards."
    },
    {
      title: "API Design and Development",
      subtitle: "Enjoy building RESTful services and APIs, and working with GraphQL for more efficient data retrieval."
    },
    {
      title: "Database Management",
      subtitle: "Interest in both SQL (e.g., PostgreSQL, MySQL) and NoSQL (e.g., MongoDB, CouchDB) databases, understanding their strengths and how to integrate them into applications."
    },
    {
      title: "DevOps and Deployment",
      subtitle: "Fascination with containerization tools like Docker, Kubernetes, and cloud services (AWS, Azure, Google Cloud) to deploy, manage, and scale applications."
    },
    {
      title: "Continuous Integration/Continuous Deployment (CI/CD)",
      subtitle: "Implementing automated testing and deployment pipelines to ensure code quality and streamline the development process."
    },
    {
      title: "Version Control",
      subtitle: "Mastery of Git for version control, understanding branching strategies, and appreciating the importance of clear commit messages and collaboration through pull requests."
    },
    {
      title: "Security Best Practices",
      subtitle: "Keeping up with the latest security trends and best practices to ensure the application is secure against common vulnerabilities (e.g., XSS, CSRF)."
    },
    {
      title: "Performance Optimization",
      subtitle: "Passion for analyzing and optimizing application performance, both on the client and server sides, to enhance user experience."
    },
    {
      title: "Cross-Platform Development",
      subtitle: "Interest in technologies like React Native or Electron for developing cross-platform mobile and desktop applications."
    },
    {
      title: "Community Engagement",
      subtitle: "Participating in coding communities, contributing to open-source projects, and staying connected with other developers through meetups, forums, and social media."
    },
    {
      title: "Soft Skills Development",
      subtitle: "Recognizing the importance of communication, teamwork, problem-solving, and adaptability in a collaborative development environment."
    },
    {
      title: "Innovative Technologies",
      subtitle: "Curiosity about emerging technologies such as WebAssembly, Serverless architectures, and Internet of Things (IoT) integrations."
    },
    {
      title: "Data Visualization",
      subtitle: "Utilizing libraries like D3.js to present data in visually appealing and interactive formats."
    },
    {
      title: "Agile and Scrum Methodologies",
      subtitle: "Embracing Agile development practices and Scrum methodologies to improve team collaboration and project management."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8888370782",
  email_address: "dsavant28@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  // bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
