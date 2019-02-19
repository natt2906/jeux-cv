///////////////////////////////DECOR//////////////////////////////////////////////////////////
var monDecor = function (timestamp, vitesse) { // fonction qui va definir quelle image affiché en fonction du rafraichissement et va déclancher mon decor animé

    if (!monTimeStamp) {
        monTimeStamp = timestamp; //je declare mon timestamp que j'initialise au timestamp de base

    }

    if (timestamp - monTimeStamp > vitesse) {
        monTimeStamp = timestamp;

        if (i > 8) {
            i = 1; // variable qui s'incremente pour afficher l'image suivante
        }

        if (i == 1) {
            image.src = 'image/decors2-1.jpg';
        };
        if (i == 2) {
            image.src = 'image/decors2-2.jpg';
        }

        if (i == 3) {
            image.src = 'image/decors2-3.jpg';
        }

        if (i == 4) {
            image.src = 'image/decors2-4.jpg';
        }

        if (i == 5) {
            image.src = 'image/decors2-5.jpg';
        }

        if (i == 6) {
            image.src = 'image/decors2-6.jpg';
        }

        if (i == 7) {
            image.src = 'image/decors2-7.jpg';
        }
        if (i == 8) {
            image.src = 'image/decors2-8.jpg';
        }
        // incrementation d'image une a une pour un effet d'animation
        i++;
    }
    ctx.drawImage(image, 0, 0, 1000, 500);// affiche l'image du decor l'une apres l'autre en fonction de la valeur de la variable
};