$(function () {
  var mixer = mixitup(".product__content");

  $(".burger").on("click", function () {
    $(".header__top").toggleClass("header__top--active");
  });

  const burger = document.querySelector(".burger");

  burger.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("burger--active");
  });
});
