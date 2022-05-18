$(function(){
    var li = $('.cntWrap li');
    var artGroup = $('.artTop .artGroup');
    var btnLeft = $('.dirBtn .btn:nth(0)');
    var btnRight = $('.dirBtn .btn:nth(1)');
    var i = 0;
    li.click(function(){
        li.removeClass('on')
        $(this).addClass('on')
    });
    
    var wd = $(window).width();
    if(wd <= 420){
        artGroup.css({
            marginLeft : '-100%',          
        });
        i = 1;
        btnRight.click(function(){
            i++;
            i = i%3;
            artGroup.animate({
                marginLeft : -100 * i+'%'
            });
            
        });
        btnLeft.click(function(){
            i--;
            i = (i+3)%3;
            artGroup.animate({
            marginLeft : -100 * i+'%'
        });
        });
    }
});