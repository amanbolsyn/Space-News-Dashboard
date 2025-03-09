//main entry point to my application 
import { fetchJSONData } from "./data.js";
import { CreateCard, ArticlesPerPage } from "./utils.js";

let currentPage = 1;

document.addEventListener('DOMContentLoaded', function () {
  // Your JavaScript code here

  const forwardBttn = document.getElementById("forward-pagination")
  const backBttn = document.getElementById("back-pagination")

  fetchJSONData().then((data) => {
    if (data) { //working with objects 

      //pagination 

      //calculating total amount of pages according to dataset object length and number of cards to be shown per page 
      const totalPages = Math.ceil(data.results.length / 30);

      //articles that has to be shown on the current page
      let articles = ArticlesPerPage(currentPage, data);


      //article card loading 
      for (let i = 0; i < articles.length; i++) {
        CreateCard(articles[i])
      }


      forwardBttn.addEventListener("click", () => {

        if (currentPage <= totalPages) {
          const currentArticles = document.querySelector(".card-container");
          currentArticles.innerHTML = ""


          currentPage++

          //articles that has to be shown on the current page
          let articles = ArticlesPerPage(currentPage, data);


          //article card loading 
          for (let i = 0; i < articles.length; i++) {
            CreateCard(articles[i])
          }

          scrollTo(0, 0)
        }
      })

      backBttn.addEventListener("click", () => {
        if (currentPage !== 1) {
          const currentArticles = document.querySelector(".card-container");
          currentArticles.innerHTML = ""


          currentPage--

          //articles that has to be shown on the current page
          let articles = ArticlesPerPage(currentPage, data);


          //article card loading 
          for (let i = 0; i < articles.length; i++) {
            CreateCard(articles[i])
          }

          scrollTo(0, 0)
        }
      })







    } else {
      console.error("No data fetched or error occurred.");
    }
  })


});



