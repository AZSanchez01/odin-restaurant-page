import "./style.css";
import {Homepage} from "./home.js";
import {Contactpage} from "./contact.js";
import {Menupage} from "./menu.js";

export class Restaurantpage {
    content = document.getElementById("contact");
    static init() {
        Restaurantpage.removeContent();
        Homepage.loadHomepage();

        Restaurantpage.#addBtnPageLoaders();
    }
    static #addBtnPageLoaders() {
        const homeBtn = document.getElementById("homeBtn");
        const menuBtn = document.getElementById("menuBtn");
        const contactBtn = document.getElementById("contactBtn");

        homeBtn.addEventListener("click", () => {
            Restaurantpage.removeContent();
            Homepage.loadHomepage();
        });
        menuBtn.addEventListener("click", () => {
            Restaurantpage.removeContent();
            Menupage.loadMenupage();
        });
        contactBtn.addEventListener("click", () => {
            Restaurantpage.removeContent();
            Contactpage.loadContactpage();
        });
    }
    static removeContent() {
        while(content.lastChild){
            content.removeChild(content.lastChild);
        }
    }
}
Restaurantpage.init();