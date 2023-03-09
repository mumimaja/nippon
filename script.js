//Bruger .querySelectorAll til at selecte alle classes med det navn på hele siden
const dageCirkel = document.querySelectorAll(".dage-cirkel");

//Vi bruger .forEach for at ramme hver cirkel

dageCirkel.forEach((element) => {
  // ()=> {} her tilføjer vi en helt almindelig function
  element.addEventListener("click", () => {
    // element.style.backgroundColor = "#26245E" erstattes med nedenstående, da vi referer til en class i CSS der aktiveres i nedenstående linje
    //classList er den måde man får adgang til classes på så man kan skrive fx toggle.
    element.classList.toggle("color-change");
  });
});

//Her laver vi funktionen så man kan tjekke laktose af som allergi.
//Dette er som sagt et eksempel som kun virker på id'et check-cirkel-forsøg ( laktose ), da vi havde problemer med at refere til alle classes.

if (document.title === "Nippon - Bestilling (trin 2)") {
  const checkCirkel = document.getElementById("check-cirkel-forsøg");

  checkCirkel.addEventListener("click", flueben);

  function flueben() {
    //Her indsætter vi ikonet fra font awsome med innerHTML
    checkCirkel.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
}

const burger = document.querySelector(".fa-bars");
const overlay = document.querySelector(".menu");
const x = document.querySelector(".fa-x");

burger.addEventListener("click", () => {
  overlay.style.height = "100%";
});

x.addEventListener("click", () => {
  overlay.style.height = "0";
});
