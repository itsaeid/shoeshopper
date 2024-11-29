import wishListCard from "../../api/wishCard";
import { El } from "../../createElement";

export const wishList = async () => {
    let data;
  
    try {
      data = await wishListCard(); 
      console.log(data); 
    } catch (error) {
      console.error("Error fetching wishlist:", error.message || error);
      // data = { wishlist: [] }; 
    }
  
  
    return El({
      element: "div",
      id: "wishlistPage",
      className: "w-[414px] h-screen flex flex-col overflow-y-hidden",
      children: [
        El({
          element: "div",
          id: "wishlistnav",
          className: "p-4 flex items-center justify-between pt-8 px-6",
          children: [
            El({
              element: "div",
              className: "flex items-center gap-3",
              children: [
                El({
                  element: "button",
                  className: "flex",
                  onclick: () => {
                    history.back();
                  },
                  children: [
                    El({
                      element: "img",
                      className: "text-2xl",
                      src: "./src/img/back.png",
                    }),
                  ],
                }),
                El({
                  element: "h1",
                  className: "text-2xl font-bold",
                  children: "My Wishlist",
                }),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          id: "products-filter1",
          className:
            "p-[24px] absolute w-[414px] top-[80px] flex flex-wrap gap-4 overflow-y-scroll no-scrollbar",
          children: data.wishlist.length > 0 
            ? data.wishlist.map((item) => {
                return El({
                  element: "div",
                  id: `${item.id}`,
                  className: "",
                  children: [
                    El({
                      element: "div",
                      className:
                        "w-[182px] h-[182px] bg-gray-100 shadow-lg rounded-2xl",
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
                          className: "font-[700] text-[20px]",
                          children: [`${item.title}`],
                        }),
                        El({
                          element: "div",
                          className: "flex items-center gap-2",
                          children: [
                            El({
                              element: "img",
                              className: "w-6",
                              src: "src/img/star.svg",
                            }),
                            El({
                              element: "p",
                              className: "",
                              children: ["4.3 |"],
                            }),
                            El({
                              element: "div",
                              className: "bg-gray-200 p-1 px-2 rounded-md",
                              children: [
                                El({
                                  element: "p",
                                  className: "text-[10px] font-[700]",
                                  children: ["5.371 sold"],
                                }),
                              ],
                            }),
                          ],
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
              })
            : [El({
                element: "div",
                className: "w-[414px] text-center p-4",
                children: "Sorry, we couldn't load your wishlist at the moment. Please try again later.",
              })],  
        }),
      ],
    });
  };
  
  export default wishList;
  