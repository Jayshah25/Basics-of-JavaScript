
# Basics of JavaScript

The repository explains the basics of JavaScript and, and it is based on the free Introduction to JavaScript course taught by Mrinal Bhattacharya at Scaler.

The content in the files is explained below: 

* 1_Variables.js -> Explains declaration and uniqueness of JavaScript Variables

* 2_Arrays.js -> Explains declaration, indexing and important methods of Arrays.

* 3_Conditionals.js -> Explains the use of simple conditional statements and logical `and` in JavaScript.

* 4_Objects.js -> Explains the declaration, value access, value modification and nested objects.

* 5_forLoop.js -> Explains the `for in loop`, `for of loop` and `entries`.

* 6_while.js -> Explains `while` and `do while` loops.

* 7_functions -> Explains `functions`, `anonymous functions` and the concept of `hoisting`.

* 8_arrowFunctions.js -> Demonstrates the use of `arrow functions`.

* 9_templates.js -> Demonstrates the use of `multiline strings` and `string formatting`.

* 10_destructuring.js -> Explains the concept of `destructuring` for Arrays and Objects.

* 11_calcMod.js, 11_main.js -> Explains the concept of `modularity`.

* 12_callbackFunctions.js -> Explains the concept of `callback functions` and `custom higher order function`.

* 13_higherOrderFunctions.js -> Explains the use of following inbuilt Higher Order Functions of JavaScript:

        * map()

        * forEach()

        * filter()

        * reduce()

        * find()

        * findIndex()

        * some()

        * every()

## Points to remember

* JavaScript -> It is a high level, multi paradigm dynamic language which was created to make web pages dynamic.

* Node.js -> Before `Node.js`, developers were compelled to use Browsers to render their JavaScript code. However, with the advent of `Node.js`, it was possible to run JavaScript directly on local machines using a simple terminal.

* Hoisting -> The execution in JavaScript takes place in two parts: A] Memory Allocation B] Code Executiomn

    A] Memory Allocation: Every Variable as well as function are allocated memory using key-value pairs. A variable in this phase is assigned the value `undefined`. However, a function is assigned with its entire block of code.

    B] Code Execution: After memory allocation, in this part, the code execution starts. In JavaScript, the code execution is done line by line. Therefore, if a variable is used before the assignment in the code, it will have the value `undefined`. However, if a function is invoked before its declaration, it will run smoothly. On the other hand, anonymous function will directly result an error if invoked before declaration. This is because it would be having the value `undefined`, and obviously, this value is not callable.

* Problems with `var` keyword -> 

    A] Redeclaration of variables is allowed. 
    
    B] Variables are not block scoped, but function scoped instead.

    To address these problems, in ES6 (ECMAScript = European Computer Manufacturers Association), two new keywords `let` and `const` were introduced to declare variables. Each of the keyword doesn't allow redeclaration of variables, and the declared variables are block scoped. The keyword `const` doesn't allow reassignment of the variables either. The table below shows the differences between the keywords.

    |     | Redeclaration |      Scope     | Reassignment |
    |-----|---------------|----------------|--------------|
    |var  |     Yes       |     Function   |     Yes      |
    |let  |      No       |      Block     |     Yes      |
    |const|      No       |      Block     |     No       |


* Functional Programming -> A paradigm (a way) of programming with prime focus on creating functions to solve problem. This is declarative way of writing code.

* Imperative Way of Coding -> Using many variables, conditionals, loops to build logic and solve the problem.

* Declarative Approach -> Avoiding the use of unnecessary variables, conditionals and loops while trying to use the inbuilt functions to solve the problem at hand. This makes the code short and clean.

* Pure Function -> A function that does not involve external factor (global variable) or external resource (console.log). At least, the use of external factors should be avoided. The pure function will always provide the same output for the same input.

* Impure Function -> A function that does depend on external factor and external resource. The function may not provide the same output for the same input.

* Callback Functions -> A function that is provided as an argument to another function.

* Higher Order Functions -> A function that takes a function as an argument.

* Chaining methods -> Using Higher Order Functions one on top of other.

