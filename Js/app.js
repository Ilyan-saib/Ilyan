
  
  let papier 
  let caillou 
  let cisailles 
  
  let t = ['Pierre','Feuille','Ciseaux'];
  let random = ~~(Math.random()*t.length);
  let randomvalue = t[random];

 let robo = document.getElementById('ranDOM')
 robo.style.color = "green"
 robo.style.fontSize = "50px"
 robo.style.textAlign = "center"
 robo.style.position = "relative"
 robo.style.bottom = "-80px"
 
 

function pierre(x) {
    caillou = true
    papier = false
    cisailles = false
    let pierre =  document.getElementById('Fill')
    pierre.innerHTML = "Vous avez choisi la pierre"
    pierre.style.fontSize = "50px"
    pierre.style.position = "relative"
    pierre.style.bottom = "-100px"
    pierre.style.textAlign = "center"
    console.log(cisailles);
    console.log(papier);
    console.log(caillou);
    if ((randomvalue === 'Pierre')&&(caillou == true)) {
          document.getElementById('ranDOM').innerHTML = "Le robot à choisi la " + randomvalue
          let message = document.getElementById('nope')
          message.innerHTML = "Personne n'as gagné "
          message.style.fontSize = "50px"
          message.style.position = "relative"
          message.style.bottom = "-100px"
          message.style.textAlign = "center"
          message.style.color = "orange"
    }
  else if ((randomvalue === 'Feuille')&&(caillou == true)){
    document.getElementById('ranDOM').innerHTML = "Le robot à choisi la " + randomvalue
       let message = document.getElementById('lose')
          message.innerHTML = "Vous avez perdu !"
          message.style.fontSize = "50px"
          message.style.position = "relative"
          message.style.bottom = "-100px"
          message.style.textAlign = "center"
          message.style.color = "red"
  }
  else if ((randomvalue === 'Ciseaux')&&(caillou == true)){
    document.getElementById('ranDOM').innerHTML = "Le robot à choisi les " + randomvalue
    let message = document.getElementById('win')
    message.innerHTML = "Vous avez gagné !"
    message.style.fontSize = "50px"
    message.style.position = "relative"
    message.style.bottom = "-100px"
    message.style.textAlign = "center"
    message.style.color = "blue"
  }
}
function feuille(x) {
   caillou = false
   papier = true
   cisailles = false
    let feuille =  document.getElementById('Fill')
    feuille.innerHTML = "Vous avez choisi la feuille"
    feuille.style.fontSize = "50px"
    feuille.style.position = "relative"
    feuille.style.bottom = "-100px"
    feuille.style.textAlign = "center"
    console.log(cisailles);
    console.log(papier);
    console.log(caillou);
    if ((randomvalue === 'Pierre')&&(papier == true)) {
      document.getElementById('ranDOM').innerHTML = "Le robot à choisi la " + randomvalue
      let message = document.getElementById('nope')
      message.innerHTML = "Vous avez gagné! "
      message.style.fontSize = "50px"
      message.style.position = "relative"
      message.style.bottom = "-100px"
      message.style.textAlign = "center"
      message.style.color = "blue"
}
else if ((randomvalue === 'Feuille')&&(papier == true)){
document.getElementById('ranDOM').innerHTML = "Le robot à choisi la " + randomvalue
   let message = document.getElementById('lose')
      message.innerHTML = "Personne n'a gagné!"
      message.style.fontSize = "50px"
      message.style.position = "relative"
      message.style.bottom = "-100px"
      message.style.textAlign = "center"
      message.style.color = "orange"
}
else if ((randomvalue === 'Ciseaux')&&(papier == true)){
document.getElementById('ranDOM').innerHTML = "Le robot à choisi les " + randomvalue
let message = document.getElementById('win')
message.innerHTML = "Vous avez perdu!"
message.style.fontSize = "50px"
message.style.position = "relative"
message.style.bottom = "-100px"
message.style.textAlign = "center"
message.style.color = "red"
}
}


function ciseaux(x) {
  caillou = false
  papier = false
  cisailles = true

    let ciseaux =  document.getElementById('Fill')
    ciseaux.innerHTML = "Vous avez choisi les ciseaux"
    ciseaux.style.fontSize = "50px"
    ciseaux.style.position = "relative"
    ciseaux.style.bottom = "-100px"
    ciseaux.style.textAlign = "center"
    console.log(cisailles);
    console.log(papier);
    console.log(caillou);

    if ((randomvalue === 'Pierre')&&(cisailles == true)) {
      document.getElementById('ranDOM').innerHTML = "Le robot à choisi la " + randomvalue
      let message = document.getElementById('nope')
      message.innerHTML = "Vous avez perdu! "
      message.style.fontSize = "50px"
      message.style.position = "relative"
      message.style.bottom = "-100px"
      message.style.textAlign = "center"
      message.style.color = "red"
}
else if ((randomvalue === 'Feuille')&&(cisailles == true)){
document.getElementById('ranDOM').innerHTML = "Le robot à choisi la " + randomvalue
   let message = document.getElementById('lose')
      message.innerHTML = "Vous avez gagné !"
      message.style.fontSize = "50px"
      message.style.position = "relative"
      message.style.bottom = "-100px"
      message.style.textAlign = "center"
      message.style.color = "blue"
}
else if ((randomvalue === 'Ciseaux')&&(cisailles == true)){
document.getElementById('ranDOM').innerHTML = "Le robot à choisi les " + randomvalue
let message = document.getElementById('win')
message.innerHTML = "Personne n'a gagné !"
message.style.fontSize = "50px"
message.style.position = "relative"
message.style.bottom = "-100px"
message.style.textAlign = "center"
message.style.color = "orange"
}




}

let test = document.getElementById('welcome')  
test.innerHTML = "Bienvenue"
test.style.color = "violet"
test.style.fontSize = "50px"
test.style.textAlign = "center"
test.style.position = "relative"
test.style.bottom = "-100px"


let image = document.getElementById('pierre_img')

image.style.width = "80px"
image.style.height = "80px"
image.style.position = "relative"
image.style.bottom = "-125px"
image.style.left = "725px"

let image_2 = document.getElementById('papier_img')

image_2.style.width = "80px"
image_2.style.height = "80px"
image_2.style.position = "relative"
image_2.style.bottom = "-125px"
image_2.style.left = "825px"



let image_3 = document.getElementById('ciseaux_img')

image_3.style.width = "80px"
image_3.style.height = "80px"
image_3.style.position = "relative"
image_3.style.bottom = "-125px"
image_3.style.left = "925px"


let refresh = document.getElementById('refresh')

refresh.style.position = "relative"
refresh.style.left = "870px"
refresh.style.bottom = "-250px"
refresh.style.width = "150px"
refresh.style.height = "30px"



 
 
 
 
 
