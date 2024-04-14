const apiKey = 'QkK7Vkqnn4Hl21IRnu0MZdwdcJ1qjHSZ';
const apiURL = 'https://api.giphy.com/v1/gifs';

export async function search(query) {
    return fetch(`${apiURL}/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=5`)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => data.data)
        .catch(error => {
            console.error('An error occurred during the search:', error);
            return []; 
    });

}

// document.getElementById('searchButton').addEventListener('click', async () => {
//     const query = document.getElementById('searchInput').value;
//     const results = await search(query);
//     displayResults(results);
// });

// export function displayResults(results) {
//     const searchResultsDiv = document.getElementById('container');
//     searchResultsDiv.innerHTML = ''; 
//     if (results.length === 0) {
//         searchResultsDiv.textContent = 'No results found.';
//         return;
//     }
//     const ul = document.createElement('ul');
//     results.forEach(result => {
//         const li = document.createElement('li');
//         const img = document.createElement('img');
//         img.classList = 'img';
//         img.id = result.id;
//         img.src = result.images.original.url; 
        
//         li.appendChild(img);
//         ul.appendChild(li);
//     });
//     searchResultsDiv.appendChild(ul);
// }