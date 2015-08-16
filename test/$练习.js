$.extend({
	add:function(a,b){
		return a+b;
	}
})
$.add(5,8);//return 13

$.fn.extend({
	clickwhile:function(){
		$(this).click(function(){
			alert($(this).value());
		})
	}
})
$("input").clickwhile();//当点击输入框时会出现该对象的value值