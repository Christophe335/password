// saisie des bouton
 //bouton On/Off pour majuscules
let maj = document.getElementById('monslide1').value;
let nbr = document.getElementById('monslide2').value; //bouton On/Off pour nombres
let sym = document.getElementById('monslide3').value; //bouton On/Off pour symboles
let evt = document.getElementById('monslide4').value; //bouton On/Off pour éviter caractères
const long = document.getElementById('nbrcaractere'); //choix du nombres de caractères pour le mdp

    


let pass = "";
// affichage
let ecran = document.getElementById('ecran');

// longueur du mot de passe
long.addEventListener('keyup', function(){
    document.getElementById("ecran").innerHTML = pass;
});
long.addEventListener('keypress',function(e){
    if(e.key === "enter"){
        document.getElementById('generer').focus();
    }
});

// fonction qui génère le code
function generer(maj, nbr, sym, evt){
let depart = "azertyuiopqsdfghjklmwxcvbn";
let majus = "AZERTYUIOPQSDFGHJKLMWXCVBN";
let numbs = "0123456789";
let symbs = "~!@#$%^&*()-_=+[{]}\\|;:,<.>/?€";
let evite ="O0I1l"


longueur = long.value;


// on off des boutons

for ( i=0; i<longueur; i++){
    let onoffmaj = document.getElementById('monslide1').checked;
    let onoffnbr = document.getElementById('monslide2').checked;
    let onoffsym = document.getElementById('monslide3').checked;
    let onoffevt = document.getElementById('monslide4').checked;
    
    
    if (onoffmaj === true) {
        depart += majus;
        
    } 
    if (onoffnbr === true) {
        depart += numbs;
        
    }
    if (onoffsym === true) {
        depart += symbs;
        
    } 
    if (onoffevt === true) {
        depart = depart.replace('O','o');
        depart = depart.replace('0','o');
        depart = depart.replace('I','i');
        depart = depart.replace('1','o');
        depart = depart.replace('l','o');
        
    }
   

// calcul du mot de passe
    let calcul = Math.round(Math.random()*depart.length);
    pass += depart.substring(calcul, calcul+1);

    // assignation du pourcentage de la barre horizontale ou verticale
    let bar = document.getElementById('bar');
    let bar2= document.getElementById('bar2');
    let a = long.value;
    let b = a * 0.39;
    console.log(b);
    bar.style.maxWidth = "100%";  // en mode desktop largeur max à 100%
    bar.style.width = b+"%";

    bar2.style.maxHeight = "100%";  // en mode téléphone hauteur max à 100%
    bar2.style.height = b+"%";

    // changement de couleur de la barre niveau de sécurité
if (b<= 25){
    bar.style.backgroundColor = "#ff0000";
    bar2.style.backgroundColor = "#ff0000";
    document.getElementById('niveau').innerText = "Mot de passe faible";
}
else if ( b>25 && b<40){
    bar.style.backgroundColor = "#c33d3c";
    bar2.style.backgroundColor = "#c33d3c";
    document.getElementById('niveau').innerText = "Mot de passe moyen";
}
else if ( b>40 && b<60){
    bar.style.backgroundColor = "#c45500";
    bar2.style.backgroundColor = "#c45500";
    document.getElementById('niveau').innerText = "Mot de passe bon";
}
else if ( b>60 && b<80){
    bar.style.backgroundColor = "#4bb8b4";
    bar2.style.backgroundColor = "#4bb8b4";
    document.getElementById('niveau').innerText = "Mot de passe très bon";
}
else {
    bar.style.backgroundColor = "#0ff5f0";
    bar2.style.backgroundColor = "#0ff5f0";
    document.getElementById('niveau').innerText = "Mot de passe super bon";
}

}


// affiche dans la console

console.log("Mot de passe créer : ",pass);
document.getElementById("ecran").innerHTML = pass;
}





// fonction qui copie le  résultat


function copier() {
    
    navigator.clipboard.writeText(pass).then(() => {
        document.getElementById('niveau').innerText = "Code copier";
    });
    
    setTimeout (efface, 2000);
};


function efface() {
    location.reload();
};

