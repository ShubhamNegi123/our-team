$(function(){


    $(".our-services1").mousemove(function (evt) {
        
        let IAWidth = $(".our-services1").width();
        let IAHeight = $(".our-services1").height();
    
        let mouseX = evt.pageX - $(".our-services1").offset().left;
        let mouseY = evt.pageY - $(".our-services1").offset().top;
    
        var scroll = $('.our-services1').scrollTop();
        console.log('object'+scroll);

        console.log("IAWidth = "+IAWidth);
        console.log("IAHeight = "+IAHeight);
        console.log("mouseX = "+mouseX);
        console.log("mouseY = "+mouseY);
       
      });
});