import bookFunction from "./scripts/data_chart";

const nyt_api_key=process.env.NYT_API_KEY;
const google_api_key=process.env.GOOGLE_API_KEY;

const apiURL = `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${nyt_api_key}`;

let list = [];
let booksArray = [];
let weeksArray = [];


let imagesArray = [];

let listName = "";

let dateOutput = null;

let listButton = document.getElementById("list-button");
listButton.classList.add("clicked");

// let searchInput = document.querySelector("#search-input");
let dateInput = document.getElementById("date-input");
dateInput.addEventListener('input', e => {
    e.preventDefault();
    dateOutput = e.target.value;
})


// if e.target.value is true, use value in url, else use 'current'

let mainContainer = document.querySelector("main");
let canvasContainer = document.getElementById("canvas-container");

canvasContainer.classList.add("hidden");

let listUrl = "";


async function fetchData() {
    let response = await fetch(listUrl);
    if (response.ok) {
        let body = await response.json();
        list = body.results;
    }
}

async function fetchGoogleData(bookTitle, isbn13) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}+isbn:${isbn13}&key=${google_api_key}`);
    if (response.ok) {
        const body = await response.json();
        const imageLink = body.items[0].volumeInfo.imageLinks.smallThumbnail;
        return imageLink;
    }
}

async function createList() {
    const template = document.querySelector('#list-item-template');
    for (const result of list) {
        const clone = template.content.cloneNode(true);
        const imageSrc = await fetchGoogleData(result.book_details[0].title, result.isbns[0].isbn13)
        const listImage = clone.querySelector('.list-image');
        listImage.setAttribute("src", imageSrc);
        listImage.setAttribute("alt", result.book_details[0].title);
        const listLink = clone.querySelector('.list-link');
        listLink.setAttribute("href", result.amazon_product_url);
        const listTitle = clone.querySelector('.list-title');
        listTitle.textContent = result.book_details[0].title;
        const listAuthor = clone.querySelector('.list-author');
        listAuthor.textContent = `by ${result.book_details[0].author}`;
        const listDescription = clone.querySelector('.list-description');
        listDescription.textContent = result.book_details[0].description;
        mainContainer.appendChild(clone);
    }
}


function createCanvas() {
    while (canvasContainer.firstChild) {
        canvasContainer.removeChild(canvasContainer.firstChild);
    }
    
    let canvas = document.createElement("canvas");
    canvas.setAttribute('id', 'book-chart');
    canvasContainer.appendChild(canvas);
    return canvas;
}

async function filterByGenre(e) {
    if (e.target.dataset) {
        listName = `list=${e.target.dataset.url}`;
    } else {
        listName = "list=hardcover-fiction";
    }
    if (dateOutput) {
        listUrl = `${apiURL}&${listName}&published-date=${dateOutput}`;
    } else {
        listUrl = `${apiURL}&${listName}`;
    }

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    e.preventDefault();
    await fetchData();
    let canvas = createCanvas();

    booksArray = list.map(book => book.book_details[0].title);
    weeksArray = list.map(week => week.weeks_on_list);
    // const backgroundColor = "#ffff00";
    bookFunction(canvas, booksArray, weeksArray);

    const dateContent = document.getElementById("date-input");
    const date = document.createElement("div");
    date.classList.add("week-of-div");
    if (dateContent.value) {
        date.innerHTML = `You are viewing the list for the week of: ${new Date(dateContent.value).toLocaleDateString("en-US", {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
                timeZone: 'UTC'
            })}`;
        }
        
    mainContainer.appendChild(date);
    let ListHeader = document.createElement("h1");
    ListHeader.classList.add("list-header");
    ListHeader.innerHTML = list[0].display_name;
    mainContainer.appendChild(ListHeader);
    createList();
}

window.onload = function(e) {
    filterByGenre(e)
};


const sideBarButtons = document.querySelectorAll('.sidebar-buttons');
sideBarButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
        filterByGenre(e);
    })
})

// let listButton = document.getElementById("list-button");
listButton.addEventListener('click', e => {
    e.preventDefault();
    chartButton.classList.remove("clicked");
    listButton.classList.add("clicked");
    mainContainer.classList.remove("hidden");
    canvasContainer.classList.add("hidden");
})

let chartButton = document.getElementById("chart-button");
chartButton.addEventListener('click', e => {
    e.preventDefault();
    listButton.classList.remove("clicked");
    chartButton.classList.add("clicked");
    canvasContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
})