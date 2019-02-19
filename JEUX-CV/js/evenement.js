////////////////////////////////////////// touch evenement //////////////////////////////////////////////////
document.getElementById('droite').ontouchstart = function () {// accesibilité pour mobile tactile pour aller a droite
    if (captain.dy >= 350) {
        captain.positionDroite(time, 100);
        direction = 'droite';
        touche = 'activer';
    }

    if (captain.dx > canevas.width - 100) {
        captain.dx -= 20;
    }

}
document.getElementById('droite').ontouchend = function () {// arrete la ffonction en lachant le bouton tactile
    rightPressed = false;
    if (rightPressed === false) {
        captain.sy = 0;
        if (captain.dy >= 350) {
            captain.dy = 360;
            captain.positionStaticDroite();
            touche = 'desactiver';
        }
    }
}
document.getElementById('gauche').ontouchstart = function () {
    if (captain.dy >= 350) {
        captain.positionGauche(time, 150);
        direction = 'gauche';
        touche = 'activer2';
    }
    if (captain.dx < 0 + 10) {
        captain.dx += 40;
    }
}
document.getElementById('gauche').ontouchend = function () {
    rightPressed2 = false;
    if (rightPressed2 === false) {
        captain.sy = 0;
        if (captain.dy >= 350) {
            captain.dy = 360;
            captain.positionStaticGauche();
            touche = 'desactiver';
        }
    }
}
document.getElementById('punch').ontouchstart = function () {
    if (finDeJeu === false) {
        if (repeat === false) {
            repeat = true;
            captain.attackFrontal();

            if (captain.health <= 0) {
                finDeJeu = true;
            }
            touche = 'attack';
        }
    }
}
document.getElementById('punch').ontouchend = function () {
    repeat = false;
}
document.getElementById('jump').ontouchstart = function () {
    if (finDeJeu === false) {

        if (direction === 'droite') {
            if (repeat === false) {
                repeat = true;
                captain.sautADroite();
                if (captain.health <= 0) {
                    finDeJeu = true;
                }
                touche = 'espace';
            }
        } else if (direction === 'gauche') {
            if (repeat === false) {
                repeat = true;
                captain.sautAGauche();
                if (captain.health <= 0) {
                    finDeJeu = true;
                }
                touche = 'espace';
            }
        }
    }
}
document.getElementById('jump').ontouchend = function () {
    rightPressed3 = false;
    repeat = false;
    if (captain.vy > 0 && captain.dy > 360) {

        touche = 'finespace';
    }
}
document.getElementById('rejouer').ontouchstart = function(){
    touche = 'letsGo';
            monJeu();
}
document.getElementById('rejouer').ontouchend = function(){
    touche = 'desactiver';
}
/////////////////////////////////////////////keyboard evenement////////////////////////////////////////////////////////
window.addEventListener('keydown', function (event) { // ecouteur d'evenement en fonction des touche appuyés

    switch (event.keyCode) { //evenement pour aller a droite 
        case 39:
        case 68:
            if (captain.dy >= 350) {
                captain.positionDroite(time, 100);
                direction = 'droite';
                touche = 'activer';
            }

            if (captain.dx > canevas.width - 100) {
                captain.dx -= 20;
            }
            break;
        case 37:
        case 81:
            if (captain.dy >= 350) {
                captain.positionGauche(time, 150);
                direction = 'gauche';
                touche = 'activer2';
            }
            if (captain.dx < 0 + 10) {
                captain.dx += 40;
            }
            break;
        case 32:
        case 90:
        case 38:

            if (finDeJeu === false) {

                if (direction === 'droite') {
                    if (repeat === false) {
                        repeat = true;
                        captain.sautADroite();
                        if (captain.health <= 0) {
                            finDeJeu = true;
                        }
                        touche = 'espace';
                    }
                } else if (direction === 'gauche') {
                    if (repeat === false) {
                        repeat = true;
                        captain.sautAGauche();
                        if (captain.health <= 0) {
                            finDeJeu = true;
                        }
                        touche = 'espace';
                    }
                }
            }
            break;
        case 13:
            if (finDeJeu === false) {
                if (repeat === false) {
                    repeat = true;
                    captain.attackFrontal();

                    if (captain.health <= 0) {
                        finDeJeu = true;
                    }
                    touche = 'attack';
                }
            }
            break;
        case 16:

            if (persocaptain.src === persoSrc) {
                persocaptain.src = 'image/captain2.png';
                persoSrc = persocaptain.src;
            }

            break;
        case 17:
            touche = 'letsGo';
            monJeu();
            break;
    }

})
window.addEventListener('keyup', function (event) { //ecouteur d'evenement en fonction des touche relaché
    console.log(event.keyCode);
    switch (event.keyCode) {// evenment pour arreter l'evenement de la touche
        case 39:
        case 68:
            rightPressed = false;
            if (rightPressed === false) {
                captain.sy = 0;
                if (captain.dy >= 350) {
                    captain.dy = 360;
                    captain.positionStaticDroite();
                    touche = 'desactiver';
                }
            }
            break;
        case 37:
        case 81:
            rightPressed2 = false;
            if (rightPressed2 === false) {
                captain.sy = 0;
                if (captain.dy >= 350) {
                    captain.dy = 360;
                    captain.positionStaticGauche();
                    touche = 'desactiver';
                }
            }
            break;
        case 32:
        case 90:
        case 38:
            rightPressed3 = false;
            repeat = false;
            if (captain.vy > 0 && captain.dy > 360) {

                touche = 'finespace';
            }
            break;
        case 16:
            if (persoSrc === persocaptain.src) {
                persocaptain.src = 'image/captain.png';
                persoSrc = persocaptain.src;
            }
            break;
        case 17:
            touche = 'desactiver';
            break;
        case 13:
            repeat = false;
            break;
    }
})