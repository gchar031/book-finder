//global variable to be used by all functions
let resultsContainer = document.querySelector('#results')//grab the location for where the data should be and use later to clear div
//let searchText = document.getElementById('#search-txt').innerText
//console.log(searchText)
let searchType = document.getElementById('#type')

//get data from the Google Books API for book title search
async function getBookData() {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:jaw&key=AIzaSyApQSdy4EmsF3dMV0XrbvCJ6HQAc1yqhlw`//`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchText}&key=AIzaSyApQSdy4EmsF3dMV0XrbvCJ6HQAc1yqhlw`
    const response = await axios.get(url)
    let data = response.data.items
    bookData(data) //pass the data to a function will send the information to DOM
    //console.log(data)
  } catch (error) {
    console.log(error)
  }
  
}
getBookData()

function bookData(bookInfo) {
  //iterate through the the data and grab the data needed
  bookInfo.forEach(book => {
    //create variables for the data needed
    let title = book.volumeInfo.title
    let author = ""
    let date = book.volumeInfo.publishedDate
    let publisher = book.volumeInfo.publisher
    //if there is no image provided create images for book titles
    let image = 'hello'
    if (book.volumeInfo.imageLinks === undefined ) { //if there is no image use image in the image folder
      image = 'images/bkcover.jpg'
    } else {
      image = book.volumeInfo.imageLinks.thumbnail
    }
    let preview = book.volumeInfo.previewLink
    let plot = book.volumeInfo.description
    if (author === undefined) {
      author = "N/A"
    }
    else {
      author = book.volumeInfo.authors
    }
    //format the data
    formatBookData(title, author, date, publisher, image, preview, plot)
  });
}


function formatBookData(title, author, date, publisher, image, preview, plot) {
  let resultsdiv = document.querySelector("#results")
  //create new divs for each book
  let bookDiv = document.createElement('div')
  bookDiv.classList.add('book') //to refer to to style later in CSS
  let moreInfo = document.createElement('div')
  let modalbtn = document.createElement('button')
  modalbtn.classList.add('modalbtn') // to style modal button later in CSS
  let bookData =
    `<img src= "${image}" style="width: 100px;" id="bkcover"></img>
  <h4>${title}</h4>
  <h5>${author}</h5>`
  //send data to DOM
  bookDiv.insertAdjacentHTML('beforeend', bookData)
  console.log(resultsdiv)
  resultsdiv.insertAdjacentElement('beforeend', bookDiv)
}


//add event listener for submit button
//removeResults(resultsContainer)
//add event listener for Modal
function modalEvent(e) {
  
}



//Grabbed anime quote data
async function getAnimeData() {
  try {
    const url = "https://animechan.vercel.app/api/random"
    const response = await axios.get(url)
    let data = response.data
    animeQuote(data) //pass anime data to function that will send info to DOM
  } catch (error) {
    console.log(error)
  }
}
//sent anime data to DOM
function animeQuote(quotes) {
  let anime = quotes.anime
  let name = quotes.character
  let quote = quotes.quote
  let quotep = document.querySelector('#quoteft p')
  quotep.textContent = `"${quote} - ${name}, ${anime}"`
  console.log(`${quote} - ${name}, ${anime}`)
}
getAnimeData()

//reset for every new search
function removeResults(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}