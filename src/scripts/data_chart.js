const { async } = require("regenerator-runtime");

const apiURL = "https://api.nytimes.com/svc/books/v3/lists.json?api-key=73W0ByfNVTxMkbhcn7rMWYUVQGPDej9z";

let ctx = document.getElementById("book-chart");

let list = [];





async function fetchData() {
    let response = await fetch(apiURL);
    if (response.ok) {
        let body = await response.json();
        list = body.results;
    } else {
        console.log("Something went wrong");
    }
}

let books = list.map(book => {
    book.book_details[0].title;
})


let bookChart = new Chart(ctx, {
    type: 'bar',
    data: {}
})