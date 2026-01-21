// ===== Traduções PT/EN =====

const translations = { /* mantém aqui exatamente o objeto grande pt/en que te mandei */ };
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("mero_lang", lang);
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("mero_lang") || "pt";
  setLanguage(savedLang);

  const langButtons = document.querySelectorAll(".language-switcher [data-lang]");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
});
const translations = {
  pt: {
    logo_text: "🛶 Barco Mero",
    nav_home: "Início",
    nav_tours: "Passeios",
    nav_gallery: "Galeria",
    nav_about: "Sobre",
    nav_contact: "Contato",

    hero_title: "Bem-vindo ao Barco Mero",
    hero_subtitle: "Descubra os passeios marítimos mais incríveis de Angra dos Reis",
    hero_cta: "Explore Nossos Passeios",

    tours_title: "Nossos Passeios",
    tours_subtitle: "Escolha o roteiro que melhor combina com o seu estilo de viagem e aproveite o melhor de Angra dos Reis.",

    tour1_title: "Roteiro Lagoas & História",
    tour1_duration: "Duração: 6h",
    tour1_schedule: "Saída 09h · Retorno 15h",
    tour1_description: "Roteiro ideal para quem visita Angra pela primeira vez e quer combinar paisagens marcantes, águas cristalinas e um toque de história local.",
    tour1_stops_title: "Paradas previstas",
    tour1_stop1: "Lagoa Azul do Mero – parada para banho e snorkel em águas claras.",
    tour1_stop2: "Enseada da Freguesia – visita à igrejinha histórica à beira-mar.",
    tour1_stop3: "Praia dos Pescadores – tempo livre para fotos e descanso na areia.",
    tour1_stop4: "Vila do Farol – parada opcional para almoço em restaurante à beira-mar.",
    tour1_included_title: "Incluso no passeio",
    tour1_included1: "Café da manhã leve a bordo.",
    tour1_included2: "Água mineral e refrigerantes não alcoólicos.",
    tour1_included3: "Equipamentos básicos de snorkel para uso compartilhado.",
    tour1_included4: "Coletes salva-vidas para todos os passageiros.",
    tour1_price: "Valores a partir de R$ 100,00 · Sob consulta",

    tour2_title: "Roteiro Ilhas Paradisíacas",
    tour2_duration: "Duração: 7h",
    tour2_schedule: "Saída 10h · Retorno 17h",
    tour2_description: "Para quem busca cenários de cartão-postal, água em tons de azul e verde, e paradas perfeitas para fotos e momentos inesquecíveis.",
    tour2_stops_title: "Paradas previstas",
    tour2_stop1: "Ilhas Gêmeas do Mero – parada para banho em aquário natural.",
    tour2_stop2: "Praia do Dentista do Sul – clima de ilha badalada e barcos ancorados.",
    tour2_stop3: "Praia da Sereia Azul – tempo livre para fotos e mergulho.",
    tour2_stop4: "Enseada Esmeralda – parada final para relaxar antes do retorno.",
    tour2_included_title: "Incluso no passeio",
    tour2_included1: "Welcome drink não alcoólico.",
    tour2_included2: "Frutas frescas e petiscos simples a bordo.",
    tour2_included3: "Caixa térmica com gelo para bebidas do grupo.",
    tour2_included4: "Equipamentos de snorkel para contemplação dos peixes.",
    tour2_price: "Valores a partir de R$ 000,00 · Sob consulta",

    tour3_title: "Roteiro Baía Tranquila",
    tour3_duration: "Duração: 5h",
    tour3_schedule: "Saída 08h30 · Retorno 13h30",
    tour3_description: "Indicado para famílias, grupos com crianças e quem prefere um dia mais calmo, com paradas em enseadas protegidas e águas rasas.",
    tour3_stops_title: "Paradas previstas",
    tour3_stop1: "Praia de Cataguases do Mero – primeira parada para banho em água rasa.",
    tour3_stop2: "Enseada do Sossego – tempo para descanso a bordo e fotos.",
    tour3_stop3: "Praia da Família – parada para banho mais longa e brincadeiras.",
    tour3_stop4: "Ponto de Vista Panorâmico – navegação lenta para fotos do visual da baía.",
    tour3_included_title: "Incluso no passeio",
    tour3_included1: "Água mineral à vontade.",
    tour3_included2: "Kit de frutas selecionadas.",
    tour3_included3: "Coletes infantis e adultos.",
    tour3_included4: "Apoio da tripulação durante embarque e desembarque.",
    tour3_price: "Valores a partir de R$ 000,00 · Sob consulta",

    gallery_title: "Galeria de Momentos",
    gallery_subtitle: "Descubra a beleza dos nossos passeios",
    gallery_item1: "Lagoa Azul",
    gallery_item2: "Barco Mero",
    gallery_item3: "Snorkel",
    gallery_item4: "Pôr do Sol",
    gallery_item5: "Praia Paradisíaca",
    gallery_item6: "Momentos em Grupo",

    food_title: "Comidas e Bebidas a Bordo",
    food_intro: "Para deixar a experiência ainda mais completa, disponibilizamos um cardápio exclusivo de bebidas e refeições já incluídas no pacote, pensado para até 10 pessoas, sem preocupação extra durante o passeio.",
    food_breakfast_title: "Café da Manhã a Bordo",
    food_breakfast_text: "Oferecemos um cardápio completo de café da manhã para até 10 pessoas, com opções doces e salgadas, frutas, pães, frios e bebidas quentes e geladas, para você começar o dia já curtindo o visual de Angra.",
    food_lunch_title: "Almoço com Vista para o Mar",
    food_lunch_text: "Também disponibilizamos um almoço completo para até 10 pessoas, com pratos frescos e saborosos, pensado para que a sua única preocupação seja aproveitar o passeio, as paradas para banho e as paisagens de Angra.",
    food_note: "Caso tenha alguma restrição alimentar ou preferência específfica, entre em contato para personalizar o cardápio para o seu grupo.",

    about_title: "Sobre o Barco Mero",
    about_p1: "O Barco Mero oferece passeios marítimos exclusivos em Angra dos Reis e região, com roteiros planejados para grupos de até 10 pessoas, unindo conforto, segurança e contato direto com as belezas naturais da baía.",
    about_p2: "Nossa equipe atua com foco em experiência personalizada, orientando o embarque, apoiando em cada parada e garantindo que o dia no mar seja tranquilo e memorável para todos os passageiros.",
    about_highlight1_title: "Segurança em primeiro lugar",
    about_highlight1_text: "Embarcação equipada com coletes para todos, equipamentos de apoio e tripulação treinada para conduzir o passeio com responsabilidade.",
    about_highlight2_title: "Tripulação experiente",
    about_highlight2_text: "Profissionais que conhecem bem as rotas, condições do mar e pontos mais indicados para banho, fotos e paradas de descanso.",
    about_highlight3_title: "Roteiros personalizados",
    about_highlight3_text: "Possibilidade de adaptar horários e paradas conforme a necessidade do grupo, de acordo com a disponibilidade e condições do dia.",

    contact_title: "Entre em Contato",
    contact_intro: "Fale com nossa equipe para tirar dúvidas, consultar disponibilidade de datas e receber uma proposta personalizada para o seu grupo.",
    contact_channels_title: "Canais de atendimento",
    contact_whatsapp: "(21) 00000-0000",
    contact_phone: "(21) 0000-0000",
    contact_email: "contato@barcomero.com.br",
    contact_note: "Horário de atendimento: diariamente, das 08h às 18h (horários sujeitos à alteração conforme a operação dos passeios).",
    contact_book_title: "Reserve seu passeio",
    contact_book_text: "Clique no botão abaixo para iniciar uma conversa direta pelo WhatsApp e informar a data desejada, número de pessoas e roteiro de interesse.",

    whatsapp_cta: "Falar no WhatsApp",
    whatsapp_cta_full: "Falar com o Barco Mero no WhatsApp"
  },

  en: {
    logo_text: "🛶 Barco Mero",
    nav_home: "Home",
    nav_tours: "Tours",
    nav_gallery: "Gallery",
    nav_about: "About",
    nav_contact: "Contact",

    hero_title: "Welcome to Barco Mero",
    hero_subtitle: "Discover the most amazing boat tours in Angra dos Reis",
    hero_cta: "Explore Our Tours",

    tours_title: "Our Tours",
    tours_subtitle: "Choose the route that best matches your travel style and enjoy the best of Angra dos Reis.",

    tour1_title: "Lagoons & History Tour",
    tour1_duration: "Duration: 6h",
    tour1_schedule: "Departure 9 a.m. · Return 3 p.m.",
    tour1_description: "Perfect for first-time visitors who want to combine stunning landscapes, crystal-clear waters and a touch of local history.",
    tour1_stops_title: "Planned stops",
    tour1_stop1: "Mero Blue Lagoon – stop for swimming and snorkeling in clear waters.",
    tour1_stop2: "Freguesia Cove – visit to the historic seaside chapel.",
    tour1_stop3: "Fishermen’s Beach – free time for photos and relaxing on the sand.",
    tour1_stop4: "Lighthouse Village – optional stop for lunch at a seaside restaurant.",
    tour1_included_title: "Included in the tour",
    tour1_included1: "Light breakfast on board.",
    tour1_included2: "Mineral water and non-alcoholic soft drinks.",
    tour1_included3: "Basic shared snorkeling gear.",
    tour1_included4: "Life jackets for all passengers.",
    tour1_price: "Prices from R$ 100.00 · On request",

    tour2_title: "Paradise Islands Tour",
    tour2_duration: "Duration: 7h",
    tour2_schedule: "Departure 10 a.m. · Return 5 p.m.",
    tour2_description: "For those seeking postcard-like scenery, blue and green waters and perfect stops for photos and unforgettable moments.",
    tour2_stops_title: "Planned stops",
    tour2_stop1: "Mero Twin Islands – stop for swimming in a natural aquarium.",
    tour2_stop2: "Southern Dentist Beach – lively island vibe with anchored boats.",
    tour2_stop3: "Blue Mermaid Beach – free time for photos and swimming.",
    tour2_stop4: "Emerald Cove – final stop to relax before returning.",
    tour2_included_title: "Included in the tour",
    tour2_included1: "Non-alcoholic welcome drink.",
    tour2_included2: "Fresh fruits and light snacks on board.",
    tour2_included3: "Cooler with ice for the group’s drinks.",
    tour2_included4: "Snorkeling gear for fish watching.",
    tour2_price: "Prices from R$ 000.00 · On request",

    tour3_title: "Calm Bay Tour",
    tour3_duration: "Duration: 5h",
    tour3_schedule: "Departure 8:30 a.m. · Return 1:30 p.m.",
    tour3_description: "Recommended for families, groups with children and anyone who prefers a calmer day, with stops in sheltered coves and shallow waters.",
    tour3_stops_title: "Planned stops",
    tour3_stop1: "Mero Cataguases Beach – first stop for swimming in shallow water.",
    tour3_stop2: "Tranquility Cove – time to relax on board and take photos.",
    tour3_stop3: "Family Beach – longer stop for swimming and fun.",
    tour3_stop4: "Panoramic Viewpoint – slow navigation for bay views and photos.",
    tour3_included_title: "Included in the tour",
    tour3_included1: "Unlimited mineral water.",
    tour3_included2: "Selection of fresh fruits.",
    tour3_included3: "Life jackets for children and adults.",
    tour3_included4: "Support from the crew during boarding and disembarking.",
    tour3_price: "Prices from R$ 000.00 · On request",

    gallery_title: "Moments Gallery",
    gallery_subtitle: "Discover the beauty of our tours",
    gallery_item1: "Blue Lagoon",
    gallery_item2: "Barco Mero",
    gallery_item3: "Snorkeling",
    gallery_item4: "Sunset",
    gallery_item5: "Paradise Beach",
    gallery_item6: "Group Moments",

    food_title: "Food and Drinks on Board",
    food_intro: "To make the experience even more complete, we offer an exclusive menu of drinks and meals included in the package for up to 10 people, so you don’t have to worry during the tour.",
    food_breakfast_title: "Breakfast on Board",
    food_breakfast_text: "We offer a complete breakfast menu for up to 10 people, with sweet and savory options, fruits, bread, cold cuts and hot and cold drinks, so you start the day already enjoying Angra’s views.",
    food_lunch_title: "Lunch with Sea View",
    food_lunch_text: "We also offer a full lunch for up to 10 people, with fresh and tasty dishes, so your only concern is enjoying the tour, swimming stops and Angra’s landscapes.",
    food_note: "If you have any dietary restrictions or specific preferences, contact us to customize the menu for your group.",

    about_title: "About Barco Mero",
    about_p1: "Barco Mero offers exclusive boat tours in Angra dos Reis and region, with routes designed for groups of up to 10 people, combining comfort, safety and direct contact with the bay’s natural beauty.",
    about_p2: "Our team focuses on a personalized experience, guiding boarding, supporting at each stop and ensuring a smooth and memorable day at sea for all passengers.",
    about_highlight1_title: "Safety first",
    about_highlight1_text: "Boat equipped with life jackets for everyone, support equipment and a trained crew to conduct the tour responsibly.",
    about_highlight2_title: "Experienced crew",
    about_highlight2_text: "Professionals who know the routes, sea conditions and the best spots for swimming, photos and rest stops.",
    about_highlight3_title: "Custom routes",
    about_highlight3_text: "Possibility to adjust times and stops according to the group’s needs, depending on availability and daily conditions.",

    contact_title: "Get in Touch",
    contact_intro: "Talk to our team to clear your doubts, check available dates and receive a personalized proposal for your group.",
    contact_channels_title: "Service channels",
    contact_whatsapp: "(+55 21) 00000-0000",
    contact_phone: "(+55 21) 0000-0000",
    contact_email: "contato@barcomero.com.br",
    contact_note: "Service hours: daily, from 8 a.m. to 6 p.m. (hours may change according to tour operation).",
    contact_book_title: "Book your tour",
    contact_book_text: "Click the button below to start a WhatsApp chat and inform your desired date, number of people and tour of interest.",

    whatsapp_cta: "Chat on WhatsApp",
    whatsapp_cta_full: "Talk to Barco Mero on WhatsApp"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("mero_lang", lang);
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
}

// idioma inicial
const savedLang = localStorage.getItem("mero_lang") || "pt";
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(savedLang);

  document
    .querySelectorAll(".language-switcher [data-lang]")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        setLanguage(lang);
      });
    });
});

// ===== SEU CÓDIGO ORIGINAL ABAIXO =====

// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Close menu when clicking on a link
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Scroll behavior - Close menu on scroll
window.addEventListener('scroll', () => {
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.8s ease-in-out';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

console.log('Mero Turismo - Website Loaded Successfully!');

// Gallery Lightbox Functionality
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Open lightbox on gallery item click
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const alt = img.getAttribute('alt');
    const src = img.getAttribute('src');
    
    lightboxImage.src = src;
    lightboxCaption.textContent = alt;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });
});

// Close lightbox on close button click
lightboxClose.addEventListener('click', closeLightbox);

// Close lightbox on outside click
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) {
    closeLightbox();
  }
});

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
    closeLightbox();
  }
});

// Function to close lightbox
function closeLightbox() {
  lightboxModal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

console.log('Gallery Lightbox - Ready!');
