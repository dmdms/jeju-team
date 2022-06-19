$(function(){
    scrollmenu();
    popup();
    slide();
    tabMenu();
    mobileMenu();
})

function scrollmenu(){
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('header').addClass('active');
            $("#gnb").css('color','#333333');
            $(".member").css('color','#333333');
            $(".logo").removeClass("d-none");
            $(".fa-bars").css('color','#333333');
            $(".m-menu").css('top','6%');
        } else{
            $('header').removeClass('active');
            $("#gnb").css('color','white');
            $(".member").css('color','white');
            $(".logo:last").addClass("d-none");
            $(".fa-bars").css('color','white');
            $(".m-menu").css('top','0');
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

function slide(){
    $(document).ready(function(){
        $('.slider').bxSlider({
            auto : true,
        })
      });
}
function tabMenu(){
        $(".tab1").click(function(){
            $(".spot-list1").show();
            $(".spot-list2").hide();
            $(".spot-list3").hide();
            $(".spot-list4").hide();
        });
        $(".tab2").click(function(){
            $(".spot-list2").show();
            $(".spot-list1").hide();
            $(".spot-list3").hide();
            $(".spot-list4").hide();
        });
        $(".tab3").click(function(){
            $(".spot-list3").show();
            $(".spot-list2").hide();
            $(".spot-list1").hide();
            $(".spot-list4").hide();
        });
        $(".tab4").click(function(){
            $(".spot-list4").show();
            $(".spot-list2").hide();
            $(".spot-list3").hide();
            $(".spot-list1").hide();
        });
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
    


