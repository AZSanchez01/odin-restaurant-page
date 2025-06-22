import { Restaurantpage } from "./entry.js";
import heroBottleImg from "./img/happy-new-year-bottle-drink-illustration.png";
import {Menupage} from "./menu.js";

export class Homepage {
    static loadHomepage() {
        const content = document.getElementById("content");
        const heroSection = document.createElement("div");
        const heroTextSection = Homepage.#createHeroTextSection();
        const img = Homepage.#createHeroImg();

        heroSection.classList.add("hero-section");
        heroSection.appendChild(heroTextSection);
        heroSection.appendChild(img);

        content.appendChild(heroSection);
    }
    static #createHeroTextSection() {
        const heroTextSection = document.createElement("div");
        heroTextSection.classList.add("section-text");

        const heroHeader = Homepage.#createHeroTextHeader();
        const heroDesc = Homepage.#createHeroTextDesc();
        const checkMenuBtn = Homepage.#createCheckMenuBtn();

        heroTextSection.appendChild(heroHeader);
        heroTextSection.appendChild(heroDesc);
        heroTextSection.appendChild(checkMenuBtn);
        return heroTextSection;
    }
    static #createHeroTextHeader() {
        const headerText = "ShotPuno mo na iyan!";
        const header = document.createElement("div");
        header.classList.add("header-text");
        header.textContent = headerText;
        return header;
    }
    static #createHeroTextDesc() {
        const textDesc = "Nais mo bang magpakalasing dahil wala na siya? Nawala ang mga araw, anak, at bahay niyong pinaplano? Ibuhos mo na sa iyong lalamunan.";
        const desc = document.createElement("div");
        desc.classList.add("text");
        desc.textContent = textDesc;
        return desc;
    }
    static #createCheckMenuBtn() {
        const button = document.createElement("button");
        button.textContent = "Check Menu";
        button.addEventListener("click", () => {
            Restaurantpage.removeContent();
            Menupage.loadMenupage();
        });
        return button;
    }
    static #createHeroImg() {
        const image = document.createElement("img");
        image.src = heroBottleImg;
        image.alt = "Alcohol icon";
        return image;
    }
}
