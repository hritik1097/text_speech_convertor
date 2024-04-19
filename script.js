let speech= new SpeechSynthesisUtterance()
document.querySelector(".listen").addEventListener("click",()=>{
    speech.text=document.querySelector("#text").value;
    window.speechSynthesis.speak(speech)
})