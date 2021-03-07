/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        class Person {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }

            // getFirstName() {
            //     return this.firstname;
            // }

            // changeFirstName(value) { 
            //     this.firstname = value;
            // }

            // getFullName() {
            //     return this.firstname + this.lastname;
            // }

            get name() {
                return this.firstname + " " + this.lastname;
            }

            set name(value) {
                var fullName = value.split(" ");
                this.firstname = fullName[0];
                this.lastname = fullName[1];
            }
        }

        var student = new Person("Alex", "Lopez");
        console.log(student.name);
        student.name = "Sasha Rodriguez";
        console.log(student.name);
    });
})();
