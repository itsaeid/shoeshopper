import { El } from "../../createElement";
import productsData from "../../api/productData";


const Puma = async ()=> {
    try {
        const data = await productsData();

        return El({
            element: "div",
            id: "pumaShoe",
            className: "w-[414px] bg-white h-[100vh] flex flex-col overflow-y-visible",
            children: [
                El({
                    element: "div",
                    id: "",
                    className: "p-4 flex items-center justify-between pt-8 px-6",
                    children: [
                        El({
                            element: "div",
                            className: "flex item-center gap-3",
                            children: [
                                El({
                                    //back page button
                                    element: "button",
                                    className: "flex",
                                    onclick: ()=>{
                                        history.back();
                                    },
                                    children: [
                                        El({
                                            element: "img",
                                            className: "",
                                            src: "src/img/arrow-left-short.png"
                                        }),
                                        
                                    ]
                                }),
                                El({
                                    //title
                                    element: "span",
                                    className: "text-lg font-bold text-gray-900",
                                    children: "Puma"
                                })
                            ]
                        })
                    ]
                }),
                El({
                    //getting product and filter puma
                    element: "div",
                    id: "adidasShoeContainer",
                    className: "p-[24px] absolute w-[414px] top-[80px] flex flex-wrap justify-center gap-4 overflow-y-scroll scrollbar-hidden ",
                    children: data
                    .filter((item)=> item.brand === "puma")
                    .map((item)=>{
                        return El({
                            element: "div",
                            id: `${item.id}`,
                            className: "",
                            children: [
                                El({
                                    //create product boxes
                                    element: "div",
                                    className: "w-40 h-40 bg-gray-200 shadow-lg rounded-3xl",
                                    children: [
                                        El({
                                            element: "img",
                                            className: "w-46",
                                            src: `${item.images}`,
                                        }),
                                    ],
                                }),
                                El({
                                    //product name
                                    element: "div",
                                    className: "mt-3 justify-center flex items-center flex-col",
                                    children: [
                                        El({
                                            element: "span",
                                            className: "text-lg font-bold text-gray-900",
                                            children: `${item.title}`,
                                        }),
                                        El({
                                            element: "p",
                                            className: "text-sm text-gray-600",
                                            children: [`$ ${item.price}`]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                        
                })
            ]
        })




    }catch(error){
        console.log(error);
    }
}

export default Puma;