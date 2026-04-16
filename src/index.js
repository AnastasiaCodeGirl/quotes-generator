function generatePoem(event){
    event.preventDefault();

    new Typewriter("#poem", {
        strings: ["hole life is a search for beauty", "But, when the beauty is found inside, the search ends and a beautiful journey begins."],
        autostart: true,
        delay: 1,
        cursor: none
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);