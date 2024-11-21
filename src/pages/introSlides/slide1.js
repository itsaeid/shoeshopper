import { El } from "../../createElement";
import { router } from "../../routers/router";

export function FirstSlide(){
    const slideOne = El({
        element: "div",
        className: "bg-white h-[100vh] w-[428px] flex flex-col justify-start items-center gap-24",
        children: [
            El({
                element: "img",
                className: "w-[430px] h-[600px]",
                src: "src/img/welcome1.jpg",
            }),
            El({
                element: "h1",
                className: "font-bold text-2xl mx-5 text-center",
                children: ["We provide high quality products just for you"]
            }),
            El({
                element: "img",
                className: "w-20 my-4",
                src: "src/img/pointerone.png",
            }),
            El({
                element: "a",
                className: "text-white bg-black py-[6px] px-[140px] rounded-3xl cursor-pointer",
                children: ["Next"],
                onclick: ()=>{
                    router.navigate("/slideTwo")
                }
            })
        ]
    });
    return slideOne;
}