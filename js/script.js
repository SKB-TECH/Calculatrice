// on declare les variables globale de la calculatrice
const ecran = document.querySelector("#ecran");
//on stocker la valeur precedente de l'ecran et l'affichage
let precedent = 0;
// stockage de l'affichage
let affichage = "";
//operation
let operation = null;

// let memoire;
window.onload = () => {
  //on verifie la touche clicker
  let touches = document.querySelectorAll("span");
  for (let touche of touches) {
    touche.addEventListener("click", gestionTouche);
  }
  //quand on cliker sur une touche
  function gestionTouche() {
    let touche = this.innerText;
    //On verifie si chiffre ou , ou .
    if (parseFloat(touche) >= 0 || touche === ".") {
      //  on met ajour l'affichage et on afficher a l'ecran
      affichage =
        affichage === "" ? touche.toString() : affichage + touche.toString();
      //on verifie si l'ecran est vide ou non
      ecran.innerText = affichage;
    } else {
      switch (touche) {
        // on reinitialiser a 0
        case "C":
          precedent = 0;
          affichage = "";
          operation = null;
          ecran.innerText = 0;

          break;

        case "+":
        case "-":
        case "*":
        case "/":
          precedent =
            precedent === 0
              ? parseFloat(affichage)
              : calculer(precedent, parseFloat(affichage), operation);

          ecran.innerText = precedent;

          operation = touche;
          affichage = "";
          break;

        case "=":
          precedent =
            precedent === 0
              ? parseFloat(affichage)
              : calculer(precedent, parseFloat(affichage), operation);

          ecran.innerText = precedent;

          affichage = precedent;

          precedent = 0;
          break;
      }
    }
  }
};
// fonction pour effectuer les calculs
/**
 * cette fonction effectue les calculs proprement dit
 * @param {*} x represente le nombre 1
 * @param {*} y  represente le nombre 2
 * @param {*} operation  l'operateur
 */
const calculer = (x, y, operation) => {
  nb1 = parseFloat(x);
  nb2 = parseFloat(y);
  if (operation === "+") return nb1 + nb2;
  if (operation === "-") return nb1 - nb2;
  if (operation === "*") return nb1 * nb2;
  if (operation === "/") return nb1 / nb2;
};
