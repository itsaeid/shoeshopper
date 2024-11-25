import { El } from "../../createElement";
import { router } from "../../routers/router";
import productsData from "../../api/productData";
import getUserInfo from "../../api/userInfo";



export const home = async ()=> {
    try{
        const data = await productsData();
        let user = await getUserInfo(1);

        return El ({
            element: "div",
            className: "bg-white h-[100vh] w-[428px] box-border flex flex-col justify-start items-center gap-24",
            id: "home",
            children: [
                El({
                    //header
                    element: "nav",
                    id: "top-header",
                    className: "flex w-[414px] h-[80px] top-0 justify-between items-center px-[24px] bg-white z-10",
                    children: [
                        El({
                            element: "div",
                            className: "flex justify-between w-[100%] items-center",
                            children: [
                                El({
                                    //profile pic
                                    element: "img",
                                    className: "",
                                    src: "src/img/prof.png",
                                }),
                                El({
                                    //user name in header
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
                                    //notication & wishlist button in header
                                    element: "div",
                                    className: "flex gap-4 w-[40%] justify-end",
                                    children: [
                                        El({
                                            element: "button",
                                            id: "notif-btn",
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
                                            id: "like-btn",
                                            onclick: ()=>{
                                                router.navigate("/whishlist")
                                            },
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
                }),
                El({
                    //body start from here
                    element: "div",
                    className: "box-border relative justify-center flex",
                    children: [
                        El({
                            //serch box section
                            element: "div",
                            className: "p-[5px] mt-[-80px] fixed w-[414px] bg-[#FAFAFA] rounded scrollbar-hidden",
                            children: [
                                El({
                                    element: "input",
                                    type: "text",
                                    className: "w-[100%] h-[40px] bg-[#FAFAFA] text-gray rounded-lg z-10 p-4",
                                    placeholder: "🔍 Search ...",
                                    onkeyup: ()=>{
                                        router.navigate("/search");
                                        console.log(onkeyup);
                                    },
                                }),
                            ]
                        }),

                        //brand icons
                        El({
                            element: "div",
                            className: "flex flex-col gap-6 justify-between mt-[20px]",
                            children: [
                                El({
                                    //first row
                                    element: "div",
                                    className: "flex gap-6 justify-center",
                                    children: [
                                        El({
                                            element: "div",
                                            className: "flex flex-col",
                                            children: [
                                                El({
                                                    //nike
                                                    element: "img",
                                                    src: "src/img/nike-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[90px] h-[80px] p-[10px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/nike");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Nike"]
                                                })
                                            ]
                                        }),
                                        El({
                                            element: "div",
                                            className: "flex flex-col",
                                            children: [
                                                El({
                                                    //adidas
                                                    element: "img",
                                                    src: "src/img/adidas-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[90px] h-[80px] p-[10px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/adidas");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Adidas"]
                                                })
                                            ]
                                        }),
                                        El({
                                            element: "div",
                                            className: "flex flex-col",
                                            children: [
                                                El({
                                                    //puma
                                                    element: "img",
                                                    src: "src/img/puma-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[90px] h-[80px] p-[10px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/puma");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Nike"]
                                                })
                                            ]
                                        }),
                                        El({
                                            element: "div",
                                            className: "",
                                            children: [
                                                El({
                                                    //nike
                                                    element: "img",
                                                    src: "src/img/nike-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer p-[25px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/nike");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Nike"]
                                                })
                                            ]
                                        }),
                                    ]
                                }),
                                El({
                                    //second row
                                    element: "div",
                                    className: "flex gap-6 justify-center",
                                    children: [
                                        El({
                                            element: "div",
                                            className: "",
                                            children: [
                                                El({
                                                    //nike
                                                    element: "img",
                                                    src: "src/img/nike-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer p-[25px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/nike");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Nike"]
                                                })
                                            ]
                                        }),
                                        El({
                                            element: "div",
                                            className: "",
                                            children: [
                                                El({
                                                    //nike
                                                    element: "img",
                                                    src: "src/img/nike-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer p-[25px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/nike");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Nike"]
                                                })
                                            ]
                                        }),
                                        El({
                                            element: "div",
                                            className: "",
                                            children: [
                                                El({
                                                    //nike
                                                    element: "img",
                                                    src: "src/img/nike-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer p-[25px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/nike");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Nike"]
                                                })
                                            ]
                                        }),
                                        El({
                                            element: "div",
                                            className: "",
                                            children: [
                                                El({
                                                    //nike
                                                    element: "img",
                                                    src: "src/img/nike-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer p-[25px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/nike");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Nike"]
                                                })
                                            ]
                                        }),
                                    ]
                                }),    
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