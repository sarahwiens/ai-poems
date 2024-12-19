function displayLimerick(response) {
  new Typewriter("#poem-output-container", {
    strings: `${response.data.answer}`,
    autoStart: true,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let topicInput = document.querySelector("#poem-topic-input");
  let apiKey = "7f314bd46t448eb65o54002ab9dadc03";
  let context =
    "You are a highly skilled and creative poet. You have an excellent sense of humor. You can write a limerick from any given topic. Your response consists of five lines in a single stanza with a rhyme scheme of AABBA.";
  let prompt = `Please provide a limerick about ${topicInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayLimerick);
}

let poemTopicFormElement = document.querySelector("#generate-poem");
poemTopicFormElement.addEventListener("submit", generatePoem);
