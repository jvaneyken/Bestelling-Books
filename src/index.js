// https://api.nytimes.com/svc/books/v3/reviews.json

const apiURL = "https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=73W0ByfNVTxMkbhcn7rMWYUVQGPDej9z";

let list = [];

let searchInput = document.querySelector("#search-input")

async function fetchData() {
    console.log(searchInput.value);
    let response = await fetch(apiURL + `&bestsellers-date=${searchInput.value}-01-01`);
    if (response.ok) {
        let body = await response.json();
        list = body.results;
    }
    else {
        console.log("something went wrong")
        }
}

function createList() {
    list.forEach(result => {
        let listItem = document.createElement("li");
        listItem.innerHTML = result.book_details[0].title;
        document.querySelector("main").appendChild(listItem);
    })
}

let searchButton = document.getElementById("search-button");
searchButton.addEventListener('click', async e => {
    e.preventDefault();
    await fetchData();
    createList();
})

// window.fetchData = fetchData;
// window.createList = createList;