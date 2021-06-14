// $(".imagen").click(function(e){
// 	var enlaceImagen = e.target.src;
// 	var data = $(this).attr("data");
// 	var lightbox = '<div class="ligthbox">'+
// 						'<img src="'+enlaceImagen+'" alt="" id="zoom_mw" data-zoom-image="'+data+'">'+
// 						'<div class="btn-close">X</div>'+
// 					'</div>';





// 	$("body").append(lightbox)
// 	$("#zoom_mw").elevateZoom({
// 		scrollZoom : true,
// 		cursor: "crosshair",
// 		zoomWindowOffetx: 15
// 	});
// 	$(".btn-close").click(function(){
// 		$(".ligthbox").remove();
// 	})

// })

$("#zoom_02").elevateZoom({scrollZoom: true});

$("#zoom_01").elevateZoom({scrollZoom: true});



$("#zoom_web_1").elevateZoom({scrollZoom: true});
$("#zoom_web_2").elevateZoom({scrollZoom: true});
$("#zoom_web_3").elevateZoom({scrollZoom: true});


$("#zoom_publi_1").elevateZoom({scrollZoom: true});
$("#zoom_publi_2").elevateZoom({scrollZoom: true});
$("#zoom_publi_3").elevateZoom({scrollZoom: true});


$("#zoom_editorial_1").elevateZoom({scrollZoom: true});
$("#zoom_editorial_2").elevateZoom({scrollZoom: true});
$("#zoom_editorial_3").elevateZoom({scrollZoom: true});
