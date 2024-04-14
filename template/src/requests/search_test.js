const apiKey = 'QRtpu48114xaSsIi8NBUTEeINLYD60xj';
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

