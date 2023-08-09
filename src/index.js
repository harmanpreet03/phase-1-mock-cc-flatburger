// Your code here
const restaurantMenu = document.querySelector("#restaurant-menu");
const foodDetails = document.querySelector("#food-detail")
const burgerImageId = document.querySelector("#image")
const burgerNameId = document.querySelector("#name")
const numberInCartCount = document.querySelector("#number-in-cart-count")

const form = document.querySelector("#add-to-cart-form")
let numberCart = 0;

fetch("  http://localhost:3000/burgers")
  .then((response) => response.json())
  .then((data) => {
    displayRestaurantMenu(data);
    displayFrontBurgers(data[0])
  });

function displayRestaurantMenu(burgers) {
  burgers.forEach((burger) => {
    const CreateSpanTag = document.createElement("span");
    CreateSpanTag.addEventListener("click", () => displayFrontBurgers(burger))
    CreateSpanTag.innerHTML = burger.name;
    restaurantMenu.appendChild(CreateSpanTag);
  });
}

function displayFrontBurgers(burger){
    burgerImageId.src = burger.image
    burgerNameId.innerHTML = burger.name
    numberInCartCount.innerHTML = burger.number_in_cart

}

function handleSubmitForm(event){
    event.preventDefault()
    const userInputValue = document.querySelector("#add-to-cart-form input").value
 numberCart = numberCart + parseInt(userInputValue)
    const numberInCartCount = document.querySelector("#number-in-cart-count")
    numberInCartCount.innerHTML = numberCart

}

form.addEventListener("submit", (event) => handleSubmitForm(event))