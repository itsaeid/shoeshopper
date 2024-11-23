import BASEURL from "./BaseURL";
export const getUserInfo = async (userid) =>{
    try{
        const response = await fetch(`${BASEURL}/users/${userid}`);
        if (!response.ok) throw new Error('some thing went wrong');
        const user = await response.json();
        return user;
    }catch (error){
        console.log(error);
    }
};
export default getUserInfo;