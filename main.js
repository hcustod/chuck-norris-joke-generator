/*

An example response...

{
    "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id" : "fJVoLXAIQJy-xA5U3TFOww",
    "url" : "",
    "value" : "Chuck Norris was hiking and suddenly came face to face with a huge Grizzley bear. After a desperate foot chase, Chuck caught the bear, slapped it stupid and told it "don't EVER do that again"."
    }

*/


// set up variables

const api_endpoint = "https://api.chucknorris.io/jokes/random"

const button = document.getElementById("new-quote")
const quote_display = document.getElementById("quote-display")

// buttons event listner 

button.addEventListener("click", async () => {
    try {
        const response = await fetch(api_endpoint);
        const data = await response.json();
        console.log(data);

        quote_display.textContent = data.value;
    } catch (error) {
        console.error(error);
    }
});


