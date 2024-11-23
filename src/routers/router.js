import Navigo from "navigo";
import { FirstOnLoad } from "../pages/first";
import { SecondWelcome } from "../pages/second";
import { FirstSlide } from "../pages/introSlides/slide1";
import { SecondSlide } from "../pages/introSlides/slide2";
import { ThirdSlide } from "../pages/introSlides/slide3";
import { Login } from "../pages/login/login";
import Home from "../pages/Home/home";
import SearchProduct from "../component/search/search";
import wishList from "../pages/wishlist/wishlistPage";


export const router = new Navigo("/");

export const changePages = (target) => {
    const root = document.getElementById("rootsEl");
    root.innerHTML = "";
    root.append(target())
};

export const changePages2 = (target, item)=>{

    target(item).then((res)=>{
        
    const root = document.getElementById("rootsEl");
    root.innerHTML = "";
    root.append(res);
    })
}


router
    .on("/", ()=> {
        changePages(FirstOnLoad);
    })
    .on("/welcome", ()=>{
        changePages(SecondWelcome);
    })
    .on("/slideOne", ()=>{
        changePages(FirstSlide);
    })
    .on("/slideTwo", ()=>{
        changePages(SecondSlide);
    })
    .on("/slideThree", ()=>{
        changePages(ThirdSlide);
    })
    .on("/login", ()=>{
        changePages(Login);
    })
    .on("/home", ()=>{
        changePages(Home);
        changePages2(Home);
    })
    .on("/search", ()=>{
        changePages2(SearchProduct);
    })
    .on("/wishlist", ()=>{
        changePages2(wishList);
    })
