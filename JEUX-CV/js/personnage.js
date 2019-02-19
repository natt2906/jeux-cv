////////////////////////////////perso 1 ////////////////////////////////////////////////////////////////////////
var captain = { //declaration d'objet premier personnage
incrementationStaticDroite: 0, //declaration d'une varaible d'incrementation en fonction du mouvement du perso
incrementationStaticGauche: 0,
incrementationDroite: 0,
incrementationGauche: 0,
incrementationSautDroit: 0,
incrementationSautGauche: 0,
incrementationAttack: 0,
incrementationLaMort: 0,
sx: [this.incrementationStaticDroite],
dx: 50, // position du personnage sur l'axe des x
dy: 360, // position du personnage sur l'axe des y
vy: -20, //velocité
gravity: 0.6, // gravité
stopSaut: false,
stopAttack: false,
health: 100, // vie du personnage
isDead: false,
positionCourseDroite: [ // tableau de position des sprites utilisé pour le deplacement a droite
    [0, 152, 84, 128], // [x,y,largeur,hauteur]
    [100, 152, 88, 128],
    [188, 152, 109, 128],
    [305, 152, 95, 128],
    [421, 152, 77, 128],
    [505, 152, 96, 128]
],

positionDepart: [ //tableau de position des sprites utilisé pour la position statique droite
    [0, 14, 92, 120],
    [101, 14, 92, 120],
    [196, 14, 92, 120],
    [292, 14, 92, 120],
    [390, 14, 92, 120],
    [490, 14, 92, 120],
    [584, 14, 92, 120],
    [681, 14, 97, 120],
    [777, 14, 96, 120]
],
positionDepartGauche: [ //tableau de position des sprites utilisé pour la position statique gauche
    [1774, 14, 88, 122],
    [1677, 14, 97, 122],
    [1582, 14, 100, 122],
    [1485, 14, 96, 122],
    [1388, 14, 102, 122],
    [1287, 14, 100, 122],
    [1194, 14, 89, 122],
    [1097, 14, 99, 122],
    [1001, 14, 95, 122]
],
positionCourseGauche: [ // tableau de position des sprites utilisé pour le deplacement a gauche
    [1491, 152, 84, 128],
    [1382, 152, 88, 128],
    [1304, 152, 109, 128],
    [1194, 152, 95, 128],
    [1080, 152, 77, 128],
    [994, 152, 96, 128]
],
sautDroit: [ // tableau de position des sprites utilisé pour le saut a droit
    [0, 596, 97, 143],
    [96, 596, 96, 143],
    [191, 596, 116, 143],
    [306, 596, 131, 143],
    [436, 596, 134, 143],
    [570, 596, 132, 143],
    [700, 596, 136, 143],
    [835, 596, 115, 143],

],
sautGauche: [ // tableau de position des sprites utilisé pour le saut a gauche
    [1903, 594, 97, 142],
    [1796, 594, 106, 142],
    [1705, 594, 111, 142],
    [1581, 594, 125, 142],
    [1445, 594, 136, 142],
    [1325, 594, 122, 142],
    [1195, 594, 131, 142],
    [1071, 594, 125, 142],

],
attack: [ // tableau de position des sprites utilisé pour l'attack
    [0, 1347, 185, 156],
    [184, 1347, 160, 156],
    [343, 1347, 172, 156],
    [515, 1347, 191, 156],
    [704, 1347, 222, 156],
],
laMort: [ // tableau de position des sprites utilisé pour la mort
    [0, 5313, 120, 143],
    [119, 5313, 107, 143],
    [226, 5313, 108, 143],
    [331, 5313, 129, 143],
    [460, 5313, 172, 143],
    [631, 5313, 82, 143],
    [711, 5313, 178, 143],
],

positionStaticDroite: function (timestamp, vitesse) { //fonction qui declenche la position statique droite

    if (!monTimeStamp2) {
        monTimeStamp2 = timestamp;
    };

    if (timestamp - monTimeStamp2 > vitesse) {
        monTimeStamp2 = timestamp;
        if (this.incrementationStaticDroite >= this.positionDepart.length - 1) { // si longueur du tableau atteint reinitialiser la valeur de l'incrementation

            this.incrementationStaticDroite = -1;

        }
        this.incrementationStaticDroite++;
    }
    ctx.drawImage(persocaptain,
        this.positionDepart[this.incrementationStaticDroite][0], //affiche l'image en fonction de l'incrementation
        this.positionDepart[this.incrementationStaticDroite][1],
        this.positionDepart[this.incrementationStaticDroite][2],
        this.positionDepart[this.incrementationStaticDroite][3],
        this.dx, this.dy,
        this.positionDepart[this.incrementationStaticDroite][2],
        this.positionDepart[this.incrementationStaticDroite][3]);
    ctx.fillRect(this.dx, 330, this.health, 10); // barre de vie du personnage
    ctx.fillStyle = "red";
},
positionStaticGauche: function (timestamp, vitesse) {

    if (!monTimeStamp2) {
        monTimeStamp2 = timestamp;
    }
    if (timestamp - monTimeStamp2 > vitesse) {
        monTimeStamp2 = timestamp;
        if (this.incrementationStaticGauche >= this.positionDepartGauche.length - 1) {

            this.incrementationStaticGauche = 0;
        }
        this.incrementationStaticGauche++;
    }
    ctx.drawImage(persocaptain,
        this.positionDepartGauche[this.incrementationStaticGauche][0],
        this.positionDepartGauche[this.incrementationStaticGauche][1],
        this.positionDepartGauche[this.incrementationStaticGauche][2],
        this.positionDepartGauche[this.incrementationStaticGauche][3],
        this.dx, this.dy,
        this.positionDepartGauche[this.incrementationStaticGauche][2],
        this.positionDepartGauche[this.incrementationStaticGauche][3]);
    ctx.fillRect(this.dx,
        330, this.health, 10);
    ctx.fillStyle = "red";
},
positionDroite: function (timestamp, vitesse) {

    if (!monTimeStamp3) {
        monTimeStamp3 = timestamp;
    }
    if (timestamp - monTimeStamp3 > vitesse) {
        monTimeStamp3 = timestamp;
        if (this.incrementationDroite >= this.positionCourseDroite.length - 1) {
            this.incrementationDroite = -1;

        }
        this.incrementationDroite++;
    }

    ctx.drawImage(persocaptain,
        this.positionCourseDroite[this.incrementationDroite][0],
        this.positionCourseDroite[this.incrementationDroite][1],
        this.positionCourseDroite[this.incrementationDroite][2],
        this.positionCourseDroite[this.incrementationDroite][3],
        this.dx += 5,
        this.dy = 350,
        this.positionCourseDroite[this.incrementationDroite][2],
        this.positionCourseDroite[this.incrementationDroite][3]);
    ctx.fillRect(this.dx,
        330, this.health, 10);
    ctx.fillStyle = "red";

},
positionGauche: function (timestamp, vitesse) {
    if (!monTimeStamp3) {
        monTimeStamp3 = timestamp;
    }
    if (timestamp - monTimeStamp3 > vitesse) {
        monTimeStamp3 = timestamp;
        if (this.incrementationGauche >= this.positionCourseGauche.length - 1) {
            this.incrementationGauche = 0;

        }
        this.incrementationGauche++;
    }

    ctx.drawImage(persocaptain,
        this.positionCourseGauche[this.incrementationGauche][0],
        this.positionCourseGauche[this.incrementationGauche][1],
        this.positionCourseGauche[this.incrementationGauche][2],
        this.positionCourseGauche[this.incrementationGauche][3],
        this.dx -= 5,
        this.dy = 350,
        this.positionCourseGauche[this.incrementationGauche][2],
        this.positionCourseGauche[this.incrementationGauche][3]);
    ctx.fillRect(this.dx,
        330, this.health, 10);
    ctx.fillStyle = "red";
},
sautADroite: function (timestamp, vitesse) {
    if (!monTimeStamp3) {
        monTimeStamp3 = timestamp;
    }
    if (timestamp - monTimeStamp3 > vitesse) {
        monTimeStamp3 = timestamp;
        if (this.incrementationSautDroit >= this.sautDroit.length - 1) {
            this.incrementationSautDroit = -1;


        }
        this.incrementationSautDroit++;
    }

    if (this.dy >= 360 && this.vy > 0) { // prise en compte de la velocité et de la gravité pour un saut realiste
        this.stopSaut = true;
        this.vy = -20;
    } else {
        this.stopSaut = false;
        this.dy += this.vy;
        this.vy += this.gravity;

    }
    ctx.drawImage(persocaptain,
        this.sautDroit[this.incrementationSautDroit][0],
        this.sautDroit[this.incrementationSautDroit][1],
        this.sautDroit[this.incrementationSautDroit][2],
        this.sautDroit[this.incrementationSautDroit][3],
        this.dx,
        this.dy,
        this.sautDroit[this.incrementationSautDroit][2],
        this.sautDroit[this.incrementationSautDroit][3]);
    ctx.fillRect(this.dx,
        this.dy - 10, this.health, 10);
    ctx.fillStyle = "red";
},

sautAGauche: function (timestamp, vitesse) {
    if (!monTimeStamp3) {
        monTimeStamp3 = timestamp;
    }
    if (timestamp - monTimeStamp3 > vitesse) {
        monTimeStamp3 = timestamp;

        if (this.incrementationSautGauche >= this.sautGauche.length - 1) {

            this.incrementationSautGauche = 0;



        }
        this.incrementationSautGauche++;
    }

    if (this.dy >= 360 && this.vy > 0) {
        this.stopSaut = true;
        this.vy = -20;
    } else {
        this.stopSaut = false;
        this.dy += this.vy;
        this.vy += this.gravity;

    }
    ctx.drawImage(persocaptain,
        this.sautGauche[this.incrementationSautGauche][0],
        this.sautGauche[this.incrementationSautGauche][1],
        this.sautGauche[this.incrementationSautGauche][2],
        this.sautGauche[this.incrementationSautGauche][3],
        this.dx,
        this.dy,
        this.sautGauche[this.incrementationSautGauche][2],
        this.sautGauche[this.incrementationSautGauche][3]);
    ctx.fillRect(this.dx,
        this.dy - 10, this.health, 10);
    ctx.fillStyle = "red";


},
attackFrontal: function (timestamp, vitesse) {
    if (!monTimeStamp3) {
        monTimeStamp3 = timestamp;
    }
    if (timestamp - monTimeStamp3 > vitesse) {
        monTimeStamp3 = timestamp;
        if (this.incrementationAttack >= this.attack.length - 1) {
            this.incrementationAttack = -1;

        }
        this.incrementationAttack++;
        if (this.incrementationAttack === this.attack.length) {
            this.touche = 'finAttack'; // quand le tableau de position arrive a la fin l'attack se termine
        }

    }

    ctx.drawImage(persocaptain,
        this.attack[this.incrementationAttack][0],
        this.attack[this.incrementationAttack][1],
        this.attack[this.incrementationAttack][2],
        this.attack[this.incrementationAttack][3],
        this.dx,
        this.dy = 330,
        this.attack[this.incrementationAttack][2],
        this.attack[this.incrementationAttack][3]);
    ctx.fillRect(this.dx,
        330, this.health, 10);
    ctx.fillStyle = "red";
},
gameOver: function (timestamp, vitesse) { // mort du personnage quand sa vie arrive a 0
    if (!monTimeStamp3) {
        monTimeStamp3 = timestamp;
    }
    if (timestamp - monTimeStamp3 > vitesse) {
        monTimeStamp3 = timestamp;
        if (this.incrementationLaMort >= this.laMort.length - 1) {
            this.incrementationLaMort = 6;
            this.incrementationLaMort--;

        }
        this.incrementationLaMort++;

    }
    ctx.drawImage(persocaptain,
        this.laMort[this.incrementationLaMort][0],
        this.laMort[this.incrementationLaMort][1],
        this.laMort[this.incrementationLaMort][2],
        this.laMort[this.incrementationLaMort][3],
        this.dx,
        this.dy = 340,
        this.laMort[this.incrementationLaMort][2],
        this.laMort[this.incrementationLaMort][3]);
}

}
////////////////////////////////////////////MOB/////////////////////////////////////////////////
var mobMinotaur = { // creation d'un second objet le mob minotaur
incrementationRun: 0,
incrementationDead: 0,
incrementationAttack: 0,
speed: 2, // definition d'une variable de vitesse 
scoreJoueur: 0, // le score du joueur definira la partie du cv a afficher
runMob: [
    [432, 116, 53, 46],
    [381, 116, 53, 46],
    [328, 116, 55, 46],
    [275, 116, 55, 46],
    [221, 116, 55, 46],
    [167, 116, 57, 46],
    [111, 116, 56, 46],
    [52, 116, 56, 46],
],
diedMob: [
    [541, 887, 98, 47],
    [444, 887, 102, 47],
    [343, 887, 95, 47],
    [249, 887, 98, 47],
    [152, 887, 97, 47],
    [56, 887, 98, 47]
],
attackMob: [
    [0, 1250, 91, 68],
    [92, 1250, 93, 68],
    [184, 1250, 94, 68],
    [275, 1250, 81, 68],
    [356, 1250, 97, 68],
    [452, 1250, 97, 68],
    [549, 1250, 98, 68],
    [645, 1250, 97, 68],
    [743, 1250, 96, 68]
],
mobVivant: true,
dx: 900, // position du mob sur l'axe des x
dy: 350, // position du mob sur l'axe des y


laCourseDuMinotaur: function (timestamp, vitesse) {
    if (!monTimeStamp4) {
        monTimeStamp4 = timestamp;

    }
    if (timestamp - monTimeStamp4 > vitesse) {
        monTimeStamp4 = timestamp;
        if (this.incrementationRun >= this.runMob.length - 1) {
            this.incrementationRun = 0;

        }
        this.incrementationRun++;

    }
    ctx.drawImage(minotaur,
        this.runMob[this.incrementationRun][0],
        this.runMob[this.incrementationRun][1],
        this.runMob[this.incrementationRun][2],
        this.runMob[this.incrementationRun][3],
        this.dx -= this.speed, // deplacement sur la map en fonction de la vitesse
        this.dy = 385,
        this.runMob[this.incrementationRun][2] * 2,
        this.runMob[this.incrementationRun][3] * 2);

    if (this.dx < 0) { // condition qui augmente le score du joueur si le minotaur arrive a lautre bout du terrain ce la augmente aussi la vitesse du minotaure
        this.dx = 1050;
        this.scoreJoueur++;
        this.speed = this.speed + 0.5;
    }
    ctx.font = "48px serif";
    ctx.fillText(this.scoreJoueur, 50, 50); // affiche le score
    if (this.speed >= 25) { // limite de vitesse que le minotaur peut atteindre et de 25
        this.speed = 25;
    }
},
laMortDuMinotaur: function (timestamp, vitesse) { // fonction qui fait mourir le minotaur a chaque attack recu
    if (!monTimeStamp5) {
        monTimeStamp5 = timestamp;

    }
    if (timestamp - monTimeStamp5 > vitesse) {
        monTimeStamp5 = timestamp;
        if (this.incrementationDead >= this.diedMob.length - 1) {
            this.incrementationDead = 0;

        }
        this.incrementationDead++;

    }
    ctx.drawImage(minotaur,
        this.diedMob[this.incrementationDead][0],
        this.diedMob[this.incrementationDead][1],
        this.diedMob[this.incrementationDead][2],
        this.diedMob[this.incrementationDead][3],
        this.dx,
        this.dy,
        this.diedMob[this.incrementationDead][2] * 2,
        this.diedMob[this.incrementationDead][3] * 2);

},
minotaurAttack: function (timestamp, vitesse) { // fonction qui declenche l'attack du minotaur quand celui ci rentre en colision avec le personnage
    if (!monTimeStamp5) {
        monTimeStamp5 = timestamp;

    }
    if (timestamp - monTimeStamp5 > vitesse) {
        monTimeStamp5 = timestamp;
        if (this.incrementationAttack >= this.attackMob.length - 1) {
            this.incrementationAttack = 0;

        }
        this.incrementationAttack++;

    }
    ctx.drawImage(minotaur,
        this.attackMob[this.incrementationAttack][0],
        this.attackMob[this.incrementationAttack][1],
        this.attackMob[this.incrementationAttack][2],
        this.attackMob[this.incrementationAttack][3],
        this.dx -= this.speed,
        this.dy = 350,
        this.attackMob[this.incrementationAttack][2] * 2,
        this.attackMob[this.incrementationAttack][3] * 2);
    ilMarche = false;
    ctx.font = "48px serif";
    ctx.fillText(this.scoreJoueur, 50, 50);
}
}