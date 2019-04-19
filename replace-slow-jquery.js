var body = document.getElementsByTagName("BODY")[0];
var dom_element = document.createElement("div");
dom_element.setAttribute("id", "replaceJquery");
body.appendChild(dom_element);

// GET ELEMENT FROM DOM BY ID.
var element = document.getElementById("replaceJquery");

// GET ELEMENT FROM DOM BY TAG NAME.
element = document.getElementsByTagName("div");

// ADD & REMOVE CLASS TO ELEMENT.
element = document.getElementById("replaceJquery");
element.classList.add("show");
element.classList.remove("show");

// SHOW
element.style.display = "";

// HIDE
element.style.display = "none";
/*
element.style.position
element.style.width
element.style.cssText
element.style.getPropertyValue
etc...
*/

// GET ELEMENT FROM DOM BY CLASS NAME.
element = document.getElementsByClassName("div");

// simply using element id to get from DOM.
replaceJquery.style.display = "";

//HTML String
var htmlString = `<div id="content"
                        ><span id="hello">Hello</span
                        ><span id="world>World</span
                    ></div>`;
        
// INSERT HTML BEFORE
replaceJquery.insertAdjacentHTML("beforeBegin", htmlString);

// APPEND CHILD
var new_element = document.createElement("div");
replaceJquery.appendChild(new_element);

// GET CHILDREN
content.children;

// CONTAINS
content !== hello && content.contains(hello)

// CONTAINS ELEMENT
content.querySelector("#hello") !== null;

// EMPTY
hello.innerHTML = "";

//Find Children
content.querySelectorAll("#hello");
document.querySelectorAll("#hello");

// FIND ALL ELEMENTS WITH DIFFERENT CONDITIONS
document.querySelectorAll(".show #content");

// GET ATTRIBUTE
replaceJquery.getAttribute("class");

// GET ATTRIBUTES NAMES
replaceJquery.getAttributeNames();

// ELEMENT MATCHES
content === hello

// set Attributes
replaceJquery.setAttribute("tabindex", 3);

// add event listener
content.addEventListener("DOMContentLoaded", function() {
  hello.innerHTML = "Hello World";
});

// HTTP GET
var request = new XMLHttpRequest();
request.open("POST", "url", true);
request.setRequestHeader(
  "Content-Type",
  "application/x-www-form-urlencoded; charset=UTF-8"
);
request.send(data);