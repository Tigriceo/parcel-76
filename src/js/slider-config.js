function swiperSlider() {
    const heroMain = document.querySelectorAll('[data-slider="test-slider"]');
    if (heroMain) {
        heroMain.forEach(slider => {
            let pagination = slider.querySelector('.swiper-pagination');

            let arrowPrev = slider.querySelector('.swiper-button-prev');
            let arrowNext = slider.querySelector('.swiper-button-next');

            swiper = new Swiper(slider.querySelector('.swiper'), {
                speed: 1500,
                //centeredSlides: true,
                // autoplay: {
                //     delay: 3000,
                //     disableOnInteraction: false,
                // },
                //slidesPerView: 3,
                spaceBetween: 20,
                pagination: {
                    el: pagination,
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<li class="' + className + '"></li>';
                    },
                },
                navigation: {
                    nextEl: arrowNext,
                    prevEl: arrowPrev,
                },
                on: {
                    transitionStart: function () {
                        let previousIndex = this.previousIndex;
                        let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
                        if (previousSlide) {
                            setTimeout(function () {
                                previousSlide.classList.remove('is-play');
                            }, 1000);
                        }
                    },
                    transitionEnd: function () {
                        let activeIndex = this.activeIndex;
                        let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
                        activeSlide.classList.add('is-play');
                    },
                },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1200: {
                        slidesPerView: 6,
                    }
                }

            });
        });
    }
}
window.addEventListener('load', swiperSlider, false);