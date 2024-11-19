import { El } from '../createElement';
import { router } from '../routers/router';



export function FirstOnLoad() {
  const firstLoad = El({
    element: "div",
    className:
      "bg-white h-[100vh] w-[428px] flex flex-col justify-center items-center gap-24 pointer",
    
    id: "loadingSection",
    children: [
      El({
        element: "div",
        className: "flex flex-row-reverse justify-center items-center gap-2",
        children: [
          El({
            element: "h1",
            className: "text-4xl font-bold text-black center",
            children: ["Shoea"],
          }),
          El({
            element: "img",
            className: "w-[40px] h-[40px] bg-black rounded-[50%] p-2",
            src: "src/img/logo.png",
            alt: "Logo",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex justify-center relative",
        children: [
          El({
            element: "img",
            className: "w-[50px] h-[50px] animate-spin",
            src: "src/img/spinner-atom.png",
          }),
        ],
      }),
    ],
  });

//   const mainPage = El({
//     element: "div",
//     className:
//       "bg-[url('src/img/welcombanner.jpg')] bg-center bg-no-repeat bg-cover flex flex-col gap-2 h-[100vh] w-[428px] flex flex-col justify-center items-center gap-24",
//     id: "mainPage",
//     onclick: ()=>{
//       router.navigate("/welcome")
//     },
//     children: [
    
//       El({
//         element: "h2",
//         className: "text-2xl font-semibold text-white text-left relative top-[40%]",
//         children: ["Welcome to 👋"],
//       }),
//       El({
//         element: "h2",
//         className: "text-6xl font-bold text-white text-left relative top-[30%]",
//         children: ["Shoea"],
//       }),
//       El({
//         element: "p",
//         className: "text-lg text-white text-left relative top-[20%] mx-[20px]",
//         children: ["The best sneakers & shoes e-commerse app of the century for your fashion needs!"]
//       })
//     ],
//   });



  setTimeout(() => {
    router.navigate("/welcome")
  }, 3000);

  return firstLoad;
}
