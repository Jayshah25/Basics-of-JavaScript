
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

## Points to remember

* JavaScript -> It is a high level, multi paradigm dynamic language which was created to make web pages dynamic.

* Node.js -> Before `Node.js`, developers were compelled to use Browsers to render their JavaScript code. However, with the advent of `Node.js`, it was possible to run JavaScript directly on local machines using a simple terminal.

* Hoisting -> The execution in JavaScript takes place in two parts: A] Memory Allocation B] Code Executiomn

    A] Memory Allocation: Every Variable as well as function are allocated memory using key-value pairs. A variable in this phase is assigned the value `undefined`. However, a function is assigned with its entire block of code.

    B] Code Execution: After memory allocation, in this part, the code execution starts. In JavaScript, the code execution is done line by line. Therefore, if a variable is used before the assignment in the code, it will have the value `undefined`. However, if a function is invoked before its declaration, it will run smoothly. On the other hand, anonymous function will directly result an error if invoked before declaration. This is because it would be having the value `undefined`, and obviously, this value is not callable.
