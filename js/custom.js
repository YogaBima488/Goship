
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

document.querySelectorAll('.click-scroll').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = {
            'beranda-link': document.querySelector('#section_1'),
            'layanan-informasi-link': document.querySelector('#layanan-informasi')
        };

        // Tambahkan kelas 'active' secara dinamis berdasarkan posisi gulir
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;

            Object.keys(sections).forEach((id) => {
                const section = sections[id];
                if (
                    section.offsetTop <= scrollPosition + 50 &&
                    section.offsetTop + section.offsetHeight > scrollPosition + 50
                ) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    document.getElementById(id).classList.add('active');
                }
            });
        });

        // Tentukan menu aktif untuk halaman terpisah
        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    });

document.addEventListener('DOMContentLoaded', function () {
    const profileButton = document.getElementById('profile-button');
    const profilePopup = document.getElementById('profile-popup');

    profileButton.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah aksi default link
        profilePopup.classList.toggle('show'); // Toggle kelas 'show' untuk pop-up
    });

    // Sembunyikan pop-up jika pengguna mengklik di luar
    document.addEventListener('click', function (e) {
        if (!profileButton.contains(e.target) && !profilePopup.contains(e.target)) {
            profilePopup.classList.remove('show');
        }
    });
});

// Carousel will automatically switch images every 5 seconds
    const carouselElement = document.getElementById('bannerCarousel');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 5000,
        ride: 'carousel'
    });
