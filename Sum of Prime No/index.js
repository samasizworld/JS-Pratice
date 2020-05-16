const ofRange=(start,end)=>{
    const arr =[];
    for(let i=start;i<end;i++){
        arr.push(i)
    }
    return arr;
};



const passArray= ()=>{
  a=ofRange(1,20);
  return a.filter(test_prime);
    function test_prime(n)
    {

  if (n===1)
  {
	return null;
  }
  else if(n === 2)
  {
	return `2`;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
		  return null;
      }
    }
	
	return `${n}`;
  }
}
    
}

const primeSum=()=>{
  b=passArray();
  console.log(`${b} are array of Prime Number`);
  let sum =0;
  for(let i=0;i<b.length;i++){
    sum=sum+b[i];
  }
  console.log(`The sum is ${sum}`);
}
primeSum();