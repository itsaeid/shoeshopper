import { El } from "../../createElement";
import { UserData } from "./loginInfo";



export const Login = () => {
    return El({
      element: "div",
      id: "login-user",
      className:
        "w-[414px] h-screen border border-black bg-gray-100 flex flex-col items-center overflow-x-hidden overflow-y-hidden",
      children: [
        El({
          element: "img",
          id: "logo-login",
          className: "mt-[132px] h-[81px] w-[54px]",
          src: "../../src/img/logo2.png",
        }),
        El({
          element: "h1",
          className:
            "text-center mt-[118px] font-[700] text-[32px] w-[342px] h-[39px]",
          children: ["Login to Your Account"],
        }),
        El({
          element: "form",
          id: "form",
          className:
            "p-4 mt-[48px] w-full flex flex-col items-center justify-center gap-[20px]",
          children: [
            El({
              element: "input",
              type: "email",
              name: "email",
              placeholder: "✉ Email ...",
              id: "input-email",
              className: "border-none h-[40px] rounded-lg bg-gray-300 w-full",
            }),
            El({
              element: "input",
              type: "password",
              name: "password",
              placeholder: "🔒 Password ...",
              id: "input-pass",
              className: "border-none h-[40px] rounded-lg bg-gray-300 w-full",
            }),
            El({
              element: "label",
              className:
                "text-[16px] mt-[19px] w-full flex flex-col justify-center gap-[10px]",
              children: [
                "Remember Me",
                El({
                  element: "input",
                  type: "checkbox",
                  name: "rememberMe",
                  id: "input-remember",
                  className:
                    "border-2 border-gray-600 rounded-sm w-[16px] h-[16px] bg-gray-100 mr-2",
                }),
                El({
                  element: "button",
                  type: "submit",
                  className:
                    "border-none h-[27px] rounded-full py-[25px] px-[15px] flex justify-center items-center bg-black w-[380px] text-white",
                  children: "Sign In",
                }),
              ],
            }),
            El({
              element: "p",
              id: "notValid",
              className: "text-red-500 mt-4 text-center hidden",
              children: ["Invalid email or password"],
            }),
          ],
          onsubmit: (event) => {
            UserData(event);
          },
        }),
      ],
    });
 
  };
  
