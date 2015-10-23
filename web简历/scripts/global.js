
$(function(){
	//左侧导航栏与右侧内容交互：点击左侧导航栏，改变右侧内容
	$('#tab-menu > li').click(function(){
		if(!$(this).hasClass('selected')){
		$('#tab-menu > li').removeClass('selected');		
        $(this).addClass('selected');
        $('#tab-content div.tab').slideUp("normal");        
        $('#tab-content div.tab:eq(' + $('#tab-menu > li').index(this) + ')').slideDown("normal");    
        };
       
	});
	//右侧内容中导航栏与下面内容交互：点击上面导航栏，改变下面对应内容
	$('.inner-tab li a').click(function(){
		$('.panes > div').attr("style","display:none");
		$('.panes > div:eq('+$('.inner-tab li a').index(this)+')').attr("style","display:block");
		$('.inner-tab li a').removeClass("selected");
		$(this).addClass("selected");
	});
});


