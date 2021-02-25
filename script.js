//selectors am i connecting my html to js here? 
const daysInput = document.querySelector ('.days_input');
const guestsInput = document.querySelector ('.guests_input');
const coffeeButton =document.querySelector ('.coffee_button');
const coffeebagInput = document.querySelector ('.coffeebag_input');

//event listeners is this where I tell the computer what to do?  I want days multiplied by guests with results shown in coffee bag box

coffeeButton.addEventListener("click", addCoffee)


function coffeeCount (days,guests) {
    return days*guests;
}
const numofCoffee = coffeeCount(7,56); {
    console.log(numofCoffee);
}