const merge = (array1,array2)=>{
    let i = j = 0;
    let combined = [];
    while(i < array1.length && j < array2.length){
        if(array1[i] < array2[j]){
            combined.push(array1[i]);
            i++;
        }
        else{
            combined.push(array2[j]);
            j++;
        }
        while(i < array1.length){
            combined.push(array1[i]);
            i++;
        }
        while(j < array2.length){
            combined.push(array2[j]);
            j++;
        }
    }
    return combined;
}
const mergeSort = (array)=>{
    if(array.length === 1) return array;
    let indexMiddle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0,indexMiddle));
    let right = mergeSort(array.slice(indexMiddle));
    return merge(left,right);
}
let arr1 = [1,2,4];
let arr2 = [3,9,7];

console.log(merge(arr1,arr2));
console.log(mergeSort([3,2,6,1,9]));