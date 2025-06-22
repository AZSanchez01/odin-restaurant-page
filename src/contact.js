import catContact from "./img/cat-contact.jpg";

export class Contactpage {
    static loadContactpage() {
        const content = document.getElementById("content");
        const contact = document.createElement("div");
        contact.id = "contact";

        const img = Contactpage.#createContactImg();
        const contactForm = Contactpage.#createContactForm();

        contact.appendChild(img);
        contact.appendChild(contactForm);
        content.appendChild(contact);
    }
    static #createContactForm() {
        const contactForm = document.createElement("div");
        contactForm.classList.add("contact-form");

        const contactHeader = Contactpage.#createContactFormHeader();
        const contactDetails = Contactpage.#createContactDetails();

        contactForm.appendChild(contactHeader);
        contactForm.appendChild(contactDetails);
        return contactForm;
    }
    static #createContactFormHeader() {
        const contactHeader = document.createElement("div");
        contactHeader.classList.add("header-text");
        contactHeader.textContent = "First Chat ka na!";
        return contactHeader;
    }
    static #createContactDetails() {
        const contactDetails = document.createElement("div");
        contactDetails.classList.add("contact-details");

        const detailsObj = {
            "E-mail": "nakatinginsasalamin@nag-iisa.com",
            "Phone No": "(143) M155-N4-71T4",
            "Based in": "Bahay na pinaplano natin sana kaso iniwan moko kaya Beato Angelico nalang hehe",
        };
        for (const prop in detailsObj) {
            const label = document.createElement("div");
            label.classList.add("contact-label");
            const info = document.createElement("div");
            info.classList.add("contact-info");

            label.textContent = prop + ':';
            info.textContent = detailsObj[prop];

            contactDetails.appendChild(label);
            contactDetails.appendChild(info);
        }
        return contactDetails;
    }
    static #createContactImg() {
        const image = document.createElement("img");
        image.src = catContact;
        image.alt = "Pusang gusto kitang ma-chat muli";
        return image;
    }
}