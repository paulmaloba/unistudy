


const unistudyQuiz = document.querySelector(".proc-quiz");
const jobbieQuiz = document.querySelector(".proc-jobbie");
const showNeedToPay = document.getElementById("displayy");
const willingMsg = document.querySelector(".going-to-pay");

//add functionality to proc buttons
unistudyQuiz.addEventListener('click', () => {
    showNeedToPay.innerHTML = "To make your study habbit organised we only give to you content that is necessary at a specific moment." + "<br/>"
        + "Therefore, Unistudy quiz is only available 2 weeks before the test. This is to help you get ready for the test.";
    unistudyQuiz.style.color = "red";
    
})
jobbieQuiz.addEventListener('click', () => {
    jobbieQuiz.style.display = "none";
    willingMsg.style.display = "block";
    showNeedToPay.style.display = "none";
    willingMsg.style.marginTop = 20 + "px";
    willingMsg.style.marginBottom = 20 + "px";
})

const job = document.getElementById("jobi");
job.addEventListener('click', () => {
    jobbieQuiz.style.display = "none";
    willingMsg.style.display = "block";
    willingMsg.style.marginTop = 20 + "px";
    willingMsg.style.marginBottom = 20 + "px";
})

const procee = document.getElementById("proceed-tutor");
procee.addEventListener('click', () => {
    showNeedToPay.innerHTML = "Can't open" + "<br/>" + "Tutors are not online at the moment";
})

const yesBtn = document.getElementById("yess");
const noBtn = document.querySelector(".noo");

yesBtn.addEventListener('click', () => {
    const myWhatsappLink = "https://wa.me/260771561954";
    window.open(myWhatsappLink, '_blank');
});
noBtn.addEventListener('click', () => {
    alert("You are proceeding to Unisudy quiz");
    showNeedToPay.style.display = "block";
    showNeedToPay.innerHTML = "To make your study habbit organised we only give to you content that is necessary at a specific period." + "<br/>"
        + "Therefore, Unistudy quiz is only available 2 weeks before the test. This is to help you get ready for the test.";
});
