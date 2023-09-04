var mymodal = document.getElementById("mymodal"); 
const darkModeToggle = document.getElementById("mylightmode");
const content = document.getElementById("mynavbar");



function modalhide(){

    mymodal.style.display = "none";
    }

function modalshow(){
    mymodal.style.display = "flex";

}

function mylinks(){
    mymodal.style.display = "none";
    
}

darkModeToggle.addEventListener("click", () => {
    content.classList.toggle("dark-mode");
});
