//This approach mutuates the original arrays, which wasn't allowed
//so I re-implemented below

// function merge(arr1, arr2) {
//     let returnArr = [];
//     while(arr1.length && arr2.length){
//         if (arr1[0] < arr2[0]) {
//             returnArr.push(arr1[0]);
//             arr1.shift(arr1[0])
//         }
//         else {
//             returnArr.push(arr2[0]);
//             arr2.shift(arr2[0]);
//         }
//     }
//     for (let num of arr1){
//         returnArr.push(num)
//     }
//     for (let num of arr2){
//         returnArr.push(num)
//     }
//     return returnArr;
// }

function merge(arr1, arr2) {
    let returnArr = [];
    let i = 0;
    let j = 0;
    while((i < arr1.length) && (j < arr2.length)){
        if (arr1[i] < arr2[j]) {
            returnArr.push(arr1[i]);
            i++
        }
        else {
            returnArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length){
        returnArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        returnArr.push(arr2[j]);
        j++;
    }
    return returnArr;
}

function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));

    return merge(left, right);
}

module.exports = { merge, mergeSort};

