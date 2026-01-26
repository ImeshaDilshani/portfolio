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
    tags: ["R", "Time Series", "Forecasting"],
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
    image: "/j-1.webp",
    tags: ["Python", "Clustering", "Notebook"],
    links: [
      { label: "Notebook", href: "https://github.com/ImeshaDilshani/Data-Storm-5.0-Customer-Segmentation-Team-RiverBorn/blob/main/Semi%20Final%20Solution%20-%20Team%20%20RiverBorn.ipynb" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/Data-Storm-5.0-Customer-Segmentation-Team-RiverBorn" },
    ],
    year: 2022,
  },
  {
    id: "sign-language-yolo",
    title: "Sign Language Detection (YOLO-v5)",
    description: "Computer vision pipeline to detect sign language gestures with YOLO-v5.",
    image: "/j-2.webp",
    tags: ["Computer Vision", "YOLO", "Notebook"],
    links: [
      { label: "Notebook", href: "https://github.com/ImeshaDilshani/Sign-Language-Detection-Computer-Vision-YOLO-v5/blob/main/Sign_Language_Detection_YOLO_v5_Computer_Vision_.ipynb" },
      { label: "GitHub", href: "https://github.com/ImeshaDilshani/Sign-Language-Detection-Computer-Vision-YOLO-v5" },
    ],
    year: 2024,
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
    tags: ["Flutter", "Mobile", "ML"],
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
    image: "/c-2.webp",
    tags: ["Flutter", "Mobile", "ML"],
    links: [
      { label: "GitHub", href: "https://github.com/FishSnap-2023/Fishsnap-mobile-app" },
    ],
    year: 2023,
  },
];
