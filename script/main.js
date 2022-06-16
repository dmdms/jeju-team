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

function setDraggable(draggable) {
    // 마우스 드래그로 지도 이동 가능여부를 설정합니다
    map.setDraggable(draggable);    
}

function FaqBox__init() {
    $('.faq-box > ul > li').click(function() {
      let $this = $(this);
      
      $this.siblings('.hover').find(' > .faq-box__answer').stop().slideUp(300); 
      $this.siblings('.hover').removeClass('hover');
      
      if ( $this.hasClass('hover') ) {
        $this.find(' > .faq-box__answer').stop().slideUp(300); 
        $this.removeClass('hover');
      }
      else {
        $this.find(' > .faq-box__answer').stop().slideDown(300); 
        $this.addClass('hover');
      }
    });
    
    $('.faq-box__answer').click(function() {
      return false;
    });
}
  
  FaqBox__init();


