import {
    findElement,
    setText
} from "./dom.js";

console.log("Runtime started");

const title = findElement("#hero-title");

console.log("Original title:", title.textContent);

setText(
    "#hero-title",
    "Summer Sale — 20% Off"
);

console.log("Experience applied");