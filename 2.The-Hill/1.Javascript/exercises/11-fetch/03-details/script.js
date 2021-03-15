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

    function displayHero(hero) {
        // create copy of template
        var heroTemplate = document.querySelector('#tpl-hero');
        var heroElement = document.importNode(heroTemplate.content, true);

        if (targetElement.children.length == 0) {
            targetElement.appendChild(heroElement);
        }
        else {
            targetElement.children[0] = heroElement;
        }

        var nameElements = document.getElementsByClassName("name");
        nameElements[0].innerText = hero.name;

        var alterEgoElements = document.getElementsByClassName("alter-ego");
        alterEgoElements[0].innerText = hero.alterEgo;

        var powerElements = document.getElementsByClassName("powers");
        powerElements[0].innerText = hero.abilities;
    }

    function getHero() {
        fetch("http://localhost:3000/heroes")
            .then(result => {
                return result.json();
            })
            .then(list => {
                // read input value
                var inputElement = document.getElementById("hero-id");
                var inputValue = parseInt(inputElement.value);

                function checkId(hero) {
                    return hero.id == inputValue;
                }
                var hero = list.find(checkId);

                if (hero == undefined) {
                    alert("This hero doesn't exist");
                }
                else {
                    displayHero(hero);
                }
            })

    }
})();
