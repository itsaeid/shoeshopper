import { El } from "./createElement";

export const App = () =>{
   return El({
        element: "div",
        clasName: "flex flex-col",
        id: "rootsEl",
        children: ["welcome"]
    });
};