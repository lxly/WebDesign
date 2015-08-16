var isSupported=document.implementation.hasFeature("HTMLEvents","2.0");
var isSupported=document.implementation.hasFeature("HTMLEvents","2.0");


var isSupported=document.implementation.hasFeature("UIEvent","3.0");

EventUtil.addHandler(window,"load",function(event){
	alert("Loaded!");
});

EventUtil.addHandler(window,"load",function(event){
	alert("Loaded!");
});

EventUtil.addHandler(window,"load" function(){
	var image=document.createElement("img");
	EventUtil.addHandler(image,"load",function(event){
		event=EventUtil.getEvent(event);
		alert(EventUtil.getTarget(event).src);
	});
	document.body.appendChild(image);
	image.src="smile.gif";
});

var isSupported=document.implementation.hasFeature("FocusEvent","3.0");
var isSupported=document.implementation.hasFeature("FocusEvent","3.0");


var div=document.getElementById("mydiv");
EventUtil.addHandler(div,"click",function(event){
	event=EventUtil.getEvent(event);
	var pageX=event.pageX;
	var pageY=event.pageY;
	if(pageX===undefined){
		pageX=event.clientX+(document.body.scrollLeft||document.documentElement.scrollLeft);
	}
	if(pageY===undefined){
		pageY=event.clientY+(document.body.scrollTop||document.documentElement.scrollTop);
	}
});