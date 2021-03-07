/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var imgElement = document.getElementsByTagName("IMG")[0];
    var imgMouseOut = imgElement.src;
    var imgDataHover = imgElement.getAttribute("data-hover");
    imgElement.addEventListener("mouseover", () => {
        imgElement.src = imgDataHover;
    });

    imgElement.addEventListener("mouseout", () => {
        imgElement.src = imgMouseOut;
    });
})();
