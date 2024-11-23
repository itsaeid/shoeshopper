import BASEURL from "./BaseURL";

export const wishListCard = async () => {
    try {
      const response = await fetch(`${BASEURL}/users/1`);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
      }
  
      const user = await response.json();
  
      if (user && user.wishlist) {
        return user;  
      } else {
        throw new Error("Wishlist data is not available.");
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error.message || error);
      return { wishlist: [] };  
    }
  };
  
  export default wishListCard;
  