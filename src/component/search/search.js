import { El } from "../../createElement";
import productsData from "../../api/productData";
import BASEURL from "../../api/BaseURL";
import { router } from "json-server";

const SearchProduct = async ()=>{
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
                                        document.getElementById("no-search").classList.add("hidden");
                                        const search = document.getElementById("products-search");
                                        search.innerHTML = "";

                                        //use fetch with BaseUrl
                                        fetch(`${BASEURL}/products?q=${e.target.value}`)
                                        .then((res) => res.json())
                                        .then((data) => {
                                            //clear last search
                                            search.innerHTML = "";

                                            data.map((item) => {
                                                //appen each product resaul
                                                search.appendChild(
                                                    El({
                                                        element: "div",
                                                        id: `${item.id}`,
                                                        onclick: ()=> {
                                                            router.navigate(`/product/${item.id}`);
                                                        },
                                                        className: "",
                                                        children: [
                                                            El({
                                                                element: "div",
                                                                className: "w-[182px] h-[182px] bg-gray-100 shadow-lg rounded-2xl",
                                                                children: [
                                                                    El({
                                                                        element: "img",
                                                                        className: "rounded-2xl w-[414px] h-full",
                                                                        src: `${item.image}`,
                                                                    })
                                                                ]
                                                            }),
                                                            El({
                                                                element: "div",
                                                                className: "mt-3",
                                                                children: [
                                                                    El({
                                                                        element: "span",
                                                                        className: "text-lg font-bold",
                                                                        children: [`${item.title}`],
                                                                    }),
                                                                    El({
                                                                        element: "span",
                                                                        className: "text-sm text-gray-500",
                                                                        children: [`${item.price}`],
                                                                    }),

                                                                ]
                                                            })
                                                        ]
                                                    })
                                                )
                                            })
                                        })
                                        .catch((error)=>{
                                            console.log(error);
                                        });
                                    },
                                    className:
                                    "w-[350px] h-[45px] bg-gray-100 border-none rounded-md px-10 absolute z-10 left-[45px]",
                                    type: "text",
                                    placeholder: "Search",
                                }),
                                El({
                                    element: "img",
                                    id: "product-search",
                                    className: "p-[24px] absolute w-[414px] top-[80px] flex flex-wrap justify-center gap-4 overflow-y-scroll no-scrollbar ",
                                    children: [],

                                }),
                                El({
                                    element: "div",
                                    className: "w-[414px] flex flex-col h-full justify-center items-center",
                                    id: "not-search",
                                    children: [
                                        El({
                                            element: "img",
                                            className: "",
                                            src: "src/img/nothing.png",
                                        }),
                                        El({
                                            element: "p",
                                            className: "font-bold text-2xl",
                                            children: ["Not found"]
                                        }),
                                        El({
                                            element: "p",
                                            className: "font-[400] text-[16px] text-center p-8",
                                            children: [
                          "Sorry,the keyword you enterd cannot be found.please check again or search with another keyword.",
                        ],
                                        })
                                    ]
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
export default SearchProduct;