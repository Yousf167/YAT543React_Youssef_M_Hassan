
window.addEventListener('scroll', function () {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
            nav.classList.add('scrolled');
      } else {
            nav.classList.remove('scrolled');
      }
});

document.addEventListener("DOMContentLoaded", function () {
      const sections = [
            { id: "about", link: document.querySelector('a[href="#about"]') },
            { id: "services", link: document.querySelector('a[href="#services"]') },
            { id: "portfolio", link: document.querySelector('a[href="#portfolio"]') },
            { id: "contact", link: document.querySelector('a[href="#contact"]') }
      ];

      function onScroll() {
            let scrollPos = window.scrollY + 80; // Offset for fixed nav
            sections.forEach(({ id, link }) => {
                  const section = document.getElementById(id);
                  if (section) {
                        const top = section.offsetTop;
                        const bottom = top + section.offsetHeight;
                        if (scrollPos >= top && scrollPos < bottom) {
                              link.classList.add("active");
                        } else {
                              link.classList.remove("active");
                        }
                  }
            });
      }

      window.addEventListener("scroll", onScroll);
      onScroll(); // Initial call
});
