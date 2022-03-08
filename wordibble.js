document.addEventListener("DOMContentLoaded", () => {

    let availableSpace = 1;

    function getCurrentWordArr() {
        const numberOfGuessedWords = guessedWords.length;
        return guessedWords[numberOfGuessedWords - 1];
    }

    function handleDeleteLetter() {
        const currentWordArr = getCurrentWordArr();
        const removedLetter = currentWordArr.pop();

        guessedWords[guessedWords.length - 1] = currentWordArr;

        const lastLetterEl = document.getElementById(String(availableSpace - 1));

        lastLetterEl.textContent = "";
        availableSpace = availableSpace - 1;
    }
});