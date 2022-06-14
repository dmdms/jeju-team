
$(function(){
    scrollmenu();
    tabMenu();
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

function tabMenu(){
    $(".t-icon1").click(function(){
        $(".theme-img1").show();
        $(".theme-img2").hide();
        $(".theme-img3").hide();
        $(".theme-img4").hide();
        $(".theme-info1").show();
        $(".theme-info2").hide();
        $(".theme-info3").hide();
        $(".theme-info4").hide();
    });
    $(".t-icon2").click(function(){
        $(".theme-img1").hide();
        $(".theme-img2").show();
        $(".theme-img3").hide();
        $(".theme-img4").hide();
        $(".theme-info1").hide();
        $(".theme-info2").show();
        $(".theme-info3").hide();
        $(".theme-info4").hide();
    })
}