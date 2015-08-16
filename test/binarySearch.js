//非递归实现
function binarySearch(data,dest){
	var h=data.length-1;
	var l=0;
	while(l<=h)
	{
		var m=Math.floor((l+h)/2);
		if(data[m]==dest)
			return m;
		if(data[m]<dest)
		{
			l=m+1;
		}
		else
			h=m-1;
	}
	return false;
}
//递归实现
function binarySearch(data,dest,start,end){
	var start=start||0;
	var end=end||(data.length-1);
	var m=Math.floor((start+end)/2);
	if(data[m]=dest)
		return m;
	if(data[m]<dest)
		return binarySearch(data,dest,m+1,end);
	else
		return binarySearch(data,dest,start,m-1);
	return false;
}