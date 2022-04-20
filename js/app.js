 $(function ($){
   ("use strict");

   // preloader

   $(".someBlock").preloader({
     duration: "2000",
     zIndex: "10000",
   });
   

   // Navbar scroll addclass
   let nav = $(".navbar");
   window.onscroll = function () {
     document.documentElement.scrollTop > 20
       ? nav.addClass("header-scrooll")
       : nav.removeClass("header-scrooll");
   };

   // typed js
   var typed = new Typed(".textadd", {
     strings: ["Jhon Smith"],
     typeSpeed: 110,
     backSpeed: 70,
     loop: true,
   });

   // counter js
   $(".counter").counterUp({
     time: 2000,
   });

   // slick slider
   $(".text-slider-actives").slick({
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: false,
     loop: true,
     dots: true,
   });

   // mixitup
   mixitup(".portfolio-start");

   // magnificPopup
   $(".galiry-img a").magnificPopup({
     type: "image",
     gallery: {
       enabled: true,
       navigateByImgClick: true,
     },
   });

   // AutoLightbox
   $("article").AutoLightbox({
     width: 400,
     height: 400,
   });

   // hidden navbar
   $(document).on("click", ".navbar-collapse", function (e) {
     if ($(e.target).is("a")) {
       $(this).collapse("hide");
     }
   });

   //  active navbar
   $("#navBar").onePageNav({
     currentClass: "active",
     changeHash: false,
     scrollSpeed: 750,
     scrollThreshold: 0.5,
     filter: "",
     easing: "swing",
   });

   //   wow js
   new WOW().init();
 }(jQuery));
