$('.owl-carousel').owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    navText:["<div class='nav-btn prev-slide'><img src='arrow_left.png' style='width: 12px; height: 12px' title='Anterior'></div>","<div class='nav-btn next-slide'><img src='arrow_right.png' style='width: 12px; height: 12px' title='Siguiente'></div>"],
    autoWidth: true,
    slideBy:3,
/*    responsive: {
        0: {
            slideBy: 1,
            items: 1
        },
        600: {
            slideBy: 2,
            items: 3
        },
        1000: {
            slideBy: 5,
            items: 6
        }
    }
*/
    });