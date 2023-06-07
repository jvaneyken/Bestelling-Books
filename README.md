# Bestselling-Books

![Screen Shot 2023-06-06 at 4 44 30 PM](https://github.com/jvaneyken/Bestelling-Books/assets/31025639/e12b6cdf-562d-436e-9f5f-7cd7c62eb896)

Bestselling Books is a JavaScript project that leverages the New York Times Books API to fetch data on NYT Bestsellers and present it through a data visualization. The project focuses on displaying the bestseller list categorized by genre. The Google Books API was also used to pull additional data on each book

### Features
- Weekly Updates: The bestsellers list is updated on a weekly basis, allowing users to explore past weeks or view the current week's releases by default.
- Genre Filtering: Users can easily filter the results by selecting different genres using the buttons available on the results page.
- Weeks on Bestseller List: Users can access a chart to visualize how long a book has been on the bestseller list by clicking on the Chart button.
- Interactive Chart: The chart is created using the Chart.js library, providing an interactive display of the book's duration on the bestseller list.


## Live Site

https://jvaneyken.github.io/Bestelling-Books/


## Technologies, Libraries, APIs

- The New York Times Books API: Pulled bestseller lists and data associated with each book
- The Google Books API: Used the isb number from the NYT API to grab the associated data from each book and enables the showing of images and links to buy on amazon
- Chart.js: Utilized this open-source Javascript library to render charts showing data from each list
- Webpack and Babel to bundle and transpile the source JavaScript code
- npm to manage project dependencies

## Code Snippets

### Example of button that filters API data by genre
```js
// Get the button element with id "hardcover-fiction-button"
let hardcoverFictionButton = document.getElementById("hardcover-fiction-button");

// Add a click event listener to the button
hardcoverFictionButton.addEventListener('click', async e => {
  
    // Set the default list name for hardcover fiction
    let listName = "list=hardcover-fiction";

    // Check if there is a date output
    if (dateOutput) {
        // If there is a date output, append the date parameter to the API URL
        listUrl = `${apiURL}&${listName}&published-date=${dateOutput}`;
    } else {
        // If there is no date output, use the default API URL without the date parameter
        listUrl = `${apiURL}&${listName}`;
    }

    // Clear the main container by removing all child elements
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    // Prevent the default event behavior
    e.preventDefault();
    // Asynchronously fetch data from the New York Times Books API
    await fetchData();
    // Call the createCanvas function, which creates a canvas element
    let canvas = createCanvas();

    // Extract book titles and weeks on the list from the fetched data
    booksArray = list.map(book => book.book_details[0].title);
    weeksArray = list.map(week => week.weeks_on_list);
    
    // Set the background color for the book function, which is then passed to the chart
    const backgroundColor = "#ffff00";
    // Creates a chart using Chart.js and passes it the book data from the NYT API
    bookFunction(canvas, booksArray, weeksArray, backgroundColor);

    // Get the date input element and create a div for displaying the selected date
    const dateContent = document.getElementById("date-input");
    const date = document.createElement("div");
    date.classList.add("week-of-div");
    
    // If the date input element has a date value, display it in the selected format
    if (dateContent.value) {
        date.innerHTML = `You are viewing the list for the week of: ${new Date(dateContent.value).toLocaleDateString("en-US", {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC'
        })}`;
    }

    // Append the date div to the main container
    mainContainer.appendChild(date);

    // Create a header element for the list
    let ListHeader = document.createElement("h1");
    ListHeader.classList.add("list-header");
    ListHeader.innerHTML = list[0].display_name;

    // Append the list header to the main container
    mainContainer.appendChild(ListHeader);

    // Create the list
    createList();
})
```
### Function that creates a new Chart instance
```js
function bookFunction(ctx, labels, data, backgroundColor) {
    // Create a new Chart instance with the provided rendering context
    const bookChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // Set the labels for the x-axis
            labels: labels,
            datasets: [{
                // Set the label for the dataset
                label: 'Weeks on Bestseller List',
                // Set the data values for the y-axis
                data: data,
                // Set the background color for the bars
                backgroundColor: backgroundColor,
                borderColor: [
                    // Set the border color for the bars
                    "rgb(0, 0, 0)"
                ],
                borderWidth: 1 // Set the border width for the bars
            }]
        },
        options: {
            maintainAspectRatio: false // Disable aspect ratio maintenance for the chart
        }
    });
}
```


