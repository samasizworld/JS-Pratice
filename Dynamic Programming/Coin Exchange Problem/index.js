const matrixCreatorForPartition =(rows,columns)=>{
    const arr = [];//1D array
    //2D array by creating rows of array but we can specify columns by looping
    for(let k=0;k<rows;k++){
        arr[k]=[];
    }

for( let i=0;i<rows;i++){
    for(let j=0;j<columns;j++){
        //Initialize first rows 
        if(i==0&&j==0){
            arr[i][j]=1;
        }
       else if(i==0&&j==j){
           arr[i][j]=0;
       }
        else{
            if(i>j){
                arr[i][j]=arr[i-1][j];
            }
            else{
                arr[i][j]=arr[i-1][j]+arr[i][j-i]
            }
        }
    }
}
return arr;
};


const positionToSelectOfMatrix=(r,c)=>{
    mat=matrixCreatorForPartition(6,6);
    for(let i=0;i<6;i++){
        for(let j=0;j<6;j++){
            if(i==r&&j==c){
                console.log(`On the Matrix, r = ${i} c= ${j} ,there is element ${mat[i][j]} so that can partition number ${r} by ${mat[i][j]} ways`);
                console.log(`Let's see this magic`);
                const noOfDigits=[];
                for(let k=0;k<r+1;k++){
                    noOfDigits.push(k);
                }
                console.log(`The  element ${mat[i][j]} can be made by this ${noOfDigits}`);
                
                break;
            }
        }
    }
    
};
positionToSelectOfMatrix(5,5);

