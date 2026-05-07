   /* ============================================================
       NAVBAR SHADOW ON SCROLL
    ============================================================ */

    const siteNav = document.getElementById("siteNav");

    window.addEventListener("scroll", () => {

      if (window.scrollY > 20) {
        siteNav.classList.add("scrolled");
      } else {
        siteNav.classList.remove("scrolled");
      }

    });

    /* ============================================================
       CLOSE OFFCANVAS AFTER CLICK
    ============================================================ */

    document.querySelectorAll('.mobile-links a').forEach(link => {

      link.addEventListener('click', () => {

        const offcanvasEl = document.getElementById('mobileMenu');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);

        if (bsOffcanvas) {
          bsOffcanvas.hide();
        }

      });

    });

  /* -------- Nav scroll shadow -------- */
  window.addEventListener('scroll', () => {
    document.getElementById('siteNav').classList.toggle('scrolled', window.scrollY > 30);
  });

  /* -------- GSAP ScrollTrigger -------- */
  gsap.registerPlugin(ScrollTrigger);

  // Shared ScrollTrigger defaults
  const ST_DEFAULTS = { start: 'top 88%', toggleActions: 'play none none none' };

  // Generic fade-up
  gsap.utils.toArray('.gsap-fade-up').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
      scrollTrigger: { trigger: el, ...ST_DEFAULTS }
    });
  });

  // Fade left
  gsap.utils.toArray('.gsap-fade-left').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, ...ST_DEFAULTS }
    });
  });

  // Fade right
  gsap.utils.toArray('.gsap-fade-right').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, ...ST_DEFAULTS }
    });
  });

  // Scale in
  gsap.utils.toArray('.gsap-scale-in').forEach(el => {
    gsap.to(el, {
      opacity: 1, scale: 1, duration: 0.85, ease: 'back.out(1.4)',
      scrollTrigger: { trigger: el, ...ST_DEFAULTS }
    });
  });

  // Stagger children
  gsap.utils.toArray('.features-strip .feature-item').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      delay: i * 0.12,
      scrollTrigger: { trigger: '.features-strip', ...ST_DEFAULTS }
    });
  });

  gsap.utils.toArray('.gallery-grid img').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      delay: i * 0.1,
      scrollTrigger: { trigger: '.gallery-grid', ...ST_DEFAULTS }
    });
  });

  gsap.utils.toArray('.blog-card').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
      delay: i * 0.13,
      scrollTrigger: { trigger: el, ...ST_DEFAULTS }
    });
  });

  /* Hero entrance (no scroll trigger) */
  gsap.utils.toArray('.hero-content .gsap-fade-up').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.3 + i * 0.15
    });
  });

  // /* -------- Testimonials slider -------- */
  // const testimonials = [
  //   {
  //     text: "I've been to a few places, but this one stands out. Clean, skilled team, and a relaxing experience every time. Easily the best nail salon in Cherry Hill.",
  //     name: 'Amanda R.',
  //     loc: 'Cherry Hill, NJ',
  //     img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80'
  //   },
  //   {
  //     text: "Absolutely love J'ADORE NAILS! The team is so professional and the results are always stunning. I bring all my friends here.",
  //     name: 'Sara M.',
  //     loc: 'Moorestown, NJ',
  //     img: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=100&q=80'
  //   },
  //   {
  //     text: "Best gel manicure I've ever had. The salon is spotless and the atmosphere is so relaxing. Will definitely be back!",
  //     name: 'Jessica L.',
  //     loc: 'Voorhees, NJ',
  //     img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  //   }
  // ];
  // let tIdx = 0;

  // function updateTestimonial() {
  //   const t = testimonials[tIdx];
  //   const card = document.getElementById('testimonialCard');
  //   gsap.to(card, { opacity: 0, y: 10, duration: 0.25, onComplete: () => {
  //     document.getElementById('testimonialText').textContent = t.text;
  //     document.getElementById('testimonialName').textContent = t.name;
  //     document.getElementById('testimonialLoc').textContent = t.loc;
  //     document.getElementById('testimonialImg').src = t.img;
  //     gsap.to(card, { opacity: 1, y: 0, duration: 0.35 });
  //   }});
  // }

  // function nextTestimonial() {
  //   tIdx = (tIdx + 1) % testimonials.length;
  //   updateTestimonial();
  // }
  // function prevTestimonial() {
  //   tIdx = (tIdx - 1 + testimonials.length) % testimonials.length;
  //   updateTestimonial();
  // }


  // setInterval(nextTestimonial, 5000);



     $(function () {

        // Initialize Owl
        var owl = $(".testimonial-slider");

        owl.owlCarousel({
          items: 1,
          loop: true,
          margin: 20,
          autoplay: true,
          autoplayTimeout: 5000,
          smartSpeed: 700,
          dots: false,
          nav: false
        });

        // Custom Next
        $(".testimonial-next").click(function (e) {
          e.preventDefault();
          owl.trigger("next.owl.carousel");
        });

        // Custom Prev
        $(".testimonial-prev").click(function (e) {
          e.preventDefault();
          owl.trigger("prev.owl.carousel");
        });

      });
