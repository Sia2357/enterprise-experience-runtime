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

User / Browser
→ JavaScript
→ Decision
→ DOM mutation
→ Updated experience

### 4. DOM Manipulation

A runtime can locate an element and modify it.

Example:

```javascript
const headline = document.querySelector("#headline");

headline.textContent = "Summer Sale — 20% Off";
```

The JavaScript finds the DOM element and changes what the visitor sees.

### 5. State → Decision → Mutation

A useful mental model for MarTech runtimes is:

State
→ Decision
→ Mutation

**State**
Information available to the runtime.

Examples:

* Current page
* Visitor context
* Browser information
* Experiment assignment
* Audience membership

**Decision**
The runtime determines what should happen.

**Mutation**
The runtime changes the browser experience.

### 6. MarTech Connection

Enterprise experimentation and personalization platforms perform similar tasks at a much larger scale.

Conceptual flow:

Browser
→ MarTech runtime
→ Decisioning
→ Experience
→ DOM

The platform may determine which experience a visitor should receive, while browser-side code ultimately helps deliver or render that experience.

### 7. Adobe Target Mental Model

Adobe Target can be thought of conceptually as a system that helps determine:

* Who is eligible
* Which activity applies
* Which experience should be delivered
* How the experience is measured

The browser-side implementation is an important part of how that experience reaches the visitor.

This project is **not an implementation of Adobe Target**. It is a simplified learning runtime designed to understand the browser-side concepts underlying enterprise experimentation and personalization.

## Day 1 Project

Project:

`enterprise-experience-runtime`

Initial implementation:

* HTML page
* JavaScript runtime
* DOM manipulation
* Experience modification
* Git version control
* GitHub repository

Initial experience:

**Summer Sale — 20% Off**

## Technical Skills Practiced

* HTML
* JavaScript
* DOM selectors
* DOM manipulation
* Browser runtime concepts
* VS Code
* Git
* GitHub

## Interview-Level Explanation

I built a small browser-side experience runtime to understand how JavaScript interacts with the DOM and how that model relates to enterprise experimentation and personalization platforms. The project separates the concept of runtime logic from the page structure and demonstrates how a decision can ultimately result in a change to the user experience.

## Next Learning Step

Day 2 will extend this foundation into:

* JavaScript execution
* Asynchronous behavior
* Promises
* `async/await`
* JSON
* API request/response patterns
* How these concepts relate to enterprise MarTech runtimes
