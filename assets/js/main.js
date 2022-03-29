const numbersElement = document.querySelector(".container")
let print;
let color;

for (let i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) { // oppure i % 15 == 0)
        print = "FizzBuzz";
        color = "bg_red"
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        print = "Fizz";
        color = "bg_green"
        console.log("Fizz")
    } else if (i % 5 == 0) {
        print = "Buzz";
        color = "bg_yellow"
        console.log("Buzz")
    } else {
        print = i;
        color = "bg_blue"
        console.log(i)
    }

    const markupContainer = `
     <div class="number ${color} d-flex justify-content-center align-items-center">
        <div>${print}</div>
     </div>
     `
    numbersElement.insertAdjacentHTML("beforeend", markupContainer);
}