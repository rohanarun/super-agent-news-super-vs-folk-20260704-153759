(function(){
  try {
    if (!window.gsap) return;
    if (window.ScrollTrigger) { gsap.registerPlugin(window.ScrollTrigger); }

    gsap.from('.hero h1', { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 18, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' });
    gsap.from('.hero-actions', { y: 18, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' });
    gsap.from('.media-frame', { y: 26, opacity: 0, duration: 0.9, delay: 0.25, ease: 'power3.out' });

    gsap.utils.toArray('.compare-card, .bento-item').forEach(function(el){
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        y: 22,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
    });
  } catch (e) {
    // Animations are optional; page remains functional without GSAP
  }
})();