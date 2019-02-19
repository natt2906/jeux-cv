///////////////////////////////////////////////////collison mob perso ///////////////////////////////////////
var collision = function () { // fonction collision qui detecte celon plusieurs critere si deux element rentre en contact si oui alors il ya colision

    if (captain.dx < mobMinotaur.dx + mobMinotaur.runMob[mobMinotaur.incrementationRun][2] &&
        captain.dx + captain.positionDepart[captain.incrementationStaticDroite][2] > mobMinotaur.dx &&
        captain.dy < mobMinotaur.dy + mobMinotaur.runMob[mobMinotaur.incrementationRun][3] &&
        captain.positionDepart[captain.incrementationStaticDroite][3] + captain.dy > mobMinotaur.dy) {
        collisionAttack = true; // si collision il ya  alors attack il ya
        if (collisionAttack) {
            ilMarche = false;
        }
        if (touche === 'attack') {
            mobMinotaur.mobVivant = false;
            // si le personnage attack et qu'il ya colision avec le minotaur alors le minotaur meurt
            //si le minotaur meurt sa vitesse augmente et le score du joueur augmente
        }

        // si cette variable est false ce la veut dire que le minotaur rentre en contact avec le personnage et donc il arrete de marcher pour frapper
        captain.health = captain.health - 0.5; // si il ya colision la vie du personnage diminue
        mobMinotaur.dx += mobMinotaur.speed; // le minotaur arrete d'avancer si il ya une collision

    } else {
        ilMarche = true;
        collisionAttack = false;
    } 
}