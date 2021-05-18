//global variable to be used by all functions
let resultsContainer = document.querySelector('#results')//grab the location for where the data should be and use later to clear div
//let searchType = document.getElementById('#type') //post-MVP

//get data from the Google Books API for book title search
async function getBookDataByTitle(text) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${text}&key=AIzaSyApQSdy4EmsF3dMV0XrbvCJ6HQAc1yqhlw`
    const response = await axios.get(url)
    let data = response.data.items
    bookData(data) //pass the data to a function will send the information to DOM
    //console.log(data)
  } catch (error) {
    console.log(error)
  }
  
}

function bookData(bookInfo) {
  //iterate through the the data and grab the data needed
  bookInfo.forEach(book => {
    //create variables for the data needed
    let title = book.volumeInfo.title
    let author = ""
    if (author != null) {
      author = book.volumeInfo.authors
    }else  author = "N/A"
  
    let date = book.volumeInfo.publishedDate
    let publisher = ''
    if (book.volumeInfo.publisher != null) {
      publisher = book.volumeInfo.publisher
    } else publisher = 'N/A'

    //if there is no image provided create images for book titles
    let image = ''
    if (book.volumeInfo.imageLinks === undefined ) { //if there is no image use image in the image folder
      image = 'images/bkcover.jpg'
    } else image = book.volumeInfo.imageLinks.thumbnail
    
    let preview = book.volumeInfo.previewLink

    let plot = ""
      if (book.volumeInfo.description != null) {
        plot = book.volumeInfo.description
      } else plot = 'N/A'
    
    let pageNum = ''
    if (book.volumeInfo.pageCount != null) {
        pageNum = `${book.volumeInfo.pageCount}`
      } else pageNum = `N/A`
    //format the data
    formatBookData(title, author, date, publisher, image, preview, plot, pageNum)
  });
}


function formatBookData(title, author, date, publisher, image, preview, plot, pageN) {
  let resultsdiv = document.querySelector("#results")
  //create new divs for each book
  let bookDiv = document.createElement('div')
  bookDiv.classList.add('book') //to refer to to style later in CSS
  let bookData =
    `<img src= "${image}" style="width: 100px;" id="bkcover"></img>
  <h4>${title}</h4>
  <h5>${author}</h5>
  <button class="modalbtn">Click for more...</button><br>
  <div id='bkmodal' class='bksModal'>
  <div id='modalContent'>
   <span class="close">&times;</span>
   <p>Publisher: ${publisher}</p>
   <p>Published Date: ${date}</p>
   <p>Pages: ${pageN}</p>
   <p>Preview Links: <a href="${preview}">Google Preview</a></p>
   <p>Description: ${plot}</p></div>
   </div>`
  //send data to DOM
  bookDiv.insertAdjacentHTML('beforeend', bookData)
  //console.log(resultsdiv)  //to check for undefined
  resultsdiv.insertAdjacentElement('beforeend', bookDiv)
  modalListener()//add event listeners to modals
}

function modalListener() {
  //add event listener for Modal
  //source help from: https://www.w3schools.com/howto/howto_css_modals.asp 
  let modelContent = document.getElementById('modalContent')
  let close = document.getElementsByClassName('close')
  let mdlbtn = document.getElementById('modalbtn')
  mdlbtn.addEventListener('click', function(){
    modelContent.style.display = 'block'
  })
  close.addEventListener('click', function(){
    modelContent.style.display = 'none'
  })
  window.addEventListener('click', function(){
    modelContent.style.display = 'none' //clicks anywhere outside of modal then the modal dissapears
  })
}



//add event listener for submit button
let form = document.querySelector('form')
form.addEventListener('submit', (ebtn) => {
  ebtn.preventDefault()//to prevent form from refreshing when the search icon is clicked
  let searchText = document.querySelector('#search-txt').value
  console.log(searchText)
  //removeResults(resultsContainer)
  //if statements for each drop down to run appropriate fetch function -POST MVP
  getBookDataByTitle(searchText)
})

//reset for every new search
function removeResults(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
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