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
                    className: "box-border mt-[-16%] justify-center flex flex-col",
                    children: [
                        El({
                            //serch box section
                            element: "div",
                            className: "p-[5px] w-[414px] bg-[#FAFAFA] rounded scrollbar-hidden",
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
                                            //nike
                                            element: "div",
                                            className: "flex flex-col",
                                            children: [
                                                El({
                                                    element: "img",
                                                    src: "src/img/nike-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
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
                                                    src: "src/img/adidas1-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
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
                                            //puma
                                            element: "div",
                                            className: "flex flex-col",
                                            children: [
                                                El({
                                                    element: "img",
                                                    src: "src/img/puma-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/puma");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Puma"]
                                                })
                                            ]
                                        }),
                                        El({
                                            element: "div",
                                            className: "flex flex-col",
                                            children: [
                                                El({
                                                    //asics
                                                    element: "img",
                                                    src: "src/img/asics-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/asics");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Asics"]
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
                                            className: "flex flex-col",
                                            children: [
                                                El({
                                                    //reebok
                                                    element: "img",
                                                    src: "src/img/reebok-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/reebok");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Reebok"]
                                                })
                                            ]
                                        }),
                                        El({
                                            element: "div",
                                            className: "flex flex-col",
                                            children: [
                                                El({
                                                    //newbalance
                                                    element: "img",
                                                    src: "src/img/newbalance-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/newbalance");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Newbalance"]
                                                })
                                            ]
                                        }),
                                        El({
                                            element: "div",
                                            className: "flex flex-col",
                                            children: [
                                                El({
                                                    //converse
                                                    element: "img",
                                                    src: "src/img/converse-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/converse");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["Converse"]
                                                })
                                            ]
                                        }),
                                        El({
                                            element: "div",
                                            className: "flex flex-col",
                                            children: [
                                                El({
                                                    //more
                                                    element: "img",
                                                    src: "src/img/more-icon.png",
                                                    className: "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                                                    onclick: ()=>{
                                                        router.navigate("/more");
                                                    },
                                                }),
                                                El({
                                                    element: "span",
                                                    className: "text-center font-bold",
                                                    children: ["more"]
                                                })
                                            ]
                                        }),
                                    ]
                                }),    
                            ]
                        }),
                        //product head and nav filter
                        El({
                            element: "div",
                            className: "mt-10 flex justify-between items-center",
                            children: [
                                El({
                                    element: "p",
                                    className: "font-[600] text-[20px]",
                                    children: ["Most Popular"],
                                }),
                                El({
                                    element: "button",
                                    className: "font-[600] text-[16px]",
                                    children: ["See All"],
                                })
                            ]

                        }),
                        //filter buttons
                        El({
                            element: "div",
                            className: "flex ",
                            children: [
                                El({
                                    element: "button",
                                    className: "",
                                    onclick: ()=>{
                                        data.
                                    }
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