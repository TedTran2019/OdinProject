const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redP = document.createElement("p");
redP.textContent = "Hey I'm red!";
redP.style.color = "red";

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";

const blackPinkDiv = document.createElement("div");
blackPinkDiv.style.backgroundColor = "pink";
blackPinkDiv.style.border = "2px solid black";
const header = document.createElement("h1");
header.textContent = "I'm in a div";
blackPinkDiv.appendChild(header);
const anotherP = document.createElement("p");
anotherP.textContent = "ME TOO!";
blackPinkDiv.appendChild(anotherP);

container.appendChild(redP);
container.appendChild(blueH3);
container.appendChild(blackPinkDiv);
