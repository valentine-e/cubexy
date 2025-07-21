(() => {
  const menuBtnRef = document.querySelectorAll("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.forEach((e) => {
    e.addEventListener("click", () => {
      const expanded = menuBtnRef.forEach(
        (e) => e.getAttribute("aria-expanded") === "true" || false
      );

      document.body.classList.toggle("mobile-open");
      menuBtnRef.forEach((e) => e.classList.toggle("is-open"));
      menuBtnRef.forEach((e) => e.setAttribute("aria-expanded", !expanded));

      mobileMenuRef.classList.toggle("is-open");
    });
  });
})();
