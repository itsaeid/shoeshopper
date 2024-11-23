import BASEURL from "../../api/BaseURL";
import { router } from "../../routers/router";

export const UserData = async (event) => {
  event.preventDefault();

  const email = document.getElementById("input-email").value;
  // console.log(email.value);
  const pass = document.getElementById("input-pass").value;
  const remember = document.getElementById("input-remember").value;

  try {
    const res = await fetch(`${BASEURL}/users`);
    const users = await res.json();
    const user = users.find((user) => user.email === email);
    console.log(user);
    if (user && user.password === pass) {
      console.log("666666666666");
      if (remember) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", pass);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      if (router && router.navigate) {
        console.log("11111111111");

        router.navigate("/home");
      }
    } else {
      const error = document.getElementById("notValid");
      error.classList.remove("hidden");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};
