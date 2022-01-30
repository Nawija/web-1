$(".team-carousel1").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive:[{

        breakpoint: 766,
        settings:{
            slidesToShow: 2
        }
        },
        {

            breakpoint: 992,
            settings:{
                slidesToShow: 3
            }
        }
            
    ]
});
