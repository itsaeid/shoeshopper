import { El } from "../createElement";

export function FirstOnLoad() {
  const firstLoad = El({
    element: "div",
    className: "bg-white h-[100vh] w-[428px] flex flex-col justify-center items-center gap-24",
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
                alt: "Logo"
              }),
        ]
      }),
      El({
        element: "div",
        className:"flex justify-center relative",
        children: [
            El({
                element: "img",
                className: "w-[50px] h-[50px] animate-spin",
                src: "src/img/spinner-atom.png"
            })
        ]
      })
    ]
  });
  return firstLoad;
}
