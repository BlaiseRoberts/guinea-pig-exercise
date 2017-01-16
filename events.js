var outputEl = document.getElementById("output-target");
var pageTitle = document.getElementById("page-title");

/*
  You can get a reference to DOM elements and
  directly attach an event handler. In this
  example, we get every element with a class of
  "article-section" and listen for when the
  user clicks on the element. When that event
  fires, the attached "handleSectionClick"
  function gets executed.
 */
var articleEl = document.getElementsByClassName("article-section");

var outputTarget = document.getElementById("output-target")



// JavaScript, in the browser, automatically send the source
// event to the handler function for the event
function handleSectionClick (event) {
  outputTarget.innerHTML = "<p>You clicked on the " + this.innerHTML + " section.</p>";
}

for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
}

/*
  Get a reference to the DOM element with an id of
  "page-header", and attach an event handler for the
  mouseover, and mouseout, events.
 */
function handleHeaderMouseOver (event) {
  outputTarget.innerHTML = "<p>You moved your mouse over the header.</p>";
}
function handleHeaderMouseOut (event) {
  outputTarget.innerHTML = "<p>You left me!!!</p>";
}

pageTitle.addEventListener("mouseover", handleHeaderMouseOver);
pageTitle.addEventListener("mouseout", handleHeaderMouseOut);



/*
  We can also write an anonymous function (lamba expression)
  in the addEventListener declaration instead of using a
  function reference
 */
var fieldEl = document.getElementById("keypress-input");


fieldEl.addEventListener("keyup", function (event) {
  var inputText = document.getElementById("keypress-input").value
  outputTarget.innerHTML = inputText;
});

/*
  Now we can start making a truly interactive experience
  combining HTML, JavaScript and CSS. When a user clicks
  on a button in the DOM, we can listen for that event in
  JavaScript, and then add, or remove, CSS classes.

  In this example, I simply use the `toggle()` method on
  the `classList` property of a DOM element to automatically
  add and remove a class.
 */
var guineaPig = document.getElementById("guinea-pig");
var buttonColor = document.getElementById("add-color");
var buttonBig = document.getElementById("make-large");
var buttonBorder = document.getElementById("add-border");
var buttonRound = document.getElementById("add-rounding");

function addColor () {
  guineaPig.classList.toggle("blue")
}
function makeLarge () {
  guineaPig.classList.toggle("hulkify")
}
function addBorder () {
  guineaPig.classList.toggle("border")
}
function addRounding () {
  guineaPig.classList.toggle("round")
}

buttonColor.addEventListener("click", addColor);
buttonBig.addEventListener("click", makeLarge);
buttonBorder.addEventListener("click", addBorder);
buttonRound.addEventListener("click", addRounding);

/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */
document.querySelector("body").addEventListener("click", function(event) {

});