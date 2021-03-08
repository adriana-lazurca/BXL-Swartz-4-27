var catButton = document.getElementById("cat_btn");
var catResult = document.getElementById("catImage");
catButton.addEventListener("click", getCat);

// function onFetch(response) {
//     response.json();
//     console.log("fetch");
// }

function getCat() {

    fetch("https://aws.random.cat/meow")
        .then(result => {
            return result.json();
        })
        .then(image => {
            console.log(image);
            catResult.src = image.file;
        });
}


var dogButton = document.getElementById("dog_btn");
var dogResult = document.getElementById("dogImage");
dogButton.addEventListener("click", getDog);

function onFetch(response) {
    response.json();
    console.log("fetch");
}

function getDog(handleImage) {

    fetch("https://random.dog/woof.json")
        .then(result => {
            return result.json();
        })
        .then(image => {
            handleImage(image);
            // console.log(image);
            // dogResult.src = image.url;
        });
}

function showImage(image) { console.log(image);}
function changeDogImage(image) { dogResult.src = image.url; }

getDog(showImage); // display image url
getDog(changeDogImage); // change dog url