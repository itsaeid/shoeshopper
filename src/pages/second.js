import { El } from "../createElement";
import { router } from "../routers/router";

// export function SecondWelcome(){
//     const welcome = El({
//         element: "div",
//         clssName: "bg-white h-[100vh] w-[428px] flex flex-col justify-center items-center gap-24",
//         children: [
//             El({
//                 element: "img",
//                 clssName: "relative",
//                 src: "src/img/welcome1.jpg"
//             }),
//             El({
//                 element: "h1",
//                 clasName: "text-white",
//                 children: ["We provide high quality products just for you"]
//             }),
//             El({
//                 element: "div",
//                 clasName: "",
//                 children: [
//                     El({
//                         element: "img",
//                         clasName: "w-1/2",
//                         src: "src/img/wrapper.svg"

//                     })
//                 ]
//             })
//         ]
        
//     }); 
//     return welcome;
// }
export function SecondWelcome(){
const welcome = El({
    element: "div",
    className:
      "bg-[url('src/img/welcombanner.jpg')] bg-center bg-no-repeat bg-cover flex flex-col gap-2 h-[100vh] w-[428px] flex flex-col justify-center items-center gap-24",
    id: "mainPage",
    children: [
    
      El({
        element: "h2",
        className: "text-2xl font-semibold text-white text-left relative top-[40%]",
        children: ["Welcome to 👋"],
      }),
      El({
        element: "h2",
        className: "text-6xl font-bold text-white text-left relative top-[30%]",
        children: ["Shoea"],
      }),
      El({
        element: "p",
        className: "text-lg text-white text-left relative top-[20%] mx-[20px]",
        children: ["The best sneakers & shoes e-commerse app of the century for your fashion needs!"]
      })
    ],
    onclick: ()=>{
        // console.log("Welcome clicked");
        router.navigate("/slideOne")
    }
  });

//   const bigElement = document.getElementById("mainPage");
//   bigElement.addEventListener("click",()=>{
//         router.navigate("/slideOne");
//     });
  return welcome;
}

