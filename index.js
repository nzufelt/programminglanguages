var text = document.querySelector(".c")
var popup = document.querySelector(".infoc")

text.onmouseover = function displayPopupC(event) {
  popup.style.visibility = "visible";
  popup.style.top = event.clientY + "px";
  popup.style.left = event.clientX + 80 + "px";
}

text.onmouseout = function hidePopupC(event) {
  popup.style.visibility= "hidden"
}

var textasm = document.querySelector(".asm")
var popupasm = document.querySelector(".infoasm")

textasm.onmouseover = function displayPopup(event) {
  popupasm.style.visibility = "visible";
  popupasm.style.top = event.clientY + 300 + "px";
  popupasm.style.left = event.clientX + 100 +   "px";
}

textasm.onmouseout = function hidePopup(event) {
  popupasm.style.visibility= "hidden"
}


var textbrain = document.querySelector(".brain")
var popupbrain = document.querySelector(".infobrain")

textbrain.onmouseover = function displayPopupbrain(event) {
  popupbrain.style.visibility = "visible";
  popupbrain.style.top = event.clientY + "px";
  popupbrain.style.left = event.clientX + 80 +  "px";
}

textbrain.onmouseout = function hidePopupbrain(event) {
  popupbrain.style.visibility= "hidden"
}


var textscratch = document.querySelector(".scratch")
var popupscratch = document.querySelector(".infoscratch")

textscratch.onmouseover = function displayPopupscratch(event) {
 popupscratch.style.visibility = "visible";
 popupscratch.style.top = event.clientY + "px";
 popupscratch.style.left = event.clientX + 80 + "px";
}

textscratch.onmouseout = function hidePopupscratch(event) {
 popupscratch.style.visibility= "hidden"
}


var textjava = document.querySelector(".java")
var popupjava = document.querySelector(".infojava")

textjava.onmouseover = function displayPopupjava(event) {
popupjava.style.visibility = "visible";
popupjava.style.top = event.clientY + 200 + "px";
popupjava.style.left = event.clientX - 400 + "px";
}

textjava.onmouseout = function hidePopupjava(event) {
popupjava.style.visibility= "hidden"
}

var textjavascript = document.querySelector(".javascript")
var popupjavascript = document.querySelector(".infojavascript")

textjavascript.onmouseover = function displayPopupjavascript(event) {
popupjavascript.style.visibility = "visible";
popupjavascript.style.top = event.clientY + 200 + "px";
popupjavascript.style.left = event.clientX - 400 + "px";
}

textjavascript.onmouseout = function hidePopupjavascript(event) {
popupjavascript.style.visibility= "hidden"
}

var textrust = document.querySelector(".rust")
var popuprust = document.querySelector(".inforust")

textrust.onmouseover = function displayPopuprust(event) {
popuprust.style.visibility = "visible";
popuprust.style.top = event.clientY + 200 + "px";
popuprust.style.left = event.clientX - 400 + "px";

}

textrust.onmouseout = function hidePopuprust(event) {
popuprust.style.visibility= "hidden" 
}


