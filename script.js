//global variable to be used by any function
let resultsContainer = document.querySelector('#results')//grab the location for where the data should be and use later to clear div

//get data from the Google Books API for book title search
async function getBookDataByTitle(text) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${text}&maxResults=40&key=AIzaSyApQSdy4EmsF3dMV0XrbvCJ6HQAc1yqhlw`;
    const response = await axios.get(url)
    let data = response.data.items
    bookData(data)
    return data
  } catch (error) {
    console.log(error)
    alert('Please enter the correct search type.')
  }
}

//allows user to search book(s) by author's name
async function getBookDataByAuthor(text) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${text}&maxResults=40&key=AIzaSyApQSdy4EmsF3dMV0XrbvCJ6HQAc1yqhlw`;
    const response = await axios.get(url)
    let data = response.data.items
    bookData(data)
    return data
  } catch (error) {
    console.log(error)
    alert("Please enter the correct search type."); //if the correct search type was not entered then it will alert the user
  }
}

//allows user to search by book's ISBN number
async function getBookDataByISBN(text) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${text}&maxResults=40&key=AIzaSyApQSdy4EmsF3dMV0XrbvCJ6HQAc1yqhlw`;
    const response = await axios.get(url)
    let data = response.data.items
    bookData(data)
    return data
  } catch (error) {
    console.log(error)
    alert("Please enter the correct search type.");
  }
}

function bookData(bookInfo) {
  //iterate through the the data and grab the data needed
  bookInfo.forEach(book => {
    //create variables for the data needed
    let title = book.volumeInfo.title
    let author = ""
    if (book.volumeInfo.authors != undefined) {
      author = book.volumeInfo.authors
    }else  author = "N/A"
  
    let date = book.volumeInfo.publishedDate
    let publisher = ''
    if (book.volumeInfo.publisher != undefined) {
      publisher = book.volumeInfo.publisher
    } else publisher = 'N/A'

    //if there is no image provided create images for book titles
    let image = ''
    if (book.volumeInfo.imageLinks === undefined ) { //if there is no image use image in the image folder
      image = 'images/bkcover.jpg'
    } else image = book.volumeInfo.imageLinks.thumbnail
    
    let preview = book.volumeInfo.previewLink

    let plot = ""
      if (book.volumeInfo.description != undefined) {
        plot = book.volumeInfo.description
      } else plot = 'N/A'
    
    let pageNum = ''
    if (book.volumeInfo.pageCount != undefined) {
        pageNum = `${book.volumeInfo.pageCount}`
    } else pageNum = `N/A`
    let isbn = ''
    let isbn13 = ''
    if (book.volumeInfo.industryIdentifiers != undefined) {
      if (book.volumeInfo.industryIdentifiers[1] == undefined) {
        isbn = book.volumeInfo.industryIdentifiers[0].identifier
        isbn13 = 'N/A'
      }
      else if (book.volumeInfo.industryIdentifiers[0].identifier != undefined && book.volumeInfo.industryIdentifiers[1].identifier != undefined) {
        isbn = book.volumeInfo.industryIdentifiers[0].identifier
        isbn13 = book.volumeInfo.industryIdentifiers[1].identifier
      }
    }
    else {
      isbn = "N/A";
      isbn13 = "N/A";
    }
    let price = '' //intialize price and check if book can be sold
    let currency = ''
    let buyLk = ''
    if (book.saleInfo.saleability == "FOR_SALE") {
      price = book.saleInfo.retailPrice.amount
      currency = book.saleInfo.retailPrice.currencyCode
      buyLk = book.saleInfo.buyLink
    } else {
      price = 'N/A'
      currencyCode = 'N/A'
    }
    //formatBookData(bookInformation)
    formatBookData(title, author, date, publisher, image, preview, plot, pageNum, isbn,isbn13, price, currency, buyLk)
    addModoalListeners()
  });

}

//format the data and send data into the DOM(title, author, date, publisher, image, preview, plot, pageN)
function formatBookData(title, author, date, publisher, image, preview, plot, pageN, isbn, isbn13, price, currency,blink) {
  let resultsdiv = document.querySelector("#results")
  //create new divs for each book
  let bookDiv = document.createElement('div')
  bookDiv.classList.add('book') //to refer to to style later in CSS
  //POST MVP- price, preview link,
  let bookData =
    `<img src= "${image}"id="bkcover"></img>
    <div class="intro">
    <h4>${title}</h4>
    <h5>Author(s):<br>${author}</h5>
    <p>Price: <a href ="${blink}" target="_blank">${price} ${currency}</a></p>
    <button class="modalbtn">Click for more...</button> </div>
    <div class='bksModal bkContainer'>
    <div class='modalContent'>
    <span class="close">&times;</span>
    <p><b>Publisher:</b> ${publisher}</p>
    <p><b>Published Date:</b> ${date}</p>
    <p><b>ISBN:</b> ${isbn}</p>
    <p><b>ISBN-13:</b> ${isbn13}</p>
    <p><b><b>Pages:</b> ${pageN}</p> 
    <p><b>Preview Links:</b> <a href="${preview}" target="_blank">Google Preview</a></p>
    <p><b>Description:</b> ${plot}</p></div>
    </div>`
  //send data to DOM
  bookDiv.insertAdjacentHTML('beforeend', bookData)
  //console.log(resultsdiv)  //to check for undefined
  resultsdiv.insertAdjacentElement('beforeend', bookDiv)
}

//add modal listeners after modal containers were created so null is not returned
function addModoalListeners() {
  //add event listener for Modal
  //source help from: https://www.w3schools.com/howto/howto_css_modals.asp 
  let modalView = document.querySelectorAll('.bksModal')
  let closemdl = document.querySelectorAll('.close')
  let mdlbtn = document.querySelectorAll('.modalbtn')
  let modalArray = Array.from(mdlbtn).entries()
  //help from src:https://blr.design/blog/multiple-modals/ to make multiple modals work
  for (let [index, btn] of modalArray) {
    function show() {
      modalView.forEach(modal => modal.style.display = "none")
      modalView[index].style.display = "block"
    }
    function hide() {
      modalView[index].style.display = "none"
    }
    btn.addEventListener("click", show)
    closemdl[index].addEventListener("click", hide)
  }
}


//add event listener for submit button
let form = document.querySelector('form')
form.addEventListener('submit', (ebtn) => {
  ebtn.preventDefault()//to prevent form from refreshing when the search icon is clicked
  let searchText = document.querySelector('#search-txt').value
  //if statements for each drop down to run appropriate fetch function -POST MVP
  let searchType = document.getElementById('type') //post-MVP
  //src: https://stackoverflow.com/questions/14976495/get-selected-option-text-with-javascript
  removeResults(resultsContainer)
  if (searchType.options[searchType.selectedIndex].text == "Author") {
    getBookDataByAuthor(searchText)
  }
  else if (searchType.options[searchType.selectedIndex].text == "ISBN Number") {
    getBookDataByISBN(searchText)
  }else getBookDataByTitle(searchText)
  
})
//reset for every new search
function removeResults(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}


//Grabs anime quote data
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
//sends anime data to DOM
function animeQuote(quotes) {
  let anime = quotes.anime
  let name = quotes.character
  let quote = quotes.quote
  let quotep = document.querySelector('#quoteft p')
  quotep.textContent = `"${quote}" - ${name}, ${anime}`
}
getAnimeData() //calls the fucntion