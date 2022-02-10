var mainMenu = [
    "Hamburger", 
    "Cheeseburger",
    "Steakburger",
    "Teriyaki Chicken",
    "BBQ Chicken", 
];


// var mainMenuItems = mainMenu.values();
let price = {
    "Hamburger": 7,
    "Cheeseburger": 8,
    "Steakburger": 10,
    "Teriyaki Chicken": 5,
    "BBQ Chicken": 5
}

let key = Object.keys(price).find(key => price[key] === 10);

console.log(key);

var sideMenu = [
    "Regular Fries",
    "Seasoned Fries",
    "Mash Potatoes",
    "Mac&Cheese",
    "Nuggets",
    "Hotdog",
     "Coleslaw",
     "Chilli&Beans",
];

var commentVault = [

    "I highly recommend the Coleslaw with that order",
    "Can't go wrong with some Regular Fries with that, it's a go to",
    "You get some Seasoned Fries with that and your golden",
    "You know the Mash Potatoes would highly compliment that",
    "Nuggets also known as Boneless chicken would go nicely with that",
    " Some of our Homemade Mac&Cheese to fill you up with that doesn't sound bad",
    "The Ole classic Hotdog sounds nice with that don't it",
    "If you're looking for a rumbling in your tummy Chilli&Beans"
];

var commentVaults = commentVault[Math.floor(Math.random() * commentVault.length)];

Object.defineProperty(mainMenu, "toString", {
    value: function() {
        return JSON.stringify(this)
    }
})

alert("Hey There Welcome to Los Hermanos Loco!");

const customerName = prompt("Enter your name here", "<name goes here>");

alert("Hi There " + customerName + "!" + " Take a look at our menu");

const item = prompt(`What would you like?\n${mainMenu.join('\n')}`)

if (mainMenu.includes(item)) {

    alert(`You have ordered: ${item}`)
} else {
    alert('The item you have ordered does not exist!')
}

alert(commentVaults);

alert('Along with your main order you also get 2 Sides to go with your meal!')

const sideItem = prompt(`What would you like as a side order?\n${sideMenu.join('\n')}`)

if (sideMenu.includes(sideItem)) {

    alert(`You have ordered: ${sideItem}`)
} else {
    alert('The item you have ordered does not exist!')
}

alert(commentVaults);

const sideItem1 = prompt(`What else would you like?\n${sideMenu.join('\n')}`)

if (sideMenu.includes(sideItem1)) {

    alert(`You have ordered: ${sideItem1}`)
} else {
    alert('The item you have ordered does not exist!')
}

alert('That will be 17$')

