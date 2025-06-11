// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

const logo = document.getElementById("logo-img");
logo.src = siteContent.images["logo-img"];


//NAV bölümü

const navLinks = document.querySelectorAll("nav a");
const navValues = Object.values(siteContent.nav);

navLinks.forEach((link, index) => {
  link.textContent = navValues[index];
  link.classList.add("italic"); // İpuçlarında bu sınıfın beklendiğini söylediler
});

// CTA bölümü

const ctaHeader = document.querySelector(".cta h1");
ctaHeader.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent.cta.button;

const ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent.images["cta-img"];

// top content

const topContentHeadings = document.querySelectorAll(".top-content .text-content h4");
const topContentParagraphs = document.querySelectorAll(".top-content .text-content p");

topContentHeadings[0].textContent = siteContent["top-content"]["left-h4"];
topContentParagraphs[0].textContent = siteContent["top-content"]["left-content"];

topContentHeadings[1].textContent = siteContent["top-content"]["right-h4"];
topContentParagraphs[1].textContent = siteContent["top-content"]["right-content"];

// middle IMG

const middleImage = document.getElementById("middle-img");
middleImage.src = siteContent.images["accent-img"];

//bottom content

const bottomContentHeadings = document.querySelectorAll(".bottom-content .text-content h4");
const bottomContentParagraphs = document.querySelectorAll(".bottom-content .text-content p");

bottomContentHeadings[0].textContent = siteContent["bottom-content"]["left-h4"];
bottomContentParagraphs[0].textContent = siteContent["bottom-content"]["left-content"];

bottomContentHeadings[1].textContent = siteContent["bottom-content"]["middle-h4"];
bottomContentParagraphs[1].textContent = siteContent["bottom-content"]["middle-content"];

bottomContentHeadings[2].textContent = siteContent["bottom-content"]["right-h4"];
bottomContentParagraphs[2].textContent = siteContent["bottom-content"]["right-content"];


// contact

const contactSection = document.querySelector(".contact");

const contactHeading = contactSection.querySelector("h4");
contactHeading.textContent = siteContent.contact["contact-h4"];

const contactParagraphs = contactSection.querySelectorAll("p");
contactParagraphs[0].textContent = siteContent.contact.address;
contactParagraphs[1].textContent = siteContent.contact.phone;
contactParagraphs[2].textContent = siteContent.contact.email;

// footer
const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add("bold"); 


