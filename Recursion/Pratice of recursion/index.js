const countNum =count=>{
    console.log(count);
    // loop this until count becomes zero
    for(i=count;i!=0;){
    countNum(count-1);
    }
}
countNum(10);