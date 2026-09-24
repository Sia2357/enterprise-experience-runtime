export function getExperience() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(JSON.stringify({
    experience: "summer-sale",
    headline: "Summer Sale — 20% Off"
}));
        }, 1000);
    });
}