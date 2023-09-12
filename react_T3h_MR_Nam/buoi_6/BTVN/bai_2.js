/*
Bài 2: Viết chương trình đệ quy tính tổng các số từ 1 đến n, với n là một số cho trước. Ví dụ:
	n=0 -> 0
	n=1 -> 1
	n=3 -> 6
	n=10 -> 55
*/
// vòng lặp
// function sum(n){
//     var sum1 = 0;
//     for(let i=0; i<=n; i++){
//         sum1 += i;
//     }
//     console.log(sum1); 
// }
// sum(4);

// đệ quy

function sumTo(n) {
    if (n === 0) return 0;
  
    return n + sumTo(n - 1);
  }
//   sumTo(10);
console.log("tổng là",sumTo(5));