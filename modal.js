function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//contrainte du formulaire
document.getElementById("connexion").addEventListener("submit",function(e){
  let nom =document.getElementById("nom");
  let regex=/^[A-Z]'?[-a-zA-Z]+$/;
  let nomErreur=document.getElementById("nomerreur")
  if(!nom.value||nom.value.length<2) { 
      e.preventDefault(); 
    nomErreur.textContent="nom manquant";
}

else{ 
  e.preventDefault(); 
   
    nomErreur.textContent=""
}

///////recuperation du prenom

  let prenom= document.getElementById("prenom");
    let reject=/^[A-Z][A-Za-z\é\è\ê\-]+$/; 
    let prenomErreur=document.getElementById("prenomerreur")
      if(!prenom.value||prenom.value.length<2) {
          e.preventDefault()
          prenomErreur.textContent="prenom manquant";
    }
    else{
      e.preventDefault()
        prenomErreur.textContent=""

    }

/////recuperation de l'email

  let email= document.getElementById("email");
let rejectEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let emailErreur=document.getElementById("emailerreur")
  if(!email.value) {
      e.preventDefault()
      emailErreur.textContent="email manquant";
      
  }
  else if(rejectEmail.test(email.value) === false){
      e.preventDefault()
      emailErreur.textContent="mauvaise email";
  }
  else{
      e.preventDefault()
      emailErreur.textContent=""
  }

///////recuperation de la date de naissance

  let userDate=document.getElementById("date").value;
  const formatDate = new Date(userDate);
 const now = new Date("01/01/2004");
 const avant =new Date("01/01/1982");
 let dateErreur=document.getElementById("dateerreur")
  
  if(!userDate) {
      e.preventDefault()
      dateErreur.textContent="date manquante";
      
  }
    else if(formatDate.getFullYear()>now.getFullYear()||formatDate.getFullYear()<=avant.getFullYear()){ 
      e.preventDefault()
        dateErreur.textContent="vous ne devez pas etre mineur et vous ne devez pas avoir la quarantaine"
   }
   else  {
      e.preventDefault()
      dateErreur.textContent=""
       

   }
   //recupation du nombre de jeu
   let quantity = document.getElementById("quantity");
   let jeu =document.getElementById("jeu");
   let competition=!quantity.value||quantity.value.length>=3||isNaN(quantity.value)
   if(competition===true){
    e.preventDefault()
     jeu.textContent="remplir le nombre de jeu"
   }
   else  {
    e.preventDefault()
    jeu.textContent=""
     

 }
 //recuperation du chekbox
 
 let cocher =document.getElementById("cocher");
 let chekbox = (document.getElementById("location1").checked == false) && (document.getElementById("location2").checked == false) && (document.getElementById("location3").checked == false) && (document.getElementById("location4").checked == false) &&(document.getElementById("location5").checked == false)&&(document.getElementById("location6").checked == false)
 
 
 if( chekbox===true){
   e.preventDefault();
  cocher.textContent="veuiller cocher une case"
 }
 else{
  e.preventDefault()
  cocher.textContent=""

 }
 //recuperation de la case
 let cased =document.getElementById("cased");
  let checkbox1= (document.getElementById("checkbox1").checked==false) && (document.getElementById("checkbox2").checked==false)
  if(checkbox1===true ){
    e.preventDefault();
    cased.textContent="marquer un juste"

  }
  else{
    e.preventDefault()
    cased.textContent=""
  
   }
   //confirmation de l'inscription
   if(!nom.value ===false && !prenom.value === false && !email.value === false && !userDate ===false && competition===false && chekbox === false && checkbox1 ===false){
     e.preventDefault()
       document.getElementById("popup").style.zIndex=1000
       
   }
   else{
       e.preventDefault()
       
      
   }})
   let popup =document.getElementById("popup");
   let content =document.querySelector(".content")
   document.querySelector(".boutonclossse").addEventListener("click",fermer);
   function fermer(e){
     e.preventDefault();
    popup.style.zIndex=-1000
    content.style.display="none"

   }
   document.querySelector(".boutonclose").addEventListener("click",fFermer);
   function fFermer(e){
    e.preventDefault();
    popup.style.zIndex=-1000
   content.style.display="none"

   } 
   let bground =document.querySelector(".bground");
   document.querySelector(".close").addEventListener("click",fClose);
   function fClose(e){
     e.preventDefault();
     bground.style.zIndex=-1000
     bground.style.display="none"
   } 
   let heroAfter=document.querySelector(".hero-content");
   let heroimg=document.querySelector(".hero-img");
   let myTopnav=document.getElementById("myTopnav")
  

