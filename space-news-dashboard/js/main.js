//main entry point to my application 
import { fetchJSONData } from "./data.js";
import { CreateCard, ArticlesPerPage } from "./utils.js";

let currentPage = 1; 

document.addEventListener('DOMContentLoaded', function() {
   // Your JavaScript code here

   fetchJSONData().then((data) => {
       if (data) { //working with objects 
         
         //pagination 
         
         //calculating total amount of pages according to dataset object length and number of cards to be shown per page 
         const totalPages = Math.ceil(data.results.length/30);
         
         //articles that has to be shown on the current page
        let articles  = ArticlesPerPage(currentPage, data);


        //article card loading 
         for(let i=0; i<articles.length; i++){
            CreateCard(articles[i])
         }
     
       } else {
           console.error("No data fetched or error occurred.");
       }
   })


});