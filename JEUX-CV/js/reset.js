///////////////////////////////////////////////////reset/////////////////////////////////////////////////////////////////
var monJeu = function () { // fonction qui permet de reinitialiser les position du jeu pour recomencer
    captain.dx = 50; // reset pos depart
    captain.incrementationLaMort = 0;
    captain.positionStaticDroite(time, 100);
    captain.health = 100;// reset vita perso1
    captain.dy = 360; // reset position en y du perso1
    document.getElementById("myCanvas").height = "500";
    mobMinotaur.dx = 900; // reset position minotaure
    if (mobMinotaur.dx > 899) {

        mobMinotaur.dx -= mobMinotaur.speed; // reset de la vitesse du minotaure
        mobMinotaur.laCourseDuMinotaur(time, 100);
    }
    mobMinotaur.laCourseDuMinotaur(time, 100);
    mobMinotaur.speed = 2;
    mobMinotaur.scoreJoueur = 0; // reset score joueur
    mobMinotaur.dy = 350;
    mobMinotaur.mobVivant = true;
    finDeJeu = false;
}