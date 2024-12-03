/*
function subm() {
    var name = document.getElementById("nam").value;
    document.querySelector(".prom").style.display = "block";
    document.querySelector(".wrapper").style.display = "none";
    document.querySelector("#rec").style.display = "none";
    document.querySelector(".pro").style.display = "block";
    result = "Hello " + name + ". Thank You for choosing this platform, your academic journey will be made easy !";
    document.getElementById("promp").textContent = result;
}
*/
window.onload = function() {
    autoLogin();
}
/*
function autoLogin() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
        
        alert("You are already logged in");
        window.location.href = "inst.html";
    }else{
        window.location.href = "login.html";
    }
} 
*/
function subm() {
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    var nam = document.getElementById("name").value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    const pas = "yanita";
    let fillIn = document.getElementById("fill-in");
    
    if (password.length >= 6 && username){
        alert("Welcome " + nam + "\nYou have successifully created an account with Unistudy");
        window.location.href = "inst.html";
        
    }else{
    fillIn.classList.add("fillin");
        fillIn.textContent = "Please fill in correct details!";
    }
}
function sumt() {
    const enteredUsername = document.getElementById("name").value;
    const enteredPassword = document.getElementById("password").value;
    const na = enteredUsername;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        window.location.href = "inst.html"
        alert("Welcome back " + na + "\nThank you for trusting our platform");
        
    }else{
        window.location.href = "login.html";
        alert("your account cannot be found\nPlease go back and create an account");
        
    }
}


const getStarted = document.querySelector(".get-started");
getStarted.addEventListener('click', function(){
    window.location.href = "login.html";
})


function logout(){
    alert("Are you sure you want to clear all your credetials\nNext time you try to login you will be asked to create new accout");
    yesLogOut();
    
}
function yesLogOut(){
    localStorage.removeItem('username');
} 