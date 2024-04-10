const apiKey = 'AuFd7NG7BWm1LiIBrMoLT2Br9pIAT8Lr';
const apiURL = 'https://api.giphy.com/v1/gifs';

// function displayGIFS(gifs) {

//     const gifCount = document.getElementById('trending-gifs');

// }

function fetchTrendinGIFS() {

    fetch(`${apiURL}/trending?api_key=${apiKey}&rating="g"`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.error(`${e.message}`))
    }


fetchTrendinGIFS();