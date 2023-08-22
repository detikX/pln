$(document).ready(function() {
    AOS.init()
})

// $.ajax({
// 	url: 'https://dediwibisono17.github.io/kisah-nabi/assets/js/kisah.json',
//   method: 'GET',
//   success: function (response) {
//   	// console.log(response);
//     var a;
//     for (a=0; a<response.length;a++) {
//         console.log(response[a].description);
//         $("#app").append(`
//             <div class="desc">
//             ${response[a].description}
//             </div> <br>
//         `)
//     }
//   }
// })
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