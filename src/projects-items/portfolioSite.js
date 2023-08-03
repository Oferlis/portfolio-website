import genericProject from "./genericProject";

const tech = ["React", "Tailwind", "Figma", "Deployment"];
const body = "Portfolio site";
const img = process.env.PUBLIC_URL + "/images/portfoliopic.png";
const alt = "Portfolio site";
const desc = "My portfolio site, you're here!";
const link = "https://github.com/Oferlis/portfolio";

export const portfolioSite = new genericProject(
  tech,
  body,
  img,
  alt,
  desc,
  link
);
