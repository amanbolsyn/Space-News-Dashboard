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

        const artcDate = document.createElement("a")
        artcDate.innerHTML = article.published_at;

        
        artcCard.appendChild(artcTitle);
        artcCard.appendChild(artcImg);
        artcCard.appendChild(artcSum);
        artcCard.appendChild(artcSource);
        artcCard.appendChild(artcDate);


    }
}

export { createCard }