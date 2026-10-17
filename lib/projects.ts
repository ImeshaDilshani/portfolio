import type { SanityProject } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/client";

export type ProjectCategory = "all" | "featured" | "coding" | "data";

export interface ProjectMeta {
  id: string;
  title: string;
  description: string;
  category: "featured" | "coding" | "data";
  label?: string;
  image?: string;
  tags?: string[];
  links?: { label: string; href: string }[];
  year?: number;
  featured?: boolean;
}

export function normalizeSanityProject(p: SanityProject): ProjectMeta {
  const links: { label: string; href: string }[] = [];
  if (p.href) {
    links.push({ label: "Live Demo", href: p.href });
  }
  if (p.githubUrl) {
    links.push({ label: "GitHub", href: p.githubUrl });
  }
  if (p.links && p.links.length > 0) {
    p.links.forEach((l) => {
      if (!links.some((existing) => existing.href === l.href)) {
        links.push(l);
      }
    });
  }

  const rawCat = p.category?.toLowerCase() || "";
  let category: "featured" | "coding" | "data" = "featured";
  if (rawCat.includes("code") || rawCat.includes("software") || rawCat.includes("web") || rawCat === "coding") {
    category = "coding";
  } else if (rawCat.includes("data") || rawCat.includes("ml") || rawCat.includes("ai") || rawCat === "data") {
    category = "data";
  } else {
    category = "featured";
  }

  const defaultLabel =
    category === "data"
      ? "DATA SCIENCE & ML"
      : category === "coding"
      ? "SOFTWARE ENGINEERING"
      : "MY OWN PRODUCT";

  return {
    id: p._id || p.slug?.current || p.title,
    title: p.title,
    description: p.description || "",
    category,
    label: p.label || defaultLabel,
    image: urlForImage(p.mainImage, ""),
    tags: p.tags || [],
    links,
    year: p.year || (p.publishedAt ? new Date(p.publishedAt).getFullYear() : undefined),
    featured: category === "featured" || p.category === "featured",
  };
}

export const featuredProjects: ProjectMeta[] = [
  {
    id: "everytuesdays",
    category: "featured",
    label: "FULL STACK WEB",
    title: "everytuesdays.com",
    description:
      "A modern full-stack blogging platform. Features Sanity CMS integration, advanced SEO structured data, and lazy loading achieving top-tier Lighthouse metrics (100% SEO & Best Practices).",
    tags: ["React", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    image: "/about-bg.webp",
    links: [{ label: "Live Site", href: "https://everytuesdays.com" }],
    year: 2025,
    featured: true,
  },
  {
    id: "miro-learning",
    category: "featured",
    label: "MOBILE & BACKEND",
    title: "Miro Learning Platform",
    description:
      "A cross-platform React Native MVP for learning spoken Tamil. Includes a secure Laravel admin panel for real-time lesson streaming and structured testing pipelines.",
    tags: ["React Native", "Laravel", "PHP", "MySQL", "Jest"],
    image: "/data-1.webp",
    links: [{ label: "Case Study", href: "#" }],
    year: 2024,
    featured: true,
  },
  {
    id: "orbit-engine",
    category: "featured",
    label: "AI INTEGRATION",
    title: "Orbit Engine",
    description:
      "Transform any content into a viral distribution machine. Synthesize videos into SEO blogs, turn articles into viral shorts, and generate designer-grade flyers with captions in one click.",
    tags: ["AI", "Content Repurposing", "Full Stack", "Automation"],
    image: "/imesha.webp",
    links: [{ label: "Live App", href: "https://orbit.everytuesdays.com/" }],
    year: 2025,
    featured: true,
  },
  {
    id: "velolanka",
    category: "featured",
    label: "BUSINESS PLATFORM",
    title: "VeloLanka Car Rental",
    description:
      "A premium car rental and booking platform in Sri Lanka. Features transparent pricing, a diverse vehicle fleet, and dedicated client care for self-drive, corporate hire, and airport transfers.",
    tags: ["Web Development", "Booking System", "Business Platform"],
    image: "/about-bg.webp",
    links: [{ label: "Live Site", href: "https://velolankarentals.com/" }],
    year: 2025,
    featured: true,
  },
];

export const dataProjects: ProjectMeta[] = [
  {
    id: "sl-weather-sarima",
    category: "data",
    label: "TIME SERIES FORECASTING",
    title: "Sri Lanka Weather Forecasting",
    description:
      "Time series analysis and forecasting system for weather data across Sri Lankan districts.",
    image: "/r-1.webp",
    tags: ["R", "Time Series", "SARIMA"],
    links: [
      { label: "R Script", href: "https://github.com/ImeshaDilshani/SL-districtwise-weather-forecast-sarima/blob/main/1.R" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/SL-districtwise-weather-forecast-sarima" },
    ],
    year: 2023,
  },
  {
    id: "instacart-seg",
    category: "data",
    label: "DATA SCIENCE",
    title: "Customer-Segmentation (Instacart)",
    description:
      "A clustering-driven solution to identify customer segments for targeted marketing.",
    image: "",
    tags: ["Python", "Clustering", "Machine Learning"],
    links: [
      { label: "Notebook", href: "https://github.com/ImeshaDilshani/Data-Storm-5.0-Customer-Segmentation-Team-RiverBorn/blob/main/Semi%20Final%20Solution%20-%20Team%20%20RiverBorn.ipynb" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/Data-Storm-5.0-Customer-Segmentation-Team-RiverBorn" },
    ],
    year: 2022,
  },
  {
    id: "customer-churn-prediction",
    category: "data",
    label: "PREDICTIVE MODELING",
    title: "Customer Churn Prediction",
    description:
      "This project focuses on analyzing and predicting customer churn in a telecommunications company using EDA and classification models.",
    image: "",
    tags: ["Python", "Classification", "EDA", "Scikit-Learn"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/Customer-Churn-Analysis-Churn-Prediction" },
    ],
    year: 2022,
  },
  {
    id: "content-base-movie-recommender-system",
    category: "data",
    label: "RECOMMENDER SYSTEMS",
    title: "Content-Based Movie Recommender",
    description:
      "The project leverages metadata from movies to suggest similar titles based on content similarity.",
    image: "",
    tags: ["Python", "NLP", "Cosine Similarity"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/CineMatch-Intelligent-Movie-Recommender-System" },
    ],
    year: 2022,
  },
  {
    id: "sign-language-yolo",
    category: "data",
    label: "COMPUTER VISION",
    title: "Sign Language Detection (YOLO-v5)",
    description: "Real-time computer vision pipeline to detect sign language gestures using YOLO-v5.",
    image: "/j-2.webp",
    tags: ["Computer Vision", "YOLO", "PyTorch"],
    links: [
      { label: "Notebook", href: "https://github.com/ImeshaDilshani/Sign-Language-Detection-Computer-Vision-YOLO-v5/blob/main/Sign_Language_Detection_YOLO_v5_Computer_Vision_.ipynb" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/Sign-Language-Detection-Computer-Vision-YOLO-v5" },
    ],
    year: 2024,
  },
  {
    id: "flower-recognition",
    category: "data",
    label: "DEEP LEARNING",
    title: "Flower Recognition CNN",
    description: "Convolutional Neural Network (CNN) built with TensorFlow/Keras to classify images of flowers across distinct categories.",
    image: "",
    tags: ["CNN", "TensorFlow", "Keras", "Deep Learning"],
    links: [
      { label: "Notebook", href: "https://github.com/ImeshaDilshani/flower-recognition/blob/main/flower-recognition-system.ipynb" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/flower-recognition" },
    ],
    year: 2023,
  },
  {
    id: "toy-sale-visualization",
    category: "data",
    label: "BUSINESS INTELLIGENCE",
    title: "Toy Sale Visualization with Power BI",
    description: "Data cleaning, transformation, and executive dashboards providing actionable insights into toy retail trends.",
    image: "",
    tags: ["Power BI", "Data Visualization", "DAX"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/PowerBI-Toy-Sales-Visualization" },
    ],
    year: 2023,
  },
  {
    id: "spam-message-classification",
    category: "data",
    label: "NLP & STREAMLIT",
    title: "Spam Message Text Classification",
    description: "Streamlit web app using NLP to predict whether an incoming text message is spam or legitimate in real time.",
    image: "",
    tags: ["Python", "Streamlit", "NLP", "Machine Learning"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/spam-message-text-classification" },
    ],
    year: 2023,
  },
];

export const codeProjects: ProjectMeta[] = [
  {
    id: "airline-reservation",
    category: "coding",
    label: "FULL STACK WEB",
    title: "Airline Reservation System",
    description:
      "Web application to streamline flight booking, customer itineraries, and seat allocation management.",
    image: "/c-1.webp",
    tags: ["Web", "Full Stack", "JavaScript", "SQL"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/Airline-Reservation-Management-System" },
    ],
    year: 2021,
  },
  {
    id: "fishsnap-mobile",
    category: "coding",
    label: "MOBILE APP",
    title: "Fishsnap Mobile Application",
    description:
      "Flutter cross-platform mobile application for identifying fish species with an intuitive user experience.",
    image: "/c-2.webp",
    tags: ["Flutter", "Dart", "Mobile"],
    links: [
      { label: "GitHub", href: "https://github.com/FishSnap-2023/Fishsnap-mobile-app" },
    ],
    year: 2023,
  },
  {
    id: "woodwork-lk",
    category: "coding",
    label: "COMMERCIAL WEB",
    title: "WOODWORK LK",
    description:
      "Custom responsive web catalog and showcase for bespoke Sri Lankan furniture craft.",
    image: "",
    tags: ["Web Development", "Responsive Design", "Tailwind CSS"],
    links: [
      { label: "Live Site", href: "https://woodwork-dxt.pages.dev/" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/woodwork-lk" },
    ],
    year: 2023,
  },
  {
    id: "flutter-emojies",
    category: "coding",
    label: "MOBILE APP",
    title: "Flutter Emojies App",
    description:
      "Interactive Flutter app exploring fluid UI components and reactive state patterns.",
    image: "",
    tags: ["Flutter", "Dart", "Mobile UI"],
    links: [
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/flutter_emojies" },
    ],
    year: 2025,
  },
  {
    id: "everytuesdays-code",
    category: "coding",
    label: "FULL STACK PLATFORM",
    title: "Everytuesdays Blogging Platform",
    description:
      "Content publishing platform built with React, headless CMS, and edge rendering for blazing performance.",
    image: "",
    tags: ["React", "TypeScript", "Next.js"],
    links: [
      { label: "Live Site", href: "https://everytuesdays.com/" },
    ],
    year: 2025,
  },
  {
    id: "portfolio-website",
    category: "coding",
    label: "PERSONAL ARCHITECTURE",
    title: "Personal Portfolio Architecture",
    description:
      "High-performance modern portfolio built with Next.js App Router, Tailwind CSS, and Sanity CMS.",
    image: "",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    links: [
      { label: "Live Site", href: "https://imesha.dev/" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/portfolio" },
    ],
    year: 2025,
  },
  {
    id: "classlinka",
    category: "coding",
    label: "EDTECH PLATFORM",
    title: "ClassLinka Educational Platform",
    description:
      "Connecting island elite educators with ambitious students seeking advanced tutoring and resources.",
    image: "",
    tags: ["React Native", "Laravel", "PHP", "Full Stack"],
    links: [
      { label: "Live Site", href: "https://classlinka.pages.dev/" },
    ],
    year: 2025,
  },
  {
    id: "ucms",
    category: "coding",
    label: "ENTERPRISE SYSTEM",
    title: "University Course Management System",
    description:
      "Web-based application for managing university courses, faculty schedules, and student enrollments.",
    image: "",
    tags: ["Full Stack", "JavaScript", "REST APIs", "SQL"],
    links: [
      { label: "GitHub Frontend", href: "https://github.com/ImeshaDilshani/ucms-frontend" },
      { label: "GitHub Backend", href: "https://github.com/ImeshaDilshani/ucms-backend" },
    ],
    year: 2025,
  },
];

export function getAllFallbackProjects(): ProjectMeta[] {
  return [...featuredProjects, ...codeProjects, ...dataProjects];
}