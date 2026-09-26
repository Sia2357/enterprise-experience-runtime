import { getExperience } from "./experience-service.js";
import {
    findElement,
    setText
} from "./dom.js";
async function runRuntime() {
console.log("Runtime started");

const title = findElement("#hero-title");

console.log("Original title:", title.textContent);
try {
console.log("Requesting experience...");
const response = await getExperience();

console.log("Raw response:", response);

const experience = response;

console.log("Parsed experience:", experience);
setText(
    "#hero-title",
    experience.headline
);
} catch (error) {
    console.error("Experience retrieval failed:", error);

setText(
    "#hero-title",
    "Summer Sale"
);
}
finally {
    console.log("Experience retrieval attempt completed.");
}
console.log("Experience applied");
}
runRuntime();