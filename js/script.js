//
const cards = [
  {
    id: 1,
    img: "./assets/img/hommes/italy1.webp",
    img2: "./assets/img/hommes/italy2.webp",
    title: "Italy",
    price: 79.99,
    category: "hommes",
  },
  {
    id: 2,
    img: "./assets/img/hommes/france1.webp",
    img2: "./assets/img/hommes/france2.webp",
    title: "France",
    price: 89.99,
    category: "hommes",
  },
  {
    id: 3,
    img: "./assets/img/hommes/juve1.webp",
    img2: "./assets/img/hommes/juve2.webp",
    title: "Juventus",
    price: 69.99,
    category: "hommes",
  },
  {
    id: 4,
    img: "./assets/img/hommes/psg1.webp",
    img2: "./assets/img/hommes/psg2.webp",
    title: "PSG",
    price: 79.99,
    category: "hommes",
  },
  {
    id: 5,
    img: "./assets/img/femmes/england1.webp",
    img2: "./assets/img/femmes/england2.webp",
    title: "England",
    price: 49.99,
    category: "femmes",
  },
  {
    id: 6,
    img: "./assets/img/femmes/germany1.webp",
    img2: "./assets/img/femmes/germany2.webp",
    title: "Germany",
    price: 49.99,
    category: "femmes",
  },
  {
    id: 7,
    img: "./assets/img/femmes/spain1.webp",
    img2: "./assets/img/femmes/spain2.webp",
    title: "Spain",
    price: 49.99,
    category: "femmes",
  },
  {
    id: 8,
    img: "./assets/img/femmes/sweden1.webp",
    img2: "./assets/img/femmes/sweden2.webp",
    title: "Sweden",
    price: 49.99,
    category: "femmes",
  },
  {
    id: 9,
    img: "./assets/img/enfants/real1.webp",
    img2: "./assets/img/femmes/real2.webp",
    title: "Real Madrid",
    price: 9.99,
    category: "enfants",
  },
  {
    id: 10,
    img: "./assets/img/enfants/chelsea1.webp",
    img2: "./assets/img/femmes/chelsea2.webp",
    title: "Chelsea",
    price: 9.99,
    category: "enfants",
  },
  {
    id: 11,
    img: "./assets/img/enfants/inter1.webp",
    img2: "./assets/img/femmes/inter2.webp",
    title: "Inter Milan",
    price: 9.99,
    category: "enfants",
  },
  {
    id: 12,
    img: "./assets/img/enfants/milan1.webp",
    img2: "./assets/img/femmes/milan2.webp",
    title: "AC Milan",
    price: 9.99,
    category: "enfants",
  },
  {
    id: 13,
    img: "./assets/img/nouveaute/veste_mu1.webp",
    img2: "./assets/img/femmes/veste_mu2.webp",
    title: "Manchester United (veste)",
    price: 99.99,
    category: "nouveauté",
  },
  {
    id: 14,
    img: "./assets/img/nouveaute/sweat_mc1.webp",
    img2: "./assets/img/femmes/sweat_mc2.webp",
    title: "Manchester City (sweat)",
    price: 99.99,
    category: "nouveauté",
  },
  {
    id: 15,
    img: "./assets/img/nouveaute/pantalon_mc1.webp",
    img2: "./assets/img/femmes/pantalon_mc2.webp",
    title: "Manchester City (pantalon)",
    price: 99.99,
    category: "nouveauté",
  },
  {
    id: 16,
    img: "./assets/img/nouveaute/veste_italy1.webp",
    img2: "./assets/img/femmes/veste_italy2.webp",
    title: "Italy",
    price: 99.99,
    category: "nouveauté",
  },
  {
    id: 17,
    img: "./assets/img/promos/om1.jpeg",
    img2: "./assets/img/femmes/om2.jpeg",
    title: "Unknown",
    price: 99.99,
    category: "promos",
  },
  {
    id: 18,
    img: "./assets/img/promos/om_veste1.jpeg",
    img2: "./assets/img/femmes/om_veste2.jpeg",
    title: "Unknown",
    price: 99.99,
    newPrice: 79.99,
    category: "promos",
  },
  {
    id: 19,
    img: "./assets/img/promos/om_rouge1.jpeg",
    img2: "./assets/img/femmes/om_rouge2.jpeg",
    title: "Unknown",
    price: 99.99,
    newPrice: 79.99,
    category: "promos",
  },
  {
    id: 20,
    img: "./assets/img/promos/om_tshirt1.jpeg",
    img2: "./assets/img/femmes/om_tshirt2.jpeg",
    title: "Unknown",
    price: 99.99,
    newPrice: 79.99,
    category: "promos",
  },
];
const main = document.querySelector("main");
const title = ["hommes", "femmes", "enfants", "nouveauté", "promos"];

let content = "";
title.forEach((item) => {
  content += `<h2 id="${item}">${item}</h2><section>`;
  cards.forEach((item2) => {
    if (item === item2.category) {
      content += `
        <article>
          <figure>
            <img src="${item2.img}" alt="">
            <figcaption>${item2.title}</figcaption>
            <figcaption>€ ${item2.price}<a class="shopping"><p><i class="fa-solid fa-cart-shopping shopping"></i></p></a></figcaption>
          </figure>
        </article>`;
    }
  });
  content += "</section>";
});

main.innerHTML = content;
