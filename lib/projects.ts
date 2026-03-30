export interface ProjectMeta {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  links?: { label: string; href: string }[];
  year?: number;
}

export const dataProjects: ProjectMeta[] = [
  {
    id: "sl-weather-sarima",
    title: "Sri Lanka Weather Forecasting ",
    description:
      "Time series analysis and forecasting system for weather data across Sri Lankan districts.",
    image: "/r-1.webp",
    tags: ["R", "Time Series"],
    links: [
      { label: "R Script", href: "https://github.com/ImeshaDilshani/SL-districtwise-weather-forecast-sarima/blob/main/1.R" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/SL-districtwise-weather-forecast-sarima" },
    ],
    year: 2023,
  },
  {
    id: "instacart-seg",
    title: "Customer-Segmentation (Instacart)",
    description:
      "A clustering-driven solution to identify customer segments for targeted marketing.",
    image: "",
    tags: ["Python", "Clustering",],
    links: [
      { label: "Notebook", href: "https://github.com/ImeshaDilshani/Data-Storm-5.0-Customer-Segmentation-Team-RiverBorn/blob/main/Semi%20Final%20Solution%20-%20Team%20%20RiverBorn.ipynb" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/Data-Storm-5.0-Customer-Segmentation-Team-RiverBorn" },
    ],
    year: 2022,
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    description:
      "This project focuses on analyzing and predicting customer churn in a telecommunications company. This project focuses on analyzing and predicting customer churn in a telecommunications company.  ",
    image: "",
    tags: ["Python", "Clustering", "EDA",],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/Customer-Churn-Analysis-Churn-Prediction" },
    ],
    year: 2022,
  },
  {
    id: "content-base-movie-recommender-system",
    title: "Content Base Movie Recommender System",
    description:
      "The project leverages metadata from movies to suggest similar movies based on their content. ",
    image: "",
    tags: ["Python"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/CineMatch-Intelligent-Movie-Recommender-System" },
    ],
    year: 2022,
  },
  {
    id: "sign-language-yolo",
    title: "Sign Language Detection (YOLO-v5)",
    description: "Computer vision pipeline to detect sign language gestures with YOLO-v5.",
    image: "/j-2.webp",
    tags: ["Computer Vision", "YOLO"],
    links: [
      { label: "Notebook", href: "https://github.com/ImeshaDilshani/Sign-Language-Detection-Computer-Vision-YOLO-v5/blob/main/Sign_Language_Detection_YOLO_v5_Computer_Vision_.ipynb" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/Sign-Language-Detection-Computer-Vision-YOLO-v5" },
    ],
    year: 2024,
  },
  {
    id: "flower-recognition",
    title: "Flower Recognition",
    description: "This project implements a Convolutional Neural Network (CNN) using TensorFlow and Keras to classify images of flowers into five distinct categories: daisy, dandelion, rose, sunflower, and tulip.",
    image: "",
    tags: ["CNN","TensorFlow","Keras"],
    links: [
      { label: "Notebook", href: "https://github.com/ImeshaDilshani/flower-recognition/blob/main/flower-recognition-system.ipynb" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/flower-recognition" },
    ],
    year: 2023,
  },
  {
    id: "Toy Sale Visualization with Microsoft Power BI",
    title: "Toy Sale Visualization with Microsoft Power BI",
    description: "The project includes data cleaning, transformation, and visualization to provide insights into toy sales trends.",
    image: "",
    tags: ["Power BI", "Data Visualization"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/PowerBI-Toy-Sales-Visualization" },
    ],
    year: 2023,
  },
  {
    id: "",
    title: "Spam Message Text Classification using Streamlit",
    description: "This application performs spam message text classification using a machine learning model. Users can input a text message, and the application predicts whether the message is spam or not.",
    image: "",
    tags: ["Python", "Machine Learning", "Text Classification"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/spam-message-text-classification" },
    ],
    year: 2023,
  },
  
  
  
];

export const codeProjects: ProjectMeta[] = [
  {
    id: "airline-reservation",
    title: "Airline Reservation Management System",
    description:
      "Web-based application to streamline flight booking and reservation management.",
    image: "/c-1.webp",
    tags: ["Web", "Full Stack", "JavaScript"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/Airline-Reservation-Management-System" },
    ],
    year: 2021,
  },
  {
    id: "fishsnap-mobile",
    title: "Fishsnap Mobile Application",
    description:
      "Flutter mobile app for identifying fish species with a friendly UX.",
    image: "/c-2.webp",
    tags: ["Flutter", "Mobile"],
    links: [
      { label: "GitHub", href: "https://github.com/FishSnap-2023/Fishsnap-mobile-app" },
    ],
    year: 2023,
  },
  {
    id: "woodwork-lk",
    title: "WOODWORK LK",
    description:
      "Statc web site for furniture ",
    image: "",
    tags: ["Flutter", "Mobile"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/woodwork-lk" },
      { label: "Live Site", href: "https://woodwork-dxt.pages.dev/" },
    ],
    year: 2023,
  },
  {
    id: "flutter-emojies",
    title: "Flutter Emojies",
    description:
      "Flutter app for emojies ",
    image: "",
    tags: ["Flutter", "Mobile"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/flutter_emojies" },
    ],
    year: 2025,
  },
  {
    id: "Everytuesdays",
    title: "Everytuesdays Blogging",
    description:
      "Blogging Platform built with react for seamless content creation and sharing.",
    image: "",
    tags: ["React", "JavaScript"],
    links: [
      { label: "Live Site", href: "https://everytuesdays.com/" },
    ],
    year: 2025,
  },
  {
    id: "Portfolio-Website",
    title: "Portfolio Website for Imesha Dilshani",
    description:
      "A responsive portfolio website built with React and TypeScript.",
    image: "",
    tags: ["React", "TypeScript"],
    links: [
      { label: "Live Site", href: "https://imesha.dev/" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/portfolio" },
    ],
    year: 2025,
  },
  {
    id: "ClassLinka",
    title: "ClassLinka",
    description:
      "ClassLinka connects the island’s elite educators with students who want to excel. ",
    image: "",
    tags: ["Mobile", "React Native", "Laravel"],
    links: [
      { label: "Live Site", href: "https://classlinka.pages.dev/" }
    ],
    year: 2025,
  },
  {
    id: "university course management system",
    title: "University Course Management System",
    description:
      "A web-based application for managing university courses, schedules, and student enrollments.",
    image: "",
    tags: ["Web", "Full Stack", "JavaScript"],
    links: [
      { label: "GitHub Frontend", href: "https://github.com/ImeshaDilshani/ucms-frontend" },
      { label: "GitHub Backend", href: "https://github.com/ImeshaDilshani/ucms-backend" },
    ],
    year: 2025,
  },
  
];