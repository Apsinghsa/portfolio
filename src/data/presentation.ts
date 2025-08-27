type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "arvind.career.775@gmail.com",
  title: "Hi, I’m Arvind 👋",
  // profile: "/profile.webp",

  description:
    "Bonjour, i'm a *frontend developer* & and an undergraduate student. I am currently working with *MERN Stack*.",
  
    socials: [
    {
      label: "Github",
      link: "https://github.com/Apsinghsa/",
    },
    {
      label: "X",
      link: "https://x.com/the_ap__",
    }

  ],
};

export default presentation;
