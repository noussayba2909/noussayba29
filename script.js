const questions = [
{
photo:"photo2.jpg",
question:"❤️ Tu m'aimes ? 🥺",
reponses:[
{text:"Oui, plus que tout ❤️",correct:true},
{text:"Non",fuit:true}
]
},
{
photo:"photo3.jpg",
question:"💍 Quand est-ce que tu me demandes en mariage ?",
reponses:[
{text:"Très bientôt 💍",correct:true},
{text:"Demain 🤭",correct:true},
{text:"Jamais",fuit:true}
]
},
{
photo:"photo4.jpg",
question:"👀 Moi ou tes cousins ?",
reponses:[
{text:"Toi évidemment ❤️",correct:true},
{text:"Mes cousins",fuit:true}
]
},
{
photo:"photo1.jpg",
question:"🌹 Où sont mes fleurs ?",
reponses:[
{text:"Elles arrivent 🌸",correct:true},
{text:"Oups... 😅",fuit:true}
]
},
{
photo:"photo5.jpg",
question:"💕 Tu veux rester avec moi pour toujours ?",
reponses:[
{text:"Ouiiiii ❤️",correct:true},
{text:"Non",fuit:true}
]
}
];

let index = 0;

const accueil = document.getElementById("accueil");
const jeu = document.getElementById("jeu");
const fin = document.getElementById("fin");

const commencer = document.getElementById("commencer");
const question = document.getElementById("question");
const photo = document.getElementById("photoQuestion");
const reponses = document.getElementById("reponses");

commencer.onclick = () => {
accueil.style.display="none";
jeu.style.display="block";
afficherQuestion();
};

function afficherQuestion(){

const q=questions[index];

photo.src=q.photo;

question.innerHTML=q.question;

reponses.innerHTML="";

q.reponses.forEach(r=>{

const bouton=document.createElement("button");

bouton.innerHTML=r.text;

if(r.correct){

bouton.onclick=()=>{

index++;

if(index<questions.length){

afficherQuestion();

}else{

jeu.style.display="none";

fin.style.display="block";

}

};

}

if(r.fuit){

bouton.onmouseover=()=>{

bouton.style.position="fixed";

bouton.style.left=Math.random()*80+"%";

bouton.style.top=Math.random()*80+"%";

};

}

reponses.appendChild(bouton);

});

}