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
            return null;  // Return null if there’s an errore
        });
}


function RetrieveArticles(data) {

    const searchStr = document.getElementById("search-input").value.trim().toLowerCase();
    let articles = { results: [] };

    //search logic
    if (searchStr !== " ") {
        //finding matched article titles by searching from search input
        for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].title.toLowerCase().search(searchStr) !== -1) {
                articles.results.push(data.results[i])
            }
        }
    }





    return articles
}





export { fetchJSONData, RetrieveArticles };