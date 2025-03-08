//functions related to fetching data from json file

function fetchJSONData() {
    fetch('./assets/data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();  
        })
        .then(data => console.log(data))  
        .catch(error => console.error('Failed to fetch data:', error)); 
}


export {fetchJSONData}