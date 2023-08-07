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

gsap.timeline({
    scrollTrigger: {
      trigger: ".box",
      start: "center center",
      end: "bottom top",
      scrub: 1,
      pin:true
    }
  })
  .from(".text1", {
    x: innerWidth * 1  
  })
  .from(".text2", {
    x: innerWidth * -1  
  })
  .from(".text3", {
    x: innerWidth * 1  
  })
  .from(".logo", {
    y: innerHeight * 1,
    rotate:360
  })
  
  
  gsap.timeline({
    scrollTrigger: {
      trigger: ".box2",
      start: "center center",
      end: "bottom top",
      scrub: 1,
      pin:true
    }
  })
  .from(".box2", {
    opacity: 0,
  })
  .from(".text4", {
    y: innerHeight * 1,
    stagger : {
      amount : 0.5,
    }
  })  
  
  
  

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