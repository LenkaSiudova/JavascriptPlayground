//Spolecne
document.addEventListener('DOMContentLoaded', function() { // wait for load    
    const menuButton = document.getElementById("menu-tlacitko");
    const menuPolozky = document.getElementById("menu-polozky");
    const menuIcon = document.querySelector("#menu-tlacitko i");
    
    menuButton.addEventListener("click", function() {
        menuPolozky.classList.toggle("collapse");
        //change X or Burger
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
    });    
});
