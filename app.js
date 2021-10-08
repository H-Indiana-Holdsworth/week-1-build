// import functions and grab DOM elements
const randomNumP = document.getElementById('random-num');
const randomNum = Math.floor(Math.random() * 10);

const button = document.getElementById('generate');
// initialize global state

// set event listeners 
button.addEventListener('click', ()=> {
    randomNumP.textContent = randomNum;
});

console.log(randomNum);
// get user input
// use user input to update state 
// update DOM to reflect the new state

