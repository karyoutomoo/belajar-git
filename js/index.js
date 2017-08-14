var slideIndex = 1;
showDivs(1);
var stop=0;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}
function startCar()
{
  window.stop=0;
  carousel(slideIndex);
}
function stopCar()
{
  window.stop=1;
}

function showDivs(n) 
{
    var i;
    var x =   document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
      if(window.stop===0) slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block"; 
  if(window.stop===0){ 
  setTimeout(carousel, 2000); // Change image every 2 seconds
    }
}