import genericProject from "./genericProject";

const tech = ["React", "NodeJS", "Express", "MongoDB"];
const body = "Reading List";
const img = process.env.PUBLIC_URL + "/svgs/OL-logo.svg";
const alt = "reading list logo";
const desc =
  "A reading organizer for busy readers who want to track reading stats";
const link = "https://github.com/Oferlis/ReadingList";

export const readingList = new genericProject(tech, body, img, alt, desc, link);
