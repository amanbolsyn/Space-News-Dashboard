//functions for fetching data

async function fetchJSONData() {
    let filePath = './assets/data/data.json';
    return fetch(filePath)

    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();  // Resolve the promise with the JSON data
    })
    .then((data) => {return data})
    .catch(error => {
        console.error('Failed to fetch data:', error);
        return null;  // Return null if there’s an error
    });
}

export { fetchJSONData };