export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "CritiqueAI",
    techs: ["ReactJS", "flask", "Gemini API", "Firebase"],
    link: "https://critiqueai-01.vercel.app",
  },
  {
    title: "MakeReadme",
    techs: ["ReactJS", "ExpressJS", "Gemini API", "Tailwind CSS"],
    link: "https://github.com/MaeWolff/create-nextjs-app-bash-script",
  },
];

export default projects;
