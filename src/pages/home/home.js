import { El } from "../../createElement";
import { router } from "../../routers/router";
import productsData from "../../api/productData";
import getUserInfo from "../../api/userInfo";

const home = async () => {
  try {
     //get user info
    let user = await getUserInfo(1);
    const data = await productsData();
    
  //   //added here the codes for filtering products
  //   let selectedBrand = "All";

  //   //for filtering product
  //   const filterProducts = (brand)=> {
  //     return data.filter((products) => products.brand === brand);
  //   }


  //   //filtered product
  //   let filteredProducts = filterProducts(selectedBrand);

  //   const updateProductView = (brand)=>{
  //     selectedBrand = brand;
  //     filteredProducts = filterProducts(brand);

  //     const productContainer = document.getElementById("products-container");
  //     productContainer.innerHTML = "";
  //     filteredProducts.forEach((products) => {
  //       productContainer.appendChild(
  //         El({
  //           element: "div",
  //           className: "product-item flex flex-col items-center gap-2",
  //           children: [
  //             El({
  //               element: "img",
  //               src: products.image,
  //               className: "w-20 h-20 rounded-lg",
  //             }),
  //             El({
  //               element: "p",
  //               className: "font-bold",
  //               children: [products.name],
  //             }),
  //             El({
  //               element: "p",
  //               className: "text-gray-500",
  //               children: [`$${products.price}`],
  //             }),
  //           ]
  //         }),
  //       ),
  //   });
  // }

   

    return El({
      element: "div",
      className:
        "bg-white h-[100vh] w-[428px] box-border overflow-y-hidden scrollbar-hidden flex flex-col justify-start items-center gap-24",
      id: "home",
      children: [
        //header
        El({
          element: "nav",
          id: "top-header",
          className:
            "flex w-[414px] h-[80px] top-0 justify-between items-center px-[24px] bg-white z-10",
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
                  ],
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
                      onclick: () => {
                        router.navigate("/whishlist");
                      },
                      children: [
                        El({
                          element: "img",
                          className: "",
                          src: "src/img/heart.svg",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        //body start from here
        El({
          element: "div",
          className: "box-border mt-[-16%] justify-center flex flex-col",
          children: [
            //serch box section
            El({
              element: "div",
              className:
                "p-[5px] w-[414px] bg-[#FAFAFA] rounded scrollbar-hidden",
              children: [
                El({
                  element: "input",
                  type: "text",
                  className:
                    "w-[100%] h-[40px] bg-[#FAFAFA] text-gray rounded-lg z-10 p-4",
                  placeholder: "🔍 Search ...",
                  onkeyup: () => {
                    router.navigate("/search");
                    console.log(onkeyup);
                  },
                }),
              ],
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
                          className:
                            "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                          onclick: () => {
                            router.navigate("/nike");
                          },
                        }),
                        El({
                          element: "span",
                          className: "text-center font-bold",
                          children: ["Nike"],
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "flex flex-col",
                      children: [
                        El({
                          //adidas
                          element: "img",
                          src: "src/img/adidas1-icon.png",
                          className:
                            "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                          onclick: () => {
                            router.navigate("/adidas");
                          },
                        }),
                        El({
                          element: "span",
                          className: "text-center font-bold",
                          children: ["Adidas"],
                        }),
                      ],
                    }),
                    El({
                      //puma
                      element: "div",
                      className: "flex flex-col",
                      children: [
                        El({
                          element: "img",
                          src: "src/img/puma-icon.png",
                          className:
                            "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                          onclick: () => {
                            router.navigate("/puma");
                          },
                        }),
                        El({
                          element: "span",
                          className: "text-center font-bold",
                          children: ["Puma"],
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "flex flex-col",
                      children: [
                        El({
                          //asics
                          element: "img",
                          src: "src/img/asics-icon.png",
                          className:
                            "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                          onclick: () => {
                            router.navigate("/asics");
                          },
                        }),
                        El({
                          element: "span",
                          className: "text-center font-bold",
                          children: ["Asics"],
                        }),
                      ],
                    }),
                  ],
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
                          className:
                            "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                          onclick: () => {
                            router.navigate("/reebok");
                          },
                        }),
                        El({
                          element: "span",
                          className: "text-center font-bold",
                          children: ["Reebok"],
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "flex flex-col",
                      children: [
                        El({
                          //newbalance
                          element: "img",
                          src: "src/img/newbalance-icon.png",
                          className:
                            "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                          onclick: () => {
                            router.navigate("/newbalance");
                          },
                        }),
                        El({
                          element: "span",
                          className: "text-center font-bold",
                          children: ["Newbalance"],
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "flex flex-col",
                      children: [
                        El({
                          //converse
                          element: "img",
                          src: "src/img/converse-icon.png",
                          className:
                            "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                          onclick: () => {
                            router.navigate("/converse");
                          },
                        }),
                        El({
                          element: "span",
                          className: "text-center font-bold",
                          children: ["Converse"],
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "flex flex-col",
                      children: [
                        El({
                          //more
                          element: "img",
                          src: "src/img/more-icon.png",
                          className:
                            "bg-[#ECECEC] cursor-pointer w-[80px] h-[70px] p-[10px] rounded-[50%]",
                          onclick: () => {
                            router.navigate("/more");
                          },
                        }),
                        El({
                          element: "span",
                          className: "text-center font-bold",
                          children: ["more"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            //product head and nav filter
            El({
              element: "div",
              className: "mt-10 px-4 flex justify-between items-center",
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
                }),
              ],
            }),
            //filter buttons
            El({
              element: "div",
              className: "flex mt-6 gap-2 w-[430px] px-4",
              children: [
                //filter button main container
                El({
                  element: "div",
                  className: "flex gap-2 scroll-container overflow-x-scroll scrollbar-hide",
                  children: [
                    El({
                      //filter button all button
                      element: "button",
                      className:
                        "bg-white py-2 px-5 border border-[#343A40] text-center rounded-xl text-black text-l hover:bg-[#343A40] active:bg-[#343A40] hover:text-white active:text-white",
                      onclick: () => {
                        router.navigate("/products");
                        // updateProductView("All")
                      },
                      children: ["All"],
                    }),
                    El({
                      //filter nike button
                      element: "button",
                      className:
                        "bg-white py-2 px-5 border border-[#343A40] text-center rounded-xl text-black text-l hover:bg-[#343A40] active:bg-[#343A40] hover:text-white active:text-white",
                      onclick: () => {
                        router.navigate("/nike");
                        // updateProductView("nike");
                      },
                      children: ["Nike"],
                    }),
                    El({
                      //filter adidas button
                      element: "button",
                      className:
                        "bg-white py-2 px-5 border border-[#343A40] text-center rounded-xl text-black text-l hover:bg-[#343A40] active:bg-[#343A40] hover:text-white active:text-white",
                      onclick: () => {
                        router.navigate("/adidas");
                        // updateProductView("adidas");
                      },
                      children: ["Adidas"],
                    }),
                    El({
                      //filter button puma
                      element: "button",
                      className:
                        "bg-white py-2 px-5 border border-[#343A40] text-center rounded-xl text-black text-l hover:bg-[#343A40] active:bg-[#343A40] hover:text-white active:text-white",
                      onclick: () => {
                        router.navigate("/puma");
                        // updateProductView("puma");
                      },
                      children: ["Puma"],
                    }),
                    El({
                      //filter button asics
                      element: "button",
                      className:
                        "bg-white py-2 px-5 border border-[#343A40] text-center rounded-xl text-black text-l hover:bg-[#343A40] active:bg-[#343A40] hover:text-white active:text-white",
                      onclick: () => {
                        router.navigate("/asics");
                        // updateProductView("asics");
                      },
                      children: ["Asics"],
                    }),
                    El({
                      //filter button reebok
                      element: "button",
                      className:
                        "bg-white py-2 px-5 border border-[#343A40] text-center rounded-xl text-black text-l hover:bg-[#343A40] active:bg-[#343A40] hover:text-white active:text-white",
                      onclick: () => {
                        router.navigate("/reebok");
                        // updateProductView("reebok");
                      },
                      children: ["Reebok"],
                    }),
                    El({
                      //filter button newbalance
                      element: "button",
                      className:
                        "bg-white py-2 px-5 border border-[#343A40] text-center rounded-xl text-black text-l hover:bg-[#343A40] active:bg-[#343A40] hover:text-white active:text-white",
                      onclick: () => {
                        router.navigate("/newbalance");
                        // updateProductView("newbalance");
                      },
                      children: ["NB"],
                    }),
                    El({
                      //filter button asics
                      element: "button",
                      className:
                        "bg-white py-2 px-5 border border-[#343A40] text-center rounded-xl text-black text-l hover:bg-[#343A40] active:bg-[#343A40] hover:text-white active:text-white",
                      onclick: () => {
                        router.navigate("/asics");
                        // updateProductView("asics");
                      },
                      children: ["Asics"],
                    }),
                    El({
                      //filter button converse
                      element: "button",
                      className:
                        "bg-white py-2 px-5 border border-[#343A40] text-center rounded-xl text-black text-l hover:bg-[#343A40] active:bg-[#343A40] hover:text-white active:text-white",
                      onclick: () => {
                        router.navigate("/converse");
                        // updateProductView("converse");
                      },
                      children: ["Converse"],
                    }),
                  ],
                }),
              ],
            }),
            //call products here
            El({
              element: "div",
              id: "products-home",
              className:
                "p-[24px] w-[414px] flex flex-wrap justify-center gap-4 overflow-y-scroll no-scrollbar",
              children: data.map((item) => {
                return El({
                  element: "div",
                  id: `${item.id}`,
                  onclick: () => {
                    router.navigate(`/singleproduct/${item.id}`);
                  },
                  className: "w-30 h-40 bg-gray-200 shadow-lg rounded-3xl",
                  children: [
                    El({
                      element: "div",
                      className:
                        "w-[160px] h-[170px] mt-6 bg-white shadow-lg rounded-2xl",
                      children: [
                        El({
                          element: "img",
                          className: "rounded-2xl w-full h-full",
                          src: `${item.images}`,
                        }),
                      ],
                    }),
                    El({
                      element: "div",
                      className: "mt-3",
                      children: [
                        El({
                          element: "p",
                          className: "mt-3 justify-center flex items-center flex-col",
                          children: [`${item.title}`],
                        }),
                        El({
                          element: "p",
                          className: "font-[600] text-[16px]",
                          children: [`$ ${item.price}`],
                        }),
                      ],
                    }),
                  ],
                });
              }),
            }),
            //bottom static menu 
            El({
              element: "nav",
              id: "bottom-nav",
              className:
                "fixed flex w-[414px] h-[66px] bottom-0 justify-between px-[48px] bg-white z-10",
              children: [
                El({
                  element: "button",
                  id: "home-btn",
                  className: " flex flex-col justify-center items-center",
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./src/img/home-select.svg",
                    }),
                    El({
                      element: "p",
                      className: "text-[10px] font-[600]",
                      children: "Home",
                    }),
                  ],
                }),
                El({
                  element: "button",
                  id: "cart-btn",
                  className: " flex flex-col justify-center items-center",
                  onclick: () => {
                    Router().navigate("/cart");
                  },
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./src/img/cart.svg",
                    }),
                    El({
                      element: "p",
                      className: "text-[10px] font-[600]",
                      children: "Cart",
                    }),
                  ],
                }),
                El({
                  element: "button",
                  id: "orders-btn",
                  className: " flex flex-col justify-center items-center",
                  onclick: () => {
                    Router().navigate("/orders");
                  },
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./src/img/orders.svg",
                    }),
                    El({
                      element: "p",
                      className: "text-[10px] font-[600]",
                      children: "Orders",
                    }),
                  ],
                }),
                El({
                  element: "button",
                  id: "Wallet-btn",
                  className: " flex flex-col justify-center items-center",
                  onclick: () => {
                    Router().navigate("/wallet");
                  },
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./src/img/wallet.svg",
                    }),
                    El({
                      element: "p",
                      className: "text-[10px] font-[600]",
                      children: "Wallet",
                    }),
                  ],
                }),
                El({
                  element: "button",
                  id: "profile-btn",
                  className: " flex flex-col justify-center items-center",
                  onclick: () => {
                    Router().navigate("/profile");
                  },
                  children: [
                    El({
                      element: "img",
                      className: "w-[24px] h-[24px]",
                      src: "./src/img/profile.svg",
                    }),
                    El({
                      element: "p",
                      className: "text-[10px] font-[600]",
                      children: "Profile",
                    }),
                  ],
                }),
              ],
            }),

          ],
        }),
      ],
    });
  } catch (error) {
    console.log("Erroe:", error);
  }
};  


export default home;
