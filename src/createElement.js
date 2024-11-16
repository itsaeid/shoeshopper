// export function ce(name,{
//     className, 
//     children = [], 
//     event ={}, 
//     restAttr = {}, 
//     innerText = ""
// }){
//     const element = document.createElement(name);
//     if (className) {
//         element.className = className;
//     }
//     Object.keys(event).forEach((eventKeys)=>{
//         element.addEventListener(eventKeys, event[eventKeys]);
//     });
//     children.forEach((child)=>{
//         element.appendChild(child);
//     });
//     Object.keys(restAttr).forEach((key)=>{
//         element.setAttribute(key, restAttr[key]);
//     });
//     if(innerText){
//         element.innerText = innerText;

//     }
//     return element;
// }

export function El({ element, children, eventListener, dataset, ...rest }) {
    const elem = document.createElement(element);
    for (const attr in rest) {
    elem[attr] = rest[attr];
    }
    if (children) {
    for (const child of children) {
    elem.append(child);
    }
    }
    if (eventListener) {
    eventListener.map((el) => elem.addEventListener(el.event, el.callback));
    }
    if (dataset) {
    for (const key in dataset) {
    elem.dataset[key] = dataset[key];
    }
    }
    return elem;
    }