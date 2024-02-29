//alert("You are welcome to my website.");

//It is possible to change the title of the page.
//This is done by changing the <title> tag in the HTML
const head_manipulate = document.querySelector("title").innerText="DOM Manipulation.";


//Select the element with a class of header and give it a header text that reads “My Awesome DOM”.

const header = document.querySelector(".header");
header.innerText = "My Awesome DOM";

//Create a main tag with a class of main and insert it immediately after the header tag, let it be the parent element to all other elements.

const main = document.createElement("main");
main.className = "main";
const navBar = document.querySelector("#nav-menu");
const body= document.querySelector("body");
const mainContent= document.querySelector("#main-content");
const aside= document.querySelector(".aside");
main.appendChild(navBar);
main.appendChild(mainContent);
main.appendChild(aside);
main.appendChild(navBar);
header.parentNode.insertBefore(main,  header.nextSibling); 

//Select the section with an “id” of “main-content” using the appropriate DOM method and log it to the console.
const mainContent1= document.getElementById("main-content");
console.log(mainContent1);

//Select the section with an “id” of “main-content” using querySelector.
const mainContent2= document.querySelector("#main-content");

//Select all of the list items with a class of “second”.
const second = document.querySelectorAll(".second");
console.log(second.length);

//Select a list item with a class of third, but only the list item inside the “ol” tag.

const third = document.querySelector("ol li.third");
console.log(third.length);

//Give the section with an “id” of “main-content” the text “Hello!”.
const mainContent3= document.querySelector("#main-content");
mainContent3.innerText = "Hello!";
console.log(mainContent3);

//Add the class “main-footer” to the div with a class of footer..

const footer = document.querySelector(".footer");
footer.classList.add("main-footer");
console.log(footer.classList);
footer.classList.remove("footer");
console.log(footer.classList);


//Create a new “li” element.


const li = document.createElement("li");
li.textContent = "four";
const ul = document.querySelector("ul");
ul.appendChild(li);
console.log(ul);

//Loop over all of the “li” inside the “ol” tag and give them a background colour of “green”.

const ol = document.querySelector("ol");
for (let i = 0; i < ol.children.length; i++) {
    ol.children[i].style.backgroundColor = "green";
}

//Remove the section with a class of “aside”.

const aside2 = document.querySelector(".aside");
aside2.remove();
console.log(body);

//Remove the “li” element from the “ol” element.


//Append the “li” element to the “ol” element.





