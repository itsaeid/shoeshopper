import { BASEURL } from "./BaseURL";

export const productsData = async () => {
    try {
      const res = await fetch(`${BASEURL}/Products`);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await resjson();
      
      return data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return []; 
    }
  };
  
  export default productsData;
