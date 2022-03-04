const Hicon =document.querySelector(".Hicon")
const toogleBTn=document.querySelector(".toogleBTn")

toogleBTn.addEventListener("click",()=>{
    Hicon.style.transform="rotate(360deg)"
    Hicon.style.transition=".6s"

})


const preloader=document.querySelector(".preloader");

window.addEventListener('load',()=>{
    preloader.style.display="none"
})