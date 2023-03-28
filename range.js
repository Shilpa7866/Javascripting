function range(start, end, step){
       
	const a=[];


	if (start == null || end == null || step == null){
		console.log('undefined arguments or missing arguments')
		return a;
	}
	else if ( start > end ){
            console.log('incorrect parameter start > end , user passed start=',start,' and end=',end);	
	}else if (step == 0 || step < 0 ){
		console.log('incorrect parameter step, user passed step=', step, ' returning empty array');
		return a;
	}

	for (var i=start; i<=end; i+=step){
		console.log(i);
	}
}

console.log('calling range(0,10,2)');
range(0,10,2);
console.log('calling range(10,30,5)');
range(10,30,5);
console.log('calling range(-5,2,3)');
range(-5,2,3);

console.log('calling range(10,5,5)');
range(10,5,5);

console.log('calling range(0,10,0)');
range(0,10,0);

console.log('calling range(0,10,-1)');
range(0,10,-1);

console.log('calling range(0,10,)');
range(0,10,);

console.log("test");


