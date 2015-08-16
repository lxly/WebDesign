$(function(){
	showSlides(".slides",".num");
});

function showSlides(slideWindow,numSpan){
	var slideWidth=$(slideWindow).width();
	var slideNum=$(slideWindow).find("ul li").length;
	var imgList=$(slideWindow+" ul");
	var numSpan=$(slideWindow+" "+numSpan+" span");
	var index=0;

	var interval;

	$(slideWindow).hover(function(){
		clearInterval(interval);
	},function(){
		interval=setInterval(function(){
			index++;			
			if(index==slideNum) index=0;
			showPic(index);
		},3000)
	}).trigger("mouseleave");

	numSpan.click(function(){
		index=numSpan.index(this);
		showPic(index);
	});


	function showPic(index)
	{
		var leftOffset=-index*slideWidth;
		imgList.stop(true,false).animate({left:leftOffset},300);
		numSpan.removeClass("current").eq(index).addClass("current");
	}
}