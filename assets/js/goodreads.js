"use strict";

const api_key = "tFNCKRwqZ35i7OyfOa7QA";

function searchBooks(term) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://www.goodreads.com/search/index.xml?key=${api_key}&q=${term}`);
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.addEventListener("load", returnBookSearch);
    request.send();
}

function returnBookSearch() {
    let data = JSON.parse(event.target.responseText);
    console.log(data);
}

module.exports = {searchBooks};