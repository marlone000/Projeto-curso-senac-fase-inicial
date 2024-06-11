//part menu responsivo
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

// Parte da image 

const slider = 
   document.querySelector('.image-slider');
const arrLeft = 
   document.querySelector('.seta-esquerda');
const arrRight =
   document.querySelector('.seta-direita');
const heading = 
   document.querySelector('.rubrica h1');
const description = 
   document.querySelector('.rubrica p');
   
   //    variação image 

const images = ["./IMG/evangeliom.jpg", "./IMG/tokyo_revengers.jpg", "./IMG/tokyoghoul.jpg"];
   
const headings = ["Evangelion", "Tokyo Revengers", "Tokyo Ghoul"
  
]; 

const descriptions = ["Evangelion é um anime muito cativante que te prende em um universo totalmente oposto de nossas realidades", "Tokyo Revengers mostra a dualidade do protagonista seu lado emotivo e suas atitutes de ajudar a todos de forma racional sem pensar em si mesmo" , "Tokyo Ghoul esse protagonista sofre um acidente e colocaram um orgão da assassina nele isso mudou a sua vida para sempre"
]; 

// id do slider 

let id = 0; 

// função do slider 

function slide(id) {
    slider.style.backgroundImage = `url(${images[id]})`;
    slider.classList.add('image-fade');
    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);
    heading.innerText = headings[id];
    description.innerText = descriptions[id];
}
// adiciona um evento de clique a seta para esquerda
arrLeft.addEventListener('click', () => {

    // diminue id da image 
    id--; 
    /* verifica se o id é menor que o numero de 
    slides disponiveis */
    if(id < 0) {
        // altera a ultima imagem
        id = images.length - 1; 
    }
    // executa a função deslizante
    slide(id);
});

// adiciona um evento de clicar na seta da direita 
arrRight.addEventListener('click', () => {

    // incrementar image ao id 
    id++;

    //verifique se o id é maior que o numero disponivel no slide
    
    if (id > images.length - 1) {
        // muda para primeira image 

        id = 0;
    } 
    // execute a função do slide 
    slide(id);
});

