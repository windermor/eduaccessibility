function speakText(elementId) {
    let text = document.getElementById(elementId).innerText;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'he-IL';
    window.speechSynthesis.speak(speech);
}

function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = "green";
        alert("נכון! כל הכבוד 🎉");
    } else {
        button.style.backgroundColor = "red";
        alert("לא נכון, נסה שוב.");
    }
}
