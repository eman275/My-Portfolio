export interface PortfolioItem {
  id: string;
  title: string;
  img: string;
  category: string;
  keyword: string[];
  liveUrl: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: "01",
    title: "Transportation Mobile App",
    img: "/images/portfolio-01.jpg",
    category: "Mobile App",
    keyword: ["Mobile", "App", "UI-UX"],
    liveUrl: "#",
  },

  {
    id: "02",
    title: "Workout Tracker App",
    img: "/images/portfolio-02.jpg",
    category: "Mobile App",
    keyword: ["Mobile", "App", "UI-UX"],
    liveUrl: "#",
  },

  {
    id: "03",
    title: "Fashion Shopping App",
    img: "/images/portfolio-03.jpg",
    category: "Mobile App",
    keyword: ["Mobile", "App", "UI-UX"],
    liveUrl: "#",
  },

  {
    id: "04",
    title: "Fashion Shopping App",
    img: "/images/portfolio-04.jpg",
    category: "Mobile App",
    keyword: ["Mobile", "App", "UI-UX"],
    liveUrl: "#",
  },

  {
    id: "05",
    title: "Furniture Shopping App",
    img: "/images/portfolio-05.jpg",
    category: "Mobile App",
    keyword: ["Mobile", "App", "UI-UX"],
    liveUrl: "#",
  },

  {
    id: "06",
    title: "Travel  App",
    img: "/images/portfolio-06.jpg",
    category: "Mobile App",
    keyword: ["Mobile", "App", "UI-UX"],
    liveUrl: "#",
  },

  {
    id: "07",
    title: "Portfolio Website",
    img: "/images/portfolio-07.png",
    category: "Web Design",
    keyword: ["Web", "Web design", "UI-UX"],
    liveUrl: "#",
  },

  {
    id: "08",
    title: "Restaurant Website",
    img: "/images/portfolio-08.png",
    category: "Web Design",
    keyword: ["Web", "Web design", "UI-UX"],
    liveUrl: "#",
  },

  {
    id: "09",
    title: "Agency Website",
    img: "/images/portfolio-09.png",
    category: "Web Design",
    keyword: ["Web", "Web design", "UI-UX"],
    liveUrl: "#",
  },
];

export interface Experience {
  position: string;
  companyName: string;
  src: string;
  description: string;
}

export const companies: Experience[] = [
  {
    position: "FrontEnd Developer",
    companyName: "Dexef",
    src: "/images/dexef.jpg",
    description: "Build ERP system (Enterprise resource planning) applications that offer financial and ",
  },
  {
    position: "FrontEnd Developer",
    companyName: "logicyel",
    src: "/images/logicial.jpg",
    description: "Build ERP system (Enterprise resource planning) applications that offer financial and ",
  },
  {
    position: "FrontEnd Developer",
    companyName: "Algorithmz - Tooli TV",
    src: "/images/algorizm.jpg",
    description: "Build ERP system (Enterprise resource planning) applications that offer financial and ",
  },

];
