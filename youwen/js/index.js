$(function(){
	$('#fullpage').fullpage({
    	verticalCentered:false,
     	css3:true,
     	scrollBar: true,
     	navigation: true,
      	afterRender: function(){
          	wow = new WOW({
              	animateClass: 'animated',
          	});
        wow.init();
      	}
 	}); 
 	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    
    $('.father li').each(function(index){
		$(this).on('mouseenter',function(){
			$('.father .active').removeClass('active');
			$(this).addClass('active');
			$('.son>ul').eq(index).show().siblings('.son>ul').hide();
			$('.box').hide();
			$('.sons').eq(index).find('.box').eq($('.son ul:visible').find('.active').index()).show().siblings().hide();
		})
	});
	$('.son ul li').each(function(index){
		$(this).on('mouseenter',function(){
			$('.son .active:visible').removeClass('active');
			$(this).addClass('active');
			$('.box').eq(index).show().siblings('.box').hide();
		});
	});
	
	
	$("form").on("submit",function(){
		return false;
	});
	$("#submit1,.index_freeOrder").click(function(){
		showModel();
		$(window).resize(function(){
			showModel();
		});
	});
	function showModel(){
		$(".model").fadeIn();
		$(".mask").fadeIn();
		var vW=$(window).width();
		var vH=$(window).height();
		var mW=$(".model").outerWidth();
		var mH=$(".model").outerHeight();
		$(".model").css({'left':(vW-mW)/2+"px",'top':(vH-mH)/2+"px"});
	}
	$(".close").click(function(){
		$(".model,.mask").css("display","none");
	});
	
	$(".rightmenu1").on("mouseover",function(){
		$(".rightmenuimg").fadeIn();
	}).on("mouseout",function(){
		$(".rightmenuimg").fadeOut();
	});
	$(".rightmenu3").on("click",function(){
		$("body").scrollTop(0);
	});
	
	$(window).scroll(function(){
	　　var scrollTop = $(this).scrollTop();
	　　var scrollHeight = $(document).height();
	　　var windowHeight = $(this).height();
	　　if(scrollHeight-(scrollTop + windowHeight)<100){	
		$("#form1").css({"bottom":"60px"});
	　　}
		else{
		$("#form1").css({"bottom":"0"});
		}
	});
	
	$("html").css("overflow","hidden");
	
	$(window).load(function (){ 
		$("body").scrollTop(0); 
	});
	
});