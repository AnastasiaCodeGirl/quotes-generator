function displayPoem(response){
    // console.log("poem generated");
    
    //response.data.answer
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}


function generatePoem(event){
    event.preventDefault();
    //build the API URL
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "fed24a4a3934t32fo5a63bbe36a70167";
    let context = "Be precise and base your response only on real quotes of famous people. Use only real quotes of famous people, only one quote per request, from 3 to 5 lines each, don't write a generated bullshit. Separate each line with a <br />. Make sure to follow the user instructions below. Translate it to Russian and show both versions English and Russian.  Sign the poem with the real author's name inside a <strong> element at the end of the poem and NOT at the beginning, and show it once don't repeat or translate names. Please start directly with quote without additional symbols";
    let prompt = `Find a quote about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector('#poem');
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⌛Generating a quote about ${instructionsInput.value}</div>`;
    //Make a call to the API
    // console.log(apiURL);
    
    axios.get(apiURL).then(displayPoem);
    //Dispay the generated poem

    
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);