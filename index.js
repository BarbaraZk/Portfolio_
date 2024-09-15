function handleButtonLinkedin(){
  window.open("https://www.linkedin.com/in/barbara-zelek/");
}

let buttonsL = document.querySelectorAll(".linkedinButton");
buttonsL.forEach(function(button){
  button.addEventListener("click", handleButtonLinkedin);
})

function handleButtonGitHub(){
  window.open("https://github.com/BarbaraZk");
}

let buttonsG = document.querySelectorAll(".gitHubButton");
buttonsG.forEach(function(button){
  button.addEventListener("click", handleButtonGitHub);
})


document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const subject = document.getElementById("subject").value.trim();
const message = document.getElementById("message").value.trim();


let isValid = true;
if(name===""){
  alert("Name is required");
  isValid =false;
}

if (email ===""){
  alert("Valid email is required");
  isValid =false;
}
if (subject===""){
  alert ("Subject is required");
  isValid =false;
}
if(message===""){
  alert("Message is required");
  isValid =false;
}
if(isValid){
  alert("Form submitted successfully");
 let inputs = document.querySelectorAll("input");
 let text = document.getElementById("message");
 inputs.forEach(input=>input.value="")
text.value="";

}
});

const copyright = document.getElementById("copyright");
copyright.textContent = new Date().getFullYear();