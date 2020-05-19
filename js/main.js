$(function(){
    $(' #main_gnb .info').hide();

    $('#main_gnb .depth1 > li').hover(
        function(){
            $(this)
                .children('.info')
                .stop().fadeIn();
        },
        function(){
            $('#main_gnb .info').stop().fadeOut();
        }
    )
});