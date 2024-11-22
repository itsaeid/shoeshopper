import { El } from "../../createElement";
import { router } from "../../routers/router";

export function SecondSlide(){
    const slideTwo = El({
        element: "div",
        className: "bg-white flex flex-col gap-[1px] h-[100vh] w-[428px] justify-start items-center gap-24",
        children: [
            El({
                element: "img",
                className: "w-[430px] h-[600px]",
                src: "src/img/slide2pic.jpg",
            }),
            El({
                element: "h1",
                className: "font-bold text-2xl mx-5 text-center",
                children: ["Your satisfaction is our number one periority"]
            }),
            El({
                element: "img",
                className: "w-20 my-4",
                src: "src/img/pointertwo.png",
            }),
            El({
                element: "a",
                className: "text-white bg-black py-[6px] px-[140px] rounded-3xl cursor-pointer",
                children: ["Next"],
                onclick: ()=>{
                    router.navigate("/slideThree")
                }
            })
        ]
    });
    return slideTwo;
}