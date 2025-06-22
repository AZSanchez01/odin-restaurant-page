import beer from "./img/cat-alcohol.jpg";
import matcha from "./img/matcha.jpg";
import kaldero from "./img/kaldero.jpg";

export class Menupage {
    static loadMenupage() {
        const content = document.getElementById("content");
        const menu = document.createElement("div");
        menu.id = "food-menu";

        const menuHeader = Menupage.#createMenuTitle();
        const cardsList = Menupage.#createCardList();

        menu.appendChild(menuHeader);
        menu.appendChild(cardsList);
        content.appendChild(menu);
    }
    static #createMenuTitle() {
        const menuTitleSection = document.createElement("div");
        menuTitleSection.classList.add("menu-title");

        const menuTitle = document.createElement("div");
        menuTitle.classList.add("header-text");
        const menuSubtitle = document.createElement("div");
        menuSubtitle.classList.add("subtitle");

        menuTitle.textContent = "Ano ba talaga mas gusto mo?";
        menuSubtitle.textContent = "Ang Beer na ito o ang Pag-ibig mo?";

        menuTitleSection.appendChild(menuTitle);
        menuTitleSection.appendChild(menuSubtitle);
        return menuTitleSection;
    }
    static #createCardList() {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("cards-container");

        const card1 = {
            imgVar: beer,
            altText: "cat next to an alcohol bottle",
            headerText: "Beer | 1$",
            contentText: "Bawat patak. Anong sarap. Nakatanim pa rin ang gumamelang binalik niya sa iyo. Katulad ng damdamin mo — kahit buhusan mo ng beer, ayaw pang mamatay.",
        }
        const card2 = {
            imgVar: matcha,
            altText: "matcha drink",
            headerText: "Matcha | 4$",
            contentText: "Aba aba aba marupok. Kahit ayaw mo yung lasa, binili mo pa rin dahil ito favourite niya. Mag ukay-ukay. Mag art pop-up. Mag matcha. Bilhin at gawin lahat ng mga paboritong bagay niya — para lang maaalalahanin lahat ng iyong nawala.",
        }
        const card3 = {
            imgVar: kaldero,
            altText: "Rice cooker with fumes",
            headerText: "Kaldero w/ beer | 3$",
            contentText: "Putangina ginawang shisha ang kaldero. Gusto mong magpakasabog dahil olats ka. Kuha ka ng beer at langhapin mo ang usok nito — gawin mo lahat para lang di mo isiping nag-iisa ka.",
        }

        const cardObjs = [card1, card2, card3];

        for (const cardObj of cardObjs) {
            const card = Menupage.#createCard(cardObj.imgVar, cardObj.altText, cardObj.headerText, cardObj.contentText);
            cardContainer.appendChild(card);
        }
        return cardContainer;
    }
    static #createCard(imgVar, altText, headerText, contentText) {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        const header = document.createElement("div");
        const content = document.createElement("div");
        header.classList.add("header-text");
        content.classList.add("text");

        image.src = imgVar;
        image.alt = altText;
        header.textContent = headerText;
        content.textContent = contentText;

        card.appendChild(image);
        card.appendChild(header);
        card.appendChild(content);
        return card;
    }
}