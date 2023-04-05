import Chart from 'chart.js/auto'
import { async } from 'regenerator-runtime';

const apiURL = "https://api.nytimes.com/svc/books/v3/lists.json?api-key=73W0ByfNVTxMkbhcn7rMWYUVQGPDej9z&list=hardcover-fiction";

let ctx = document.getElementById("book-chart");

let list = [];
let booksArray = [];


async function fetchData() {
    let response = await fetch(apiURL);
    if (response.ok) {
        let body = await response.json();
        list = body.results;
    } else {
        console.log("Something went wrong");
    }
}

// async function bookList() {
//     await fetchData();
//     booksArray = list.map(book => book.book_details[0].title);
// }

// bookList();
   

// console.log(books());

const books = ["book1", "book2", "book3", "book4", "book5", "book6", "book7", "book8", "book9", "book10", "book11", "book12", "book13", "book14", "book15"];
const weeks = [5, 4, 1, 9, 70, 8, 2, 4, 5, 2, 15, 7, 10, 4, 15];


async function bookFunction() {
    await fetchData();
    booksArray = list.map(book => book.book_details[0].title);
    const bookChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: booksArray,
            datasets: [{
                label: 'Just book stuff',
                data: weeks
            }]
        }
    })
}






export default bookFunction