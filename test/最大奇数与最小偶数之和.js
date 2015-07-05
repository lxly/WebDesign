function sum(arr){

	if(Object.prototype.toString.call(arr).slice(8,-1)!='Array')
		return null;
	var even,odd;
	for(var i=0;i<arr.length;i++){
		if(arr[i]%2==0)
		{
			if(even!=null)
			{
				if(even>arr[i])
					even=arr[i];
			}
			else{
				even=arr[i];
			}
		}
		else{
			if(odd!=null)
			{
				if(odd<arr[i])
					odd=arr[i];
			}
			else{
				odd=arr[i];
			}
		}
	}
	if(even!=null&&odd!=null)
	return even+odd;
	else
		return null;
}

var arr=[2,2,2,2];
// document.write(sum(arr));
console.log(Object.prototype.toString.call(arr).slice(8,-1));