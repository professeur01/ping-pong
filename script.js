// Declaration des variables
const body = document.querySelector("body")
const ping_left = document.getElementById("ping-left")
const ping_right = document.getElementById("ping-right")

// Fonction qui permet de changer les ping en prssant sur les deux fleche gauche drote de clavier
const changePingFunction = (e) => {
console.log(e);
if (e.key == "ArrowLeft"){
console.log("Fleche Gauche appuyer");
ping_right.classList.remove("pingSelected")
ping_left.classList.add("pingSelected")

}
else if(e.key == "ArrowRight"){
console.log("Fleche Droite appuyer");
ping_left.classList.remove("pingSelected")
ping_right.classList.add("pingSelected")
}

}
// Evenement qui permet de selectionner et changer les barre ping
document.addEventListener('keydown', changePingFunction)
