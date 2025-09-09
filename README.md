
#### 1) What is the difference between var, let, and const?
var = function scoped, old style, can re-declare & update.
let = block scoped, can update but not re-declare.
const = block scoped, cannot reassign (except object/array properties).

#### 2) What is the difference between map(), forEach(), and filter()? 
map() → returns a new array with transformed values.
forEach() → just loops through elements, no return array.It returns undefined
filter() → returns a new array with elements that pass a condition.

#### 3) What are arrow functions in ES6?
Arrow functions in ES6 are a shorter way to write functions (()=>{}) 

#### 4) How does destructuring assignment work in ES6?
const [a, b] = [10, 20];   
const {name, age} = {name:"Mehad", age:22}; // name="Mehad", age=22


#### 5) Explain template literals in ES6. How are they different from string concatenation?
Template literals in ES6 use backticks (`) to create strings.
They allow string interpolation with ${expression} inside.
They support multi-line strings without \n.
Unlike concatenation (+), template literals are cleaner, more readable, and flexible.


    