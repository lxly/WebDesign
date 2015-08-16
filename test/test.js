function binarySearch(start,end,arr,res)
{
	var start=start || 0,
	end=end || arr.length-1;
	var middle=Math.floor((start+end)/2);
	while(start<=end)
	for(var i=0;i<arr.length;i++)
	{
		if(res==arr[middle])
			return middle;
		else if(res<arr[middle])
			end=middle-1;
		else
			start=middle+1;
	}
	return false;
}