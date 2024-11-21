import { El } from "../../createElement";
import { router } from "../../routers/router";
import { productsData } from "../../api/productData";
import getUserInfo from "../../api/userInfo";


export const home = async ()=> {
    try{
        const data = await productsData();
        let user = await getUserInfo(1);
        console.log(user);
        return El ({
            element: "div",
            className: "w-[414px]  h-[82px] flex flex-col items-center justify-center overflow-y-hidden scrollbar-hidden",
            id: "home",
            children: [
                El({
                    //header
                    element: "nav",
                    id: "top-header",
                    className: "fixed flex w-[414px] h-[80px] top-0 justify- items-center px-[24px] bg-white z-10",
                    children: [
                        El({
                            element: "div",
                            className: "flex gap-4 justify-between items-center",
                            children: [
                                El({
                                    element: "img",
                                    className: "",
                                    src: "src/img/prof.png",
                                }),
                                El({
                                    element: "div",
                                    className: "flex flex-col",
                                    children: [
                                        El({
                                            element: "span",
                                            className: "text-[16px] text-[#757475]",
                                            children: ["Good Morning 👋"],
                                        }),
                                        El({
                                            element: "span",
                                            className: "text-bold",
                                            children: [user.name],
                                        }),
                                    ]
                                }),
                                El({
                                    element: "div",
                                    className: "flex gap-4",
                                    children: [
                                        El({
                                            element: "button",
                                            className: "flex gap-4",
                                            children: [
                                                El({
                                                    element: "img",
                                                    className: "",
                                                    src: "src/img/bell.svg",
                                                }),
                                            ],
                                        }),
                                        El({
                                            element: "button",
                                            className: "flex gap-4",
                                            children: [
                                                El({
                                                    element: "img",
                                                    className: "",
                                                    src: "src/img/heart.svg",
                                                })
                                            ]
                                        })
                                        
                                    ],
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    } catch (error){
        console.log(error);
    }
}
export default home;