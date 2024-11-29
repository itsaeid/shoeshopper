import BASEURL from "./BaseURL";

export const getOneProduct = async (id)=>{
    try{
        const response = await fetch(`${BASEURL}/products/${id}`);

        if(!response.ok) throw new Error ("You get an error");
        const data = await response.json();

        return data;
    } catch{
        console.log("Error", error);
        return [];
    }
}

export default getOneProduct;