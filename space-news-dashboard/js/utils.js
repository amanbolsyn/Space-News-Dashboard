//functions that are reused accross application 

//card creation
function createCard(article) {

    if (article) {

        let cardContainer = document.querySelector(".card-container")
        const artcCard = document.createElement("article")

        cardContainer.appendChild(artcCard)

        const artcTitle = document.createElement("h3")
        artcTitle.innerHTML = article.title

        const artcImg = document.createElement("img")
        artcImg.src = article.image_url;

        const  artcSum = document.createElement("p")
        artcSum.innerHTML = article.summary;

        const artcSource= document.createElement("a")
        artcSource.innerHTML = article.news_site
        artcSource.href = article.url;
        artcSource.id = "article-source"


        const artcDate = document.createElement("a")
        const formattedDate = FormatDate(article.published_at);
        artcDate.innerHTML =  formattedDate;
        artcDate.id = "article-date"

        
        artcCard.appendChild(artcTitle);
        artcCard.appendChild(artcImg);
        artcCard.appendChild(artcSum);
        artcCard.appendChild(artcSource);
        artcCard.appendChild(artcDate);
    }
}


function FormatDate(currentDate){

     const date = new Date(currentDate);
     const options = {
        year: '2-digit',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
     }

     const formattedDate = date.toLocaleString('en-GB', options)

    return formattedDate; 
}

export { createCard }