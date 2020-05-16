const isPalindrome = num =>{
     let reverse =0;
     number = parseInt(num);
     let storeVar = number;
    for (let i=number ; i>0 ;){
        let rem =i%10;
        i= parseInt(i/10);
        reverse =(reverse*10)+rem;
        
    }

    if(reverse == storeVar){
        return `${num} is palindrome`;
    }
    else{
        return`${num} is not palindrome`;
    }
};


console.log(isPalindrome(11));
