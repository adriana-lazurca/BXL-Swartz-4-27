/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var element = document.getElementById("source");
    var attributValue = element.getAttribute("data-image");

    var imgElement = document.getElementById("target");
    var imgTag = document.createElement("img");
    imgTag.src = attributValue;
    imgElement.appendChild(imgTag);

    element.remove();

    // var image = document.getElementsByTagName("img")[0];
    // var attribute = document.createAttribute("src");
    // attribute.value = attributValue;
    // image.setAttributeNode(attribute);

})();
