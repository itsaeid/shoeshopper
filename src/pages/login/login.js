import { El } from "../../createElement";
import { router } from "../../routers/router";

export function Login(){
    El({
        element: "div",
        className: "",
        children: [
            El({
                element: "img",
                className: "",
                src: "",
            }),
            El({
                element: "h1",
                className: "",
                children: ["Login to Your Account"]
            })
        ]
    })
}