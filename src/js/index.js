import "../scss/index.scss";
import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

// Создание элементов brands
let brandsSlides = document.getElementById("brandsSlides");
let kindSlides = document.getElementById("kindSlides");

for (let i = 1; i < 13; i++) {
  var slideBox = document.createElement("div");
  var slideInBox = document.createElement("div");
  var imgLogo = document.createElement("img");
  var imgGo = document.createElement("img");
  var aGo = document.createElement("a");

  imgGo.src = "./img/logo_brands/go.svg";
  aGo.href = "#";
  aGo.classList = "brand-box__item";
  imgLogo.src = `./img/logo_brands/${i}.svg`;

  aGo.appendChild(imgGo);
  slideInBox.appendChild(imgLogo);
  slideInBox.appendChild(aGo);
  slideInBox.classList = "brand-inbox";
  slideBox.appendChild(slideInBox);

  slideBox.classList = "swiper-slide brand-box";
  brandsSlides.appendChild(slideBox);
}

let services = [
  { name: "Диагностика", price: "Бесплатно", time: "30 мин" },
  { name: "Замена дисплея", price: "1000 р", time: "30 - 120 мин" },
  {
    name: "Замена полифонического динамика",
    price: "1000 р",
    time: "30 - 120 мин",
  },
  {
    name: "Тестирование с выдачей технического заключения",
    price: "1000 р",
    time: "30 - 120 мин",
  },
  {
    name: "Замена программного обеспечение",
    price: "1000 р",
    time: "30 - 120 мин",
  },
];
let priceSlides = document.getElementById("priceSlides");
services.forEach((i) => {
  priceSlides.innerHTML += `<div class="swiper-slide priceBox">
  <div class="priceBox__priceInBox">
    <div class="priceBox__titles">Ремонтные услуги</div>
    <div class="price__width_50">${i.name}</div>
    <div class="priceBox__titles">Цена</div>
    <div class="price__width_20">${i.price}</div>
    <div class="priceBox__titles">Срок</div>
    <div class="price__width_20">${i.time}</div>
    <a href="" class="priceBox__button"><img  src="./img/order.svg" alt="" /></a>
  </div>
</div>`;
});

// Роспазнание слайдов swipper
var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",

  slidesPerView: "auto",
  spaceBetween: 15,
  // loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Показать еще
let brandBox = document.querySelectorAll(".brand-box");
let kindsBoxses = document.querySelectorAll(".kinds-box");
let priceBox = document.querySelectorAll(".priceBox");

function resetBrandBoxsDisplayToBlock() {
  brandBox.forEach((i) => {
    i.style.display = "block";
  });
}
function resetKindsBoxDisplayToBlock() {
  kindsBoxses.forEach((i) => {
    i.style.display = "block";
  });
}

let brandsExpandImg = document.getElementById("brands__expand-img ");
let brandsExpandSpan = document.getElementById("brands__expand-span");
let brandsExpand = document.getElementById("brands__expand");

brandsExpand.onclick = () => {
  event.preventDefault();
  if (!brandsExpand.showMore) {
    brandsExpandImg.src = "./img/logo_brands/expand_less.svg";
    brandsExpandSpan.innerHTML = "Скрыть";
    brandsExpand.showMore = true;
    resetBrandBoxsDisplayToBlock();
  } else {
    brandsExpandImg.src = "./img/logo_brands/expand_more.svg";
    brandsExpandSpan.innerHTML = "Показать еще";

    brandsExpand.showMore = false;
    contentControl();
  }
};

let kindsExpandImg = document.getElementById("kinds__expand-img ");
let kindsExpandSpan = document.getElementById("kinds__expand-span");
let kindsExpand = document.getElementById("kinds__expand");

kindsExpand.onclick = () => {
  event.preventDefault();
  if (!kindsExpand.showMore) {
    kindsExpandImg.src = "./img/logo_brands/expand_less.svg";
    kindsExpandSpan.innerHTML = "Скрыть";
    kindsExpand.showMore = true;
    resetKindsBoxDisplayToBlock();
  } else {
    kindsExpandImg.src = "./img/logo_brands/expand_more.svg";
    kindsExpandSpan.innerHTML = "Показать еще";

    kindsExpand.showMore = false;
    contentControl();
  }
};

let contExpandImg = document.getElementById("contExpand__img");
let contExpandSpan = document.getElementById("contExpand__span");
let contExpand = document.getElementById("contExpand");
let contText = document.getElementById("contText");

contExpand.onclick = () => {
  event.preventDefault();
  if (!contExpand.showMore) {
    contText.innerHTML =
      "Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.";
    contExpandImg.src = "./img/logo_brands/expand_less.svg";
    contExpandSpan.innerHTML = "Скрыть";
    contExpand.showMore = true;
  } else {
    contText.innerHTML =
      "Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.";
    contExpandImg.src = "./img/logo_brands/expand_more.svg";
    contExpandSpan.innerHTML = "Показать еще";

    contExpand.showMore = false;
  }
};

// Контрол отображение брендов
let tablet = window.matchMedia("(min-width: 769px) and (max-width: 1120px)");
let desktop = window.matchMedia("(min-width: 1121px)");
let mobile = window.matchMedia("(max-width: 768px)");

tablet.addListener(contentControl);
desktop.addListener(contentControl);
mobile.addListener(contentControl);

function contentControl(a) {
  if (!a) {
    if (tablet.matches) {
      contentControl(tablet);
    }
    if (desktop.matches) {
      contentControl(desktop);
    }
    if (mobile.matches) {
      contentControl(mobile);
    }
  }

  if (a && a.matches) {
    resetBrandBoxsDisplayToBlock();
    resetKindsBoxDisplayToBlock();
    if (!mobile.matches) {
      kindSlides.classList = "slides";
      brandsSlides.classList = "slides";
      priceSlides.classList = "price__table ";

      brandBox.forEach((i) => {
        i.style.width = "240px";
        i.classList = "brand-box";
      });
      kindsBoxses.forEach((i) => {
        i.style.width = "240px";
        i.classList = "kinds-box";
      });
      priceBox.forEach((i) => {
        i.style.width = "100%";
        i.classList = "priceBox";
      });
    }
    switch (a.media) {
      case "(max-width: 768px)": //mobile
        brandsSlides.classList = "swiper-wrapper slides";
        kindSlides.classList = "swiper-wrapper slides";
        priceSlides.classList = "swiper-wrapper slides";

        brandBox.forEach((i) => {
          i.classList = "swiper-slide brand-box";
        });
        kindsBoxses.forEach((i) => {
          i.classList = "swiper-slide kinds-box";
        });
        priceBox.forEach((i) => {
          i.classList = "swiper-slide priceBox";
          i.style.width = "260px";
        });

        break;

      case "(max-width: 1120px) and (min-width: 769px)": //tablet
        if (!brandsExpand.showMore) {
          for (let i = 6; i < brandBox.length; i++) {
            brandBox[i].style.display = "none";
          }
        }
        if (!kindsExpand.showMore) {
          for (let i = 3; i < kindsBoxses.length; i++) {
            kindsBoxses[i].style.display = "none";
          }
        }

        break;
      case "(min-width: 1121px)": //desktop
        if (!brandsExpand.showMore) {
          for (let i = 8; i < brandBox.length; i++) {
            brandBox[i].style.display = "none";
          }
        }
        if (!kindsExpand.showMore) {
          for (let i = 4; i < kindsBoxses.length; i++) {
            kindsBoxses[i].style.display = "none";
          }
        }

        break;
    }
  }
}

contentControl();

let call = document.querySelectorAll(".callBack");
let feed = document.querySelectorAll(".feedBack");
let close = document.querySelectorAll(".modal__close");
let mainMenu = document.getElementById("mainMenu");
let blinds = document.querySelector(".blinds");
let modalCall = document.querySelector(".modal-call");
let modalFeedBack = document.querySelector(".modal-feedback");

document.getElementById("mainMenu_on").onclick = function () {
  mainMenu.style.left = "0";
  mainMenu.overflow = "auto";
  blinds.style.display = "block";
  setTimeout(() => {
    blinds.style.opacity = "0.96";
  }, 1);

  document.body.style.overflow = "hidden";
};

document.getElementById("mainMenu_off").onclick = function () {
  mainMenu.style.left = "-400px";

  blinds.style.opacity = "0";
  setTimeout(() => {
    blinds.style.display = "none";
  }, 300);
  document.body.style.overflow = "visible";
};

call.forEach((i) => {
  i.onclick = () => {
    modallOn("call");
  };
});

feed.forEach((i) => {
  i.onclick = () => {
    modallOn("feed");
  };
});

close.forEach((i) => {
  i.onclick = () => {
    modallOff();
  };
});

blinds.onclick = (a) => {
  modallOff();
};

function modallOff() {
  mainMenu.style.left = "-400px";
  blinds.style.opacity = "0";
  modalCall.style.right = "-500px";
  modalFeedBack.style.right = "-500px";
  document.body.style.overflow = "visible";

  setTimeout(() => {
    blinds.style.display = "none";
    modalCall.style.display = "none";
    modalFeedBack.style.display = "none";
  }, 300);
}

function modallOn(a) {
  document.body.style.overflow = "hidden";

  blinds.style.display = "block";
  setTimeout(() => {
    blinds.style.opacity = "0.96";
  }, 1);
  mainMenu.style.left = "-400px";
  if (a === "call") {
    modalCall.style.display = "block";

    setTimeout(() => {
      modalCall.style.right = "0";
    }, 1);
  }
  if (a == "feed") {
    modalFeedBack.style.display = "block";
    setTimeout(() => {
      modalFeedBack.style.right = "0";
    }, 1);
  }
}
