const flecheGauche = document.querySelector("#fleche-gauche")
const flecheDroite = document.querySelector("#fleche-droite")

const coulissant = document.querySelector("#coulissant")

var avance = 0;

var compteur = 0;

flecheDroite.addEventListener("click", () =>{

  compteur += 1;
  avance = avance - 1154;

  if(compteur === 6){
    compteur = 0;
    avance = 0;
  }

  coulissant.style.transform = `translateX(${avance}px)`

})


flecheGauche.addEventListener("click", () =>{

  compteur -= 1;
  avance = avance + 1154;

  if(compteur <= 0){
    compteur = 6;
    avance = -5770;
  }

  coulissant.style.transform = `translateX(${avance}px)`

})





