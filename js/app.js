$(document).ready(function() {
    AOS.init()
})

$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade:true,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// $(".data-detail").hide()
$(".gambar").click(function(){
    var id_ = $(this).attr('id')
    var show = $("#show-"+id_+"");
//    show.removeAttr('hidden')
    show.fadeIn()
})

$(".tutups").click(function(){
    $(this).parent().fadeOut()
})