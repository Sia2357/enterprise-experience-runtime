# Day 1 — Browser Runtime & MarTech Foundations

## Objective

Understand the browser-side foundations required to work with enterprise experimentation and personalization platforms such as Adobe Target.

## Core Concepts

### 1. HTML

HTML defines the structure of a web page.

Examples:

* Headings
* Buttons
* Images
* Forms
* Containers

HTML provides the elements that a MarTech runtime can interact with.

### 2. DOM

The Document Object Model (DOM) is the browser's representation of the HTML document.

JavaScript can use the DOM to:

* Find elements
* Read element properties
* Change text
* Change attributes
* Add or remove elements
* Respond to user interactions

### 3. JavaScript Runtime

JavaScript provides the logic that allows a browser-side system to make decisions and modify the user experience.

Basic model:

```text
User / Browser
→ JavaScript
→ Decision
→ DOM mutation
→ Updated experience

 # # Day 2 — Async Experience Retrieval

The runtime now retrieves experience data asynchronously through a simulated
experience service.

Flow:

Browser → Runtime → Request experience → JSON response → Parse JSON → Apply experience → DOM

This simulates the technical pattern used by personalization and experimentation
systems, but does not represent an actual Adobe Target integration.