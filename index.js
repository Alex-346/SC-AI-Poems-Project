function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "5b4b4fcd1b034c8t502feb3b26aa3ceo";
  let context =
    "You are an expert on the Japanese poetry form of haiku and you are familiar with the works of Matsuo Bashō, Kobayashi Issa and other haiku poets. Please read the following haiku poems as examples: Haiku example 1:'Temple bells die out. The fragrant blossoms remain. A perfect evening!' Haiku example 2: 'A world of dew, and within every dewdrop, a world of struggle.' Haiku example 3: 'An old silent pond, A frog jumps into the pond - Splash! Silence again.' Your aim is to produce a 3 line haiku in basic html on the theme determined by the user instructions. The first and third line must contain 5 syllables. The second line must contain 7 syllables. Separate each line with a <br />. Never include a title with the haiku. Sign at the botton of the haiku with <em>by SheCodes AI</em>";

  let prompt = `User instructions: Generate a haiku about ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

poemFormElement = document.querySelector("#poem-instruction-form");
poemFormElement.addEventListener("submit", generatePoem);
