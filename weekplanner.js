const form = document.querySelector("#calc-form");
const input = document.querySelector("#userBudget");
const output = document.querySelector("#output");

const dishArray = [];

// Class for generating many dishes
class Dish {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;

    dishArray.push(this);
  }
}

// Dishes are specified here:
const sushi = new Dish("Sushi", 69.95, "Ris med rå fisk eller grøntsager");
const ramen = new Dish("Ramen", 59.95, "Nudelsuppe med grøntsager og kød eller tofu");
const udon = new Dish("Udon", 49.95, "Nudelsuppe med tykke udon-nudler");
const tempura = new Dish("Tempura", 79.95, "Friterede grøntsager eller skaldyr");
const yakitori = new Dish("Yakitori", 39.95, "Grillet kylling på spyd");
const gyoza = new Dish("Gyoza", 49.95, "Stegte dumplings med kød eller grøntsager");
const soba = new Dish("Soba", 59.95, "Nudler lavet af boghvede med sojasovs");
const okonomiyaki = new Dish("Okonomiyaki", 69.95, "Japansk pandekage med grøntsager og kød");
const takoyaki = new Dish("Takoyaki", 49.95, "Friterede blæksprutteboller");
const tonkatsu = new Dish("Tonkatsu", 69.95, "Friteret svinekød med kål og ris");
const katsu_curry = new Dish("Katsu Curry", 79.95, "Karryret med friteret kød og ris");
const donburi = new Dish("Donburi", 59.95, "Skål med ris og topping af kød, fisk eller grøntsager");
const chirashi = new Dish("Chirashi", 89.95, "Skål med ris og forskellige slags rå fisk");
const unagi = new Dish("Unagi", 99.95, "Grillet ål med ris");
const anago = new Dish("Anago", 89.95, "Grillet søanemon med ris");
const shabu_shabu = new Dish("Shabu-Shabu", 109.95, "Fondue med kød, grøntsager og nudler");
const sukiyaki = new Dish("Sukiyaki", 119.95, "Gryderet med kød, grøntsager og nudler");
const karaage = new Dish("Karaage", 59.95, "Friteret kylling med sojasovs");
const yakiniku = new Dish("Yakiniku", 89.95, "Grillet kød på bordgrill");
const kaisendon = new Dish("Kaisendon", 99.95, "Skål med ris og forskellige slags rå fisk og skaldyr");
const edamame = new Dish("Edamame", 29.95, "Kogte sojabønner med salt");
const agedashi_tofu = new Dish("Agedashi Tofu", 39.95, "Friteret tofu serveret i en varm dashi-sovs.");
const hiyayakko = new Dish("Hiyayakko", 29.95, "Kold tofu serveret med forårsløg og ingefær.");
const onigiri = new Dish("Onigiri", 29.95, "Risbolle med fyld, ofte indpakket i tang.");
const yakisoba = new Dish("Yakisoba", 59.95, "Stegte nudler med grøntsager og kød eller skaldyr.");
const karaage_bento = new Dish(
  "Karaage Bento",
  79.95,
  "Friteret kylling, ris og forskellige tilbehør i en bento-boks."
);
const oyakodon = new Dish("Oyakodon", 59.95, "Risbolle med kylling og æg i en sødlig sovs.");
const nikujaga = new Dish("Nikujaga", 69.95, "Simret oksekød og kartofler i en sødlig sovs.");
const korokke = new Dish("Korokke", 49.95, "Friteret kartoffelmos med fyld.");
const omurice = new Dish("Omurice", 69.95, "Omelet med ris og fyld.");
const ochazuke = new Dish("Ochazuke", 49.95, "Risbolle med te og forskelligt fyld.");
const soboro_bento = new Dish(
  "Soboro Bento",
  69.95,
  "Rørt oksekød, ris og forskellige tilbehør i en bento-boks."
);
const buta_no_shogayaki = new Dish("Buta no Shogayaki", 69.95, "Stegt svinekød med ingefærsovs.");
const nasu_dengaku = new Dish("Nasu Dengaku", 49.95, "Stegte auberginer med misopasta.");
const hijiki_nimono = new Dish("Hijiki Nimono", 39.95, "Simret hijiki-tang og grøntsager i en sødlig sovs.");
const nasu_ohitashi = new Dish("Nasu Ohitashi", 39.95, "Kogte auberginer i en let dashi-sovs.");
const kinpira_gobo = new Dish("Kinpira Gobo", 49.95, "Stegte gulerødder og burdock-rod.");
const ohitashi = new Dish("Ohitashi", 39.95, "Kogte grøntsager serveret koldt i en let sovs.");
const natto = new Dish("Natto", 29.95, "Fermenterede sojabønner med krydderier.");
const wakame_salad = new Dish("Wakame Salad", 39.95, "Kold tangsalat med eddikedressing.");

// Eventlistener looks for submit and runs function
form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculation(0);
});

function calculation(counter, number = 0) {
  if (counter < 500) {
    let userInput = 0;
    if (number === 0) {
      userInput = parseInt(input.value);
    } else {
      userInput = number;
    }

    console.log(userInput);
    console.log("This is the users input:", userInput);
    form.reset();

    // This generates 5 random integers(numbers) using the integrated Math method. It pushes each number to the randInts array
    const randInts = [];
    while (randInts.length < 5) {
      const randInt = Math.floor(Math.random() * dishArray.length);
      if (!randInts.includes(randInt)) {
        randInts.push(randInt);
      }
    }
    console.log("These are the random numbers:", randInts);

    // The random numbers are used to chose 5 random dishes and pull the prices into a priceArray
    // The prices are added together using foreach and put into the totalSum variable
    let priceArray = [];
    let matchingDishes = [];
    let dishDescriptions = [];
    for (i = 0; i < 5; i++) {
      let popNum = randInts.pop();
      var dishChosen = dishArray[popNum];
      priceArray.push(dishChosen.price);
      matchingDishes.push(dishChosen.name);
      dishDescriptions.push(dishChosen.description);
    }
    let totalSum = 0;
    priceArray.forEach((price) => {
      totalSum += price;
    });

    // This checks if the price of the dishes is less than the user input
    if (totalSum <= userInput && !(totalSum < userInput - 10)) {
      output.innerHTML = `<div id="dishCardContainer">
      ${matchingDishes
        .map((dish) => {
          return `<div class="dishCard"> <h2>${dish}</h2> <br> <p>${dishDescriptions.shift()}</p> <br> <h3>Læs mere</h3> </div>`;
        })
        .join("")}
      </div> <div id="afterDishes"><h4 id="totalPrice">Pris i alt: ${totalSum} kr.<h4> <h5>Vælg denne kasse<h5></div>`;
    } else {
      calculation(counter + 1, userInput);
    }
  } else {
    output.textContent = `Vi har ikke nogle ugeplaner som matcher dit budget, prøv at justere prisen.`;
  }

  input.addEventListener("input", () => {
    output.innerHTML = "";
  });
}
