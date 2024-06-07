if function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Fonction pour choisir un mot au hasard dans une liste
  function getRandomWord(words) {
    const randomIndex = getRandomInt(0, words.length - 1);
    return words[randomIndex];
  }

function getRandomInt2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Fonction pour choisir un mot au hasard dans une liste
  function getRandomWord2(words) {
    const randomIndex2 = getRandomInt2(0, words.length - 1);
    return words[randomIndex2];
  }

document.getElementById('générer').addEventListener('click', function(){
    const wordList2 = ["baobab", "arbre", "gourmand", "gras", "seum", "caca", "tournevis", "marteau", "canif", "ciseau", "téléphone", "scotch", "tourtel", "infection", "pensement", "chapeau", "canapé", "vélo", "livre", "écran", "singe", "bouffon", "morve", "pupitre", "bonjour", "coucou", "hirondelle", "baka", "sylvain", "dimanche", ];
    const randomWord2 = getRandomWord2(wordList2);
    console.log("Mot choisi au hasard :", randomWord2);

    const wordList = ["va dormir dans ton ", "ravale ton ", "va manger ton ", "déguste ton ", "reste dans ton ", "retourne dans ton ", "Lis dans ton ", "va courir dans ton ", "va nager dans ton ", "Chante dans ton ", "va jouer dans ton ", "Graille ton ", "témoigne ton "   ];
    const randomWord = getRandomWord(wordList);
    console.log("Mot choisi au hasard :", randomWord);
    document.getElementById('debtxt').textContent = randomWord + randomWord2;
})
