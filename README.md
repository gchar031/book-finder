# Book Finder

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
- [ ] Allow the user to search books by title.
- [ ] Generate picture of book along with external link to see a preview of the book on Google Books.
- [ ] Have the plot, year, publisher and edition display via modal when the user selects a book.
- [ ] Generate random anime quotes in the webpage at the footer.

#### PostMVP  
- [ ] Have prices included with a link to the Google Book Store to purchase books.
- [ ] Search by author and ISBN number.
- [ ] Allow user to read the preview of the book in the site through Google.
- [ ] Allow user to login into their Google Account to view thier bookshelves.

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|May 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|May 17| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|May 18| Actual Code & Functonality Features (MVP) | Incomplete
|May 19| MVP Functionality & CSS Design  | Incomplete
|May 20| CSS Design & Debugging | Incomplete
|May 21| Presentations | Incomplete

## Priority Matrix

![](/images/Screen%20Shot%202021-05-17%20at%2010.09.44%20AM.png)

## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 2hrs| 3.5hrs | 3.5hrs |
| API Call | H | 1hr| 2.5hrs | 2.5hrs |
| Search Functionality | H | 3hrs| 2.5hrs | 2.5hrs |
| Data Iteration| H | 3hrs| 2.5hrs | 2.5hrs |
| Event Listeners | H | 2hrs| 2.5hrs | 2.5hrs |
| Accessing API Data | H | 3hrs| 2.5hrs | 2.5hrs |
| Working with Anime Quote API | L | 2hrs| 2.5hrs | 2.5hrs |
| Structuring API Information into Webpage | H | 3hrs| 2.5hrs | 2.5hrs |
| Debugging & Error Handling | H | 3hrs| 2.5hrs | 2.5hrs |
| CSS Image Design | L | 3hrs| 2.5hrs | 2.5hrs |
| CSS Webpage Header Design | L | 3hrs| 2.5hrs | 2.5hrs |
| CSS Modal Design | H | 3hrs| 2.5hrs | 2.5hrs |
| CSS Webpage Data Design | H | 3hrs| 2.5hrs | 2.5hrs |
| CSS Webpage Footer Design | L | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 39hrs| 5hrs | 5hrs |

## Code Snippet

## Change Log
This section will document what changes were made and the reasoning behind those changes.
