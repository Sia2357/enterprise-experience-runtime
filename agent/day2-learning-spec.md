# Day 2 — JavaScript Execution, Asynchronous Behavior, Promises & JSON

## Learning Objective

Understand how JavaScript executes synchronously and asynchronously, and how asynchronous data retrieval fits into a browser-side MarTech runtime.

The goal is to understand the JavaScript execution model before connecting the project to real HTTP APIs.

---

## Concepts Learned

### 1. Synchronous JavaScript

Synchronous code executes in order.

Example:

    console.log("A");
    console.log("B");
    console.log("C");

The output is:

    A
    B
    C

Each statement executes before the next statement begins.

---

### 2. Asynchronous JavaScript

Asynchronous operations allow JavaScript to start an operation and continue executing other work while waiting for the result.

This is important for browser applications because operations such as:

- API requests
- Network calls
- Timers
- User interactions
- Data retrieval

may not complete immediately.

Mental model:

    Start operation
         ↓
    Continue execution
         ↓
    Operation completes
         ↓
    Handle result

---

### 3. Callback

A callback is a function that is executed after another operation completes.

Example concept:

    performOperation(function(result) {
        // handle result
    });

Callbacks are one way JavaScript handles asynchronous behavior.

---

### 4. Promise

A Promise represents the eventual result of an asynchronous operation.

A Promise can generally be:

- Pending
- Fulfilled
- Rejected

Mental model:

    Promise
       ↓
    Pending
       ↓
    ┌───────────────┐
    ↓               ↓
    Fulfilled      Rejected
    ↓               ↓
    Result          Error

---

### 5. async / await

`async` and `await` provide a cleaner way to work with Promises.

Example:

    async function getExperience() {
        const response = await someOperation();
        return response;
    }

`await` pauses execution of the current async function until the Promise settles.

It does not block the entire browser.

---

### 6. try / catch

Asynchronous operations can fail.

The project uses:

    try {
        const response = await getExperience();
    } catch (error) {
        console.error(error);
    }

This provides an explicit failure path.

---

### 7. finally

A `finally` block runs after the `try` or `catch` path completes.

Example:

    try {
        // operation
    } catch (error) {
        // failure handling
    } finally {
        // cleanup or completion logic
    }

The project uses `finally` to indicate that the experience retrieval attempt has completed.

---

## JSON

JSON stands for JavaScript Object Notation.

It is a common format for exchanging structured data between systems.

Example JSON:

    {
      "experience": "summer-sale",
      "headline": "Summer Sale — 20% Off"
    }

JSON commonly contains:

- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Null values

---

## JSON Parsing

When JSON is represented as a string, JavaScript can convert it into an object using:

    JSON.parse()

Example:

    const experience = JSON.parse(response);

This converts JSON text into a JavaScript object.

---

## JavaScript Object vs JSON String

A JSON string is serialized text.

Example:

    "{\"experience\":\"summer-sale\"}"

A JavaScript object is structured data that JavaScript can directly access.

Example:

    {
        experience: "summer-sale"
    }

The distinction matters because APIs commonly transmit serialized JSON while JavaScript works with objects after parsing.

---

## Day 2 Project Implementation

The Day 1 runtime was extended so that the experience is no longer applied immediately.

Instead, the runtime now retrieves an experience asynchronously.

The flow became:

    Browser
       ↓
    Experience Runtime
       ↓
    Async Experience Retrieval
       ↓
    Promise
       ↓
    JSON Response
       ↓
    Experience Object
       ↓
    DOM Mutation

---

## Experience Service

The project introduced:

    src/experience-service.js

This module is responsible for retrieving the experience.

Separating experience retrieval from the runtime keeps the architecture modular.

---

## Simulated Async Retrieval

Before connecting to a real API, the project used a simulated asynchronous operation.

The purpose was to learn asynchronous JavaScript without introducing HTTP concepts at the same time.

Conceptually:

    Runtime
       ↓
    getExperience()
       ↓
    Wait for asynchronous operation
       ↓
    Resolve Promise
       ↓
    Return experience
       ↓
    Runtime applies experience

---

## Runtime Flow

The runtime now follows an asynchronous sequence:

    1. Runtime starts
            ↓
    2. Runtime finds the target DOM element
            ↓
    3. Runtime requests an experience
            ↓
    4. Experience service performs asynchronous work
            ↓
    5. Runtime waits using await
            ↓
    6. Experience data is returned
            ↓
    7. Runtime applies the experience
            ↓
    8. DOM is updated

---

## Error Handling

The runtime includes a failure path.

Conceptually:

    Experience retrieval
            ↓
       ┌────┴────┐
       ↓         ↓
    Success    Failure
       ↓         ↓
    Apply      Fallback
    experience experience

The fallback experience remains:

    Summer Sale

This establishes the foundation for graceful degradation when external data is unavailable.

---

## Enterprise MarTech Connection

Real MarTech systems frequently depend on asynchronous operations.

Examples include:

- Personalization decisions
- Audience retrieval
- Analytics calls
- Customer profile data
- Experiment assignments
- API requests
- Feature configuration

A browser-side MarTech runtime therefore needs to handle:

- Delayed responses
- Successful responses
- Failed responses
- Time-dependent execution
- Fallback behavior

Day 2 establishes these JavaScript fundamentals before introducing HTTP and APIs.

---

## MarTech Mental Model

The asynchronous runtime can be represented as:

    Visitor loads page
           ↓
    Runtime starts
           ↓
    Runtime requests experience
           ↓
    Async operation
           ↓
    Experience becomes available
           ↓
    Runtime applies experience
           ↓
    DOM changes

Later in the curriculum, the asynchronous operation will become an actual HTTP request to an API.

---

## Important Technical Distinctions

### Synchronous vs Asynchronous

Synchronous:

    Operation A
       ↓
    Operation B
       ↓
    Operation C

Asynchronous:

    Start Operation A
       ↓
    Continue other work
       ↓
    Operation A completes
       ↓
    Handle result

---

### Promise vs async/await

A Promise represents the eventual result of an asynchronous operation.

`async/await` is syntax that makes working with Promises easier to read and reason about.

---

### JSON vs JavaScript Object

JSON is a data interchange format.

A JavaScript object is a native JavaScript data structure.

JSON can be parsed into a JavaScript object.

---

### Runtime vs Experience Service

The runtime coordinates the overall experience flow.

The experience service handles retrieving experience data.

This separation creates a cleaner architecture.

---

## Interview Takeaways

### What is asynchronous JavaScript?

"Asynchronous JavaScript allows an operation to continue independently while the rest of the application can continue executing. When the operation completes, the application handles the result."

### What is a Promise?

"A Promise represents the eventual result of an asynchronous operation. It can be pending, fulfilled, or rejected."

### Why use async/await?

"`async/await` provides a readable way to work with Promises and makes asynchronous control flow easier to understand."

### Does await block the browser?

"No. `await` pauses the execution of the current asynchronous function while the Promise is pending. It does not block the entire browser."

### Why is asynchronous behavior important in MarTech?

"Browser-side MarTech systems frequently depend on network calls and external decision services. Those operations are asynchronous, so the runtime needs to handle delayed responses, errors, and fallback behavior."

### Why separate experience-service.js from runtime.js?

"It separates data retrieval from runtime orchestration. That makes the architecture easier to maintain and allows the data source to change without rewriting the runtime logic."

---

## Day 2 Project Flow

    Browser
       ↓
    Runtime starts
       ↓
    Find target DOM element
       ↓
    Request experience
       ↓
    Experience service
       ↓
    Asynchronous operation
       ↓
    Promise
       ↓
    await result
       ↓
    Experience data
       ↓
    Runtime
       ↓
    DOM mutation
       ↓
    Updated page

---

## Day 2 Architecture

    index.html
         ↓
    Browser DOM
         ↓
    runtime.js
         ↓
    experience-service.js
         ↓
    Async experience retrieval
         ↓
    Promise
         ↓
    Experience object
         ↓
    runtime.js
         ↓
    dom.js
         ↓
    DOM mutation

---

## Day 2 Completion Criteria

- [x] Understand synchronous JavaScript
- [x] Understand asynchronous JavaScript
- [x] Understand callbacks
- [x] Understand Promises
- [x] Understand Promise states
- [x] Use async/await
- [x] Understand try/catch
- [x] Understand finally
- [x] Understand JSON
- [x] Understand JSON parsing
- [x] Distinguish JSON from JavaScript objects
- [x] Create an experience service
- [x] Implement asynchronous experience retrieval
- [x] Connect asynchronous retrieval to the runtime
- [x] Implement fallback behavior
- [x] Understand asynchronous MarTech architecture
- [x] Prepare the runtime for real API communication