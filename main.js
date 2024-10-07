const jokeButton = document.getElementById('jokeButton');
const jokeContainer = document.getElementById('joke');

const apiKey = '9a943420eemsh12d07f23936fda6p17b160jsn0742be528da8';
const apiUrl = 'https://jokeapi-v2.p.rapidapi.com/joke/Any';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
    }
};

async function getJoke() {
    try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        
        // Check if the joke is two-part or single
        if (data.type === 'twopart') {
            jokeContainer.innerHTML = `${data.setup} <br> ${data.delivery}`;
        } else {
            jokeContainer.innerHTML = data.joke;
        }
    } catch (error) {
        console.error('Error fetching the joke:', error);
        jokeContainer.innerHTML = 'Oops! Could not fetch a joke right now.';
    }
}

jokeButton.addEventListener('click', getJoke);
