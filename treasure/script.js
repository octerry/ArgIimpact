mutedButton = document.getElementById("soundButton")
audioPlayer = document.querySelector("audio")
audioPlayer.volume = 0;

mutedButton.addEventListener("click", ()=>{
    children = mutedButton.children
    children[0].classList.toggle("muted")
    children[1].classList.toggle("muted")

    if (children[0].classList.contains("muted")) {
        audioPlayer.volume = 0;
    } else {
        audioPlayer.volume = 1;
    }
})