
# Basics of JavaScript

The repository explains the basics of JavaScript and, it is based on the free Introduction to JavaScript course taught by Mrinal Bhattacharya at Scaler.

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

* 14_constructorFunction.js -> It demonstrates the use of `this` keyword to create a constructor and functions inside a constructor.

* 15_classes.js -> It demonstrates the use of `this` keyword to create a class; and creating a function inside a class.

* 16_classicalInheritance.js -> It explains the concept of classical Inheritance of attributes and methods for derived class from its base class.

* 17_polymorphism.js -> It demonstrates polymorphism.

* 18_encapsulation.js -> It demonstrates encapsulation.

* 19_prototypeObject.js -> It explains how to store a method inside the special constructor prototype object.

* 20_callApplyBind.js -> It demonstrates the use of call, apply and bind methods.

* 21_syncFileRead.js -> It demonstrates synchronous reading of a file data.

* 22_asyncFileRead.js -> It demonstrates asynchronous reading of a file data with file system module.

* 23_serialAsyncFileRead.js -> It demonstrates serial execution in the asynchronous JS code.

* 24_setTimeout.js -> It demonstrates the use of setTimeout function.

* 25_setInterval.js -> It demonstrates the use of setInterval function and how to end it.

* 26_promises.js -> It explains the way of creating a promise and the use of `then` and `catch` methods associated with it.

* 27_promisesWithAwait.js -> It explains the use of `async` and `await` keywords with the execution of promises.

* 28_shallowCopy.js -> It demonstrates shallow copy using `...` (spread operator).

* 29_deepCopy.js -> It demonstrates deep copy using JSON.

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
    -------------------------------------------------------
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

* `this` keyword -> `this` refers to the object that it's being used from. Therefore, it can refer to different things under different scenarios. It behaves differently in node.js and browser too. 

* Modes of writing JavaScript -> A] Non-Strict Mode B] Strict mode

    * A] Non-Strict Mode: This is the by default way of writing JS. Besides, in this mode, you can declare variables without using keywords like `let`or `var`. 

    * B] Strict Mode: You must write `use strict` in the top most level of your JS file. This will not allow one to declare variables without keywords like `let` or `var`.

* **Considering the above two JS modes and the two environments (Node.js and Browser), we have a total of 4 different scenarios to check for the behaviour of `this` keyword.**

    * Node.js + Non-Strict Mode:

        * console.log(this) -> {}

        * `this` called inside a function -> Global Object (Holds methods like setInterval, setTime; queueMicrotasks; It falls under Asynchronous JS, and basically stores all the required node.js methods)

        * `this` called inside a function of an object -> Object Itself

        * `this` called inside a function of a function of an object -> Global Object

    * Node.js + Strict Mode:

        * console.log(this) -> {}

        * `this` called inside a function -> undefined

        * `this` called inside a function of an object -> Object Itself

        * `this` called inside a function of a function of an object -> undefined

    * Browser + Non-Strict Mode:

        * console.log(this) -> Window Object (It holds numerous methods that can be used with JS to run in your browser)

        * `this` called inside a function -> Window Object

        * `this` called inside a function of an object -> Object Itself

        * `this` called inside a function of a function of an object -> Window Object

    * Browser + Strict Mode:

        * console.log(this) -> Window Object

        * `this` called inside a function -> undefined

        * `this` called inside a function of an object -> Object Itself

        * `this` called inside a function of a function of an object -> undefined

* `constructor` function: Constructor can be used as a blue print to create multiple objects that have similarities in common.

* `class` concept: Same as constructor. It is added to make JS feel more familiar to coders from C++, Java, etc.

* Inheritance: Classes can directly use the attributes and methods of their Base class.

* Polymorphism: Methods in different classes can have the same name and different functions.

* Encapsulation: Denying external access to the attributes of a class/constructor object.

* The concept of Prototype Object: 

    * Prototype Object is a by default object that links to any JS object you create. It holds different JS methods that can be used by the object created.

    * An Object created using constructor has two prototype objects linked to it - one is the by default prototype and the other is a special prototype object specific to the constructor function and custom methods can be stored inside of this special prototype object. 

    * When a method is called from constructor-defined object, it first searches for its special constructor prototype. If not found, it searches in the by default prototype object. A null container is linked to this by default prototype object. If the method does not exist in the by default prototype, it moves to the null container and then throws error.

    * Prototype chaining -> When two or more than two prototype objects are linked, it's called prototype chaining. 

    * Why functions in Special Prototype Object?
        
        * A function created inside a constructor gets linked to every object created using that constructor function as a key value pair. This violates the dry rule which states that you should not repeat your code. Therefore, when a function is stored the special prototype object, the created object can search for the method inside the prototype object and use it. Therefore, you avoid linking your function to every created object using this concept.

* `call` method -> Helps to use one object's method or global function on another object.

* `apply` method -> Same as call method. However, if any inputs are required, apply method requires that you pass them as an array.

* `bind` method -> It helps to bind a function and an object and store the function in a variable.

* `Asynchronous JS` -> For optimal execution, it's better to not to run a piece of code serially. Rather some part can be kept on hold & other part can be run first. This is asynchronous JS concept. The syncrohonous JS code (`console.log` for example) gets into the call stack and are executed. The `callback functions` (refer file number 22) are stored in Node API space. Only after syncrohonous code is executed, they are brought to callback queue and after that, event loop allows them into call stack where thay are executed. These callback executions may not happen in order (cb1 before cb2 or maybe cb2 before cb1).

* `Promises` -> As the name suggests, promises in JS help to see if a condition is satisfied or not. A promise has four stages: 

1] Pending (Promise is made but final outcome is pending)

2] Resolved (Promise is fulfilled -> then() is used to catch this condition)

3] Rejected (Promise is not fulfilled -> catch() is used to catch this condition)

4] Finished (Whether fulfilled or not, the promise is over)

* Comparison Operator: `==` only compares variable value while `===` compares value and data type of varibales.

* Truthy and Falsy values: Every variable has either true or false value associalted with it w.r.t. the value assigned to it. Only the following values have Falsy values associated with them -> 0, -0, 0n (BigInt Zero), '' or "" or `` (empty string), null, undefined, NaN.

* Primitive DataTypes (Values are stored in the stack) -> Numbers, Strings, Null, Boolean, Undefined

* Reference DataTypes (Pointers are stored in the stack) -> Objects, Arrays, Functions 

* Spread Operator (...) -> It is used for Shallow Copy. It takes the first properties of an object and creates seperate reference. Therefore, without spread operator, change in one object will reflect change in other object too. Besides, since it creates separate referecne only for first properties, it fails with nested objects. Deep Copy is used to overcome this!

* closure -> A nested function has access to the variables defined in the outside functions.

* Function Currying -> Using Multiple Functions to reduce the number of arguments.

* undefined vs null vs not defined -> When a variable is declared but value is not assigned, it is `undefined`. However, when a variable is not declared, it is `not defined`. You can assign `null` as a value to variable, but cannot operations on it after that!

* `typeof` Operator -> It is used to check the data type of a variable.

* `Array.isArray` -> It is used to check if a given variable is an array or not.
