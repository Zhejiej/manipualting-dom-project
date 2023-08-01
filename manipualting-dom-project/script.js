let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");

pButton.onclick = function () {
    imgDiv.style.display = "none"; 
    pDiv.style.display = "block";
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello World";
    newParagraph.style.backgroundColor = "black";
    newParagraph.style.color = "white"; 
    pDiv.appendChild(newParagraph);
};

imgButton.onclick = function () {
    pDiv.style.display = "none";
    imgDiv.style.display = "block";

    let newImage = document.createElement("img");
    newImage.src = "asc_logo.png"; 
    newImage.style.width = "100px"; 
    newImage.style.height = "100px"; 
    imgDiv.appendChild(newImage);
};
