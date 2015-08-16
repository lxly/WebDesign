// function find(str){
	
// 	for(var i=0;i<str.length;i++)
// 	{
// 		var flag=0;
// 		for(var j=i+1;j<str.length;j++)
// 		{
// 			if(str[j]==str[i])
// 			{
// 				flag=1;
// 				document.writeln(flag);
// 				document.write(str[i]);
// 				break;
// 			}			
// 		}
// 		if(flag==0)
// 			// document.write(i);
// 			return str[i];

// 	}
// }
function find(str){
	var res=new Array();
	for(var i=0;i<str.length;i++)
	{
		var temp=str.charAt(i).charCodeAt()-'a'.charCodeAt();
		// console.log(res);
		if(res[temp]&&res[temp]!=-1)
		{
			res[temp]=-1;
		}
		else{
			res[temp]=i;
		}
		
	}
	// console.log(res);
	var min=str.length-1;
	for(var j=0;j<res.length;j++)
	{

		if(res[j]>=0&&res[j]<min)
		{
			
				min=res[j];
		}
		// console.log(res[j]);
	}
	return str[min];
}

var str="abcbad";
alert(find(str));