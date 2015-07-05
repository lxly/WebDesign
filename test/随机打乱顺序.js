function randomSort(arr){
	if(!Object.prototype.toString.call(arr).slice(8,-1)=='Array')
		return null;
	var arr1=[arr.length];
	len=arr.length;	
	for(var i=0;i<len;i++)
	{		
		var j=Math.floor(Math.random()*arr.length);
		arr1[i]=arr[j];		
		arr.splice(j,1);
	}	
	return arr1;
}

var arr2=[1,2,3,4,5];
console.log(randomSort(arr2));


/*while(arr.length)
	{
		var i=Math.floor(Math.random()*arr.length);
		arr1.push(arr[i]);
		arr.splice(i,1);
	}*/