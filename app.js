var searchInput = document.querySelector('.search');
var itemWrapper = document.querySelector('main');

function displayMatches (matches) {
  for (var match of matches) {
    itemWrapper.insertAdjacentHTML('beforeend', ` 
    <div class="movie-item" style="background-image: 
    linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.6)), url(${match.image_url})">
      <h3>${match.title}</h3>
      <p>${match.description}</p>
      <a href="${match.imdb_url}" target="_blank">More details</a>
</div>` )
  }
}


function getMovieData(event) {
  var keyCode = event.keyCode;
  var searchText = searchInput.value.trim().toLowerCase(); //.trim removes empty space before and after strings

  if (keyCode === 13 && searchText) {
    var matches = [];
    for (var movie of movieData) {
      if (movie.title.toLowerCase().includes(searchText)) {
        matches.push(movie);
      }
    }


    var responsePromise = fetch('https://www.omdbapi.com/?apikey=ae9c8a88&t=jurassic')


      responsePromise
      .then(function (responseObj) {
       

     
        })

     
      });

    displayMatches(matches);
  }
}



function init() {
  searchInput.addEventListener('keydown', getMovieData);
}

init();

// Grab html elements
// Get the input's value on enter key press
// Grab data related to user's search
// Inject the movie items into the DOM, based on user's search

console.log('hello');