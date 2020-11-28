const body = document.querySelector("body");

//função que adiciona a classe mobile ou desktop dependendo do tamanho da tela
function checagem() {
  const body = document.querySelector("body");
  if (window.innerWidth >= 1000) {
    body.classList.add("desktop");
    body.classList.remove("mobile");
  } else {
    body.classList.add("mobile");
    body.classList.remove("desktop");
  }
}
checagem();

//mesma funçao de checagem só que no resize
function resize() {
  if (window.innerWidth >= 1000) {
    body.classList.add("desktop");
    body.classList.remove("mobile");
  } else {
    body.classList.add("mobile");
    body.classList.remove("desktop");
  }
}

//abre menu mobile
function ativaMenu() {
  const menuMobile = document.querySelector(".menu-mobile");
  const linksMenu = document.querySelector(".bg-menu-mobile");
  if (!menuMobile.classList.contains("menu-open")) {
    menuMobile.classList.add("menu-open");
  } else if (menuMobile.classList.contains("menu-open")) {
    linksMenu.setAttribute("style", "animation: sobeMenu 300ms both ease-out;");
    setTimeout(() => {
      menuMobile.classList.remove("menu-open");
      linksMenu.removeAttribute("style", "animation");
    }, 300);
  }
}

//preenchimento do menu ao rolar o scrool
function menuPreenchido() {
  const menuFixo = document.querySelectorAll(".fixed-top");
  menuFixo.forEach((i) => {
    if (window.pageYOffset >= 100) {
      body.classList.add("ativoScrool");
      i.setAttribute("style", "background-color: white;");
    } else if (window.pageYOffset < 100) {
      i.removeAttribute("style", "background-color");
      body.classList.remove("ativoScrool");
    }
  });
}
menuPreenchido();

//animação ao scrool TITULOS
const sections = document.querySelectorAll(".js-scroll");
function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < 380) {
      section.classList.add("passou");
    }
  });
}

//animação cards do bloco-2
const containerCards = document.querySelector(".bloco-2");
function animaCards() {
  const cardsTop = containerCards.getBoundingClientRect().top;
  console.log(cardsTop);
  if (cardsTop < 100) {
    containerCards.classList.add("anima-cards");
  }
}

//função pra adiconar o value do dropdown
function dropdownValue(event) {
  event.preventDefault();
  var botoes = document
    .querySelectorAll(".dropdown-menu button")
    .forEach((button) => {
      button.classList.remove("active");
    });
  const button = event.currentTarget;
  button.classList.add("active");
  const input = document.querySelector('[name="experiencia"]');
  input.value = button.dataset.value;
  console.log(button);
}

//carrousel slick
$(".cards-depoimentos").slick({
  centerMode: true,
  infinite: true,
  arrows: true,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        infinite: true,
        arrows: true,
        centerPadding: "50px",
        slidesToShow: 2,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 993,
      settings: {
        centerMode: true,
        centerPadding: "120px",
        slidesToShow: 1,
        slidesToScroll: 5,
      },
    },

    {
      breakpoint: 768,
      settings: {
        infinite: false,
        arrows: false,
        centerMode: true,
        centerPadding: "70px",
        slidesToShow: 1,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 461,
      settings: {
        infinite: false,
        arrows: false,
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 330,
      settings: {
        infinite: false,
        arrows: false,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
      },
    },
  ],
});

//eventos pilimpimpim
window.addEventListener("resize", resize);
window.addEventListener("scroll", menuPreenchido);
window.addEventListener("scroll", animaScroll);
window.addEventListener("scroll", animaCards);
