const toggles = document.querySelectorAll(".faq-toggle");
const faqs = document.querySelectorAll(".faq");

toggles.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    faqs.forEach((faq, i) => {
      if (index !== i) {
        faq.classList.remove("active");
      }
    });
    toggle.parentNode.classList.toggle("active");
  });
});
