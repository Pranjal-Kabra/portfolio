import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaEnvelope, // Added FaEnvelope import
} from "react-icons/fa6";

import Project1 from "../assets/projects/Project1.png";
import Project2 from "../assets/projects/Project2.png";
import Project3 from "../assets/projects/Project3.png";
import Project4 from "../assets/projects/Project4.png";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "PRANJAL KABRA",
  greet: "Hello there! 👋🏻",
  description:
    "I am a dynamic developer passionate about leveraging data science and machine learning to deliver innovative solutions while crafting seamless and engaging user experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Resume Screener",
    description:
      "Developed a Resume Screening App using Python and ML, incorporating models like SVC, Random Forest, and KNN for automating resume evaluation and matching job requirements.",
    image: Project1,
    githubLink: "https://github.com/Pranjal-Kabra/resume-screener",
  },
  {
    id: 2,
    name: "Loan Prediction System",
    description:
      "Developed a loan approval machine learning project using models including Logistic Regression, SVC, Decision Tree, Random Forest. Performed hyperparameter tuning, with Random Forest selected as the final model. Integrated GIF visualization for enhanced model interpretation and approval.",
    image: Project2,
    githubLink: "https://github.com/Pranjal-Kabra/Loan-machine-learning",
  },
  {
    id: 3,
    name: "Crop Recommendation System",
    description:
      "Developed a crop recommendation system using machine learning algorithms (Decision Trees, Random Forests, SVM) and integrated it into a Flask-based web application, enabling farmers to optimize crop selection based on soil and climatic conditions.",
    image: Project3,
    githubLink: "https://github.com/Pranjal-Kabra/Crop-Recommendations-",
  },
  {
    id: 4,
    name: "Data Analysis System",
    description:
      "Built and deployed an interactive data analysis dashboard using Python's Pandas and Streamlit for dynamic visualizations and insights.",
    image: Project4,
    githubLink: "https://github.com/Pranjal-Kabra/Data-analysis",
  },
];

export const BIO = [
  "I am a Final Year Computer Science student passionate about data science, machine learning, web development, and UI/UX design.",
  "With experience in Python, React, and MySQL, I excel at developing innovative and impactful solutions. Serving as the creative head of a college committee, I merge technical expertise with artistic vision.",
  "I have completed certifications in Machine Learning, NLP, Generative AI, and Cybersecurity. These certifications have sharpened my technical expertise and equipped me with the knowledge to tackle complex challenges, making me well-prepared to contribute effectively to your team.",
  "Additionally, I have proudly represented India in international aerobics, showcasing dedication and versatility.",
];

export const EXPERIENCES = [
  {
    title: "Data Entry",
    company: "ThenX",
    duration: "February 2023 - March 2023",
    description: (
      <>
        Accurately inputted, updated, and maintained data in digital systems through MySQL and Excel. Ensured data integrity and confidentiality.
        <br />
        Additionally, submitted daily reports of work to track progress.
      </>
    ),
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    institution: "MIT WPU",
    duration: "July 2021 - July 2025",
    description: (
      <>
        Currently pursuing a B.Tech degree in Computer Science with a focus on software development, machine learning, and data structures.
        <br />
        Achieved a CGPA of 8.37, actively participating in coding competitions, and completing various technical projects.
      </>
    ),
  },
  {
    degree: "Higher Secondary",
    institution: "V.K. Patil College",
    duration: "2019 - 2021",
    description: (
      <>
        Completed Higher Secondary education with a focus on Science.
        Secured an 85% overall percentage, excelling in subjects like Mathematics and Physics, and participated in various academic and extracurricular activities.
      </>
    ),
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "mailto:pranjalkabra07@gmail.com",
    icon: <FaEnvelope fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Pranjal-Kabra",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/pranjal-kabra-a03244280/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
