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
    for (const result of list) {
        let listDiv = document.createElement("div");
        listDiv.classList.add("list-div");
        let listImage = document.createElement("img");
        listImage.classList.add("list-image");
        let imageSrc = await fetchGoogleData(result.book_details[0].title, result.isbns[0].isbn13)
        listImage.setAttribute("src", imageSrc);
        let listLink = document.createElement("a");
        listLink.classList.add("list-link");
        listLink.href = result.amazon_product_url;
        listLink.target = "_blank";
        let listTitle = document.createElement("h1");
        listTitle.classList.add("list-title");
        let listAuthor = document.createElement("p");
        listAuthor.classList.add("list-author");
        let listDescription = document.createElement("p");
        listDescription.classList.add("list-description");
        listTitle.innerHTML = result.book_details[0].title;
        listAuthor.innerHTML = `by ${result.book_details[0].author}`;
        listDescription.innerHTML = result.book_details[0].description;
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("image-div");
        let contentDiv = document.createElement("div");
        contentDiv.classList.add("content-div");
        imageDiv.appendChild(listImage);
        listLink.appendChild(listTitle);
        contentDiv.appendChild(listLink);
        contentDiv.appendChild(listAuthor);
        contentDiv.appendChild(listDescription);
        listDiv.appendChild(imageDiv);
        listDiv.appendChild(contentDiv);
        mainContainer.appendChild(listDiv);
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

window.onload = function(e) {
    listName = "list=hardcover-fiction";
    // if (dateOutput) {
    //     listUrl = `${apiURL}&${listName}&published-date=${dateOutput}`;
    // } else {
        listUrl = `${apiURL}&${listName}`;
    // }
    
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    
    e.preventDefault();
    fetchData().then(async () => {
        let canvas = createCanvas();

        booksArray = list.map(book => book.book_details[0].title);
        weeksArray = list.map(week => week.weeks_on_list);
        // const backgroundColor = "#ffff00";
        bookFunction(canvas, booksArray, weeksArray);

        // const dateContent = document.getElementById("date-input");
        // const date = document.createElement("div");
        // date.classList.add("week-of-div");
        // if (dateContent.value) {
        //     date.innerHTML = `You are viewing the list for the week of: ${new Date(dateContent.value).toLocaleDateString("en-US", {
        //         month: 'long',
        //         day: 'numeric',
        //         year: 'numeric',
        //         timeZone: 'UTC'
        //     })}`;
        // }

        // mainContainer.appendChild(date);
        let ListHeader = document.createElement("h1");
        ListHeader.classList.add("list-header");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
    });
};




let hardcoverFictionButton = document.getElementById("hardcover-fiction-button")
hardcoverFictionButton.addEventListener('click', async e => {
    listName = "list=hardcover-fiction";
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
})
    
    let paperbackFictionButton = document.getElementById("paperback-fiction-button")
    paperbackFictionButton.addEventListener('click', async e => {
        listName = "list=trade-fiction-paperback";
    
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
            // const backgroundColor = "#ffa500";
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
    })

let hardcoverNonfictionButton = document.getElementById("hardcover-nonfiction-button")
hardcoverNonfictionButton.addEventListener('click', async e => {
    listName = "list=hardcover-nonfiction";

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
        // const backgroundColor = "#e06f1f";
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
})

let paperbackNonfictionButton = document.getElementById("paperback-nonfiction-button")
paperbackNonfictionButton.addEventListener('click', async e => {
    listName = "list=paperback-nonfiction";

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
        // const backgroundColor = "#ff0000";
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
})

let adviceButton = document.getElementById("advice-button")
adviceButton.addEventListener('click', async e => {
    listName = "list=advice-how-to-and-miscellaneous";

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
        // const backgroundColor = "#e4516a";
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
})

let midGradeHardcoverButton = document.getElementById("mid-grade-hardcover-button")
midGradeHardcoverButton.addEventListener('click', async e => {
    listName = "list=childrens-middle-grade-hardcover";

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
        // const backgroundColor = "#ff00ff"
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
})

let pictureBookButton = document.getElementById("picture-book-button")
pictureBookButton.addEventListener('click', async e => {
    listName = "list=picture-books";

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
        // const backgroundColor = "#8a2be2";
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
})

let childrenSeries = document.getElementById("children-series-button")
childrenSeries.addEventListener('click', async e => {
    listName = "list=series-books";

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
        // const backgroundColor = "#0088ff";
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
})

let youngAdultHardcover = document.getElementById("ya-hardcover-button")
youngAdultHardcover.addEventListener('click', async e => {
    listName = "list=young-adult-hardcover";

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
        // const backgroundColor = "#00ff00";
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



// CHART STUFF


// let ctx = document.getElementById("book-chart");

// let books = list.map(book => {
//     book.book_details[0].title;
// })

// const books = ["book1", "book2", "book3", "book4", "book5"];
// const weeks = [5, 4, 1, 9, 24];


// const bookChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: books,
//         datasets: [{
//             label: 'Just book stuff',
//             data: weeks
//             }]
//     },
// });








// let searchButton = document.getElementById("search-button");
// searchButton.addEventListener('click', async e => {
//     e.preventDefault();
//     await fetchData();
//     createList();
// })





// window.fetchData = fetchData;
// window.createList = createList;