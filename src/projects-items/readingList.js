import genericProject from "./genericProject";

const head = ["tech1", "tech2", "tech3"];
const body = "An app for lililili";
const img = process.env.PUBLIC_URL + "/svgs/OL-logo.svg";
const alt = "reading list logo";

export const readingList = new genericProject(head, body, img, alt);
