const sliderContainer = document.querySelector(".example__slider");
const sliderButton = document.querySelector(".example__slider-control-toggler");
const sliderDivider = document.querySelector(".example__slider-control");
const fatcatImg = document.querySelector(".example__fat-cat-wrapper");
const slimcatImg = document.querySelector(".example__skinny-cat-wrapper");

sliderButton.addEventListener("mousedown", (e) => {
  const initSliderButtonX =
    sliderButton.getBoundingClientRect().left -
    sliderContainer.getBoundingClientRect().left;
  const initSliderContainerWidth = sliderContainer.offsetWidth;
  let initCursorX = e.screenX;

  const handleMouseMove = (evt) => {
    const diffCursorX = evt.screenX - initCursorX;
    let newX = initSliderButtonX + diffCursorX + 20;
    if (newX < 0) {
      newX = 0;
    } else if (newX > initSliderContainerWidth) {
      newX = initSliderContainerWidth;
    }
    let sliderPercentage = (newX / initSliderContainerWidth) * 100;
    sliderButton.style.left = sliderPercentage + "%";
    sliderDivider.style.left = sliderPercentage + "%";
    fatcatImg.style.width = sliderPercentage + "%";
    slimcatImg.style.width = 100 - sliderPercentage + "%";
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
});
