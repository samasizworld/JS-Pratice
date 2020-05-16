const fiboSeries =(num)=>{
    const arr =[];
    let fn =0, sn=1;
    //console.log(arr.push(fn,sn));//gives no of elements
   // console.log(arr);
    arr.push(fn,sn);

    for (let i=2;i<num;i++){
        let tn=fn+sn;
        arr[i]=tn;
        fn=sn;
        sn=tn;

    }
    return arr;
};


console.log(fiboSeries(6));