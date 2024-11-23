import { El } from "../../createElement";
import { router } from "../../routers/router";
import productsData from "../../api/productData";
import getUserInfo from "../../api/userInfo";



export const Home = async ()=> {
    try{
        const data = await productsData();
        let user = await getUserInfo(1);

        return El ({
            element: "div",
            className: "bg-white h-[100vh] w-[428px] flex flex-col justify-start items-center gap-24",
            id: "home",
            children: [
                El({
                    //header
                    element: "nav",
                    id: "top-header",
                    className: "fixed flex w-[414px] h-[80px] top-0 justify-between items-center px-[24px] bg-white z-10",
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
                    className: "",
                    children: [
                        El({
                            //serch box section
                            element: "div",
                            className: "p-[24px] fixed -mb-[472px] w-[414px] bg-white z-10 overflow-y-scroll scrollbar-hidden",
                            children: [
                                El({
                                    element: "input",
                                    type: "text",
                                    className: "w-[80%] h-[40px] text-gray rounded-lg z-10 p-4",
                                    placeholder: "🔍 Search ...",
                                    onkeyup: ()=>{
                                        router.navigate("/search");
                                        console.log(onkeyup)
                                    },
                                }),
                            ]
                        }),
                    ]
                })
            ]
        });
    } catch (error){
        console.log(error);
    }
}
export default Home;