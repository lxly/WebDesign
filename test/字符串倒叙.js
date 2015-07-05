function reversestr(str){
	var str1=str.split('').reverse().join('');
	return str1;
}

var str1='abcdefg';
console.log(reversestr(str1));