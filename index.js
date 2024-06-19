var randomNumber1 = Math.floor(Math.random() * 6) + 1;

switch (randomNumber1) {
    case 1:
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        document.querySelectorAll("img")[0].setAttribute("src", "./images/dice6.png");
        break;
    default:
        break;    
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

switch (randomNumber2) {
    case 1:
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png");
        break;
    default:
        document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png");
        break;    
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Play 1 Wins";
}

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Play 2 Wins🚩";
}

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw";
}

console.log(randomNumber1);
console.log(randomNumber2);