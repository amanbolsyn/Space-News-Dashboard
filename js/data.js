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
        .then((data) => { return data })
        .catch(error => {
            console.error('Failed to fetch data:', error);
            return null;  // Return null if there’s an error
        });
}


function RetrieveArticles(data) {

    const searchStr = document.getElementById("search-input").value.trim().toLowerCase();
    let articles = { results: [] };

    //search logic
    //finding matched article titles by searching from search input
    for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].title.toLowerCase().search(searchStr) !== -1) {
            articles.results.push(data.results[i])
        }
    }

    //title sorting logic
    const titleSortVal = document.getElementById("title-sort").value;

    // Sort the array based on the dropdown value
    if (titleSortVal === "A to Z") {
        articles.results.sort((a, b) => a.title.localeCompare(b.title)); // Ascending alphabetical order
    } else if (titleSortVal === "Z to A") {
        articles.results.sort((a, b) => b.title.localeCompare(a.title)); // Descending alphabetical order
    }

    const dateSortVal = document.getElementById("date-sort").value;

    // Sort the array based on the date property
    if (dateSortVal === "oldest") {
        // Sort in ascending order (oldest to newest)
        articles.results.sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
    } else if (dateSortVal === "newest") {
        // Sort in descending order (newest to oldest)
        articles.results.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    }

    const sourceSortVal = document.getElementById("source-sort").value;

    if (sourceSortVal) {
        let filteredArticles = { results: [] };
        for (let i = 0; i < data.results.length; i++) {
            if (sourceSortVal === articles.results[i].news_site) {
                filteredArticles.results.push(data.results[i])
            }
        }

        return filteredArticles
    }

    return articles

}


export { fetchJSONData, RetrieveArticles };