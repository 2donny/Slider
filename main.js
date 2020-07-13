const SHOWING_CLASS = "showing";
const firstSlider = document.querySelector('.slider__item:first-child');

function slide() {
    const currentSlider = document.querySelector(`.${SHOWING_CLASS}`);

    if (currentSlider) {
        currentSlider.classList.remove(SHOWING_CLASS);
        const nextSlider = currentSlider.nextElementSibling;

        if (nextSlider) {
            nextSlider.classList.add(SHOWING_CLASS);
        } else {
            firstSlider.classList.add(SHOWING_CLASS);
        }
    } else {
        firstSlider.classList.add(SHOWING_CLASS);
    }

}

slide();
setInterval(slide, 2000);