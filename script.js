/*
const textElement = document.querySelector('#text');
const text = "Hello, I am Software Developer";

let index = 0;
let isDeleting = false;

// function typeWriter(){
//     if(index < text.length){
//         textElement.innerHTML += text.charAt(index);
//         index++;
//         setTimeout(typeWriter,100);
//     }
// }

function typeWriter(){

    let speed = isDeleting ? 100 : 150 ;

    if(!isDeleting){
    textElement.innerHTML = text.slice(0,index);
    index++;

    if(index > text.length){
        isDeleting = true;
        speed = 1000;
    }
  }
     else{
        textElement.innerHTML = text.slice(0,index);
        index--; 

        if(index < 0){
            index = 0
            isDeleting = false;
            speed = 500;
        }
     }

     setTimeout(typeWriter,speed);
}


typeWriter()
*/



const textElement = document.querySelector('#text');
const btn = document.querySelector('#toggleBtn');

const sentence = [
    "Hello, I Am MERN Full Stack Developer",
    "I Build Modern & Scalable Web Apps",
    "I Turn Ideas Into Real Products",
    "Passionate About Clean Code & UI",
    "Freelancer | Developer | Problem Solver"
]

const colors = [
  "#1af174",  // aqua neon
  "#ff6b6b",  // soft red
  "#ffd166",  // yellow gold
  "#c77dff",  // purple glow
  "#4cc9f0"  // electric sky blue
]

let sentenceIndex = 0;
let index = 0;
let isDeleting = false;
let isPaused = false;

function typeWriter (){
 
    if(isPaused) return;

    let currentText = sentence[sentenceIndex];

    const currentColor = colors[sentenceIndex];
    textElement.style.color = currentColor;

    textElement.style.textShadow = ` 0 0 0px ${currentColor},
                                    0 0 10px ${currentColor},
                                    0 0 25px ${currentColor}`
                                  ;

    let speed = isDeleting ? 70 : 120;

    if(!isDeleting){
        textElement.innerHTML = currentText.slice(0,index);
        index++;

        if(index > currentText.length){
            index = currentText.length;
            isDeleting = true;
            speed = 500;
        }
    }
    else{
        textElement.innerHTML = currentText.slice(0,index);
        index--;

        if(index < 0){
            index = 0;
            isDeleting = false;
            speed = 650;

            sentenceIndex = (sentenceIndex + 1) % sentence.length
        }
    }

    setTimeout(typeWriter,speed);
}

typeWriter()

btn.addEventListener('click',() => {
   isPaused = !isPaused;

   btn.innerText = isPaused ? "Play" : "Pause";

   if(!isPaused){
    typeWriter()
   }
})
