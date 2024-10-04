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

const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
e.preventDefault();



  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
   
        .then(function() {
          
            form.reset();
            swal({
              title:"Thank You!",
              text:"Form submitted successfully! I will reply to you soon!",
              icon:"success"
            })
          
        });
});





const copyright = document.getElementById("copyright");
copyright.textContent = new Date().getFullYear();