function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "A world of dew, and within every dewdrop, a world of struggle. By Kobayashi Issa",
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

poemFormElement = document.querySelector("#poem-instruction-form");
poemFormElement.addEventListener("submit", generatePoem);
