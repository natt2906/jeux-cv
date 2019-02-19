///////////////////////////////PLAY///////////////////////////////////////////////////////////
var letsPlay = function () { //fonction qui affiche le tutoriel du jeu
    ctx.drawImage(play, 0, 0, 1000, 500);
}

var playGame = function () { // fonction qui lance le jeu
    document.getElementById('jouer');
    debutGame = true;
}
document.getElementById('jouer').onclick = playGame; // au click le jeu se lance
ctx.clearRect(0, 0, 1000, 500);