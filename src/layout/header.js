import { El } from '../createElement';



export function Header(){
    const header = El(
        {element: "div",
        className: "bg-white h-[926px] w-[428px] flex justify-center items-center",
        children : [El({element: "h1", 
            className: "text-3xl text-black center",
            children: ["Header Title"],
        })],
        // eventListener : [{event: 'click',
        //     callback: click () => console.log("Header clicked"),
        // }]
    })
    return header;
}



