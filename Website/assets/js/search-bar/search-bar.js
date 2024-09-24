// HTML structure assumed:
// <div class="search-container">
//   <input type="text" class="search-input" placeholder="Search...">
//   <button type="submit" class="search-button">
//     <img src="assets/img/search.png" alt="Search">
//   </button>
// </div>

// JavaScript code:
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

// Add click event listener to the search button
searchButton.addEventListener('click', search);

// Add keyup event listener to the search input
searchInput.addEventListener('keyup', search);

function search() {
  const searchTerm = searchInput.value.toLowerCase();
  const files = ['file1.txt', 'file2.txt', 'file3.txt']; // replace with actual file names or fetch files from the server

  const matchingFiles = files.filter(file => file.toLowerCase().includes(searchTerm));

  // Clear previous search results
  const resultsContainer = document.querySelector('.search-results');
  if (resultsContainer) {
    resultsContainer.remove();
  }

  if (matchingFiles.length > 0) {
    // Display matching results
    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('search-results');
    for (const file of matchingFiles) {
      const resultItem = document.createElement('p');
      resultItem.textContent = file;
      resultsContainer.appendChild(resultItem);
    }
    document.body.appendChild(resultsContainer);
  } else {
    // Display "No matching result found" message
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No matching result found';
    document.body.appendChild(noResultsMessage);
  }
}
