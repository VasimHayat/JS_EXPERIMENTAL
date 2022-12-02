// Selection Sort using brute forece Technique..
function sort(itemArray){
     let itemLen = itemArray.length;
     for(let i=0;i<itemLen;i++){  // loop run n times 
        let minIndex = i;
        let currentItem = itemArray[i];
        for(let j=i+1;j<itemLen;j++){           // loop run (n-k) times     
             if(itemArray[j]<itemArray[minIndex]){
                minIndex = j;                           // n-k  Times
             }
        }
        
        itemArray[i] = itemArray[minIndex];
        itemArray[minIndex] = currentItem; 
     }
     return itemArray;
}

console.log(sort([4,2,10,5,14]));