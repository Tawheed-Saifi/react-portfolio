const AboutMe = {
    details: [
        `I am a passionate front-end-focused web developer with a strong foundation in full-stack development. Currently, I work as a Junior Full Stack Developer at iCube, where I specialize in crafting modern, responsive, and intuitive user interfaces using React. I also contribute to backend development using Node.js and PostgreSQL, giving me a well-rounded perspective on how front-end systems integrate with backend infrastructure.`,
        `My true passion lies in building seamless user experiences — from translating design concepts into clean, reusable components to optimizing performance and accessibility across devices. I’m constantly exploring new front-end technologies and best practices to stay ahead in this fast-evolving field, and I thrive on turning complex requirements into elegant, user-friendly solutions.`,
        `At iCube, I've had the opportunity to work closely with designers and backend engineers in an agile environment, delivering features that are both functional and visually engaging. This experience has sharpened my skills in component architecture, state management, and front-end performance optimization.`,
        `Beyond coding, I’m an advocate for collaboration and continuous learning. I enjoy mentoring junior developers and contributing to a positive, knowledge-sharing culture that helps teams grow stronger together.`,
        `I’m eager to contribute to forward-thinking teams where I can create impactful digital experiences, deepen my expertise in front-end engineering, and continue pushing the boundaries of what the modern web can offer.`
    ],
    highlights: [
        "passionate front-end-focused web developer",
        "strong foundation in full-stack development",
        "Junior Full Stack Developer",
        "iCube",
        "modern, responsive, and intuitive user interfaces",
        "React",
        "backend development",
        "Node.js",
        "PostgreSQL",
        "well-rounded perspective",
        "seamless user experiences",
        "design concepts",
        "clean, reusable components",
        "optimizing performance",
        "accessibility",
        "front-end technologies",
        "best practices",
        "fast-evolving field",
        "complex requirements",
        "elegant, user-friendly solutions",
        "designers",
        "backend engineers",
        "agile environment",
        "functional",
        "visually engaging",
        "component architecture",
        "state management",
        "front-end performance optimization",
        "collaboration",
        "continuous learning",
        "mentoring junior developers",
        "positive, knowledge-sharing culture",
        "forward-thinking teams",
        "impactful digital experiences",
        "front-end engineering",
        "modern web"
    ]
};

const Experience = [
    {
        duration: "May 2023 to Current",
        companyName: "Icube B2B Solutions Pvt Ltd",
        role: "Junior Full Stack Developer",
        reponsibilities: [
            `Developing responsive and dynamic UIs based on Figma wireframes, ensuring a seamless user
experience across devices.`,
            `Implementing complex UI components using React and Next.js, optimizing performance with
React hooks and server-side rendering (SSR).`,
            `Designing and integrating RESTful APIs on the backend and implemented them
on the frontend to facilitate smooth integration and consistent functionality.`,
            `Enhancing application performance through lazy loading, code splitting, and optimizing API
requests.`,
            `Conducting unit and integration testing with Jest, React Testing Library, and Postman, ensuring
robust and bug-free modules.`,
            `Collaborating with cross-functional teams including the UX designer, backend developers, and
QA engineers to deliver high-quality solutions.`,
            `Mentoring and guiding junior developers, conducting code reviews, and sharing best practices to
improve code quality and team efficiency.`
        ],
        highlight: [
            "Developing responsive and dynamic UIs", "Implementing complex UI components", "React and Next.js",
            "Designing and integrating", "Enhancing application performance", "Conducting unit and integration testing",
            "Jest, React Testing Library, Supertest,", "Postman", "Collaborating with cross-functional teams", "Mentoring and guiding junior developers"
        ],
        skills: [
            {
                "name": "Typescript",
                "page": "https://typescriptlang.org"
            },
            {
                "name": "React JS",
                "page": "https://react.dev"
            },
            {
                "name": "Next JS",
                "page": "https://nextjs.org"
            },
            {
                "name": "Redux",
                "page": "https://redux.js.org/"
            },
            {
                "name": "Zustand",
                "page": "https://zustand-demo.pmnd.rs"
            },
            {
                "name": "Node JS",
                "page": "https://nodejs.org/en"
            },
            {
                "name": "Express JS",
                "page": "https://expressjs.com"
            },
            {
                "name": "Sequelize",
                "page": "https://sequelize.org"
            },
            {
                "name": "PostgresSQL",
                "page": "https://www.postgresql.org"
            },
            {
                "name": "WebSocket",
                "page": "https://www.geeksforgeeks.org/web-tech/what-is-web-socket-and-how-it-is-different-from-the-http"
            },
            {
                "name": "Socket IO",
                "page": "https://socket.io"
            },
            {
                "name": "Redis",
                "page": "https://redis.io"
            }
        ],
        testing: [
            { name: "Jest", page: "https://jestjs.io" },
            { name: "React Testing Library", page: "https://testing-library.com" },
            { name: "SuperTest", page: "https://www.testim.io/blog/supertest-how-to-test-apis-like-a-pro" }
        ],
        tools: [
            { name: "Git", page: "https://git-scm.com" },
            { name: "Github", page: "https://github.com" },
            { name: "Gitlab", page: "https://gitlab.com" },
            { name: "Prettier", page: "https://prettier.io" },
            { name: "ESLint", page: "https://eslint.org" }
        ],
        developed: [{ name: "Web Application", page: "" }, { name: "SaaS", page: "" }],
        designSystems: [
            { name: "Antd", page: "https://ant.design" },
            { name: "MUI", page: "https://mui.com/" }
        ]
    },
    {
        duration: "November 2022 to May 2023",
        companyName: "Chennai Softech",
        role: "Trainee Developer (Intern)",
        reponsibilities: [
            `Developing responsive UIs using HTML, CSS, and Bootstrap, based on Figma wireframes and
client requirements.`,
            `Improved WordPress site functionality and user experience by leveraging hooks,
PHP functions, and JavaScript to deliver interactive, customized features.`,
            `Building custom layouts using Elementor and customized existing themes to match client
requirements.`],
        highlight: ["responsive UIs", "HTML, CSS, and Bootstrap", "site functionality", "Elementor"],
        skills: [
            { name: "HTML", page: "https://www.w3schools.com/html" },
            { name: "CSS", page: "https://www.w3schools.com/css" },
            { name: "JavaScript", page: "https://www.w3schools.com/js" },
            { name: "Bootstrap", page: "https://getbootstrap.com" },
            { name: "Wordpress", page: "https://wordpress.com" }],
        tools: [
            { name: "Postman", page: "https://www.postman.com" }
        ],
        developed: [{ name: "E Commerce Website", page: "" }],
        designSystems: [
            { name: "Elementor", page: "https://elementor.com" }
        ]
    },
];

const Projects = [
    {
        name: "ERP System",
        techUsed: 'Next JS and Node JS',
        intro: `Developed key modules for a custom ERP system including Retail, Inventory, Procurement, and
Production, using React, Node JS, Express, Sequelize, and PostgreSQL.`,
        introHighlights: [`Retail, Inventory, Procurement, and Production`, `React, Node JS, Express, Sequelize, and PostgreSQL`],
        work: [
            `Developed an AI-powered Chatbot interface and integrated WhatsApp messaging using REST
APIs, and Websockets for enhanced customer support and internal communication.`,
            `Designed and implemented Process, Routing, Design and Style Forms for the Production
module, supporting the custom manufacturing workflow.`,
            `Implemented "Make to Order" Form in the Retail module, and built Wishlist and Cart
functionalities within the POS Form, enabling saving user choices.`,
            `Developed Import Excel Form in Admin module, allowing users to bulk submit forms, instead of
individual submissions, making it faster for entry of data.`,
            `Integrated image upload capability in the Procurement module 's Order Form, improving vendor
communication and documentation.`,
            `Created a centralized Global Search feature in the Application that would route using indexed API
endpoints for the given Invoice Number, improving navigation and accessibility.`,
            `Applied Access controls to restrict form access based on user privileges, increasing security and
data integrity.`,
            `Built Stock Management Forms for Rate Changes and Inter Stock Transfers in the Inventory
Module, streamlining internal inventory operations.`,
            `Developed Company Registration Form, enabling for companies to be registered for the
application.`
        ],
        highlights: [
            `Chatbot interface`,
            `WhatsApp messaging`,
            `Process, Routing, Design and Style Forms`,
            `Production module`,
            `""Make to Order""`,
            `Retail module`,
            `Wishlist and Cart functionalities`,
            `POS Form`,
            `Import Excel`,
            `Admin module`,
            `image upload capability`,
            `Procurement module's Order Form`,
            `Global Search`,
            `Access controls`,
            `Stock Management`,
            `Rate Changes`, `Inter Stock Transfers`, `Inventory Module`,
            `Super Admin module`,
            `tenant activation`,
            `database connection strings`, `system logs`,
            `Company Registration Form`
        ]
    },
    {
        name: "Event Manager Admin App",
        techUsed: 'React JS',
        intro: `Developed modules for an Admin App using React`,
        introHighlights: [`Admin App`, `React`],
        work: [
            `Developed Firmware Form in the Devices module, to list, add and update device firmwares.`,
            `Designed and Developed Time Manager Form, taking user choices for timing to be broadcasted
to the subscribed users to the App, enhancing time scheduling experience.`
        ],
        highlights: [
            `Firmware`,
            `Devices module`,
            `Time Manager`
        ]
    },
    {
        name: "E Commerce Website",
        techUsed: 'Wordpress',
        intro: `Developed essential modules for an E Commerce Website using Elementor`,
        introHighlights: [`E Commerce`, `Elementor`],
        work: [
            ` Integrated the Login Form into a custom modal popup, replacing the default login flow for a
smoother and more modern user experience.`,
            `Redesigned the entire Filter Structure of the website’s listing pages based on Figma designs,
    ensuring a clean and intuitive user interface aligned with UX best practices.`,
            `Reorganized the "Post an Ad" process, splitting a single long form into multiple logical sections,
improving user flow and aligning with the client’s updated content strategy.`,
            `Customized the default "Your Ads" plugin page by enhancing it to display additional post details,
    improving usability and providing more information to users managing their ads.`
        ],
        highlights: [
            `Login Form`,
            `Filter Structure`,
            `"Post an Ad" process`,
            `UX best practices`,
            `"Your Ads"`
        ]
    }
];

const Education = [
    {
        degree: "Bachelors Degree",
        course: "Computer Science and Engineering",
        college: "Rajalakshmi Engineering College",
        university: "Anna University",
        location: "Chennai, India.",
        duration: "2018 - 2022",
        relavantCourses: [
            `Data Structures & Algorithms`,
            `Web Development`
        ],
        projects: [
            `Website for Railway Reservation System.`,
            `Air pollution Monitoring System using IOT`,
            `Plant Pathology Detection using Deep Learning`
        ],
        logo: "",
    },
    {
        degree: "High School",
        course: "Science",
        school: "Dhanish Matriculation Higher Secondary School",
        location: "Chennai, India.",
        duration: "2018",
        relavantCourses: [
            `Physics`,
            `Chemistry`,
            `Maths`,
            `Computer Science`
        ],
        logo: "",
    }
];

export { AboutMe, Experience, Projects, Education };