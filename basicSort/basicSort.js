// bubble sort (sắp xếp nổi bọt)
const bubbleSort = (array)=>{
    for(let i=0;i<array.length;i++){
        for(let j = array.length -1 ;j>i;j--){
                if(array[j] < array[j-1])
                {
                    let temp = array[j];
                        array[j] = array[j-1];
                        array[j-1] = temp;
                }
        }
    }
    return array;
}


function selectionSort(array){
    let min;
    for(let i = 0;i<array.length-1;i++){
         min = i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[min])
                min = j;
        }
        if(i !== min){
            let temp = array[i];
                array[i] = array[min];
                array[min] = temp;
        }
    }
    return array;
}

function insertionSort(array){
    for (let i = 1;i< array.length;i++){
        let temp = array[i];
        for(var j = i -1;j > -1 && array[j] > temp;j--){
                array[j+1] = array[j]
        }
        array[j+1] = temp;
    }
    return array;
}

let myArray = [4,7,8,2,5,1,9];