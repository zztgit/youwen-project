$(function(){
	new WOW().init();
	
	$(".rightmenu1").on("mouseover",function(){
		$(".rightmenuimg").fadeIn();
	}).on("mouseout",function(){
		$(".rightmenuimg").fadeOut();
	});
	$(".rightmenu3").on("click",function(){
		$("body").scrollTop(0);
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
	
	$(function(){
		$(".box1 li").click(function(){
			var i=$(this).index();
			$(".box2 div").eq(i).addClass("now").siblings().removeClass("now");
		});
	});
});