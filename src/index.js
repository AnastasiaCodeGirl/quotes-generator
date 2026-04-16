function displayPoem(response){
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
    let context = "Be precise and creative and base your response only on real quotes of famous people.Your mission is to display a 4 line quote in basic HTML and separate each new line with a <br/>. Make sure to follow the user instructions below. Sign the quote with its author using font-style italic and font-weight bold";
    let prompt = "Find a quote related to the user input ${instructionsInput.value}, use only real quotes of famous people, don't write a generated bullshit.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    //Make a call to the API
    console.log(apiUrl);
    
    axios.get(apiUrl).then(displayPoem);
    //Dispay the generated poem

    
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);