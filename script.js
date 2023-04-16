const searchBarContainer = document.querySelector(".searchBarContainer");
const searchInput = document.querySelector(".searchInput");
const searchIcon = document.querySelector(".searchIcon");
const dishes = document.querySelector(".dishes");
const dishesNewest = document.querySelector(".dishesNewest");
const cookThis = document.querySelector(".cookThis");
const hamburger = document.querySelector(".hamburger");
const top1 = document.querySelector(".top");
const bottom = document.querySelector(".bottom");
const middle = document.querySelector(".middle");
const mobileNav = document.querySelector(".mobileNav");
const burgers = document.querySelectorAll(".burger");

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("searchInput") ||
    e.target.classList.contains("searchIconNav") ||
    e.target.classList.contains("searchIcon") ||
    e.target.classList.contains("search") ||
    e.target.classList.contains("mobileNavsearch") ||
    e.target.classList.contains("mobileNavsearchIconNav")
  ) {
    searchBarContainer.classList.add("scaleSearchBarContainer");
    searchInput.classList.add("styleSearchInput");
    searchInput.classList.add("changePlaceholderColor");
    searchInput.focus();
    searchIcon.classList.add("hideSearchIcon");
  } else {
    searchBarContainer.classList.remove("scaleSearchBarContainer");
    searchInput.classList.remove("styleSearchInput");
    searchInput.classList.remove("changePlaceholderColor");
    searchIcon.classList.remove("hideSearchIcon");
  }
});

const spoonacular = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=c0c692d2b8be4e92a29883049789419b&includeNutrition=true.",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  data.results.forEach((e) => {
    const html = `
    <div class="dish" id="a${e.id}">
      <a href="#"><img data-src=${e.image} alt="" class="dishImg lazyLoad" /></a>
      <h2 class="dishTitle">
        ${e.title}
      </h2>
  </div>
    `;
    dishes.insertAdjacentHTML("afterbegin", html);
  });
};

const cookThisNow = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?number=1&apiKey=c0c692d2b8be4e92a29883049789419b&includeNutrition=true.",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  data.recipes.forEach((e) => {
    const html = `
    <img data-src=${e.image} alt="" class="lazyLoad" />

    `;
    cookThis.insertAdjacentHTML("afterbegin", html);
  });
};

const getNewestRecipes = async () => {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?number=5&apiKey=c0c692d2b8be4e92a29883049789419b&includeNutrition=true.",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  data.recipes.forEach((e) => {
    const html = `
    <div class="newDish">
      <a href="#"><img src=${e.image} alt="" class="newDishImg lazyLoad" /></a>
      <h1 class="newDishTitle">${e.title}</h1>
    </div>
    `;
    dishesNewest.insertAdjacentHTML("afterbegin", html);
  });
  const images = document.querySelectorAll(".lazyLoad");
  function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) return;
    img.src = src;
  }
  const imgOptions = {
    threshhold: 0,
    rootMargin: "0px 0px 0px 0px",
  };

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
        images.forEach((img) => {
          img.style.animation = "animateLazyLoad 0.5s";
        });
      }
    });
  }, imgOptions);

  images.forEach((image) => {
    imgObserver.observe(image);
  });
};
getNewestRecipes();
spoonacular();
cookThisNow();

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("mobileNavsearch") ||
    e.target.classList.contains("mobileNavsearchIconNav") ||
    e.target.classList.contains("hamburger") ||
    e.target.classList.contains("burger")
  ) {
    middle.classList.toggle("hideMiddle");
    top1.classList.toggle("animateTop");
    bottom.classList.toggle("animateBottom");
    mobileNav.classList.toggle("animateMobileNav");
    burgers.forEach((burger) => {
      burger.classList.toggle("animateBurgers");
    });
  }
});
