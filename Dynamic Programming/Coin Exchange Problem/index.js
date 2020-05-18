const matrixCreatorForPartition =(rows,columns)=>{
    const arr = [];//1D array
    //2D array by creating rows of array but we can specify columns by looping
    for(let k=0;k<rows+1;k++){
        arr[k]=[];
    }

for( let i=0;i<rows+1;i++){
    for(let j=0;j<columns+1;j++){
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
console.log(arr);
return arr[rows][columns];
};


const Partition=(number)=>{
mat = matrixCreatorForPartition(number,number);
const digits=[];
for(let i=1;i<number+1;i++){
    digits.push(i);
}
console.log(`The element "${number}" can be partitioned by ${mat} ways by using "${digits}"`);
console.log(`Let's see the magic!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
                const printPartitions=(arr, size)=> {
                    for (let i = 0; i < size; i++)
                       console.log(arr[i]);
                    console.log("\n");
                }
                const  makePartition= num =>{
                    let arr=[num];
                    let index = 0;
                    arr[index] = num;
                    while (true) {
                       printPartitions(arr, index + 1); //recursive call
                       let next_value = 0;
                       while (index >= 0 && arr[index] == 1) {
                          next_value += arr[index];
                          index--;
                       }
                       if (index < 0)
                          return;
                          arr[index]--;
                          next_value++;
                       while (next_value > arr[index]) {
                          arr[index + 1] = arr[index];
                          next_value = next_value - arr[index];
                          index++;
                       }
                       arr[index + 1] = next_value;
                       index++;
                    }
                 }
                makePartition(number);
            };
Partition(10);

