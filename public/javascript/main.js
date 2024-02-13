
function updateText() {

var word1="Mobile Developer";
var word2="Web Developer";
 const textAnimationElement = document.querySelector(".text-animation");
 if(textAnimationElement.innerHTML===word1){
  textAnimationElement.innerHTML=word2;
 }else{
  textAnimationElement.innerHTML=word1;

 }

}
setInterval(updateText, 2000); 






const navBar=document.querySelector(".nav-bar");
const hamburger=document.querySelector(".hamburger");
const logo = document.querySelector(".logo");
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("clicked-burger");
  navBar.classList.toggle("clicked-burger");
  logo.style.backgroundColor = hamburger.classList.contains("clicked-burger") ? "rgba(0, 0, 0, 0.5)" : "";

})





