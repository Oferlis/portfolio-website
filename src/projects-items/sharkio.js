import genericProject from "./genericProject";

const tech = ["Open-source", "React", "NodeJS", "Express", "Docker"];
const body = "Sharkio";
const img = process.env.PUBLIC_URL + "/images/sharkio.png";
const alt = "sharkio logo";
const desc = "Developer tool, helps developers to track services requests";
const link = "https://github.com/idodav/sharkio";

export const sharkio = new genericProject(tech, body, img, alt, desc, link);
