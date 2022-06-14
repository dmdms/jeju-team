$(function(){
    scrollmenu();
    popup();
})

function scrollmenu(){
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('header').addClass('active');
            $("#gnb").css('color','#333333');
            $(".member").css('color','#333333');
            $(".logo").removeClass("d-none");
        } else{
            $('header').removeClass('active');
            $("#gnb").css('color','white');
            $(".member").css('color','white');
            $(".logo:last").addClass("d-none");
        }
    })
}
function popup(){
    $(".cart-icon").click(function(){
        $("#modal").show();
    });
    $("#modal button#btn2").click(function(){
        $("#modal").hide();
    });
}