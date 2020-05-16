function test_prime(n)
{

  if (n===1)
  {
	console.log('1 is not prime');
	return false;
  }
  else if(n === 2)
  {
	console.log('2 is prime');
	return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
		  return `${n} is not prime beacause it is factor of ${x} and ${n/x}`;
      }
    }
	console.log(`${n} is prime`);
	return " prime";
  }
}

console.log(test_prime(21));