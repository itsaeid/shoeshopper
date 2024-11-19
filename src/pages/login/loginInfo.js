import { BASEURL } from "../../api/BaseURL"
import { router } from "../../routers/router";


export const UserData = async(event)=>{
    event.preventDefault();

    const email = document.getElementById("input-email");
    const pass = document.getElementById("input-pass");
    const remember = document.getElementById("input-remember");

    try{
        const res = await fetch(`${BASEURL}/users`);
        const users = await res.json();

        const user = users.find((user)=> user.email === email);

        if (user && user.password === pass){
            if (remember) {
                localStorage.setItem("email", email);
                localStorage.setItem("password", pass);
            } else{
                localStorage.removeItem("email");
                localStorage.removeItem("password");
            }

            if(router && router.navigate){
                router.navigate("/home");
            }

        }else {
            const error = document.getElementById("notValid");
            error.classList.remove("hidden");
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
};

