//////////////////////////////////////////////animation de fonction/////////////////////////////////////////////
var animate = function (timestamp) { // fonction qui lance les fonction appelé a l'interieur en rafraichissant la page par un requesteanimationframe
time = timestamp;
if (debutGame === false) { // affichage du tutoriel de jeu
    letsPlay(); // si l'utilisateur clique sur le bouton jouer l'annimation se met en route
} else {
    monDecor(timestamp, 100); // annimation du decor

    if (mobMinotaur.mobVivant && ilMarche && collisionAttack === false) {// condition pour que le minotor puisse avancer sans colision
        mobMinotaur.laCourseDuMinotaur(timestamp, 100);

    }
    if (mobMinotaur.mobVivant && collisionAttack && ilMarche === false) {// condition qui fait attaquer le minotor en cas de colision
        mobMinotaur.minotaurAttack(timestamp, 100);
    }
    if (direction === 'droite' && touche === 'desactiver') {


        if (captain.health <= 0) { // animation game over le personnage meurt une image game over s'affiche
            captain.health = 0;
            captain.gameOver(timestamp, 200);
            captain.isDead = true;
            if (captain.incrementationLaMort === 6) {
                theEnd();
            }
        } else {
            captain.positionStaticDroite(timestamp, 100);
        }

    }
    if (direction === 'gauche' && touche === 'desactiver') {

        if (captain.health <= 0) {
            captain.health = 0;
            captain.gameOver(timestamp, 200);
            captain.isDead = true;
            if (captain.incrementationLaMort === 6) {
                theEnd();
            }
        } else {
            captain.positionStaticGauche(timestamp, 100);
        }

    }

    if (touche === 'activer') { // condition pour aller a droite
        captain.positionDroite(timestamp, 200);
    }
    if (touche === 'activer2') { // condition pour aller a gauche
        captain.positionGauche(timestamp, 200);
    }

    if (touche === 'espace' && direction === 'droite') {// condition pour sauter a droite

        captain.sautADroite(timestamp, 50); 
        if (captain.dy > 360) {
            touche = 'finespace';

        }
    }
    if (touche === 'espace' && direction === 'gauche') {// condition pour sauter a gauche

        captain.sautAGauche(timestamp, 50);
        if (captain.dy >= 360) {
            touche = 'finespace';
        }
    }
    if (touche === 'finespace' && direction === 'droite') {

        if (captain.health <= 0) {
            captain.health = 0;
            captain.gameOver(timestamp, 200);
            captain.isDead = true;

            if (captain.incrementationLaMort === 6) {
                finDeJeu = true;
                theEnd();
            }

        } else {
            captain.positionStaticDroite(timestamp, 100);
        }
    }
    if (touche === 'finespace' && direction === 'gauche') {
        captain.positionStaticGauche(timestamp, 100);

    }
    if (touche === 'attack') { // condition pour attaquer
        captain.attackFrontal(timestamp, 100);

        if (captain.incrementationAttack >= captain.attack.length - 1) {
            // si le tableau de position du sprite attack arrive a la fin on initialise la variable touche
            touche = 'finAttack';
        }

    }
    if (mobMinotaur.mobVivant === false) {// condition si le minotaure meurt
        mobMinotaur.laMortDuMinotaur(timestamp, 100);
        if (mobMinotaur.incrementationDead >= mobMinotaur.diedMob.length - 1) {
            mobMinotaur.dx = 900;
            mobMinotaur.mobVivant = true;
            mobMinotaur.scoreJoueur++;
            mobMinotaur.speed = mobMinotaur.speed + 0.5;

        }
    }

    if (touche === 'finAttack') {

        if (captain.health <= 0) {
            captain.health = 0;
            captain.gameOver(timestamp, 200);
            captain.isDead = true;

            if (captain.incrementationLaMort === 6) {
                finDeJeu = true;
                theEnd();
            }
        } else {
            captain.positionStaticDroite(timestamp, 100);
            captain.dy = 360;
        }
    }
    collision(); // animation colision
    if (touche === 'letsGo') {
        monJeu();//animation reset
    }
}
requestAnimationFrame(animate); // lancement de l'animation
}
animate();