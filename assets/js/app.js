jQuery(document).ready(function ($) {

  const goalsSwiper = new Swiper(".goals__swiper", {
    observer: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".goals__swiper .swiper-navigation-next",
      prevEl: ".goals__swiper .swiper-navigation-prev",
    },
    pagination: {
      el: ".goals__swiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const servicesSwiper = new Swiper(".our-services__swiper", {
    spaceBetween: 47,
    clickable: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  $('.loader').fadeOut('slow');


  const topButton = document.getElementById("gotToTopButton");
  const headerNav = document.querySelector(".header__mobile-nav");
  topButton.addEventListener('click', topFunction)

  window.onscroll = function () { scrollFunction(topButton, headerNav) };

  mobileNavMenuRender();

});

function scrollFunction(topButton, headerNav) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
    headerNav.style.top = '0px';
  } else {
    topButton.style.display = "none";
    // headerNav.style.top = '60px';
  }

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    $('.event-details__container').css('bottom', '50px');
  } else {
    $('.event-details__container').css('bottom', '-250px')
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mobileNavMenuRender() {
  const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
  const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		رجوع
	</a>
</li>`

  navExpand.forEach(item => {
    item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
    item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
    item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
  })


  // ---------------------------------------
  // not-so-important stuff starts here

  const openMenuBtn = document.getElementById('openMenu');
  const closeMenuBtn = document.getElementById('closeMenu');

  openMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    $('.header__mobile').fadeIn('slow');
    $('body').addClass('utl-opened');
  })

  closeMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    $('.header__mobile').fadeOut('slow');
    $('body').removeClass('utl-opened');
  })

  $('.header__mobile .nav-link').on('click', function () {
    $('.header__mobile').fadeOut('slow');
    $('body').removeClass('utl-opened');
  })
}

