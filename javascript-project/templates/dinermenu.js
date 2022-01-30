alert("Hey there welcome to Los Hermanos Loco")


var mainMenu = {
   firstDish: "Hamburger",
   firstDishPrice: 10,
   secondDish: "Cheeseburger",
   secondDishPrice: 12,
   thirdDish: "Steakburger",
   thirdDishPrice: 15,
   fourthDish: "Teriyaki Chicken",
   fourthDishPrice: 8,
   fifthDish: "BBQ Chicken",
   fifthDishPrice: 8 
};

var sideMenu = {
   firstSide: "Regular Fries",
    firstSidePrice: 3,
    secondSide: "Seasoned Fries",
    secondSidePrice: 5,
    thirdSide: "Mash Potatoes",
    thirdSidePrice: 5,
    fourthSide: "Mac&Cheese",
    fourthSidePrice: 5,
    fifthSide: "Nuggets",
    fifthSidePrice: 3,
    sixthSide: "Hotdog",
    sixthSidePrice: 4,
    seventhSide: "Coleslaw",
    seventhSidePrice: 2,
    eighthSide: "Chilli&Beans",
    eighthSidePrice: 5
};
const customerName = prompt("Enter your name here", "<name goes here>");

   if (customerName!= null) {

   console.log("Hello" + customerName + "! How are you today?");
};

function total() {
   return mainMenu.price + SideMenu.price;
};

console.log(mainMenu, sideMenu);

