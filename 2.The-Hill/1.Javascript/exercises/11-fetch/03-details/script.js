/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var targetElement = document.getElementById("target");

    document.getElementById("run").addEventListener("click", getHero);

    function displayHero() {
        var template = document.querySelector('#tpl-hero');
        var clone = document.importNode(template.content, true);
        document.body.appendChild(clone);
        
        var hero = list[index];
        var nameElements = document.getElementsByClassName("name");
        nameElements[index].innerText = hero.name;

        var alterEgoElements = document.getElementsByClassName("alter-ego");
        alterEgoElements[index].innerText = hero.alterEgo;

        var powerElements = document.getElementsByClassName("powers");
        powerElements[index].innerText = hero.abilities;
    }

    function getHero() {
        fetch("http://localhost:3000/heroes")
            .then(result => {
                return result.json();
            })
            .then(list => {
                var inputElement = document.getElementById("hero-id");
                var inputValue = parseInt(inputElement.value);

                function checkId(hero) {
                    return hero.id == inputValue;
                }
                var hero = list.find(checkId);

                if (hero == undefined) {
                    //console.log("This hero doesn't exist");
                    targetElement.innerText = "This hero doesn't exist";
                }
                else {
                    displayHero();
                }
            })

    }
})();
