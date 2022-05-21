$(function(){
    // 검색으로 찾기 버튼
    $('.boxLeft').click(function(){
        $(this).toggleClass('on')
    });
    $('.ser li').click(function(){
        var txt = $(this).text()
        $('.boxLeft h4').text(txt);
    });

    // 아코디언 메뉴
    var li = $('.mapBox li');
    var tab = $('.tab li');
    li.click(function(){
        li.removeClass('on');
        $(this).addClass('on');
    });
    tab.click(function(){
        tab.removeClass('on');
        $(this).addClass('on');
    });
    
});