//functions that are reused accross application 

//card creation
function createCard(article) {

    if (article) {

        let cardContainer = document.querySelector(".card-container")
        const artcCard = document.createElement("article")

        cardContainer.appendChild(artcCard)

        const titleHead = document.createElement("h3")
        titleHead.innerHTML = article.title

        artcCard.appendChild(titleHead)


    }
}

export { createCard }