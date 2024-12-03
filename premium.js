//document.querySelector(".cont").style.display = "block";
document.getElementById("prem-text").innerHTML = "Hello";
document.getElementById("prem-message").innerHTML = "You are currently using Unistudy Connect free trial"
 + "<br/>" + "therefore, you will not be able to open some files. Choose 'subscribe' or you can altanatively come" + "<br/>" + "back later. You can do this by clicking on the logo at the top right coner." ;

const notNow = document.querySelector(".to-free-trial");
const payNow = document.querySelector(".to-subscribe");
notNow.addEventListener('click', () => {
    document.querySelector(".cont").style.display = "block";
    document.querySelector(".premium").style.display = "none";
})
payNow.addEventListener('click', () => {
    const myWhatsappLink = "https://wa.me/260771561954?text=Greetings%20Paul,I'd%20like%20to%20subscribe%20for%20Unistudy%20Connect";
    window.open(myWhatsappLink, '_blank');
});




