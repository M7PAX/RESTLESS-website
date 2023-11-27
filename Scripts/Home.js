document.getElementById("show-login").addEventListener("click",function(){
    document.querySelector(".login-popup").classList.add("login-active");
    document.querySelectorAll(".container").forEach(container => {
        container.classList.add("login-active");
    })
});

document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".login-popup").classList.remove("login-active");
    document.querySelectorAll(".container").forEach(container => {
        container.classList.remove("login-active");
    })
});