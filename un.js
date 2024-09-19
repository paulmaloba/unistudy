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

function autoLogin() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
        window.location.href = "inst.html";
        alert("You are already logged in");
    }
}

function subm() {
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    var nam = document.getElementById("name").value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    const pas = "yanita";
    if (password === pas){
        alert("Welcome " + nam + "\nYou have successifully created an account with Unistudy");
        window.location.href = "course.html";
    }else{
        alert("Incorrect password");
    }
}
function sumt() {
    const enteredUsername = document.getElementById("name").value;
    const enteredPassword = document.getElementById("password").value;
    const na = enteredUsername;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        window.location.href = "course.html"
        alert("Welcome back " + na + "\nThank you for trusting our platform");
        ;
    }else{
        window.location.href = "login.html";
        alert("your account cannot be found\nPlease go back and create an account");
        
    }
}
