# Book Finder
[Deployed Project](https://gchar031.github.io/book-finder/)
## Description

Using the Google Books API I can retrieve information about a book that the user searches for. This information includes the author, title, year the book was published, the plot of the book, and external links provided to retrieve more information about the book. In addition I also plan to use another API that generates random anime quotes at the bottom of the page.

## API and Data Sample
This section will includes snippet from my API request for Google Books and Animechan.
- Google Books [API Docs](https://developers.google.com/books/docs/v1/using)
- Animechan [API Docs](https://animechan.vercel.app/)

Google Endpoint & Parameters
https://www.googleapis.com/books/v1/volumes?q=intitle:harry&key=AIzaSyApQSdy4EmsF3dMV0XrbvCJ6HQAc1yqhlw
```json
{
    "kind": "books#volumes",
    "totalItems": 493,
    "items": [
        {
            "kind": "books#volume",
            "id": "4wQgevKtp7cC",
            "etag": "evFV/qzjPrs",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/4wQgevKtp7cC",
            "volumeInfo": {
                "title": "Horrible Hands Harry",
                "authors": [
                    "Betty Cernech"
                ],
                "publisher": "AuthorHouse",
                "publishedDate": "2011-11",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781467061391"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1467061395"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
```

Animechan Endpoint & Parameters
https://animechan.vercel.app/api/random
```json
{
    "anime": "Jinrui wa Suitai Shimashita",
    "character": "Watashi",
    "quote": "I always thought of humans as intelligent dominoes, since they tend to follow each other."
}
```

## Wireframes

[Wireframe](https://wireframe.cc/pro/pp/125644bb5441662)

![Desktop](/images/Screen%20Shot%202021-05-17%20at%209.55.40%20AM.png)
![Mobile](/images/Screen%20Shot%202021-05-17%20at%209.58.35%20AM.png)

### MVP/PostMVP

#### MVP 
- [x] Allow the user to search books by title.
- [x] Generate picture of book along with external link to see a preview of the book on Google Books.
- [x] Have the plot, year, publisher and edition display via modal when the user selects a book.
- [x] Generate random anime quotes in the webpage at the footer.

#### PostMVP  
- [x] Have prices included with a link to the Google Book Store to purchase books.
- [x] Search by author and ISBN number.
- [ ] Allow user to read the preview of the book in the site through Google.
- [ ] Allow user to login into their Google Account to view thier bookshelves.

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|May 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|May 17| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|May 18| Actual Code & Functonality Features (MVP) | Complete
|May 19| MVP Functionality & CSS Design  | Complete
|May 20| CSS Design & Debugging | Complete
|May 21| Presentations | Complete

## Priority Matrix

![](/images/Screen%20Shot%202021-05-17%20at%2010.09.44%20AM.png)

## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 2hrs| 1hr | 1hr |
| API Call | H | 1hr| 2.5hrs | 2.5hrs |
| Search Functionality | H | 3hrs| 2hrs | 2hrs |
| Data Iteration| H | 3hrs| 2hrs | 2hrs |
| Event Listeners | H | 2hrs| 2hrs | 2hrs |
| Accessing API Data | H | 3hrs| 1hr | 1hr |
| Working with Anime Quote API | L | 2hrs| 1hr | 1hr |
| Structuring API Information into Webpage | H | 3hrs| 2hrs | 2hrs |
| Debugging & Error Handling | H | 3hrs| 2.5hrs | 2.5hrs |
| CSS Image Design | L | 3hrs| 2hrs | 2hrs |
| CSS Webpage Header Design | L | 3hrs| 1hr | 1hr |
| CSS Modal Design | H | 3hrs| 3hrs | 3hrs |
| CSS Webpage Data Design | H | 3hrs| 2hrs | 2hrs |
| CSS Webpage Footer Design | L | 3hrs| 1hr | 1hr |
| Total | H | 39hrs| 32hrs | 32hrs |


## Code Snippet
```
if (book.volumeInfo.industryIdentifiers != undefined) {
      if (book.volumeInfo.industryIdentifiers[1] == undefined) {
        isbn = book.volumeInfo.industryIdentifiers[0].identifier
        isbn13 = 'N/A'
      }
      else if (book.volumeInfo.industryIdentifiers[0].identifier != undefined && book.volumeInfo.industryIdentifiers[1].identifier != undefined) {
        isbn = book.volumeInfo.industryIdentifiers[0].identifier
        isbn13 = book.volumeInfo.industryIdentifiers[1].identifier
      }
    }else {
      isbn = "N/A";
      isbn13 = "N/A";
    }
```
## Change Log
- Reset was no longer added because with every new search the old results were cleared from the webpage through code.
- Navigation bar with links to book results and information was no longer added and instead modals were user to show more information about each book.
- For POST-MVP Google Preivew could not be used due to an constructor error.
- Implemented two Post MVP items to project: expand search options to ISBN and author and prices linked to Google's Book Store.
- Added more description for each book: ISBN, ISBN-13, page number, and published date.
- Increased maximum results to 40 from the default of 10 results.
- Apperanced of webpage changed to display the more important information that do not take much space and hide the rest of the information of a book in its' modal.
