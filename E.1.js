const num = Math.floor(Math.random() * 101);
let a = parseInt(prompt("Enter your guess: "));
let c = 100;

while (num !== a) {
    if (a < num) {
        console.log(`${a} is less`);
        c--;
    } else if (a > num) {
        console.log(`${a} is greater`);
        c--;
    } else {
        console.log("Hurray! Your score is:", c);
        break;
    }

    a = parseInt(prompt("Enter again: "));
}