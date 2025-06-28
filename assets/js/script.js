var search_type_btn = document.querySelectorAll('.search-type-btn');

search_type_btn.forEach((search_btn) => {
    search_btn.addEventListener('click', () => {
        search_type_btn.forEach((btn) => {btn.classList.remove("active")});
        search_btn.classList.add("active");
    })
}) 

const filterButtons = document.querySelectorAll('.featured-properties-menu-list a');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        productCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

var swiper = new Swiper(".citiesSwiper", {
      spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });

    var swiper = new Swiper(".tsmSwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    });

    var swiper = new Swiper(".brandSwiper", {
      spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });

    var open_menu_btn =document.querySelector("#open-menu-btn")
    var close_menu_btn =document.querySelector("#close-menu-btn")
    var navbar =document.querySelector("#navbar")
    var navlinks =document.querySelectorAll(".nav-container .nav-list-container li a")

    open_menu_btn.addEventListener("click",()=>{
        navbar.classList.add("active")
    })
    close_menu_btn.addEventListener("click",()=>{
        navbar.classList.remove("active")
    })

    navlinks.forEach((link)=>{
      link.addEventListener("click",()=>{
        navbar.classList.remove("active");
      });
    });

const sb = ScrollReveal({
  duration:2500,
  delay:800,
  mobile:false,
  origin:'bottom',
  distance:'60px'
});

sb.reveal('.hero-section .hero-container .hero-txt-container .hero-txt, .hero-section .hero-container .hero-txt-container .hero-desc, .hero-container .search-form-container .search-type-inner .search-type-btn, .hero-section .hero-container .search-form-container .search-form, .title-container .subtitle, .title-container .title, .featured-properties-menu-container,..featured-properties-section .featured-properties-container .content-container,.cities-contant-container,.abt-section .abt-container .content-container .abt-col .img-container img, .abt-section .abt-container .content-container .abt-col .text-container .desc, .abt-section .abt-container .content-container .abt-col .text-container .content, .abt-section .abt-container .content-container .abt-col .text-container blockquote,.tsm-container .content-container,.team-container .contact-info-container,.brand-container .contact-container');
sb.reveal('.services-col .img-container img,.contact-section .contact-container .contact-col:nth-child(1)',{origin:'left'})
sb.reveal('.services-col .txt-container,.contact-section .contact-container .contact-col:nth-child(2)',{origin:'right'})