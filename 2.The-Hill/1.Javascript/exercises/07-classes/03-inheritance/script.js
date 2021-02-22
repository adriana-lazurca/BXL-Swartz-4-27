/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        class Animal {
            sayHello() {
                return `${this.constructor.greeting}! I'm ${this.name}!`;
            }
        }
        // your code here

        class Cat extends Animal {
            constructor(name, greeting) {
                super();
                this.name = name;
                Cat.greeting = greeting;
                super.sayHello();
            }
        }

        var cat1 = new Cat("Felix", "Hello");
        console.log(cat1.sayHello());

        class Dog extends Animal {
            constructor(name, greeting) {
                super();
                this.name = name;
                Dog.greeting = greeting;
                super.sayHello();
            }
        }

        var dog1 = new Dog("Rex", "Hi");
        console.log(dog1.sayHello());
      
    });
})();
