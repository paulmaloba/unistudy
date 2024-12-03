const toChatBtn = document.querySelector(".to-chat");
const noChatMsg = document.querySelector("#no-group-chat");
 toChatBtn.addEventListener('click', () => {
    document.querySelector(".no-group-chat").style.display = "block";
    
    toChatBtn.style.dispaly = "none";
    toChatBtn.addEventListener('click', () => {
        const supMessage = "https://wa.me/260771561954?text=Greetings%20Paul,I'd%20like%20to%20subscribe%20for%20Unistudy%20Connect";
        window.open(supMessage, '_blank');
    });
 });
