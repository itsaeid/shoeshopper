import { El } from "../../createElement";
import productsData from "../../api/productData";
import getUserInfo from "../../api/userInfo";
import { BASEURL } from "../../api/BaseURL";

export async function SearchProduct (){
    const data = await productsData();

    try{
        return El({
            element: "div",
            id: "search",
            className: "w-[414px] h-screen flex flex-col overflow-y-hidden",
            children: [
                El({
                    element: "div",
                    className: "flex items-center gap-3",
                    children: [
                        El({
                            element: "button",
                            className: "flex absolute z-30 top-[48px]",
                            onclick: ()=>{
                                history.back();
                            },
                            children: [
                                El({
                                    element: "img",
                                    className: "text-2xl",
                                    src: "src/img/back.png",
                                }),
                            ]
                        }),
                        El({
                            element: "div",
                            className: "",
                            children: [
                                El({
                                    element: "input",
                                    id: "search1",
                                    onkeyup: (e)=>{
                                        
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    } catch(error){
        console.log(error)
    }
}