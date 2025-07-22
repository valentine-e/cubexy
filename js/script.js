// const tabs = document.querySelector(".use__wrapper");
// const tabButton = document.querySelectorAll(".tab-button");
// const contents = document.querySelectorAll(".content");

// tabs.onclick = (e) => {
//   const id = e.target.dataset.id;
//   if (id) {
//     tabButton.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");

//     contents.forEach((content) => {
//       content.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// };

// slider counter

function updateCardNumberFromIndicators() {
  const indicators = document.querySelectorAll(".slider-indicators button");
  const activeIndex = Array.from(indicators).findIndex((btn) =>
    btn.classList.contains("active")
  );

  const cardNumberSpan = document.getElementById("card-number");

  // Якщо активний знайдено — оновити
  if (activeIndex !== -1) {
    cardNumberSpan.textContent = activeIndex + 1;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Оновити одразу після завантаження
  updateCardNumberFromIndicators();

  // Стежити за змінами активного індикатора
  const indicatorContainer = document.querySelector(".slider-indicators");

  const observer = new MutationObserver(updateCardNumberFromIndicators);

  observer.observe(indicatorContainer, {
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });

  // Додатково: якщо користувач клікає по кнопках вручну
  indicatorContainer.addEventListener("click", () => {
    // Невелика затримка, щоб клас "active" встиг оновитись
    setTimeout(updateCardNumberFromIndicators, 10);
  });
});
