/* Scrivi un programma che stampi in console in numeri da 1 a 100 */
const numbersElement = document.querySelector(".container")
const backgroundElement = document.querySelector(".number")

for (let i = 1; i <= 100; i++) {
    let print;

    const markupContainer = `
     <div class="number d-flex justify-content-center align-items-center">
        <div>${print}</div>
     </div>
     `

    if ((i % 3 == 0) && (i % 5 == 0)) {

        print = "FizzBuzz";
        numbersElement.insertAdjacentHTML("beforeend", markupContainer);
        backgroundElement.classList.add("bg_red");
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        print = "Fizz";
        numbersElement.insertAdjacentHTML("beforeend", markupContainer);
        console.log("Fizz");
        backgroundElement.classList.add("bg_green");
    } else if (i % 5 == 0) {
        print = "Buzz";
        numbersElement.insertAdjacentHTML("beforeend", markupContainer);
        backgroundElement.classList.add("bg_yellow");
        console.log("Buzz");
    } else {
        print = i;
        numbersElement.insertAdjacentHTML("beforeend", markupContainer);
        backgroundElement.classList.add("bg_blue");
        console.log(i);
    }

    // numbersElement.insertAdjacentHTML("beforeend", markupContainer)
}