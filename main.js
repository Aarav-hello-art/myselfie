var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}

recognition.onresult = function run(outcome) {
    console.log(outcome);
var output = outcome.results[0][0].transcript
document.getElementById("textbox").innerHTML = output
    
}
