const word = document.querySelector("input");
const btn = document.querySelector("button");

let params = "";

const callAll = () => {
  params = word.value;
  const connection = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c64c0fbeacmsh253b35127819ef7p1233b9jsn718e170bf365",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  document.getElementById("word").innerHTML = `<p>word: ${params}</p>`;
  getDefinitions(params, connection);
  getRhymes(params, connection);
  getSynonymes(params, connection);
  getParts(params, connection);
  getExamples(params, connection);
  getInstances(params, connection);
  word.value = "";
};

const getDefinitions = (word, connection) => {
  fetch(
    `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`,
    connection
  )
    .then((response) => response.json())
    .then((def) => {
      let out = "";
      def.definitions.map((definition, partOfSpeech) => {
        out += `<li>
      ${definition.definition}</li>`;

        console.log(definition.definition);
      });
      document.querySelector(".definitions").innerHTML = out;
    })
    .catch((err) => console.error(err));
};

const getRhymes = (word, connection) => {
  fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/rhymes`, connection)
    .then((response) => response.json())
    .then((data) => {
      let out = "";
      data.rhymes.all.slice(0, 10).map((items) => {
        out += `<li>
    ${items}</li>`;
        console.log(items);
      });
      document.querySelector(".rhymes").innerHTML = out;
    })
    .catch((err) => console.error(err));
};

const getSynonymes = (word, connection) => {
  fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`, connection)
    .then((response) => response.json())
    .then((data) => {
      let out = "";
      data.synonyms.map((items) => {
        out += `
    <li>${items}</li>`;
        console.log(items);
      });

      document.querySelector(".synonyms").innerHTML = out;
    })
    .catch((err) => console.error(err));
};

const getParts = (word, connection) => {
  fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/hasParts`, connection)
    .then((response) => response.json())
    .then((data) => {
      let out = "";
      data.hasParts.map((items) => {
        out += `<li>${items}</li>`;
        console.log(items);
      });

      document.querySelector(".parts").innerHTML = out;
    })
    .catch((err) => console.error(err));
};

const getExamples = (word, connection) => {
  fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/examples`, connection)
    .then((response) => response.json())
    .then((data) => {
      let out = "";
      data.examples.map((items) => {
        out += `<li>${items}</li>`;
        console.log(items);
      });
      document.querySelector(".examples").innerHTML = out;
    })
    .catch((err) => console.error(err));
};

const getInstances = (word, connection) => {
  fetch(
    `https://wordsapiv1.p.rapidapi.com/words/${word}/hasInstances`,
    connection
  )
    .then((response) => response.json())
    .then((data) => {
      let out = "";
      data.hasInstances.map((items) => {
        out += `<li>${items}</li>`;
        console.log(items);
      });
      document.querySelector(".instances").innerHTML = out;
    })
    .catch((err) => console.error(err));
};

btn.addEventListener("click", callAll);
