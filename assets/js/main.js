/* Scrivi un programma che stampi in console in numeri da 1 a 100 */
const divContainerElement = document.querySelector(".container")

for (let i = 1; i <= 100; i++) {

    const markupContainer = `
    <div class="number d-flex justify-content-center align-items-center">
    <div>${i}</div>
    </div>
    `
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }


}