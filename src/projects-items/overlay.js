import genericProject from "./genericProject";

const tech = ["Open-source", "Vue.js", "JS", "Chrome Extension"];
const body = "Overlay";
const img = process.env.PUBLIC_URL + "/images/overlay.jpeg";
const alt = "overlay";
const desc = "Helps developers build safer apps by exposing information";
const link = "https://github.com/os-scar/overlay";

export const overlay = new genericProject(tech, body, img, alt, desc, link);
