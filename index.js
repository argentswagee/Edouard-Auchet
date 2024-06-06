function getRandomInt(min, max) {
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
    const wordList2 = ["baobab", "arbre", "gourmand", "gras", "seum", "caca"];
    const randomWord2 = getRandomWord2(wordList2);
    console.log("Mot choisi au hasard :", randomWord2);
    document.getElementById('fintxt').textContent = randomWord2;

    const wordList = ["va dormir dans ton ", "ravale ton ", "va manger ton ", "déguste ton ", "reste dans ton ", "retourne dans ton "];
    const randomWord = getRandomWord(wordList);
    console.log("Mot choisi au hasard :", randomWord);
    document.getElementById('debtxt').textContent = randomWord;

    alert(randomWord + randomWord2)
})