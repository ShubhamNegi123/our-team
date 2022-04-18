$(function () {

    
    
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let h =  $(window).height();
        if(scroll >= h/2){
            $('.navigation-bar').css({
                backgroundColor : 'rgba(0,0,0,0.7)',
            });
            
        }else{
            $('.navigation-bar').css({
                backgroundColor : 'transparent',
            })
        }
  });
});
