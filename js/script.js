const section = [
  {
    title: "Hommes",
    articles: [
      {
        id: 1,
        img: "./assets/img/hommes/italy1.webp",
        title: "Italy",
        price: 79.99,
        category: "hommes",
      },
      {
        id: 2,
        img: "./assets/img/hommes/france1.webp",
        title: "France",
        price: 89.99,
        category: "hommes",
      },
      {
        id: 3,
        img: "./assets/img/hommes/juve1.webp",
        title: "Juventus",
        price: 69.99,
        category: "hommes",
      },
      {
        id: 4,
        img: "./assets/img/hommes/psg1.webp",
        title: "PSG",
        price: 79.99,
        category: "hommes",
      },
    ],
  },
  {
    title: "Femmes",
    articles: [
      {
        id: 5,
        img: "./assets/img/femmes/england1.webp",
        title: "England",
        price: 49.99,
        category: "femmes",
      },
      {
        id: 6,
        img: "./assets/img/femmes/germany1.webp",
        title: "Germany",
        price: 49.99,
        category: "femmes",
      },
      {
        id: 7,
        img: "./assets/img/femmes/spain1.webp",
        title: "Spain",
        price: 49.99,
        category: "femmes",
      },
      {
        id: 8,
        img: "./assets/img/femmes/sweden1.webp",
        title: "Sweden",
        price: 49.99,
        category: "femmes",
      },
    ],
  },
  {
    title: "Enfants",
    articles: [
      {
        id: 9,
        img: "./assets/img/enfants/real1.webp",
        title: "Real Madrid",
        price: 9.99,
        category: "enfants",
      },
      {
        id: 10,
        img: "./assets/img/enfants/chelsea1.webp",
        title: "Chelsea",
        price: 9.99,
        category: "enfants",
      },
      {
        id: 11,
        img: "./assets/img/enfants/inter1.webp",
        title: "Inter Milan",
        price: 9.99,
        category: "enfants",
      },
      {
        id: 12,
        img: "./assets/img/enfants/milan1.webp",
        title: "AC Milan",
        price: 9.99,
        category: "enfants",
      },
    ],
  },
  {
    title: "Nouveaute",
    articles: [
      {
        id: 13,
        img: "./assets/img/nouveaute/veste_mu1.webp",
        title: "Manchester United (veste)",
        price: 99.99,
        category: "nouveaute",
      },
      {
        id: 14,
        img: "./assets/img/nouveaute/sweat_mc1.webp",
        title: "Manchester City (sweat)",
        price: 99.99,
        category: "nouveaute",
      },
      {
        id: 15,
        img: "./assets/img/nouveaute/pantalon_mc1.webp",
        title: "Manchester City (pantalon)",
        price: 99.99,
        category: "nouveaute",
      },
      {
        id: 16,
        img: "./assets/img/nouveaute/veste_italy1.webp",
        title: "Italy",
        price: 99.99,
        category: "nouveaute",
      },
    ],
  },
  {
    title: "Promos",
    articles: [
      {
        id: 17,
        img: "./assets/img/promos/om1.jpeg",
        title: "Unknown",
        price: 99.99,
        category: "promos",
      },
      {
        id: 18,
        img: "./assets/img/promos/om_veste1.jpeg",
        title: "Unknown",
        price: 99.99,
        newPrice: 79.99,
        category: "promos",
      },
      {
        id: 19,
        img: "./assets/img/promos/om_rouge1.jpeg",
        title: "Unknown",
        price: 99.99,
        newPrice: 79.99,
        category: "promos",
      },
      {
        id: 20,
        img: "./assets/img/promos/om_tshirt1.jpeg",
        title: "Unknown",
        price: 99.99,
        newPrice: 79.99,
        category: "promos",
      },
    ],
  },
];

for (let i = 0; i < section.length; i++) {
  let main = document.querySelector("main");
  let div = document.createElement("section");
  let h2 = document.createElement("h2");
  main.append(div);
  h2.textContent = section[i].title;
  h2.id = section[i].title;
  div.append(h2);
  for (let j = 0; j < section[i].articles.length; j++) {
    let article = document.createElement("article");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let title = document.createElement("figcaption");
    let price = document.createElement("figcaption");
    img.src = section[i].articles[j].img;
    title.textContent = section[i].articles[j].title;
    price.innerHTML =
      "€" +
      section[i].articles[j].price +
      `<a class="shopping"><p><i class="fa-solid fa-cart-shopping shopping"></i></p></a>`;
    div.append(article);
    article.append(figure);
    figure.append(img);
    figure.append(title);
    figure.append(price);
  }
}

let shopping = document.querySelectorAll(".shopping");
