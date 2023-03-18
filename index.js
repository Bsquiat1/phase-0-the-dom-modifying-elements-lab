main.remove()

const oldHeader = document.querySelector("h1#main");


const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";


oldHeader.parentNode.replaceChild(newHeader, oldHeader);
