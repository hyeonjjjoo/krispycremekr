$(function(){

    $('.hdr').load('./inc/header.html',function(){
        var wd = $(window).width();
        if(wd > 1024){
            $('nav').mouseover(function(){
                console.log('');
                $('.hdrWrap').addClass('show');
                $(this).mouseleave(function(){
                    $('.hdrWrap').removeClass('show');
                });
            });
        }else{
            $('.hBtn').click(function(){
                $('.hdrWrap').toggleClass('show');
              });
            }

    });
    $('.ftr').load('./inc/footer.html');
});