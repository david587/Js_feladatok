
````Javascript
Mini exercises:
//Write a function toUpper that takes 1 parameter, an array of strings, and console.logs a new array with all the strings capitalized.
function toupper(ArrayStr){
    let list=[];
    ArrayStr.forEach(function(str){
        list.push(str.toUpperCase());
    });
console.log(list);
}
toupper(["hello","world"]);
---------------------------------------------
//Write a function arrayDouble that takes an array and console.logs a new array with every value repeated twice.
function arrayDouble(stringArr){
    let list=[];
------------------------------------------------------
 <div id="counter">0</div>
 <button onclick="countUp()">Up</button>
 <button onclick="countDown()">down</button>
    
//press button and increase the div inner value
let count = 0;
function countUp() {
  count +=1;
  let counter = document.getElementById('counter');
  counter.innerText = count;
console.log(count);
}
    
//press button and decrease the div inner value
function countDown(countUp){
  let current=document.getElementById("counter");
  count-=1;
  current.innerText-=1;
}
-----------------------------------------------------
//change div-value to the input text    
    <div id="text"></div>
  <input id="input" type="text">
   <button onclick="change()">change</button>
function change(){
  let textBox=document.getElementById("input");
  let div=document.getElementById("text");
  textBox_value=textBox.value;
  div.innerText=textBox_value;
}
------------------------------------------------------
    stringArr.forEach(function(i){
      list.push(i);
      list.push(i);
    });
    console.log(list);
}
arrayDouble(["bark","meow"]);
-----------------------------------------------
////Write a function arraySum that takes an array of numbers and console.logs the sum of the numbers.
    
function arraySum(numArray){
    let total=0; 
    numArray.forEach(function (i){
         total=total+=i;
    });
    console.log(total);
   
}
arraySum([1,2,3]);
-------------------------------------------------
//Set up a <button id="todo-button">To Do</button> so that when you click the button, the text inside changes to "Done" 
<button id="todo-button" onclick="changeToDone()">To do</button>
<script>
  function changeToDone() {
    let button = document.getElementById('todo-button');
    button.innerText = 'Done';
  }
</script>
----------------------------------------
//when clicking the button, the number in the div increases by 1. 
<div id="counter">0</div>
<button onclick="countUp()">Up</button>
<script>
  let count = 0;
  function countUp() {
    count = count + 1;
    let counter = document.getElementById('counter');
    counter.innerText = count;
  }
</script>
--------------------------------------------------
//Create a shopping cart. Set up a <div id="cart"></div> and 4 buttons labeled "Apple", "Tomato", "Eggs", and "Clear"
<!--Gyak-->
<button onclick="addToCart('Apple')">Apple</button>
<button onclick="addToCart('Tomato')">Tomato</button>
<button onclick="addToCart('Eggs')">Eggs</button>
<button onclick="clearCart()">Clear</button>
<div id="cart"></div>
const cart = document.getElementById('cart');
function addToCart(food) {
    const cartItem = document.createElement('div');
    cartItem.innerText = food;
    cart.appendChild(cartItem);
  }
  function clearCart() {
    cart.innerHTML = '';
  }
  
-------------------------------------------------------
    
//Create a cm-inch converter. Create a textbox, 2 buttons: "Convert to cm" and "Convert to inch", and a <div id="result"></div>.
<input id="measurement" type="text">
<button onclick="convertToCm()">convert to cm</button>
<button onclick="convertToInch()"> convert to inch</button>
<div id="result"></div>
  const measurement = document.getElementById('measurement');
  function convertToCm() {
    const value = measurement.value;
    
    const convertedValue = +value * 2.54;
    const result = document.createElement('div');
    result.innerText = convertedValue;
    document.body.appendChild(result);
  }
function convertToInch() {
    const value = measurement.value;
    const convertedValue = +value / 2.54;
    const result = document.createElement('div');
    result.innerText = convertedValue;
    document.body.appendChild(result);
  }
------------------------------------------------------------
//Item cart summary
 <!--gyak-->
 <div id="receipt"></div>
//Gyak
let cartTotal=([
    {
        name:"apple",
        price:8,
        quantity:2
    },
    {
        name:"orange",
        price:8,
        quantity:3
    }
]);
let price=0;
let quantity=0;
function getPrice(){
cartTotal.forEach(function (i){
    price = price+=i.price*i.quantity;
    
});
let div=document.getElementById("receipt");
const cartItem = document.createElement('div');
cartItem.innerText="Cart total ="+" "+" "+"$"+price;
div.appendChild(cartItem);
}

function displayReceipt(){
    cartTotal.forEach(function (i){
        let div=document.getElementById("receipt");
   
    const cartItem = document.createElement('div');
    cartItem.innerText=i.name+" "+"$"+i.price+" "+"*"+" "+i.quantity+" "+"="+" "+"$"+i.price*i.quantity;
        div.appendChild(cartItem);
    });
}
displayReceipt();
getPrice();
----------------------------------------------------------------
//Write a function createCart that takes an object representing prices of food.
//For example: createCart({ Apple: 3, Orange: 4, Egg: 2 });
let total = 0;
function createCart(foodPrices) {
  const foods = Object.keys(foodPrices); //megadjuk a listát
  foods.forEach(function (i) {
    const cartItem = document.createElement('div');
    // Here we get the i price using the i variable.
    // If i = 'Apple', then foodPrices[i] is the same
    // as foodPrices['Apple'], which is the same as foodPrices.Apple
    const foodPrice = foodPrices[i];
    cartItem.innerText = i + ' $' + foodPrice;
    const addButton = document.createElement('button');
    addButton.innerText = 'Add';
    // Sorry I didn't teach this (I'll revise in the 2022 edition)!
    // You'll have to use a function without a name here. If you
    // create a separate addToCart() function, it will not have
    // access to any of the variables in this function.
    addButton.onclick = function () {
      total = total + foodPrice;
    };
    cartItem.appendChild(addButton);
    // This wil render each i with an "Add" button onto the webpage.
    document.body.appendChild(cartItem);
  });
}
createCart({ Apple: 3, Orange: 4, Egg: 2 });
---------------------------------------------------------------
    Filter:
    //csak azokat haggya benne amikre igazak a feltételek
function aboveFreezing(temps){
    const tempAboveFreezing =temps.filter(function(i){
        return i>=0;
         
    });
    return tempAboveFreezing;
}
aboveFreezing([9,-1,7,-9,-8]); //->in the list will be 9,7
//removes all red-colored foods from the array.
let foodArray=[{ name: 'Apple', color: 'red' }, { name: 'Egg', color: 'white' }]
function removeRed(){
    const food = foodArray.filter(function(i){
        return i.color!=="red";
    });
    return food;
}
----------------------------------------------------------
Maxkiválasztás:
//Legnagyobbat hadja benne a listában
function max(numArray) {
    let max = -Infinity;
  
    numArray.forEach(function (num) {
      // You can have an if statement without the else
      if (num > max) {
        max = num;
      }
    });
  
    return max;
  }
  max([1, 5, -2, 4, 3, 5, 0]);
  //legkisebb számot hygja benne
  function min(numArray){
    let min=0;
    numArray.forEach(function(i){
        if(i<min){
            min=i;
        }
    });
    return min;
  }
  min([1, 5, -2, 4, 3, 5, 0]);
  //Write a function that returns the smallest number that’s greater or equal to 0.
  function minNonNegative(numArray) {
    let min = Infinity;
  
    numArray.forEach(function (num) {
      if (num < 0) {
        return;
          
      } else if (num < min) {
        min = num
      }
    });
  
    return min;
  }
  minNonNegative([1, 5, -2, 4, 3, 5, 0]);
------------------------------------------------------
 //3almábol az utolsó eggyet hagyja benne
function  countapples(fruits){
  let count=0;
  const filtered =fruits.filter(function(i){
     
      //ha alma akkor nem teszi bele de megnöveli a count-ot,
      //ha  a count nagyobb vagy = 2 akkor belerakja
    if(count>=2){
      return true;
    }
    else if(i === "apple"){
        count +=1;
        return false;
    }
    else{
        return true;
    }
  });
  return filtered;
  }
  countapples(["chery","apple","orange","apple","banana","apple"];
-----------------------------------------------------------------
//Similarly, write a function pickFruits that removes 2 apples and 1 orange from the array.
function pickFruits(fruitArray) {
    let applesPicked = 0;
    let orangesPicked = 0;
  
    const filteredArray = fruitArray.filter(function (fruit) {
      if (fruit === 'apple') {
        if (applesPicked >= 2) {
          return true;
        } else {
          applesPicked = applesPicked + 1;
          return false;
        }
      } else if (fruit === 'orange') {
        if (orangesPicked >= 1) {
          return true;
        } else {
          orangesPicked = orangesPicked + 1;
          return false;
        }
      } else {
        return true;
      }
    });
  
    return filteredArray;
  }
  pickFruits(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);
----------------------------------------------------------------
MVC!!
Model->contains all the code that save and manage data
View->Contains all the code that manages visulas, Renders visulas using data in the model
Controller->COnnects model and view together
1,Responds to events from the view(e.g button clicks)
2,Tells the model to update its data(and the view to re-render)
MCV allows each section to only do 1 thing
----------------------------------------------------------------
Local Storage:
localStorage.setItem("key","data");
//saves a string and associates it with a key
localStorage.getItem("key"); 
//return the string,associated with a key
----------------------------------------------------------
RETURN
function func(){}
//the same way
let func = (//paramter goes here
               ) =>{
        console.log("alma");
    }
----------------------------------------------------------------
Appendchild -> végére füzi fel
Prepend -> elejére füzi fel
    
