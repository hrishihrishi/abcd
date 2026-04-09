// ------PROTOTYPE INHERITANCE------

// let animal = {
//     alive : true,
//     eat(){console.log("eating")}
// }
// let dog = {legs : 4}

// setting the prototype of an object
Object.setPrototypeOf(dog, animal) // dog is child of animal

// getting the prototype of an object
Object.getPrototypeOf(dog) // animal

// checking if an object has a property
Object.hasOwnProperty(dog, "legs") // true

// checking if an object is a prototype of another object
Object.isPrototypeOf(animal, dog) // true

// creating an object with a prototype
let cat = Object.create(animal)

// checking if an object is an instance of another object
cat instanceof animal // true










// ------CLASS INHERITANCE------

class Animal {
    constructor(name){
        this.name = name
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Animal {
    constructor(name, legs){
        super(name)
        this.legs = legs
    }
}

let dog = new Dog("Buddy", 4)

// console.log(dog.eat()) // Buddy is eating
// console.log(dog.legs) // 4

// // checking if an object is an instance of another object
// dog instanceof Dog // true
// console.log( dog instanceof Animal) // true










// ------ CLOSURES ------

function outer(){
    let count = 0;

    function increment(){
        count++
        console.log("+1")
    }

    function getCount(){
        return count;
    }

    function setCount(count){
        count = count
    }

    let arrow = () => {
        return count;
    }

    return {increment, getCount, setCount, arrow}
}
// let variable = new outer(); 
// console.log(variable.setCount(2)) // undefined
// console.log(variable.getCount()) // 2
// variable.increment() // +1
// variable.increment() // +1
// variable.increment() // +1
// console.log(variable.getCount()); // 3
// console.log(variable.arrow()); // 3








// ------ IIFE ------

(function(){ 
    console.log("Hello World")
})()
// output: Hello World










// ------ CALL, APPLY, BIND ------

// let Internshala = {
//     rating : 4.5
// }

// let Inspect = {
//     checkRatings : function(manipulate) { return this.rating + manipulate }
// }

// BIND return an function
let binded = Inspect.checkRatings.bind(Internshala, 1)
console.log(
    binded()
) // 5.5

// APPLY return an value
console.log(
    Inspect.checkRatings.apply(Internshala, [3])
) // 7.5

// CALL return an value
console.log(
    Inspect.checkRatings.call(Internshala, 5)
) // 9.5










// ------ HIGHER ORDER FUNCTIONS ------

function callback_function(name){
    console.log("callback function says : hello", name)
}

function higher_order_function(x){
    x("Hrishikesh")
}

higher_order_function(callback_function) // output: callback function says hello Hrishikesh













// ------ FILTER, REDUCE, MAP, FOR EACH ------
let arr = [1, 2, 3, 'a', 5, 6, 7, 8, 9, 10]

// returns new array
let newArr = arr.map(x => x + 1) 
console.log(newArr) // [2, 3, 4, 'a1', 6, 7, 8, 9, 10, 11]

// returns new array
let filteredArr = arr.filter(x => typeof x === "string") 
console.log(filteredArr) // ['a']

// returns single value
let sum = arr.reduce((acc, curr) => acc + curr, 0) 
console.log(sum) // 55

// returns nothing
arr.forEach((x, i) => console.log(x, i)) // 1 0, 2 1, 3 2, 'a' 3, 5 4, 6 5, 7 6, 8 7, 9 8, 10 9










// ------ PROMISES ------

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  success ? resolve("Data Loaded") : reject("Error Occurred");
});

myPromise
  .then(data => data.toUpperCase()) // Operation 1: Transform
  .then(formatted => console.log(formatted)) // Operation 2: Log
  .catch(err => console.error(err)) // Operation 3: Catch any error in the chain
  .finally(() => console.log("Done")); // Operation 4: Cleanup








// ------- REACT ROUTER SETUP---------

// npm install react-router-dom

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from "react-router";
// import { Greeting } from './Greeting.jsx'
// import Layout from './Layout.jsx'
// import { ThemeContextProvider } from './ThemeContextProvider'
// import { TodoList } from './TodoList'
// import { Timer } from './Timer'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "a", element: <Greeting message="Krsna" /> },
      { path: "b", element: <TodoList /> },
      { path: "c", element: <Timer /> }
    ]
  }
])


  ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>

  );
















//------MONGO DB------




// Recall that 'drop' is the verb for removing entire structures in MongoDB.