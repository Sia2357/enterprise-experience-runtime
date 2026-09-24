import { getExperience } from "./experience-service.js";
import {
    findElement,
    setText
} from "./dom.js";
async function runRuntime() {
console.log("Runtime started");

const title = findElement("#hero-title");

console.log("Original title:", title.textContent);
console.log("Requesting experience...");
const response = await getExperience();

console.log("Raw response:", response);

const experience = JSON.parse(response);

console.log("Parsed experience:", experience);
setText(
    "#hero-title",
    experience.headline
);

console.log("Experience applied");
}
runRuntime();