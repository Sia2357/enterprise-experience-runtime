# Day 1 — HTML, DOM, JavaScript Runtime & Experience Mutation

## Learning Objective

Understand the browser-side foundation of a MarTech runtime:

- HTML structure
- DOM
- JavaScript execution
- DOM selection
- DOM manipulation
- State → Decision → Mutation
- Basic enterprise MarTech runtime architecture

The goal is to understand what happens inside the browser before introducing APIs, Adobe Target, personalization, or experimentation platforms.

---

## Concepts Learned

### 1. HTML

HTML defines the structure and content of a web page.

Example page structure:

    HTML
       ↓
    Elements
       ↓
    Content + Attributes
       ↓
    Browser renders page

The project uses an HTML page containing:

- A hero section
- A headline
- Supporting text
- A call-to-action button

---

### 2. DOM

The DOM (Document Object Model) is the browser's representation of the HTML document.

JavaScript can use the DOM to:

- Find elements
- Read content
- Change content
- Add or remove elements
- Change attributes
- Respond to user interaction

Mental model:

    HTML
      ↓
    Browser parses HTML
      ↓
    DOM
      ↓
    JavaScript interacts with DOM

---

### 3. JavaScript Runtime

JavaScript executes inside the browser and can interact with the DOM.

The project uses JavaScript modules.

The main runtime starts the experience flow and coordinates:

- DOM access
- Experience retrieval
- Experience application

---

### 4. DOM Selection

The project uses a reusable DOM utility function to find elements.

Example:

    const title = findElement("#hero-title");

The selector identifies the element that the runtime needs to modify.

---

### 5. Reading DOM State

The runtime reads the current page state.

Example:

    title.textContent

This allows the runtime to understand what is currently displayed before applying an experience.

---

### 6. DOM Mutation

The runtime changes the page using a reusable DOM utility.

Example:

    setText(
        "#hero-title",
        "Summer Sale — 20% Off"
    );

This is a DOM mutation because JavaScript changes the content displayed on the page.

---

## State → Decision → Mutation

This is the foundational runtime mental model introduced on Day 1.

    State
      ↓
    Decision
      ↓
    Mutation

### State

Information available to the runtime.

Examples:

- Current page content
- Visitor information
- Browser information
- Existing DOM state

### Decision

The runtime determines what should happen.

Example:

    If the page contains the hero title,
    apply the experience.

### Mutation

The runtime changes the page.

Example:

    Change the hero headline.

This pattern will later become much more sophisticated when Adobe Target and personalization decisioning are introduced.

---

## Project Implementation

### DOM Utility Layer

The project contains:

    src/dom.js

This module provides reusable functions for interacting with the DOM.

The purpose is to separate DOM operations from business/runtime logic.

---

### Runtime Layer

The project contains:

    src/runtime.js

The runtime coordinates the experience flow.

Its responsibilities include:

- Starting the runtime
- Finding the target DOM element
- Reading the current state
- Determining the experience
- Applying the experience
- Logging runtime activity

---

### Initial Experience

The page initially contained:

    Summer Sale

The runtime changed the headline to:

    Summer Sale — 20% Off

This demonstrated a simple personalization-style page mutation.

---

## Architecture

The Day 1 runtime can be represented as:

    Browser
       ↓
    HTML
       ↓
    DOM
       ↓
    Experience Runtime
       ↓
    DOM Selection
       ↓
    Experience Decision
       ↓
    DOM Mutation
       ↓
    Updated Page

---

## Project Structure

The Day 1 project structure is:

    enterprise-experience-runtime/
    ├── agent/
    │   └── day1-learning-spec.md
    ├── src/
    │   ├── dom.js
    │   └── runtime.js
    ├── index.html
    └── README.md

---

## Separation of Responsibilities

The project intentionally separates responsibilities.

### index.html

Responsible for:

- Page structure
- HTML elements
- Initial content

### src/dom.js

Responsible for:

- Finding DOM elements
- Updating DOM content

### src/runtime.js

Responsible for:

- Runtime orchestration
- Experience logic
- Calling DOM utilities

This separation is important because enterprise MarTech implementations also separate concerns between:

- Page structure
- Data collection
- Decisioning
- Runtime execution
- Experience rendering

---

## Enterprise MarTech Connection

The current project is a simplified browser-side experience runtime.

It is not yet Adobe Target.

The purpose is to establish the browser fundamentals that are required before learning enterprise personalization platforms.

A simplified enterprise mental model is:

    Visitor
       ↓
    Browser
       ↓
    Runtime
       ↓
    Data / Context
       ↓
    Decision
       ↓
    Experience
       ↓
    DOM

Later in the curriculum, the decision layer will become more sophisticated and will incorporate concepts such as:

- APIs
- Visitor context
- Audiences
- Activities
- Offers
- Experimentation
- Personalization
- Adobe Target
- Adobe Web SDK

---

## Git and GitHub

Day 1 also established the project's Git/GitHub workflow.

The project was:

- Initialized as a Git repository
- Connected to GitHub
- Published to the GitHub repository
- Updated through VS Code

Repository:

    enterprise-experience-runtime

The repository is the central portfolio project for the 30-day curriculum.

---

## Interview Takeaways

### What is the DOM?

"The DOM is the browser's object representation of an HTML document. JavaScript can use the DOM to read page state and modify elements dynamically."

### What is DOM manipulation?

"DOM manipulation is when JavaScript reads, creates, removes, or modifies elements or content in the browser's document."

### Why separate DOM utilities from runtime logic?

"It separates presentation-layer operations from runtime or business logic, making the implementation easier to maintain and extend."

### What is the State → Decision → Mutation model?

"First the runtime observes the current state, then determines what experience should be applied, and finally mutates the page to deliver that experience."

### How does this relate to MarTech?

"A MarTech runtime ultimately needs to collect context, make or receive a decision, and apply an experience in the browser. Day 1 establishes the browser-side foundation for that process."

---

## Day 1 Project Flow

    1. Browser loads index.html
            ↓
    2. Browser creates the DOM
            ↓
    3. JavaScript runtime starts
            ↓
    4. Runtime finds #hero-title
            ↓
    5. Runtime reads current headline
            ↓
    6. Runtime determines the experience
            ↓
    7. Runtime calls the DOM utility
            ↓
    8. Headline is changed
            ↓
    9. Updated experience appears on the page

---

## Day 1 Completion Criteria

- [x] Understand HTML structure
- [x] Understand the DOM
- [x] Understand browser-side JavaScript
- [x] Use JavaScript modules
- [x] Select DOM elements
- [x] Read DOM content
- [x] Modify DOM content
- [x] Create a reusable DOM utility layer
- [x] Create a runtime layer
- [x] Understand State → Decision → Mutation
- [x] Understand basic browser-side MarTech architecture
- [x] Build the initial experience runtime
- [x] Connect the project to GitHub
- [x] Publish the project repository
