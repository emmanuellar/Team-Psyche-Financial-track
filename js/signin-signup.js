window.addEventListener("load", () => {

    
    const signIn = document.getElementById("kc-signIn");
    const signUp = document.getElementById("kc-signUp");
    const slider = document.getElementById("mainCont");
    const mainContent = document.querySelector(".main");

    function adjustHeight(element) {
        const theHeight = element.clientHeight + 'px';
        slider.style.height = theHeight;
        mainContent.style.height = theHeight;
    }

    adjustHeight(signIn);
    const btn = document.getElementById("kc-btn");
    const chevron = btn.querySelector('svg');
    const span = btn.querySelector('span');

    const slide = () => {
        // slider
        if (slider.classList.contains('move-right')) { // move-left
            adjustHeight(signIn);
            setTimeout(() => {
                span.innerText ="sign up";
                chevron.style.transform = 'rotate(90deg)';
                slider.classList.toggle("move-right");
            }, 300);
        } else { // move right
            span.innerText ="sign in";
            chevron.style.transform = 'rotate(270deg)';
            slider.classList.toggle("move-right");
            setTimeout(() => {
                adjustHeight(signUp);
            }, 300);
        }
    }
    btn.addEventListener("click", slide);

    const errorBox = document.getElementById("error-box");
    if(errorBox){
        setTimeout(() => {
            errorBox.style.display ="none";
        }, 5000);
    }
    
    if(successMsg){
        setTimeout(() => {
            successMsg.classList.add("close");
        }, 5000);
    }
})

/* ------------CLOSE WELCOME PAGE------------------ */


const successCloseBtn = document.getElementById("successCloseBtn");
const welcomeCloseBtn = document.getElementById("welcomeCloseBtn");


const closePage = (element) => {
    element.classList.add("close");
}

successCloseBtn.addEventListener("click" , () => {
    const successMsg = document.getElementById("successMsg");
    successMsg.classList.add("close");
});
welcomeCloseBtn.addEventListener("click" , () => {
    const welcomeBody = document.getElementById("welBody");
    welcomeBody.classList.add("close");
});

/* -----------------------------------INPUT VALIDATION FOR PASSWORD--------------------------------------------------- */
const mainPassword = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitFormBtn = document.getElementById('submit-form');
const errorBoxUi = document.querySelector('.error-box-x');

const passwordMatch = () => {
    if(mainPassword.value === confirmPassword.value) {
        submitFormBtn.disabled = false;
        errorBoxUi.classList.add("misc");
        errorBoxUi.style.background = '#5eccf1';    
        errorBoxUi.textContent = "Password match"; 
    }else {
        submitFormBtn.disabled = true;
        errorBoxUi.style.background = "#FF8282";
        errorBoxUi.classList.add("misc");
        errorBoxUi.textContent = "Password don't match";
    }  
    
    setTimeout(() => {
        errorBoxUi.style.display = "none";
    }, 10000)
    
}

document.querySelectorAll(".x-confirm").forEach(confam => {
    confam.addEventListener("keyup", passwordMatch);
})

