// Intialize all selectors and elements needed for dark mode and scroll transitons
function initialize()
{
    body = document.body;
    footer = document.getElementById("footer-content");
    toggle = document.getElementById("toggle-btn");
    sliderIcon = document.getElementById("slider-icon");
    content = document.getElementsByClassName("content");
    table = document.getElementsByTagName("table")[0];
    tableRows = document.getElementsByTagName("tr");
    checkIfToggled();
    setMode();
}

// checks if the previous page had dark mode enabled, if so continue setting the page in dark mode
function checkIfToggled()
{
    // Remove unnecessary transition animations from repeating after you toggle dark mode and switch to another web page
    if (localStorage.getItem("isDark") != "true")
    {
        toggle.checked = false;
    }
    else
    {
        toggle.checked = true;
        // remove any transitons that is repetitive
        removeTransitions();
    }
}
function setMode()
{
    // If it's dark mode switch to light mode and vice versa
    toggle.checked ? darkMode() : lightMode();
}

// add and remove class identifiers to change the css of the elements specified
function lightMode()
{
    body.classList.remove("dark");
    body.classList.add("light");
    footer.classList.remove("dark");

    for(let i = 0; i < tableRows.length; i++)
    {
        tableRows[i].classList.remove("dark");
    }
    // stores a variable named isDark between all web pages 
    localStorage.setItem("isDark", false);
}

// add and remove class identifiers to change the CSS of the elements specified
function darkMode()
{
    body.classList.add("dark");
    footer.classList.add("dark");
    for(let i = 0; i < tableRows.length; i++)
    {
        tableRows[i].classList.add("dark");
    }
    localStorage.setItem("isDark", true);
}

// light/dark mode toggle function
window.addEventListener('DOMContentLoaded', (event) => 
{
    console.log('DOM fully loaded and parsed');
    initialize();
    document.getElementById('toggle-btn').addEventListener("click", (event) => 
    {
        // re add the transition to toggle dark mode if they were deleted  
        addTransitions();
        setMode();
    });
});

function removeTransitions()
{
    sliderIcon.style.transition = "none";
    sliderIcon.style.right = "85px";
    body.style.transition = "none";
    for (var i = 0; i < content.length; i++)
    {
        console.log(content[0])
        content[i].style.transition = "none";
    }
}
function addTransitions()
{
    sliderIcon.style.transition = "all 0.35s ease-in";
    // body.style.transition = "all 1s ease";
}

// reveal elements if they come in view
function reveal() 
{
    var images = document.querySelectorAll(".shrinked-images");
    traverseRevealElements(images, 200);
}
// apply CSS properities through adding/removing classes to elements 
function traverseRevealElements(reveals, distance)
{
    for (var i = 0; i < reveals.length; i++) 
    {
      var windowHeight = window.innerHeight;
      // element distance from the viewport's top 
      var elementTop = reveals[i].getBoundingClientRect().top;
      // set each element visibile area to 400px 
      //(increase it to make the element visible when most of it's content is within the window)
      var elementVisible = distance;

      //If the element is within the window view then reveal the element  
      elementTop < windowHeight - elementVisible ?
      reveals[i].classList.add("active") :  
      reveals[i].classList.remove("active");
    }
}
  
// call reveal when the window is scrolled
window.addEventListener("scroll", reveal);
