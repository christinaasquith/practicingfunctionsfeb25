//selectors am i connecting my html to js here? 
const daysInput = document.querySelector ('.days_input');
const guestsInput = document.querySelector ('.guests_input');
const coffeeButton =document.querySelector ('.coffee_button');
const coffeebagInput = document.querySelector ('.coffeebag_input');

console.log(daysInput);
console.log(guestsInput);
console.log(coffeeButton);
console.log(coffeebagInput);

//event listeners is this where I tell the computer what to do?  I want days multiplied by guests with results shown in coffee bag box

function addCoffee () {
    const days=daysInput.value;
    const guests=guestsInput.value;
    console.log (days);
    console.log (guests);
    console.log("buttonpress")
} 

coffeeButton.addEventListener("click", addCoffee)

function coffeecount (daysInput, guestsInput) {
return daysInput*guestsInput; }