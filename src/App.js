import { El } from "./createElement";

export const App = () =>{
   return El({
        element: "div",
        clasName: "flex flex-col h-screen bg-white overflow-y-scroll",
        id: "rootsEl",
        children: ["welcome"]
    });
};