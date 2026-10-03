export type ProjectCategory = "Web Development" | "UI/UX Design" | "School Projects";

export const projectFilters = [
  "All",
  "Web Development",
  "UI/UX Design",
  "School Projects",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: ProjectCategory[];
}

export const projects: Project[] = [
  {
    id: "student-portal",
    title: "Student Portal",
    description:
      "A portal where students check grades, schedules, and announcements in one place.",
    image: "/images/project-student-portal.svg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    categories: ["Web Development", "School Projects"],
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "A simple board for planning tasks and tracking what is to do, doing, and done.",
    image: "/images/project-task-manager.svg",
    tags: ["React", "JavaScript", "CSS"],
    categories: ["Web Development"],
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "A bold one page portfolio built around big type and a clear call to action.",
    image: "/images/project-personal-portfolio.svg",
    tags: ["Figma", "HTML", "Tailwind"],
    categories: ["UI/UX Design", "Web Development"],
  },
  {
    id: "responsive-gallery",
    title: "Responsive Gallery",
    description:
      "A photo gallery that reflows from one column on phones to a wide grid on desktop.",
    image: "/images/project-responsive-gallery.svg",
    tags: ["Figma", "CSS Grid", "Design"],
    categories: ["UI/UX Design"],
  },
  {
    id: "school-management-ui",
    title: "School Management UI",
    description:
      "A dashboard concept for managing classes, attendance, and student records.",
    image: "/images/project-school-management.svg",
    tags: ["Figma", "UI Kit", "Prototype"],
    categories: ["UI/UX Design", "School Projects"],
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Shows current weather and a daily forecast for any city using a public API.",
    image: "/images/project-weather-dashboard.svg",
    tags: ["JavaScript", "API", "Charts"],
    categories: ["Web Development", "School Projects"],
  },
];
