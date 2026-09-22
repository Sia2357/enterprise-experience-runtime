export function findElement(selector) {
    const element = document.querySelector(selector);

    if (!element) {
        throw new Error(`Element not found: ${selector}`);
    }

    return element;
}

export function readText(selector) {
    const element = findElement(selector);

    return element.textContent;
}

export function setText(selector, value) {
    const element = findElement(selector);

    element.textContent = value;
}