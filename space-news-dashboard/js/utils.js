//functions that are reused accross application 

//article card creation 
function CreateCard(article) {

    if (article) {

        let cardContainer = document.querySelector(".card-container")
        const artcCard = document.createElement("article")
        artcCard.id = article.id

        cardContainer.appendChild(artcCard)

        const artcTitle = document.createElement("h3")
        artcTitle.innerHTML = article.title

        const artcImg = document.createElement("img")
        artcImg.src = article.image_url;

        const artcSum = document.createElement("p")
        artcSum.innerHTML = article.summary;

        const artcSource = document.createElement("a")
        artcSource.innerHTML = article.news_site
        artcSource.href = article.url;
        artcSource.id = "article-source"


        const artcDate = document.createElement("a")
        const formattedDate = FormatDate(article.published_at);
        artcDate.innerHTML = formattedDate;
        artcDate.id = "article-date"


        artcCard.appendChild(artcTitle);
        artcCard.appendChild(artcImg);
        artcCard.appendChild(artcSum);
        artcCard.appendChild(artcSource);
        artcCard.appendChild(artcDate);

    }
}


//formatting data into appropriate styling 
function FormatDate(currentDate) {

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


function ArticlesPerPage(pageNumber, articles) {

    const startIndex = (pageNumber - 1) * 30
    const endIndex = startIndex + 30;
    let articlesPerPage = []


    for (let i = startIndex; i < endIndex; i++) {
        articlesPerPage.push(articles.results[i]);
    }

    return articlesPerPage

}

function UpdatePages(currentPage, data) {

    const currentArticles = document.querySelector(".card-container");
    currentArticles.innerHTML = ""

    //articles that has to be shown on the current page
    let articles = ArticlesPerPage(currentPage, data);


    //article card loading 
    for (let i = 0; i < articles.length; i++) {
        CreateCard(articles[i])
    }

    scrollTo(0, 0)

}




export { CreateCard, ArticlesPerPage, UpdatePages}