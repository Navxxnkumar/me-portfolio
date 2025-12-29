import bussiness from "./Assets/business.png";
import netfix from "./Assets/netfix.png";
import freshpicks from "./Assets/freshPicks.png";

export const projects = [


    {
        id: 1,
        title: "Netfix-Clone",
        description:
            `I developed a Netflix Clone web application using React with Bootstrap for responsive UI and React Slick / React Slider for smooth movie carousels and animations. The interface is fully responsive and provides a modern, real-world streaming platform experience across all devices.
                The project includes a Signup page connected to a Node.js & Express.js backend, where user data is securely stored in a MySQL database. I implemented RESTful APIs (GET & POST) using Express and handled data communication between frontend and backend using Axios. The backend server is managed with Nodemon for efficient development.
                Movie and user-related data are fetched dynamically from the database and displayed on the frontend, demonstrating real-time data flow between client and server.`,
        image: netfix,
        tags: [
            "React",
            "React-Bootstrap",
            "Axios",
            "Node.js",
            "Express.js",
            "MySQL",
            "Responsive Design"
        ],
        github: "https://github.com/Navxxnkumar/netfix-project.git",
        webapp: "https://endearing-haupia-cb8ce0.netlify.app/"
    },
    {
        id: 2,
        title: "Personal-Portfolio",
        description:
            `I built a modern, galaxy-themed web application to showcase my skills as a Full-Stack Developer. I used React for building the UI and Vite for a fast development environment. For the design, I utilized Tailwind CSS to create a 'Premium Galaxy' aesthetic with smooth animations that look great on both desktop and mobile. I also integrated Formspree to handle client messages without needing a dedicated backend server`,
        image: freshpicks,
        tags: [
            "React",
            "Vite js",
            "Tailwind CSS",
            "Animation CSS",
            "Fully Mobile-friendly"
        ],
        github: "https://github.com/MohammadZakariya786/Car-Rental",
        webapp: "https://car-rental-omega-ruby.vercel.app/"
    },
    {
        id: 3,
        title: "Fresh-Picks Grocery-Items",
        description:
            `A MERN stack web application with a fully responsive and smooth UI, built using React.js for the frontend and Node.js, Express.js, and MongoDB for the backend.
            Features modern animations, sliders, OTP-based login UI, and clean navigation, with REST API integration using Axios, showcasing a complete frontend → backend → database flow, strong UI/UX focus, scalable component-based architecture, and real-time data handling with efficient state management.`,
        image: freshpicks,
        tags: [
            "React",
            "Animation CSS",
            "Axios",
            "AOS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Fully Mobile-friendly"
        ],
        github: "https://github.com/Navxxnkumar/fresh-picks.git",
        webapp: "https://fresh-picks-henna.vercel.app/"
    },
    {
        id: 4,
        title: "Bussiness-Agent",
        description:
            `I recreated the Mexant financial website template using pure HTML, CSS, and JavaScript, without any frameworks. The project is fully responsive and works smoothly on mobile, tablet, and desktop screens
                The website includes a modern UI, clean layout, and attractive animations to improve user experience. I used BxSlider for smooth sliders and implemented interactive hover effects, transitions, and scroll-based animations to make the site more engaging.
               The project contains multiple pages, a dropdown navigation menu, contact form, Google Maps integration, and well-structured sections like tables and tabs. The design is suitable for finance, crypto, digital marketing, corporate, and business website.`,
        image: bussiness,
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
        ],
        github: "https://github.com/Navxxnkumar/buss-agent.git",
        webapp: "https://buss-agent.firebaseapp.com/"
    }
];