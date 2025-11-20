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

function imageClick(imageNumber) {
  setTimeout(() => {
    //Find the slider element
    const sliderElement = document.getElementById("pgalleryModal");
    //Slide to he right image
    swiffyslider.slideTo(sliderElement, imageNumber);
    //Listen to slide end and set focus to the container to enable keyboard navigation
    swiffyslider.onSlideEnd(sliderElement, () =>
      sliderElement.querySelector(".slider-container").focus()
    );
  }, 300);
}

function thumbHover(imageNumber) {
  //Find the slider element
  const sliderElement = document.getElementById("pgallery");
  //Slide to he right image
  swiffyslider.slideTo(sliderElement, imageNumber);
}

// config

const selectedOptions = {
  roof: "roof1",
  outdoors: "outdoors1",
  walls: "walls1",
  windows: "windows1",
};

const previewImg = document.getElementById("preview");
const optionGroups = document.querySelectorAll(".options");

optionGroups.forEach((group) => {
  const category = group.dataset.category;
  const images = group.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      // оновити вибір
      selectedOptions[category] = img.dataset.value;

      // підсвітка вибраного
      images.forEach((i) => i.classList.remove("selected"));
      img.classList.add("selected");

      // сформувати шлях до картинки-прев'ю
      const path = `/images/${selectedOptions.roof}_${selectedOptions.outdoors}_${selectedOptions.walls}_${selectedOptions.windows}.jpg`;
      previewImg.src = path;
    });
  });
});

// Логіка навігацій у сонфігураторі
