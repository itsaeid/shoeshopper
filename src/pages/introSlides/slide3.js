import { El } from "../../createElement";
import { router } from "../../routers/router";

export function ThirdSlide(){
    const slideThree = El({
        element: "div",
        className: "bg-white flex flex-col gap-[1px] h-[100vh] w-[428px] flex flex-col justify-start items-center gap-24",
        children: [
            El({
                element: "img",
                className: "w-[430px] h-[600px]",
                src: "src/img/slide3pic.jpg",
            }),
            El({
                element: "h1",
                className: "font-bold text-2xl mx-5 text-center",
                children: ["Let’s fulfill your fashion needs with shoearight now!"]
            }),
            El({
                element: "img",
                className: "w-20 my-4",
                src: "src/img/pointerthree.png",
            }),
            El({
                element: "a",
                className: "text-white bg-black py-[6px] px-[140px] rounded-3xl cursor-pointer",
                children: ["Get Started"],
                onclick: ()=>{
                    router.navigate("/login")
                }
            })
        ]
    });
    return slideThree;
}