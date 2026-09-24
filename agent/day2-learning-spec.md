# Day 2 — JavaScript Execution & Asynchronous Experience Retrieval

## Objective

Understand how asynchronous JavaScript enables a browser-side MarTech runtime to retrieve and process experience data before applying an experience to the page.

## Core Concepts

### 1. JavaScript Execution

Understand how JavaScript executes statements and how synchronous execution differs from asynchronous execution.

### 2. Asynchronous Behavior

Understand why browser-side MarTech systems cannot assume that all required data is immediately available.

### 3. Callbacks

Understand callbacks as a foundational mechanism for handling work that completes later.

### 4. Promises

Understand Promises as a structured representation of an asynchronous operation.

Promise states:

* Pending
* Fulfilled
* Rejected

### 5. async/await

Understand how `async/await` allows asynchronous code to be expressed in a readable execution flow.

### 6. JSON

Understand the difference between:

* JSON text
* JavaScript objects

Practice:

* `JSON.stringify()`
* `JSON.parse()`

### 7. Request/Response Mental Model

Understand the conceptual flow:

Browser
→ Runtime
→ Request experience data
→ Response
→ Parse data
→ Apply experience
→ DOM

The project uses a simulated service rather than a real HTTP request.

## Project Architecture

```text
Browser
   ↓
runtime.js
   ↓
experience-service.js
   ↓
Asynchronous response
   ↓
JSON
   ↓
JSON.parse()
   ↓
Experience object
   ↓
dom.js
   ↓
Updated experience