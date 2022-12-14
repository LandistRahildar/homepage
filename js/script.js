console.log("sprawdzanie podpięcia js");

flatpickr(".js-date", {});

let zmienna = Infinity;

Math.floor(Math.random() * (49));

// let heightElement = document.querySelector(".js-height");

// heightElement.addEventListener("input", () => {
//     console.log(`Aktualny wzrost: ${heightElement.value}`)
// });

let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");

formElement.addEventListener("submit", (event) => {
    event.preventDefault(); //żeby uniemożliwić użytkownikowi wysłanie formularza

    let height = heightElement.value;
    let weight = weightElement.value;

    let bmi = weight /((height /100) ** 2);

    bmiElement.innerText = bmi.toFixed(2);
});