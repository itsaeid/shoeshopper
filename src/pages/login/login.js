import { El } from "../../createElement";
import { router } from "../../routers/router";

export function  Login(){
    const login = {
        El({
            element: "div",
            className: "",
            children: [
                El({
                    element: "h1",
                    class: "",
                    children: ["Login to Your Account"]
                }),
                El({
                    element: "form",
                    className: "p-4 mt-[48px] w-full flex flex-col items-center justify-center gap-[20px]",
                    children: [
                        El({
                            element: "input",
                            className: "border-none h-[40px] rounded-lg bg-gray-300 w-full",
                            type: "email",
                            name: "email",
                            placeholder: "✉️ Email ...",
                            id: "login-input"
                        }),
                        El({
                            element: "input",
                            type: "password",
                            name: "password",
                            placeholder: "🔒 Password ...",
                            id: "login-password",
                            className: "border-none h-[40px] rounded-lg bg-gray-300 w-full",
                        }),
                        
                    ]
                })
            ]
        })
    }
    return login;
}