console.log("I work!")

let budget = 199;                                                                     //Client's money
let yours = document.getElementById("yourMoney");
renewBucks = () => {
  document.getElementById("yourMoney").textContent = `Your bucks: ${budget}$`;
};

renewBucks()


// Drinks' prices
prices = {
  coke: 12,
  fanta: 19,
  sprite: 20,
};

renewDrink = (drink, id) => {
  document.getElementsByClassName(`${id}`).textContent = `${prices[drink]}$`;
  console.log("renwDrink!")
};

let cokePrice = document.getElementsByClassName("cokePrice").textContent;
let fantaPrice = document.getElementsByClassName("fantaPrice").textContent;
let waterPrice = document.getElementsByClassName("waterPrice").textContent;

renewDrink("coke", "cokePrice");
renewDrink("fanta", "fantaPrice");
renewDrink("water", "waterPrice");

let buyCoke = document.getElementsByClassName("buyCoke");
let buyFanta = document.getElementsByClassName("buyFanta");
let buyWater = document.getElementsByClassName("buyWater");

function request(drink) {
  if (budget <= 0) {
    console.log("you have no money...");
    document.getElementById("yourMoney").textContent = "Sorry, no money..."
    return;
  }

  console.log("function is done!")
  budget = budget - prices[`${drink}`];
  console.log(budget);
  renewBucks();

}

// buyCoke.onclick = request("coke");
// buyFanta.onclick = request("coke");
// buyWater.onclick = request("coke");

// buyCoke.addEventListener("click", request("coke"));
// buyFanta.addEventListener("click", request("fanta"));
// buyWater.addEventListener("click", request("water"));


