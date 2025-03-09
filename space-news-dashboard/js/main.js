//main entry point to my application 
import { fetchJSONData } from "./data.js";
import { createCard } from "./utils.js";

document.addEventListener('DOMContentLoaded', function() {
   // Your JavaScript code here

   fetchJSONData().then((data) => {
       if (data) { //working with objects 

         for(let i=0; i<12; i++){
            createCard(data.results[i])
         }
     
       } else {
           console.error("No data fetched or error occurred.");
       }
   })


});