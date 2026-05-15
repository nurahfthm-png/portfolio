const text = "Hello, I'm Noora";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,100);
    }
}

typeWriter();

window.addEventListener("load", ()=>{

document.querySelector(".hero")
.classList.add("show");

});

document
.getElementById("workBtn")
.addEventListener("click",()=>{

alert("Welcome to my artwork gallery!");

});