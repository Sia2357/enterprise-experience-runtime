# Day 3 — APIs, HTTP, Request/Response & REST

## Learning Objective

Understand how a browser communicates with an external API using HTTP and how API data can be transformed into an experience that the browser applies to the  page.

---

## Concepts Learned

### 1. API

An API is an interface that allows software systems to communicate.

In this project:

Browser → API endpoint → HTTP response → JavaScript → Experience → DOM

---

### 2. Client and Server

- **Client:** The browser/application making the request
- **Server:** The system receiving the request and returning a response

---

### 3. HTTP Request

An HTTP request can contain:

- HTTP method
- URL / endpoint
- Query parameters
- Headers
- Request body, when applicable

Example:

    GET /posts/1?source=martech
    Accept: application/json

---

### 4. HTTP Methods

Common HTTP methods:

- `GET` — retrieve data
- `POST` — create/send data
- `PUT` — replace a resource
- `PATCH` — partially update a resource
- `DELETE` — delete a resource

---

### 5. Endpoint

An endpoint is a specific API URL used to access a resource or operation.

Project endpoint:

    https://jsonplaceholder.typicode.com/posts/1

---

### 6. Query Parameters

Query parameters provide request-specific context or filtering information.

Example:

    /posts/1?source=martech

- Parameter: `source`
- Value: `martech`

Multiple parameters are separated with `&`.

Example:

    /experience?visitorId=123&channel=web

Here:

- `visitorId = 123`
- `channel = web`

---

### 7. Request Headers

Headers provide communication metadata.

The project sends:

    Accept: application/json

This tells the server that the client expects JSON.

---

### 8. Request Body

A request body carries structured data inside the HTTP request.

For example:

    {
      "visitorId": "123",
      "channel": "web",
      "page": "homepage"
    }

A request body is commonly used with methods such as `POST`, `PUT`, and `PATCH`.

---

### 9. HTTP Response

An HTTP response contains:

- Status code
- Response headers
- Response body

The browser's Network tab was used to inspect the actual HTTP request and response.

---

### 10. HTTP Status Codes

Important statuses learned:

- `200` — successful request
- `201` — resource created
- `204` — successful request with no response body
- `304` — resource not modified / cached response can be used
- `400` — bad request
- `401` — unauthorized
- `403` — forbidden
- `404` — resource not found
- `500` — server-side error

---

### 11. Response Parsing

`fetch()` returns an HTTP `Response` object.

The response body is parsed as JSON using:

    const data = await response.json();

The parsed JSON becomes a JavaScript object.

---

### 12. HTTP Error Handling

The project checks:

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }

A `404` response was intentionally tested.

The runtime then used the existing fallback experience:

    Summer Sale

This demonstrated graceful failure handling.

---

### 13. REST Pattern

REST APIs commonly combine:

- Resource URL
- HTTP method

Example:

    GET    /experiences/123
    POST   /experiences
    PATCH  /experiences/123
    DELETE /experiences/123

The URL identifies the resource and the HTTP method describes the intended operation.

---

## Project Implementation

### API Request

The project now retrieves data using:

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1?source=martech",
        {
            headers: {
                "Accept": "application/json"
            }
        }
    );

### Response Validation

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }

### JSON Parsing

    const data = await response.json();

### Experience Mapping

The external API response is transformed into the project's internal experience structure:

    return {
        experience: "api-test",
        headline: data.title
    };

The runtime then applies:

    setText(
        "#hero-title",
        experience.headline
    );

---

## Architecture

    Browser
       ↓
    Experience Runtime
       ↓
    HTTP GET Request
       ├── Endpoint
       ├── Query Parameter
       └── Request Header
       ↓
    API
       ↓
    HTTP Response
       ├── Status
       ├── Headers
       └── JSON Body
       ↓
    response.json()
       ↓
    Experience Mapping
       ↓
    DOM Mutation

---

## Network Debugging

The browser Network panel was used to verify the actual HTTP communication.

Verified:

- Request URL
- Request method
- Request status
- Request header
- Query parameter
- Response body
- `404` error response

Example successful request:

    Request URL:
    https://jsonplaceholder.typicode.com/posts/1?source=martech

    Request Method:
    GET

The request header was verified as:

    Accept: application/json

A `404` response was also intentionally triggered and observed in the Network panel.

---

## Enterprise MarTech Connection

This project is a simplified learning simulation of a browser communicating with a decision or data service.

The same foundational concepts appear in enterprise MarTech systems such as:

- Personalization platforms
- Experimentation platforms
- Customer Data Platforms
- Analytics systems
- Marketing automation systems

The current API is a public test API and is **NOT Adobe Target**.

The purpose is to learn the underlying browser, HTTP, API, and experience-runtime architecture before implementing Adobe-specific concepts.

---

## MarTech Mental Model

A simplified personalization flow can be represented as:

    Visitor
       ↓
    Browser
       ↓
    Request + Context
       ↓
    Personalization / Decision Service
       ↓
    Decision
       ↓
    Experience Response
       ↓
    Browser Runtime
       ↓
    DOM / Page Experience

---

## Important Technical Distinctions

### Query Parameter vs Request Header

Query parameter:

    ?visitorId=123

Provides request-specific context or filtering information.

Request header:

    Accept: application/json

Provides communication metadata.

---

### Request Body vs Query Parameter

Query parameter:

    /experience?visitorId=123

Request body:

    {
      "visitorId": "123"
    }

Both can carry information, but they are transmitted differently and are used according to the API contract.

---

### HTTP Response vs Parsed JSON

`fetch()` returns an HTTP `Response` object.

    const response = await fetch(url);

The response body is then parsed:

    const data = await response.json();

Therefore:

    HTTP Response
          ↓
    response.json()
          ↓
    JavaScript Object

---

## Interview Takeaways

### 30-Second Explanation

"I built a browser-side experience runtime that retrieves data from an API using fetch, handles HTTP status failures, parses JSON, maps external data into an internal experience object, and applies the resulting experience to the DOM. I also verified the actual request, headers, query parameters, response, and status codes using the browser Network panel."

### Key Interview Explanation

**What is the difference between a query parameter and a request header?**

A query parameter provides request-specific context or filtering information, while a request header provides metadata about how the request should be handled or interpreted.

**What does `response.json()` do?**

It reads the response body and parses JSON into a JavaScript object.

**Why check `response.ok`?**

Because `fetch()` does not automatically throw an error for HTTP error statuses such as `404` or `500`. Checking `response.ok` allows the application to detect unsuccessful HTTP responses and handle them explicitly.

**What happens when the API returns a 404 in this project?**

The code detects that `response.ok` is false, throws an error, and the runtime's `catch` block applies the fallback `"Summer Sale"` experience.

**What is REST?**

REST is a common API design approach where resources are represented by URLs and standard HTTP methods describe operations on those resources.

---

## Day 3 Project Flow

    1. Browser starts runtime
            ↓
    2. Runtime requests an experience
            ↓
    3. experience-service.js calls fetch()
            ↓
    4. Browser sends HTTP GET request
            ↓
    5. Request includes:
       - Endpoint
       - Query parameter
       - Accept header
            ↓
    6. API returns HTTP response
            ↓
    7. Runtime checks response.ok
            ↓
    8. Response body is parsed with response.json()
            ↓
    9. API data is mapped to an experience object
            ↓
    10. Runtime applies the experience to the DOM
            ↓
    11. If the API fails, fallback experience is applied

---

## Day 3 Completion Criteria

- [x] Understand APIs
- [x] Understand client/server communication
- [x] Understand HTTP requests and responses
- [x] Use `GET` with `fetch()`
- [x] Understand API endpoints
- [x] Inspect HTTP responses
- [x] Parse JSON
- [x] Understand request headers
- [x] Understand query parameters
- [x] Understand request bodies
- [x] Understand HTTP status codes
- [x] Implement response error handling
- [x] Test a `404` failure
- [x] Implement fallback behavior
- [x] Understand REST patterns
- [x] Inspect requests using browser Network tools
- [x] Map API data into an internal experience structure
- [x] Apply API-derived experience to the DOM
Day 3 documentation verified.