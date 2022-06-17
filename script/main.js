$(function(){
    scrollmenu();
    popup();
    slide();
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
        $('.slider').bxSlider();
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


