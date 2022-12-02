function sort(itemArray){
    let len = itemArray.length; 
    for(let i=0;i<len;i++){
         for(let j=0;j<len-i;j++){
            let iItem=itemArray[j]; 
            if(itemArray[j]>itemArray[j+1]){
                itemArray[j] = itemArray[j+1];
                itemArray[j+1]=iItem;  
            }
         }
         if(i == 1){
            console.log(itemArray)
         }
         
    }
    return itemArray;
}

console.log(sort([11, 37, 28, 39, 5]));