const apiKey = 'QkK7Vkqnn4Hl21IRnu0MZdwdcJ1qjHSZ';
const apiURL = 'https://api.giphy.com/v1/gifs';

export async function getDetails(gif_id) {
    return fetch(`${apiURL}/${gif_id}?api_key=${apiKey}&gif_id=${gif_id}`)
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