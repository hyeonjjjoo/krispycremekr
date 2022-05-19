$(function(){
    // 배너
    var btn = $('.bnrWrap .btns span');
    var Grp = $('.imgGroup');
    var i = 0 ;

    btn.first().click(function(){
        i++
        i = i%2
        Grp.animate({
            marginLeft : -50*i+'%'
        });
    });
    btn.last().click(function(){
        i--
        i = (i+2)%2
        Grp.animate({
            marginLeft : -50*i+'%'
        });
    });

    var vid = $('.video');
    var v = $('video');
    var pbtn = $('.video .pbtn')
    var vbtn = $('.video .btn')
    var vimg = $('.bnrRight .image');

    vid.children('div').css({
        opacity : 1
    });
    vid.mouseover(function(){
        $(this).children('div').css({
            opacity : 1
        });
        $(this).mouseleave(function(){
            $(this).children('div').css({
                opacity : 0
            });
        });
    });

    // 썸네일
    vimg.click(function(){
        // vbtn.css('display','block');
        var num = $(this).attr('data-num');
        v.removeClass('on')
        v.eq(num).addClass('on');
        vimg.removeClass('on');
        $(this).addClass('on');
    });
    // 플레이버튼
    vbtn.click(function(){
        $('video.on').get(0).play();
        $(this).css('display','none');
        pbtn.css('display','block');
    });
    // 정지버튼
    pbtn.click(function(){
        $('video.on').get(0).pause();
        $(this).css('display','none');
        vbtn.css('display','block');
    });

});