import getDataUser from "../../api/getDataUser";
import getOneProduct from "../../api/getOneProduct";
import { reduceCounterShoe } from "../../components/card/reduceCounterShoes";
import { increasCounterShoes } from "../../components/card/increasCounterShoes";
import { El } from "../../el/El";


// let selectedcolor = "";
export const productDetail = async (dataid) => {
  try {
    const data = await getOneProduct(dataid);
    console.log("get one Product datail data", data);




    


    return El({
      element: "div",
      id: "productDetaildiv",
      className:
        "w-[414px] h-[800px] p-1 absolute flex flex-col bg-white  bg-gray-200 overflow-y-hidden",
      children: [
        El({
          element: "button",
          className:
            "flex items-center justify-start p-1 gap-[8px] border-black",
          onclick: () => {
            history.back();
          },
          children: [
            El({
              element: "img",
              className: "w-6 h-4 mt-[18px]",
              src: "../../src/images/icon/back.svg",
            }),
            El({
              element: "p",
              className: "text-2xl mt-[18px]",
              children: ["back"],
            }),
          ],
        }),
        // image
        El({
          element: "div",
          className: "w-[414px] h-96 overflow-hidden",
          children: [
            El({
              element: "img",
              className: "w-full  h-full object-contain border-b  border-black",
              src: `${data.title}`,
            }),
          ],
        }),

        // description -wishlist
        El({
          element: "div",
          className: "w-[414px] flex flex-col py-6 gap-2",
          children: [
            El({
              element: "div",
              className: "w-[414px] flex justify-between px-6 ",
              children: [
                El({
                  element: "p",
                  className: "text-[32px] font-[700]",
                  children: [`${data.brand}`],
                }),
                El({
                  element: "button",
                  className: "",

                  // wishlist
                  onclick: async () => {
                    try {
                      // Fetch the product details
                      const data = await getOneProduct(dataid);
                      console.log("Product data ", data);
                  
                      // Get the current user (this would typically come from your user session or localStorage)
                      const user = await getDataUser(1); // Assuming 1 is the logged-in user ID
                  
                      if (user) {
                        // Clone the user object to prevent mutating the original
                        const userObjclone = { ...user };
                  
                        // Ensure that wishlist is an array, defaulting to an empty array if it's undefined
                        userObjclone.wishlist = userObjclone.wishlist || [];
                  
                        console.log("User object", userObjclone);
                  
                        // Check if the product is already in the wishlist
                        const isInWishlist = userObjclone.wishlist.some((item) => item.id === data.id);
                  console.log(isInWishlist);
                  
                        if (!isInWishlist) {
                          // If the product is not in the wishlist, add it
                          const updatedWishlist = [...userObjclone.wishlist, data]; // Create a new array with the new product
                  
                          // Now, update the wishlist on the backend by calling AddFavorites
                          const updatedUser = await AddFavorites(1, updatedWishlist); // Assuming user ID is 1
                  
                          // Update the local user object with the new wishlist
                          userObjclone.wishlist = updatedUser.wishlist;
                  
                          // Optionally, save the updated wishlist to localStorage
                          // localStorage.setItem("useWishlist", JSON.stringify(userObjclone));
                  
                          // Update the UI (example: hide the 'add to wishlist' button)
                          document.getElementById("likebtn-wishlist").classList.add("hidden");
                  
                          // Optionally show a success message or update UI elements
                          console.log("Added to wishlist successfully!");
                  
                          // Update the wishlist UI (this could be a separate function that you call)
                          // renderWishlist(userObjclone.wishlist);
                        } else {
                          console.log("Product is already in wishlist.");
                        }
                      }
                    } catch (error) {
                      console.error("Error while adding to wishlist:", error);
                    }
                  },
                  

                  children: [
                    El({
                      element: "img",
                      id: "likebtn-wishlist",
                      className: "",
                      src: "../../src/images/icon/like.svg",
                    }),
                  ],
                }),
              ],
            }),

            //  description-star

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
                      children: ["7.741 sold"],
                    }),
                  ],
                }),
                El({
                  element: "img",
                  className: "w-6",
                  src: "../../src/images/icon/star.svg",
                }),
                El({
                  element: "p",
                  className: "",
                  children: ["4.3 (5,837 rewiews)"],
                }),
              ],
            }),
          ],
        }),

        //   description
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

        // quntity
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

        //totoalprice
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
             
              children: [`Add to Cart`],
            }),
          ],
        }),

        //   end
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
export default productDetail;
