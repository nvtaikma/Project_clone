/*
Bài 2: Sử dụng vòng lặp để xóa phần tử trùng lặp trong mảng.
input: [ 25, 50, 43, 36, 31, 26, 24, 19, 28, 24,  4, 18, 16, 48, 47, 49, 42, 15,  3, 16 ]
output: [ 25, 50, 43, 36, 31, 26, 24, 19, 28,  4, 18, 16, 48, 47, 49, 42, 15,  3 ]
*/

let array = [ 25, 50, 43, 36, 31, 26, 24, 19, 28, 24,  4, 18, 16, 48, 47, 49, 42, 15,  3, 16 ];

// arr.sort(function(a,b){ return a -b})
// console.log(arr);

// cách 1
const uniqueSet = new Set(array);
const backToArray = [...uniqueSet];
console.log(backToArray);


// cách 2:

// const newSet = Array.from(new Set(array));

// console.log(newSet);

// cách 3

// let arrayNew = array.reduce(function (accumulator, element) {
    
//     if (accumulator.indexOf(element) === -1) {
//       accumulator.push(element)
//     }
//     return accumulator
//   }, [])
  
//   console.log(arrayNew)

  //cách 4

    // let result = [];
    // result = array.filter(function(element){
    // return result.includes(element) ? '' : result.push(element)
    // });

    // console.log("result =",result);