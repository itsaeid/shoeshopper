import getUserInfo from "../../api/userInfo";
import getOneProduct from "../../api/getOneProduct";
import { decreaseCounterShoe } from "../../component/decreaseCounterShoe";
import { increasCounterShoes } from "../../component/increaseCounterShoe"
import { El } from "../../createElement";
import { FavProduct } from "../../api/whishListCard";


// let selectedcolor = "";
export const productDetail = async (dataid) => {
  try {
    const data = await getOneProduct(dataid);
    
    let user = await getUserInfo (1);
    // console.log(user);

    
    El({
        element: "div",
        id: "productDetaildiv",
        className: "bg-white h-[100vh] w-[428px] box-border overflow-y-hidden scrollbar-hidden flex flex-col justify-start items-center gap-24",
        children: [
            //header
            El({
                element: "button",
                className: "flex items-center justify-start p-1 gap-[8px] border-black",
                onclick: ()=>{
                    history.back();
                },
                children: [
                    El({
                        element: "img",
                        className: "w-6 h-4 mt-[18px]",
                        src: "../../src/img/back.png",
                    }),
                    El({
                        element: "span",
                        className: "text-[16px] font-bold text-black",
                        children: ["Back"],
                    })

                ]
            }),
            //single product image
            El({
                element: "div",
                className: "",
                children: [
                    El({
                        element: "img",
                        className: "w-full h-full object-contain",
                        src: `${data.title}`,
                    }),
                ],
            }),
            //product details
            El({
                element: "div",
                className: "",
                children: [
                    El({
                        element: "div",
                        className: "",
                        children: [
                            El({
                                element: "span",
                                className: "text-[16px] font-bold text-black",
                                children: [`${data.brand}`],
                            }),
                            El({
                                element: "button",
                                className: "",
                                onclick: async ()=>{
                                    try{
                                    const data = await getOneProduct(dataid);
                                    console.log("pro data:", data);

                                    if (user){
                                        //cloning user
                                        const userobj = {...user};

                                        //make sure whishlist is an array
                                        userobj.whishlist = userobj.whishlist || [];

                                        //check being product in wishlist
                                        const inWishList = userobj.whishlist.some((item)=> item.id ===data.id);
                                        console.log(inWishList);

                                        if(!inWishList){
                                            const updatedWishList = [...userobj.whishlist, data];

                                            const updateUserWish = await FavProduct(1, updatedWishList); 

                                            userobj.whishlist = updateUserWish.whishlist;




                                            document.getElementById("likebtn-wishlist").classList.add("hidden");
                                            console.log("Added product to wishlist");
                                        }else{
                                            console.log("already in list");
                                        }
                                    }
                                } catch (error){
                                    console.error("Error while adding to list:", error);
                                }},
                                children: [
                                    El({
                                        element: "img",
                                        id: "likebtn-wishlist",
                                        classList: "",
                                        src: "/src/img/heart.svg"
                                    }),
                                ]
                            })
                        ]
                    }),

                    El({
                        element: "div",
                        className: "w-[414px] flex gap-2 px-6 items-center",
                        children: [
                            El({
                                element: "div",
                                className: "bg-gray-200 p-1 px-2 rounded-md",
                                children: [
                                    El({
                                        element: "p",
                                        className: "",
                                        children: ["7.741 sold"]
                                    })
                                ]
                            }),
                            El({
                                element: "img",
                                className: "w-6",
                                src: "src/img/star.svg",
                            }),
                            El({
                                element: "p",
                                className: "",
                                children: ["4.3 (5,837 views)"]
                            })
                        ]
                    })
                ]
            }),

            //decribe
            El({
                element: "div",
                className: "w-[414px] px-6 flex flex-col gap-3 py-10",
                children: [
                  El({
                    element: "p",
                    className: "font-[700] text-[18px]",
                    children: ["Description"],
                  }),
                  El({
                    element: "p",
                    className: "",
                    children: [
                      "Discover what it's really like to work at the best sports company in the world; this is adidas through the lens of our people.",
                      El({
                        element: "span",
                        className: "font-[700]",
                        children: ["view more.."],
                      }),
                    ],
                  }),
      
                  //   size
                  El({
                    element: "div",
                    className: "flex gap-32",
                    children: [
                      El({
                        element: "div",
                        className: "",
                        children: [
                          El({
                            element: "p",
                            className: "font-[700] text-[18px]",
                            children: ["Size"],
                          }),
                          El({
                            element: "div",
                            className: "flex gap-2",
                            children: [
                              ...data.size.map((item) => {
                                // console.log(item);   //42,41,40
      
                                return El({
                                  element: "button",
                                  className: `border border-black w-8 h-8 rounded-full`,
                                  children: [`${item}`],
                                  onclick: (e) => {
                                    let index = e.target;
                                    console.log("index", index);
                                    let buttons = [...e.target.parentNode.children];
                                    console.log(buttons);
                                    buttons.map((button) => {
                                      // console.log(button);
                                      if (button === index) {
                                        // console.log(index);
                                        index.classList.add("bg-black");
                                        index.classList.add("text-white");
                                        // index.classList.add("selected-size");
                                        // console.log(index);
                                      } else if (button !== index) {
                                        // console.log(button);
                                        button.classList.remove("bg-black");
                                        button.classList.remove("text-white");
                                        // button.classList.remove("selected-size");
                                      }
                                    });
                                  },
                                });
                              }),
                            ],
                          }),
                        ],
                      }),
      
                      // color
      
                      El({
                        element: "div",
                        className: "",
                        children: [
                          El({
                            element: "p",
                            className: "font-[700] text-[18px]",
                            children: ["Color"],
                          }),
                          El({
                            element: "div",
                            className: "flex gap-2",
                            children: [
                              ...data.color.map((item) => {
                                // console.log(item);
                                return El({
                                  element: "button",
                                  className: `w-8 h-8 rounded-full bg-${item}-700`,
                                  onclick: (e) => {
                                    // selectedcolor = item;
                                    // console.log(selectedcolor);
                                    let index = e.target;
                                    // console.log(index);
                                    let buttons = [...e.target.parentNode.children];
                                    // console.log(buttons);
                                    buttons.map((button) => {
                                      // console.log(button);
                                      if (button === index) {
                                        // console.log(index);
                                        index.classList.add("border-[3px]");
                                        index.classList.add("border-black");
                                        index.classList.add(`${item}-color`);
                                        // console.log(index);
                                      } else if (button !== index) {
                                        // console.log(button);
                                        button.classList.remove("border-[3px]");
                                        button.classList.remove("border-black");
                                        button.classList.remove(`${item}-color`);
                                      }
                                    });
                                  },
                                  // children: [`bg-${item}-700`],
                                });
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),


              El({
                element: "div",
                className: "flex w-[414px] gap-4 mt-6 items-center",
                children: [
                  El({
                    element: "p",
                    className: "font-[700] text-[18px]",
                    children: ["Quantity"],
                  }),
                  El({
                    element: "div",
                    className:
                      "bg-gray-200 flex justify-center items-center p-1 w-28 rounded-full gap-4",
                    children: [
                      El({
                        element: "button",
                        className: "font-[700] text-[26px]",
                        children: [`−`],
                        onclick: () => {
                          reduceCounterShoe(data);
                        },
                      }),
                      El({
                        element: "p",
                        id: "counterShoe",
                        className: "font-[700] text-[18px]",
                        children: `1`,
                      }),
                      El({
                        element: "button",
                        className: "font-[700] text-[26px]",
                        children: [`+`],
                        onclick: () => {
                          increasCounterShoes(data);
                        },
                      }),
                    ],
                  }),
                ],
              }),


              El({
                element: "div",
                className: "w-[414px] px-6 flex justify-between py-8",
                children: [
                  El({
                    element: "div",
                    className: "",
                    children: [
                      El({
                        element: "p",
                        className: "",
                        children: ["Total Price"],
                      }),
                      El({
                        element: "p",
                        id: "totalPriceShoe",
                        className: "font-[700] text-[28px]",
                        children: ["1600"],
                      }),
                    ],
                  }),
                  El({
                    element: "button",
                    className:
                      "bg-black text-white h-16 w-60 flex justify-center items-center rounded-full",
                    // onclick:()=>{
      
                    // },
                    children: [`Add to Cart`],
                  }),
                ],
              }),
        ]
    })





  } catch(error) {
    console.log("Error", error);
    
  }



    
};



export default productDetail;
