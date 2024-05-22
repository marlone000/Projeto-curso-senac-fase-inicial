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

const images = ["./IMG/bleach.jpg", "./IMG/jujutsu.jpg", "./IMG/HxH.jpg"];
   
const headings = ["Bleach", "Jujutsu Kaisen", "Hunter x Hunter"
  
]; 

const descriptions = ["Ichigo Kurosaki (黒崎 一護 Kurosaki Ichigo?) é um personagem fictício e protagonista da série de mangá Bleach e suas adaptações criado por Tite Kubo", 
"Jujutsu Kaisen (呪じゅ術じゅつ廻かい戦せん? tradução aproximada Batalha de Feitiçaria) é um mangá japonês escrito e ilustrado por Gege Akutami",
"Hunter X Hunter (ハンター×ハンター Hantā X Hantā?, pronúncia japonesa da expressão inglesa Hunter X Hunter,é uma série de mangá escrita e ilustrada por Yoshihiro Togashi"
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

