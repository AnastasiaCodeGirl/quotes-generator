function generatePoem(event){
    event.preventDefault();

    new Typewriter("#poem", {
        strings: ["Whole life is a search for beauty", "But, when the beauty is found inside, the search ends and a beautiful journey begins."],
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);