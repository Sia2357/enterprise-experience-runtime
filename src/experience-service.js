export async function getExperience() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1?source=martech",
            {
        headers: {
            "Accept": "application/json"
        }
    }
    );

    console.log("HTTP response:", response);
    if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
}

    const data = await response.json();

    return {
        experience: "api-test",
        headline: data.title
    };
}