$(function(){
    // 배너
    var btn = $('.bnrWrap .btns span');
    var Grp = $('.imgGroup');
    var i = 0 ;
    var wd = $(window).width();
    var num = 0;
    // 디바이스별 속성값
    if(wd>1024){
        num = 50;
        num2 = 2;
    }else{
        num = 100;
        num2 = 3;
    }
    // 왼쪽, 오른쪽 버튼 클릭시 슬라이드이동
    btn.first().click(function(){
        i++;
        i = i%num2;
        Grp.animate({
            marginLeft : -num*i+'%'
        });
    });
    btn.last().click(function(){
        i--;
        i = (i+2)%2;
        Grp.animate({
            marginLeft : -num*i+'%'
        });
    });

    var vid = $('.video');
    var v = $('video');
    var pbtn = $('.video .pbtn')
    var vbtn = $('.video .btn')
    var vimg = $('.bnrRight .image');
    // 화면 랜딩시 플레이 버튼 투명도 
    vid.children('div').css({
        opacity : 1
    });
    // 비디오에 마우스 오버시 플레이,정지 버튼 투명도 
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
        var num = $(this).attr('data-num');
        v.removeClass('on')
        v.eq(num).addClass('on');
        vimg.removeClass('on');
        $(this).addClass('on');
    });

    // 플레이버튼 클릭시 변화
    vbtn.click(function(){
        $('video.on').get(0).play();
        $(this).css('display','none');
        pbtn.css('display','block');
    });

    // 정지버튼 클릭시 변화
    pbtn.click(function(){
        $('video.on').get(0).pause();
        $(this).css('display','none');
        vbtn.css('display','block');
    });

});