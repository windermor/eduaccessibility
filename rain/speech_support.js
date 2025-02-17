function speakText(elementId) {
    if ('speechSynthesis' in window) {
        let text = document.getElementById(elementId).innerText;
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'he-IL';
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    } else {
        alert("הדפדפן שלך לא תומך בהקראת טקסט.");
    }
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
