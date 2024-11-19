import './index.css';
import 'flowbite';
import { App } from "./App"
import { router } from "./routers/router";



const root = document.getElementById("app");
root.appendChild(App());
router.resolve();



