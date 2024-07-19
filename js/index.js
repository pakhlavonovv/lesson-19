// 43 misol

// function sanitizeString(str) {
//     let result = str.replace(/[!@#]/g, '');
//     console.log(result)
// }

// console.log(sanitizeString("he@llo! w0rld#")); // "hello0rld"

// 44 misol

// function separatePositivesAndNegatives(arr) {
//     let positive = []
//     let negative = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > i){
//             positive.push(arr[i])
//         } else{
//             negative.push(arr[i])
//         }
//     }
//     return {positive, negative}
//  }
 
//  console.log(separatePositivesAndNegatives([1, -2, 3, -4, 5])); 

// 45 misol

// function firstUniqueElement(arr) {
//     let new_arr = []
//     for(let i = 0; i < arr.length; i++){
//         let count = 0
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] == arr[j]) {
//                 count++
//             }
//         }
//         if(count == 1){
//             console.log(arr[i])
//         }
//     }
// }
// console.log(firstUniqueElement([2, 3, 4, 2, 3, 5, 4])); // 5

//  46 misol

// function elementCounts(arr) {
//    let obj = {}
//    arr.forEach(element => {
//         if(obj[element]){
//             obj[element]++
//         } else{
//             obj[element] = 1
//         }
//    }); 
//    return obj
// }

// console.log(elementCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// { 1: 1, 2: 2, 3: 3, 4: 4 }

// 47 misol


// function swapElements(arr, k) {
//     let a = arr.splice(k, 1)
//     arr.push(+a.join(""))
//     console.log(arr)
// }

// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]