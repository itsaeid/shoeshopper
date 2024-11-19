import { El } from "../../createElement";
import { router } from "../../routers/router";
import { productsData } from "../../api/productData";


export const home = async ()=> {
    try{
        const data = await productData();

        return El ({
            element: "div",
            className: "w-[414px]  h-[82px] flex flex-col items-center justify-center overflow-y-hidden scrollbar-hidden",
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
                            className: "flex gap-[16px]",
                            children: [
                                El({
                                    element: "button",
                                    className: ""
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