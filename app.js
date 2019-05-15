//jshint esversion:6

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //show question
    let element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    let choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      let element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);

    }
    showProgress();
  }

}

function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}


function showScores() {
  let gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id = 'score'>Your score: " + quiz.score + "</h2>";
  let element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

const questions = [
  new Question("I have a large flower seed growing on my back, I love to nap under the sunlight and I am a grass & poison type Pokemon! What am I?", ["Chikorita", "Snivy", "Leafeon", "Bulbasaur"], "Bulbasaur"),
  new Question("I have bluish fur on top of my body with cream coloured fur on my underside. I also have a flame on my back & a long thin snout! What am I?", ["Growlithe", "Cyndaquil", "Charmander", "Blaziken"], "Cyndaquil"),
  new Question("I look like a naughty ghost, behave like a naughty ghost and I evolve into the mighty Gengar! What am I?", ["Litwick", "Giratina", "Ghastly", "Drifblim"], "Ghastly"),
  new Question("I may seem useless now, but when I evolve, I become a majestic serpentine dragon. You definitely don't want to mess with me! What am I?", ["Magikarp", "Squirtle", "Vaporeon", "Frogadier"], "Magikarp"),
  new Question("I am a dog-like, black & blue pokemon with a black mask on my face. I'm also a duel-type Fighting/Steel Pokemon! What am I?", ["Hitmonlee", "Riolu", "Pancham", "Combusken"], "Riolu"),
  new Question("I am a legendary fairy type pokemon with 4 pairs of rainbow antlers and a beautiful, gentle, stag-like physique! What am I?", ["Xerneas", "Togepi", "Jigglypuff", "Chansey"], "Xerneas"),
  new Question("I am a ground type pokemon that resembles an armadillo. I also have an alolan version from Pokemon Sun & Moon which is of type Ice/Steel! What am I?", ["Trapinch", "Swinub", "Mudsdale", "Sandshrew"], "Sandshrew"),
  new Question("I am a Pyschic/Flying type, legendary pokemon with strong white wings and a blue belly. I often live out of sight, deep under the sea. What am I ? ", ["Ho-oh", "Articuno", "Lugia", "Salamence"], "Lugia"),
  new Question("I am the most famous pokemon, as well as Ash's companion. I am a cute yellow thing, with ears and cheeks that emits electric capable of blasting Team-Rocket away! What am I?", ["Zapdos", "Pikachu", "Elekid", "Magnemite"], "Pikachu")
];

let quiz = new Quiz(questions);

populate();
