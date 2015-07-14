window.onload=function(){
	var mainClass=document.getElementsByClassName("mainClass");
	var subClass=document.getElementsByClassName("subClass");
	var classic=document.getElementById("classic");

	showMultiLevelCategary(mainClass,subClass);
	showClassicBookInfo(classic);
	showSlides("#board");
}

function showMultiLevelCategary(firstLevel,secondLevel){
	var first=firstLevel;
	var second=secondLevel;
	for(var i=0;i<first.length;i++){
		first[i].index=i;
		second[i].style.top=parseInt(second[0].style.top)+i*parseInt(first[i].clientHeight)+"px";
		first[i].onmouseover=function(){
			second[this.index].style.display="block";
		}
		first[i].onmouseout=function(){
			second[this.index].style.display="none";
		}
	}
}

function showClassicBookInfo(classic){
	var abook=classic.getElementsByClassName("oneBook");
	$(abook).hover(function(){
		var info=this.getElementsByClassName("bookInfo")[0];
		$(info).stop(true,true).animate({left:"0px"},"normal");
	},function(){
		var info=this.getElementsByClassName("bookInfo")[0];
		$(info).stop(true,true).animate({left:"-100%"},"normal");
	});
}

function showSlides(slideWindow){
	var windowWidth=$(slideWindow).width();//幻灯片的宽度
	var slideNum=$(slideWindow).find("ul li").length;
	addUpLayer();
	var imgList=$(slideWindow+" ul");//有空格
	var numSpans=$(slideWindow+" .numTip span");
	var index=0;
	imgList.css("width",slideNum*windowWidth);//让所有的<li>元素都float在一行，实现左右移动
	setUpLayer();

//自动播放功能
var interval;
$(slideWindow).hover(function(){
	$(slideWindow+" .leftRight").css("opacity",0.2);
	clearInterval(interval);
},function(){
	$(slideWindow+" .leftRight").css("opacity",0);
	interval=setInterval(function(){
		index++;
		if(index==slideNum)
			index=0;
		showEachPic(index);
	},4000);
}).trigger("mouseleave");


function addUpLayer(){
	//添加幻灯片下方的数字提示区域，以及上一张、下一张按钮
	var upLayer="<div class='numTip'>";
	for(var i=0;i<slideNum;i++){
		upLayer+="<span>"+(i+1)+"</span>";
	}
	upLayer+="</div><div class='leftRight leftOne'></div><div class='leftRight rightOne'></div>";
	$(slideWindow).append(upLayer);
}

function setUpLayer(){
	numSpans.mouseenter(function(){
		index=numSpans.index(this);
		showEachPic(index);
	});

	$(slideWindow+" .leftRight").hover(function(){
		$(this).css("opacity",0.4);
	},function(){
		$(this).css("opacity",0.2);
	});

	$(slideWindow+" .leftOne").click(function(){
		--index;
		if(index==-1){
			index=slideNum-1;			
		}
		showEachPic(index);
	});
	$(slideWindow+" .rightOne").click(function(){
		++index;
		if(index==slideNum){
			index=0;
		}
		showEachPic(index);
	});
}

function showEachPic(index){
	var leftOffset=-index*windowWidth;
	imgList.stop(true,true).animate({"left":leftOffset},300);
	numSpans.stop(true,true).animate({"opacity":0.5},300)
		.eq(index).stop(true,true).animate({"opacity":1},300);
}

}