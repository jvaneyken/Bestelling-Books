import Chart from 'chart.js/auto'


// const apiURL = "https://api.nytimes.com/svc/books/v3/lists.json?api-key=73W0ByfNVTxMkbhcn7rMWYUVQGPDej9z&list=hardcover-fiction";

// let ctx = document.getElementById("book-chart");

// let list = [];
// let booksArray = [];
// let weeksArray = []; 


// async function fetchData() {
//     let response = await fetch(apiURL);
//     if (response.ok) {
//         let body = await response.json();
//         list = body.results;
//     } else {
//         console.log("Something went wrong");
//     }
// }

// async function bookList() {
//     await fetchData();
//     booksArray = list.map(book => book.book_details[0].title);
// }

// bookList();
   

// console.log(books());

// const books = ["book1", "book2", "book3", "book4", "book5", "book6", "book7", "book8", "book9", "book10", "book11", "book12", "book13", "book14", "book15"];
// const weeks = [5, 4, 1, 9, 70, 8, 2, 4, 5, 2, 15, 7, 10, 4, 15];


function bookFunction(ctx, labels, data) {
    const bookChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Weeks on Bestseller List',
                data: data,
                // backgroundColor: [
                //     "rgba(255, 99, 132, 0.2)",
                //     "rgba(54, 162, 235, 0.2)",
                //     "rgba(255, 206, 86, 0.2)",
                //     "rgba(75, 192, 192, 0.2)",
                //     "rgba(153, 102, 255, 0.2)"
                //     ],
                borderColor: [
                    "rgb(0, 0, 0)"
                    ],
                    borderWidth: 1
            }]
        }
    })
}





// async function bookFunction() {
//     await fetchData();
//     booksArray = list.map(book => book.book_details[0].title);
//     weeksArray = list.map(week => week.weeks_on_list);
//     const bookChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: booksArray,
//             datasets: [{
//                 label: 'Weeks on Bestseller List',
//                 data: weeksArray,
//                 backgroundColor: [
//                     "rgba(255, 99, 132, 0.2)",
//                     "rgba(54, 162, 235, 0.2)",
//                     "rgba(255, 206, 86, 0.2)",
//                     "rgba(75, 192, 192, 0.2)",
//                     "rgba(153, 102, 255, 0.2)"
//                     ],
//                 borderColor: [
//                     "rgba(255, 99, 132, 1)",
//                     "rgba(54, 162, 235, 1)",
//                     "rgba(255, 206, 86, 1)",
//                     "rgba(75, 192, 192, 1)",
//                     "rgba(153, 102, 255, 1)",
//                     ],
//                     borderWidth: 1
//             }]
//         }
//     })
// }




export default bookFunction