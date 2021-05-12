import displayMessage from "./components/common/displayMessage.js";
import {baseUrl} from "./settings/api.js";

const logForm = document.querySelector("form");
const userName = document.querySelector("#username");
const passWord = document.querySelector("#password");
const message = document.querySelector(".message-container");

logForm.addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();
    
    message.innerHTML = "";
    const userNameValue = userName.value.trim();
    const passWordValue = passWord.value.trim();

    if (userNameValue.length === 0 || passWordValue.length === 0){
        return displayMessage("warning", "Invalid values", ".message-container");
    }
    doLogin(userNameValue, passWordValue);
}

async function doLogin(userName,passWord){
    const url = baseUrl + "auth/local";
    const data = JSON.stringify({ identifier: userName, password: passWord});

    const options = {
        method: "POST",
        body: data,
        headers:{
            "Content-Type": "application/json"
        }
    };

    try{
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if(json.user){
           displayMessage("success", "Succesfully logged in", ".message-container" )
           
         //  saveToken (json.jwt);
           //saveUser (json.user);
            localStorage.setItem("token",json.jwt);
           location.href = "/";
        }

        if(json.error){
            displayMessage("warning", "Invalid Login Details", ".message-container");
        }

        
    }catch(error){
        console.log(error);
    }
}