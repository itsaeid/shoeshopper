import Navigo from "navigo";
import { FirstOnLoad } from "../pages/first";
import { SecondWelcome } from "../pages/second";
import { FirstSlide } from "../pages/introSlides/slide1";
import { SecondSlide } from "../pages/introSlides/slide2";
import { ThirdSlide } from "../pages/introSlides/slide3";
import { Login } from "../pages/login/login";
import SearchProduct from "../component/search/search";
import wishList from "../pages/wishlist/wishlistPage";
import home from "../pages/Home/home";
import addidas from "../pages/filterProduct/adidas";
import Nike from "../pages/filterProduct/nike";
import Puma from "../pages/filterProduct/puma";
import Reebok from "../pages/filterProduct/reebok";
import Newbalance from "../pages/filterProduct/newbalance";
import Asics from "../pages/filterProduct/asics";
import Converse from "../pages/filterProduct/converse";
import productsData from "../api/productData";



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
        changePages(home);
        changePages2(home);
    })
    .on("/search", ()=>{
        changePages2(SearchProduct);
    })
    .on("/wishlist", ()=>{
        changePages2(wishList);
    })
    .on("/adidas", ()=>{
        changePages2(addidas);
    })
    .on("/nike", ()=>{
        changePages2(Nike);
    })
    .on("/puma", ()=>{
        changePages2(Puma);
    })
    .on("/reebok", ()=>{
        changePages2(Reebok);
    })
    .on("/newbalance", ()=>{
        changePages2(Newbalance);
    })
    .on("/asics", ()=>{
        changePages2(Asics);
    })
    .on("/converse", ()=>{
        changePages2(Converse);
    })
    .on("/Products", ()=>{
        changePages2(productsData);
    })
    .on("/Products/:brands", (params)=>{
        changePages2(productsData, params);
    })
    
