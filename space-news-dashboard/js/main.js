//main entry point to my application 
import { fetchJSONData, RetrieveArticles } from "./data.js";
import { CreateCard, ArticlesPerPage, UpdatePages, DisplayRetrivedArtc } from "./utils.js";



const forwardPageBttn = document.getElementById("forward-pagination")
const backPageBttn = document.getElementById("back-pagination")
const firstPageBttn = document.getElementById("first-pagination")
const lastPageBttn = document.getElementById("last-pagination")
const resetSortBttn = document.getElementById("reset-button")

const titleSortMenu = document.getElementById("title-sort");
const dateSortMenu = document.getElementById("date-sort");
const sourceSortMenu = document.getElementById("source-sort");

const searchInput = document.getElementById("search-input");


document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 1;
    let retrivedArticles;


    fetchJSONData().then((data) => {
        if (data) { //working with objects 

            //calculating total amount of pages according to dataset object length and number of cards to be shown per page 
            let totalPages = Math.ceil(data.results.length / 30);

            //articles that has to be shown on the current page
            let articles = ArticlesPerPage(currentPage, data);


            //article card loading 
            for (let i = 0; i < articles.length; i++) {
                CreateCard(articles[i])
            }


            //article search
            searchInput.addEventListener("input", () => {
                retrivedArticles = RetrieveArticles(data)

                //calculating total amount of pages according to dataset object length and number of cards to be shown per page 
                totalPages = Math.ceil(retrivedArticles.results.length / 30);

                DisplayRetrivedArtc(retrivedArticles)

            });


            //sorting by title in aplhabetical order or vice versa
            titleSortMenu.addEventListener("input", () => {
                retrivedArticles = RetrieveArticles(data)

                //calculating total amount of pages according to dataset object length and number of cards to be shown per page 
                totalPages = Math.ceil(retrivedArticles.results.length / 30);

                DisplayRetrivedArtc(retrivedArticles)

            })

            //sorting by date from newest to oldest
            dateSortMenu.addEventListener("input", () => {
                retrivedArticles = RetrieveArticles(data)

                //calculating total amount of pages according to dataset object length and number of cards to be shown per page 
                totalPages = Math.ceil(retrivedArticles.results.length / 30);

                DisplayRetrivedArtc(retrivedArticles)

            })

            //filtering by article source
            sourceSortMenu.addEventListener("input", () => {
                
                retrivedArticles = RetrieveArticles(data)
                //calculating total amount of pages according to dataset object length and number of cards to be shown per page 
                totalPages = Math.ceil(retrivedArticles.results.length / 30);

                DisplayRetrivedArtc(retrivedArticles)

            })

            //reset sorting and filter dropdowns
            resetSortBttn.addEventListener("click", () => {

                titleSortMenu.selectedIndex = 0;
                dateSortMenu.selectedIndex = 0;
                sourceSortMenu.selectedIndex = 0;

                retrivedArticles = RetrieveArticles(data);

                //calculating total amount of pages according to dataset object length and number of cards to be shown per page 
                totalPages = Math.ceil(retrivedArticles.results.length / 30);

                DisplayRetrivedArtc(retrivedArticles)

            })


            forwardPageBttn.addEventListener("click", () => {

                if (currentPage !== totalPages) {
                    currentPage++
                    if (retrivedArticles === undefined) {
                        UpdatePages(currentPage, data)
                    } else {
                        UpdatePages(currentPage, retrivedArticles)
                    }
                }
            })

            backPageBttn.addEventListener("click", () => {
                if (currentPage !== 1) {
                    currentPage--
                    if (retrivedArticles === undefined) {
                        UpdatePages(currentPage, data)
                    } else {
                        UpdatePages(currentPage, retrivedArticles)
                    }
                }
            })

            firstPageBttn.addEventListener("click", () => {
                if (currentPage !== 1) {
                    currentPage = 1
                    if (retrivedArticles === undefined) {
                        UpdatePages(currentPage, data)
                    } else {
                        UpdatePages(currentPage, retrivedArticles)
                    }

                }
            })

            lastPageBttn.addEventListener("click", () => {
                if (currentPage !== totalPages) {
                    currentPage = totalPages
                    if (retrivedArticles === undefined) {
                        UpdatePages(currentPage, data)
                    } else {
                        UpdatePages(currentPage, retrivedArticles)
                    }

                }
            })

        } else {
            console.error("No data fetched or error occurred.");
        }
    })


});



