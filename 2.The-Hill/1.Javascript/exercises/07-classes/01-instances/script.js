/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        class Cat {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        }
        // your code here
    
        var firstCat = new Cat("Skitty", 9);   
        console.log(firstCat);

        var secondCat = new Cat("Pixel", 6);   
        console.log(secondCat);
    });
    
})();
