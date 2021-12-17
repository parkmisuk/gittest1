//const loginForm = document.getElementById("login-form");
//const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");//loginForm.querySelector("input");
const loginButton = document.querySelector("#login-form button");//loginForm.querySelector("button");

function onLoginBtnClick() {
    console.dir(loginInput);
    console.log("click!!");
}

loginButton.addEventListener("click", onLoginBtnClick);