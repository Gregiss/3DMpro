$( document ).ready(function() {
    console.log( "Beep, boop , boop" );
    //Carrousel
    carrousel();
    clicksheader();
});

function carrousel(){
    var timeProximoSlide = 5000;
    var imgCarrouselAtual = 1;
    var imgCarrouselAnterior = imgCarrouselAtual;
    var maxCarrousel = 3;
    var maxImg = maxCarrousel + 1;
      setInterval(function(){
        if(imgCarrouselAtual >= 3){
          imgCarrouselAtual = 1;
          imgCarrouselAnterior = 3;
        }
        else{
          imgCarrouselAtual++;
          imgCarrouselAnterior = imgCarrouselAtual - 1;
        }
        var sliderAnterior = ".scroll #image" + imgCarrouselAnterior;
        var sliderProximo = ".scroll #image" + imgCarrouselAtual;
        $(sliderAnterior).css("left", "-200%");
        $(sliderProximo).css("left", "0%");
        var tabProximo = ".tab #ok" + imgCarrouselAtual;
        var tabAnterior = ".tab #ok" + imgCarrouselAnterior;
        $( tabProximo ).addClass( "active" );
        $( tabAnterior ).removeClass( "active" );
        
      }, timeProximoSlide);
  
  $(".tab .ok").click(function(){
    imgCarrouselAtual = $(this).data("id");
    imgCarrouselAnterior = parseFloat(imgCarrouselAtual) - 1;
    $(".scroll .image").css("left", "-200%");
    $( ".tab .ok" ).removeClass( "active" );
    setTimeout(function(){
    tabProximo = ".tab #ok" + imgCarrouselAtual;
    $( tabProximo ).addClass( "active" );
    var sliderProximo = ".scroll #image" + imgCarrouselAtual;
    $(sliderProximo).css("left", "0%");
    }, 100);
  });
  
}

function clicksheader(){
  $("button").click(function(){
    var id = $(this).data("id");
    var tabHeader = ".tabs #button" + id;
    $( ".tabs button" ).removeClass( "active" );
    $(".pages").css("left", "-200%");
   setTimeout(function(){
      $( tabHeader ).addClass( "active" );
     if(id == 1){
       $("#home").css("left", "0%");
     }
     else if(id == 2){
       $("#contato").css("left", "0%");
     }
     else if(id == 3){
	$("#contato").css("left", "0%");
     }
     else if(id == 4){
	$("#contato").css("left", "0%");
     }
     else if(id == 5){
	$("#contato").css("left", "0%");
     }
     else if(id == 6){
	$("#contato").css("left", "0%");
     }
     else{
       $("#home").css("left", "0%");
     }
     
      }, 200);
    });
  };
