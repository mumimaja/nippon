//Bruger .querySelectorAll til at selecte alle classes med det navn på hele siden
const dageCirkel = document.querySelectorAll(".dage-cirkel");

//Vi bruger .forEach for at ramme hver cirkel 

dageCirkel.forEach(element => {  
    // ()=> {} her tilføjer vi en helt almindelig function
    element.addEventListener("click", () => {
        // element.style.backgroundColor = "#26245E" erstattes med nedenstående, da vi referer til en class i CSS der aktiveres i nedenstående linje
        //classList er den måde man får adgang til classes på så man kan skrive fx toggle. 
        element.classList.toggle("color-change");
    })
});


const checkCirkel = document.querySelectorAll("check-cirkel");
const checkPil = document.querySelectorAll(".fa-solid fa-check");


checkCirkel.forEach(element => {  
    element.addEventListener("click", () => {
    
    element.classList.toggle("check-show");

    })
});


