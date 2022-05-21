$(function(){
    var li = $('.cntWrap li');
    var artGroup = $('.artTop .artGroup');
    var btnLeft = $('.dirBtn .btn:nth(0)');
    var btnRight = $('.dirBtn .btn:nth(1)');
    var btn = $('.artBtm .btn');
    var i = 0;
    // 탭메뉴
    li.click(function(){
        li.removeClass('on')
        $(this).addClass('on')
    });
    // 더보기버튼
    btn.click(function(){
        $('.artBtm .artGroup').toggleClass('on');
        $('.artGroup').next().text('펼치기');

        $('.artGroup.on').next().text('접기');
    });
    // 모바일 슬라이드
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