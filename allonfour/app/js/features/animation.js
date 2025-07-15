document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;

        el.classList.add("visible");

        // Animate children with stagger
        const children = el.children;
        [...children].forEach((child, index) => {
          setTimeout(() => {
            child.classList.add("visible");
          }, index * 300);
        });

        // Optional: unobserve if you only want it to run once
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0
  });

  // Observe all `.animate` elements
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));
});