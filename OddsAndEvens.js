const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];

let orderArr = [...evens, ...odds].map((num) => num).sort((a, b) => a - b);

document.getElementById("odds-and-evens").innerHTML = orderArr.join(" ");
