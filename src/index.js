// https://api.nytimes.com/svc/books/v3/reviews.json

// const { create } = require("core-js/core/object");
// const { async } = require("regenerator-runtime");

const apiURL = "https://api.nytimes.com/svc/books/v3/lists.json?api-key=73W0ByfNVTxMkbhcn7rMWYUVQGPDej9z";

let list = [];

let listName = "";

let searchInput = document.querySelector("#search-input");
let mainContainer = document.querySelector("main");
let listUrl = "";

async function fetchData() {
    let response = await fetch(listUrl);
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
        let listDiv = document.createElement("div");
        let listTitle = document.createElement("h1");
        let listAuthor = document.createElement("p");
        let listDescription = document.createElement("p");
        listTitle.innerHTML = result.book_details[0].title;
        listAuthor.innerHTML = result.book_details[0].author;
        listDescription.innerHTML = result.book_details[0].description;
        listDiv.appendChild(listTitle);
        listDiv.appendChild(listAuthor);
        listDiv.appendChild(listDescription);
        mainContainer.appendChild(listDiv);
    })
}




let hardcoverFictionButton = document.getElementById("hardcover-fiction-button")
hardcoverFictionButton.addEventListener('click', async e => {
    listName = "list=hardcover-fiction";
    listUrl = `${apiURL}&${listName}`
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
        e.preventDefault();
        await fetchData();

        let ListHeader = document.createElement("h1");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
    
})

let paperbackFictionButton = document.getElementById("paperback-fiction-button")
paperbackFictionButton.addEventListener('click', async e => {
    listName = "list=trade-fiction-paperback";
    listUrl = `${apiURL}&${listName}`
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
        e.preventDefault();
        await fetchData();

        let ListHeader = document.createElement("h1");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
})

let hardcoverNonfictionButton = document.getElementById("hardcover-nonfiction-button")
hardcoverNonfictionButton.addEventListener('click', async e => {
    listName = "list=hardcover-nonfiction";
    listUrl = `${apiURL}&${listName}`
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
        e.preventDefault();
        await fetchData();

        let ListHeader = document.createElement("h1");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
})

let paperbackNonfictionButton = document.getElementById("paperback-nonfiction-button")
paperbackNonfictionButton.addEventListener('click', async e => {
    listName = "list=paperback-nonfiction";
    listUrl = `${apiURL}&${listName}`
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
        e.preventDefault();
        await fetchData();

        let ListHeader = document.createElement("h1");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
})

let adviceButton = document.getElementById("advice-button")
adviceButton.addEventListener('click', async e => {
    listName = "list=advice-how-to-and-miscellaneous";
    listUrl = `${apiURL}&${listName}`
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
        e.preventDefault();
        await fetchData();

        let ListHeader = document.createElement("h1");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
})

let midGradeHardcoverButton = document.getElementById("mid-grade-hardcover-button")
midGradeHardcoverButton.addEventListener('click', async e => {
    listName = "list=childrens-middle-grade-hardcover";
    listUrl = `${apiURL}&${listName}`
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
        e.preventDefault();
        await fetchData();

        let ListHeader = document.createElement("h1");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
})

let pictureBookButton = document.getElementById("picture-book-button")
pictureBookButton.addEventListener('click', async e => {
    listName = "list=picture-books";
    listUrl = `${apiURL}&${listName}`
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
        e.preventDefault();
        await fetchData();

        let ListHeader = document.createElement("h1");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
})

let childrenSeries = document.getElementById("children-series-button")
childrenSeries.addEventListener('click', async e => {
    listName = "list=series-books";
    listUrl = `${apiURL}&${listName}`
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
        e.preventDefault();
        await fetchData();

        let ListHeader = document.createElement("h1");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
})

let youngAdultHardcover = document.getElementById("ya-hardcover-button")
youngAdultHardcover.addEventListener('click', async e => {
    listName = "list=young-adult-hardcover";
    listUrl = `${apiURL}&${listName}`
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
        e.preventDefault();
        await fetchData();

        let ListHeader = document.createElement("h1");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
})





// let searchButton = document.getElementById("search-button");
// searchButton.addEventListener('click', async e => {
//     e.preventDefault();
//     await fetchData();
//     createList();
// })





// window.fetchData = fetchData;
// window.createList = createList;