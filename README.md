# Bestelling-Books

Bestselling Books is a data visualization project utilizing the New York Times Books API to pull data on NYT Bestsellers and display it by genre. The bestsellers list is released weekly and users can filter results by week or see the current weeks release by default. The buttons on the side of the results page for various genres allow users to tab through the various available genres.

Users are also be able to see information about how long a book has been on the bestseller list. This is availabe in a chart that can be accessed by clicking on the Chart button. The chart is displayed using Chart.js

https://jvaneyken.github.io/Bestelling-Books/

 - Discussion of technologies used



Technologies, Libraries, APIs

- The New York Times Books API to provide the data
- Chart.js for rendering charts
- Webpack and Babel to bundle and transpile the source JavaScript code
- npm to manage project dependencies

```js
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
        // createCanvas();

        booksArray = list.map(book => book.book_details[0].title);
        weeksArray = list.map(week => week.weeks_on_list);
        bookFunction(canvas, booksArray, weeksArray);


        let ListHeader = document.createElement("h1");
        ListHeader.classList.add("list-header");
        ListHeader.innerHTML = list[0].display_name;
        mainContainer.appendChild(ListHeader);
        createList();
})```


