function displayLimerick(response) {
  //Takes the poem returned by the ai and displays it using the typewriterjs plugin animation
  let poemOutputContainerElement = document.querySelector(
    "#poem-output-container"
  );
  poemOutputContainerElement.classList.remove("hidden");
  new Typewriter("#poem-output-container", {
    strings: `${response.data.answer}`,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  //Once the topic is submitted by the user, the page is prevented from refreshing and the submitted topic is used as the prompt in the AI API for the AI poem generation.
  event.preventDefault();
  let topicInput = document.querySelector("#poem-topic-input");
  let apiKey = "7f314bd46t448eb65o54002ab9dadc03";
  let context =
    "You are a highly skilled and creative poet. You have an excellent sense of humor. You can write a limerick from any given topic. Your response consists of five lines in a single stanza with a rhyme scheme of AABBA. Please separate each line with <br />. At the end of your poem, please add '<br/><strong>SheCodes AI</strong>'.";
  let prompt = `Please provide a limerick about ${topicInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayLimerick);
}

//Once the user submits a topic for the poem, the AI poem generator is triggered.
let poemTopicFormElement = document.querySelector("#generate-poem");
poemTopicFormElement.addEventListener("submit", generatePoem);
