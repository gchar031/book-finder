# Project Overview

## Project Name: Book Finder

The name of your project with deployed URL.
Deployed site to a hosting service like [Github Pages](https://pages.github.com/).

## Project Description

Using the Google Books API I can retrieve information about a book that the user search for. This information includes the author, title, year the book was published, the plot of the book, and external links provided to retrieve more information about the book. In addition I also plan to use another API that generates random anime quotes at the bottom of the page.

## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need.
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

![Desktop](/Screen%20Shot%202021-05-17%20at%209.55.40%20AM.png)
![Mobile](/Screen%20Shot%202021-05-17%20at%209.58.35%20AM.png)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
MVP:
- [ ] Allow the user to search book by book title.
- [ ] Generate picture of book along with external link to see a preview of the book.
- [ ] Have the plot, year, publisher and edition show when the use selects a book.
- [ ] Generate random anime quotes in the webpage at the header or footer.

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*
- [ ] Have prices included with a link to the Google Book Store to purchase books.
- [ ] Search by author and ISBN number.
- [ ] Allow user to read the preview of the book in the site through Google.
- [ ] Allow user to login into their Google Account too view thier bookshelves.
- [ ] Make a mobile version design of the project.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.
|  Day | Deliverable | Status
|---|---| ---|
|May 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|May 17| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|May 18| Actual Code & Functonality Features (MVP) | Incomplete
|May 19| MVP Functionality & CSS Design  | Incomplete
|May 20| CSS Design & Debugging | Incomplete
|May 21| Presentations | Incomplete

## Priority Matrix

![](/Screen%20Shot%202021-05-17%20at%2010.09.44%20AM.png)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 2hrs| 3.5hrs | 3.5hrs |
| Working with Google API | H | 3hrs| 2.5hrs | 2.5hrs |
| Working with Anime Quote API | L | 2hrs| 2.5hrs | 2.5hrs |
| Structuring API Information into Webpage | H | 3hrs| 2.5hrs | 2.5hrs |
| Debugging & Error Handling | H | 3hrs| 2.5hrs | 2.5hrs |
| CSS Image Design | L | 3hrs| 2.5hrs | 2.5hrs |
| CSS Webpage Header Design | L | 3hrs| 2.5hrs | 2.5hrs |
| CSS Webpage Data Design | H | 3hrs| 2.5hrs | 2.5hrs |
| CSS Webpage Footer Design | L | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 25hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  # book-finder
A search engine for books
