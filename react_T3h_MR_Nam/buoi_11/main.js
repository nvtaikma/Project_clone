/*
- có 5 loại DOM
    DOM element
    DOM HTML
    DOM CSS
    DOM event
    DOM listener
 BOM:



*/

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const handleLogin = () =>{
    // console.log("adssad");
    let userName = document.getElementById("Username");
    let password = document.getElementById("password");
    if (!userName || !password) {
        alert("Invalid input query");
      }
    
      if (userName.value === "") {
        document.getElementById("validateUserName").style.display = "block";
      } else {
        document.getElementById("validateUserName").style.display = "none";
      }
    
      if (password.value === "") {
        document.getElementById("validatePassword").style.display = "block";
      } else {
        document.getElementById("validatePassword").style.display = "none";
      }

    
    if (userName.value === 'admin' && password.value === 'admin') {
        window.location.href = "https://youtube.com";
      }
}

