import BASEURL from "./BaseURL";

export const FavProduct = async (id, data)=>{



    const response = await fetch (`${BASEURL}/users/${id}`);
    if (!response.ok){
        console.error("Error fetchin data");
        throw new Error("Error fecthing data");
    }
    const user = await response.json();


    //update wish list
    const updateUser = {
        ...user,
        wishlist: data,
    };


    const updateResponse = await fetch(`${BASEURL}/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(updateUser),
    });

    if (!updateResponse.ok) {
        console.error("Error updating user");
        throw new Error("Error updating user");
    }


    const updateUserForm = await updateResponse.json();
    return updateUserForm;
};