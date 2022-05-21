$(function(){
    // 헤더
    $('.hdr').load('./inc/header.html',function(){
        var hdr =  $('.hdrWrap');
        var wd = $(window).width();
        // PC 헤더 마우스호버시 메뉴활성
        if(wd > 1024){
            $('.hdrWrap nav').mouseover(function(){
                hdr.addClass('show');
                $(this).mouseleave(function(){
                    hdr.removeClass('show');
                });
            });
        // tablet, mobile 헤더 햄버거 버튼클릭시 메뉴활성
        }else{
            $('.hBtn').click(function(){
                hdr.toggleClass('show');
              });
            }

    });
    // 푸터
    $('.ftr').load('./inc/footer.html');
});