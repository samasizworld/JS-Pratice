const fact=(num)=>{
    if(num<1){
        return 1;
    }
    else{
        for(let i=1;i<=num;){    
    return num*fact(num-1)
    }
}
}
console.log(fact(-1));