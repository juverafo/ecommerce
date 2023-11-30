//
const cards = [
  {
    id: 1,
    img: "./assets/img/hommes/italy1.png",
    img2: "./assets/img/hommes/italy2.png",
    title: "Italy",
    price: 79.99,
    category: "hommes",
  },
  {
    id: 2,
    img: "./assets/img/hommes/france1.png",
    img2: "./assets/img/hommes/france2.png",
    title: "France",
    price: 89.99,
    category: "hommes",
  },
  {
    id: 3,
    img: "./assets/img/hommes/juve1.png",
    img2: "./assets/img/hommes/juve2.png",
    title: "Juventus",
    price: 69.99,
    category: "hommes",
  },
  {
    id: 4,
    img: "./assets/img/hommes/psg1.png",
    img2: "./assets/img/hommes/psg2.png",
    title: "PSG",
    price: 79.99,
    category: "hommes",
  },
  {
    id: 5,
    img: "./assets/img/femmes/england1.png",
    img2: "./assets/img/femmes/england2.png",
    title: "England",
    price: 49.99,
    category: "femmes",
  },
  {
    id: 6,
    img: "./assets/img/femmes/germany1.png",
    img2: "./assets/img/femmes/germany2.png",
    title: "Germany",
    price: 49.99,
    category: "femmes",
  },
  {
    id: 7,
    img: "./assets/img/femmes/spain1.png",
    img2: "./assets/img/femmes/spain2.png",
    title: "Spain",
    price: 49.99,
    category: "femmes",
  },
  {
    id: 8,
    img: "./assets/img/femmes/sweden1.png",
    img2: "./assets/img/femmes/sweden2.png",
    title: "Sweden",
    price: 49.99,
    category: "femmes",
  },
  {
    id: 9,
    img: "./assets/img/enfants/real1.png",
    img2: "./assets/img/femmes/real2.png",
    title: "Real Madrid",
    price: 9.99,
    category: "enfants",
  },
  {
    id: 10,
    img: "./assets/img/enfants/chelsea1.png",
    img2: "./assets/img/femmes/chelsea2.png",
    title: "Chelsea",
    price: 9.99,
    category: "enfants",
  },
  {
    id: 11,
    img: "./assets/img/enfants/inter1.png",
    img2: "./assets/img/femmes/inter2.png",
    title: "Inter Milan",
    price: 9.99,
    category: "enfants",
  },
  {
    id: 12,
    img: "./assets/img/enfants/milan1.png",
    img2: "./assets/img/femmes/milan2.png",
    title: "AC Milan",
    price: 9.99,
    category: "enfants",
  },
  {
    id: 13,
    img: "./assets/img/nouveaute/veste_mu1.png",
    img2: "./assets/img/femmes/veste_mu2.png",
    title: "Manchester United",
    price: 99.99,
    category: "nouveauté",
  },
  {
    id: 14,
    img: "./assets/img/nouveaute/sweat_mc1.png",
    img2: "./assets/img/femmes/sweat_mc2.png",
    title: "Manchester City",
    price: 99.99,
    category: "nouveauté",
  },
  {
    id: 15,
    img: "./assets/img/nouveaute/pantalon_mc1.png",
    img2: "./assets/img/femmes/pantalon_mc2.png",
    title: "Manchester City",
    price: 99.99,
    category: "nouveauté",
  },
  {
    id: 16,
    img: "./assets/img/nouveaute/veste_italy1.png",
    img2: "./assets/img/femmes/veste_italy2.png",
    title: "Italy",
    price: 99.99,
    category: "nouveauté",
  },
  {
    id: 17,
    img: "./assets/img/promos/om1.png",
    img2: "./assets/img/femmes/om2.png",
    title: "Unknown",
    price: 99.99,
    category: "promos",
  },
  {
    id: 18,
    img: "./assets/img/promos/om_veste1.png",
    img2: "./assets/img/femmes/om_veste2.png",
    title: "Unknown",
    price: 99.99,
    newPrice: 79.99,
    category: "promos",
  },
  {
    id: 19,
    img: "./assets/img/promos/om_rouge1.png",
    img2: "./assets/img/femmes/om_rouge2.png",
    title: "Unknown",
    price: 99.99,
    newPrice: 79.99,
    category: "promos",
  },
  {
    id: 20,
    img: "./assets/img/promos/om_tshirt1.png",
    img2: "./assets/img/femmes/om_tshirt2.png",
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
  content += `<h2 class="${item}"id="${item}">${item}</h2><section>`;
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

// let image = document.querySelectorAll("img");
// console.log(image);

// // image.forEach(item, function () {
// //   item.addEventListener("click", function () {
// //     item = item.img2;
// //   });
// // });

function changePicture(card) {
  card.addEventListener("mouseover", function () {
    card.style.background = "red";
  });
  card.addEventListener("mouseout", function () {
    card.style.background = "blue";
  });
}

console.log(main.addEventListener("mouseover", changePicture));

cards.forEach((card) => {
  if (card.target === cards.img) {
    changePicture(card);
  }
});

// let image = document.querySelector("img");

// // console.log(image);
// image.addEventListener("mouseover", function () {
//   this.src = "./img/image2.jpg";
// });
// image.addEventListener("mouseout", function () {
//   this.src = "./img/image1.jpg";
// });
