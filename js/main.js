$(function(){
    scrollmenu();
    heart();
    popup();
    tabMenu();
    result();
    resultDelete();
    mobileMenu();
})
function popup(){
    $(".cart-icon").click(function(){
        $("#modal").fadeIn("fast");
    });
    $("#modal button").click(function(){
        $("#modal").fadeOut("fast");
    });
}
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
function heart(){
    $(".slide-text > i").click(function(){
        $(this).removeClass("fa-reguler");
        $(this).addClass("fa-solid");
        $(this).css('color','#e63462');
    })
}
function tabMenu(){
    $(".t-icon1").click(function(){
        $(".theme-img1").fadeIn();
        $(".theme-img2").hide();
        $(".theme-img3").hide();
        $(".theme-img4").hide();
        $(".theme-info1").fadeIn();
        $(".theme-info2").hide();
        $(".theme-info3").hide();
        $(".theme-info4").hide();
    });
    $(".t-icon2").click(function(){
        $(".theme-img1").hide();
        $(".theme-img2").fadeIn();
        $(".theme-img3").hide();
        $(".theme-img4").hide();
        $(".theme-info1").hide();
        $(".theme-info2").fadeIn();
        $(".theme-info3").hide();
        $(".theme-info4").hide();
    })
    $(".t-icon3").click(function(){
        $(".theme-img1").hide();
        $(".theme-img2").hide();
        $(".theme-img3").fadeIn();
        $(".theme-img4").hide();
        $(".theme-info1").hide();
        $(".theme-info2").hide();
        $(".theme-info3").fadeIn();
        $(".theme-info4").hide();
    });
    $(".t-icon4").click(function(){
        $(".theme-img1").hide();
        $(".theme-img2").hide();
        $(".theme-img3").hide();
        $(".theme-img4").fadeIn();
        $(".theme-info1").hide();
        $(".theme-info2").hide();
        $(".theme-info3").hide();
        $(".theme-info4").fadeIn();
    })
}
function result(){
    $(".title > .result-down").click(function(){
        if(! $(this).hasClass("rotate")){
            $(this).addClass("rotate");
            $(this).next().children(".result").slideDown("fast");
            $(this).parent().css("background","#003893");
            $(this).parent().css("color","white");
            $(this).parent().css("marginBottom","150px");
        }else{
            $(this).removeClass("rotate");
            $(this).next().children(".result").slideUp("fast");
            $(this).parent().css("background","white");
            $(this).parent().css("color","inherit");
            $(this).parent().css("marginBottom","0px");
        }
    })
}
function resultDelete(){
    $(".result-delete").click(function(){
        $(this).prev().children(".result").css("display","none");
        $(this).parent().css("marginBottom","-150px")
    })
}
function mobileMenu(){
    $(".burger > li:first").click(function(){
        if(! $(this).hasClass("d-none")){
            $(".m-menu").show();
            $(this).addClass("d-none");
            $(this).next().removeClass("d-none");
        }
    });
    $(".burger > li:last").click(function(){
        if(! $(this).hasClass("d-none")){
            $(".m-menu").hide();
            $(this).addClass("d-none");
            $(this).prev().removeClass("d-none");
        }
    });
}