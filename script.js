$(document).ready(function(){
    $('#bar,.fa-xmark').click(function(){
        $('.navbar').toggleClass('show');
    });


     
});

$(document).ready(function(){
    if ($(window).width() <= 768) {
        $('.slider').slick({     
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows:false
                }
                },
            ]
        });
        $('.icon-with-text').slick({     
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows:false
                }
                },
            ]
        });
    }
});


