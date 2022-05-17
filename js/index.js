$(function(){
    // 메인
    var btn = $('.mainWrap .btnDn');
    var gr = $('.mainWrap .artGroup');
    var q = 0;
    var num = 0;
    var num1 = 0;  //컨텐츠1 슬라이드 이동값
    var j = 0;  //컨텐츠1 슬라이드 이동값
    var num2 = 0;  //컨텐츠3 슬라이드 이동값
    var wd = $(window).width();
    if(wd > 1024){
        num = '-600px',
        j = 3,
        num1 = 25,
        num2 = 400
    }else if(wd >= 420 && wd <=1024 ){
        num = '-440px'
        j = 3,
        num1 = 33,
        num2 = 260
    }else{
        num = '-280px',
        j = 6,
        num1 = 50
    }
    gr.find('article').last().prependTo(gr);
    // gr.css({
    //     marginTop : num
    // });
    btn.click(function(){
        q++
        gr.find('article:eq(1)').find('.images').css('animation-name','mnout')
        gr.animate({
            marginTop: '0px',
        },500,function(){
            gr.find('article:eq(0)').find('.images').css('animation-name','mnin');
            gr.find('article').last().prependTo(gr);
            gr.css({
                marginTop : num
            });           
        });
        $('.count').find('span').text((q%3)+1);
    });



    // 컨텐츠1
    var li = $('.cnt01 li')
    var artGroup = $('.cnt01 .artGroup')
    var btnLeft = $('.dirBtn .btn:nth(0)')
    var btnRight = $('.dirBtn .btn:nth(1)')
    var i = 0;
    li.click(function(){
        var ind = $(this).index();
        li.removeClass('on');
        $(this).addClass('on');
        artGroup.removeClass('on');
        artGroup.eq(ind).addClass('on');
        artGroup.css({marginLeft: '0%'});
        i = 0;
    });
    btnRight.click(function(){
        var j = $('.artGroup.on').find('article').length;
        if(wd < 420){
            j = j+2;
        }
        i++;
        i = i%(j-3);
        artGroup.animate({marginLeft: i*-num1+'%'})
    });
    btnLeft.click(function(){
        var j = $('.artGroup.on').find('article').length;
        i--;
        i = (i+(j-3))%(j-3);
        artGroup.animate({marginLeft: i*-num1+'%'});
    });


    // 컨텐츠2
    var artGroup2 = $('.cnt02 .artGroup');
    var btn2 = $('.cnt02 .btns .btn');
    artGroup2.css({
        marginLeft : '-200%'
    });
    btn2.eq(1).click(function(){
        artGroup2.find('article').removeClass('show')
        artGroup2.find('article').eq(3).addClass('show')
        artGroup2.animate({
            marginLeft : '-300%',
        },500,function(){
            artGroup2.find('article').first().appendTo(artGroup2);
            artGroup2.css('marginLeft' , '-200%');
        });
    });
    btn2.eq(0).click(function(){
        artGroup2.find('article').removeClass('show')
        artGroup2.find('article').eq(1).addClass('show')
        artGroup2.animate({
            marginLeft : '-100%'
        },500,function(){
            artGroup2.find('article').last().prependTo(artGroup2);
            artGroup2.css('marginLeft' , '-200%');
        });
    });

    // 스크롤네비
    var nav = $('ul.nav');
    var data = 0;
    nav.find('li').click(function(){
        data = $(this).attr('data-num');
        $('html,body').animate({
            scrollTop : $('body>div').eq(data).offset().top
        },500);
    });
    
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        if(wd > 1024){
            if(now>=600){
                nav.fadeIn(200);
            }else{
                nav.fadeOut(200);
            }
        }
    });

    // 배너1
    var img = $('.bnr01 .images')
    var bnr1 = $('body>div').eq(4).offset().top
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        if(wd > 1024){
            if(now>=bnr1-250){
                img.css('animation-name','in')
            }else{
                img.css('animation-name','out')
            }
        }
    });

    // 배너2
    var bnr2 = $('.bnr02')
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        bnr2.css('margin-left', (2600-now)*0.03+'%');
       
    });
    
    // 컨텐츠3
    var artT = $('.cnt03 .artTop');
    var art = $('.cnt03 article');
    art.click(function(){
        var ind = $(this).index();
        var img = $(this).find('.image').attr('data-img');
        artT.css({
                animationName: 'shake' 
        });
        $(this).mouseleave(function(){
            artT.css({
                animationName: 'none' 
            });
        });
    

        art.removeClass('on');
        $(this).addClass('on');
        artT.find('.image').css({
            backgroundImage : img
        });
        $('.txtGroup').animate({
            marginTop : -num2 * ind + 'px'
        },400);
        
    });
    
    


});