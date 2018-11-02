const i = 8;
function helloWorld()
{
	if(0 == '0' && "0" == '0')
	{
		var s = ["Hello", "World", '!', 0];
		var len = s.length;
		var j = s;
		for(let s = 0; s < len; s++)
		{
			console.log(j[s]);
		}
		let i = 5;
		for(let i = 0; i < len; i++)
		{
			console.log(s[i]);
		}
		console.log(i);
	}
	console.log(i);
}