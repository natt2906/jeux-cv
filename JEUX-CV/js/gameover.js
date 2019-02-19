////////////////////////////////////////////gameover//////////////////////////////////////////////////////////
var theEnd = function () { // fonction de game over 4 games overs possible en fonction du score
    captain.health = 0;
    captain.isDead = true;
    if (captain.health <= 0) {// condition en fonction de la vie du perso

        finDeJeu = true;

        if (mobMinotaur.scoreJoueur <= 10) {// condition une image de fin en fonction du score 

            ctx.drawImage(finDuJeu, 0, 0, 1000, 500);
            
        }
        if (mobMinotaur.scoreJoueur > 10) {
            ctx.drawImage(cv1, 0, 0, 1000, 500);
        }
        if (mobMinotaur.scoreJoueur > 25) {
            ctx.drawImage(cv2, 0, 0, 1000, 500);
        }
        if (mobMinotaur.scoreJoueur > 35) {
            document.getElementById("myCanvas").height = "800"; // agrandi le canvas pour l'image de fin final
            ctx.drawImage(cv3, 0, 0, 1000, 800);
            document.getElementById('droite').style.display = "none"; // enlee les bouton tactil
            document.getElementById('gauche').style.display = "none";
            document.getElementById('jump').style.display = "none";
            document.getElementById('punch').style.display = "none";
           
        }
    }
}