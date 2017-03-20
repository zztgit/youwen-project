$(function(){
	$("#phone").blur(function(){
	if((/^1\d{10}$/).test($("#phone").val())){
		$("#divphone").html("<span class='tips_true'>输入正确</span>");
	}else{
		$("#divphone").html("<span class='tips_false'>输入错误</span>");
	}
});
$("#name").blur(function(){
	if((/^[\u4e00-\u9fa5]{2,4}$/).test($("#name").val())){
		$("#divname").html("<span class='tips_true'>输入正确</span>");
	}else{
		$("#divname").html("<span class='tips_false'>输入错误</span>");
	}
})

})
