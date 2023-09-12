/*
Bài 3: Cho một dãy số [1, 25, 7, -7, -3, 12, -22, 0]
  1. Sử dụng JavaScript để sắp xếp dãy số theo thứ tự tăng dần.
	Kết quả: [-22, -7, -3, 0, 1, 7, 12, 25]
  2. Sắp xếp dãy số tăng dần theo giá trị tuyệt đối (trong trường hợp số 2 số bằng nhau thì số âm được ưu tiên đứng trước)
    Kết quả: [0, 1, -3, -7, 7, 12, -22, 25]
*/

var array = [1, 25, 7, -7, -3, 12, -22, 0,12];

// 1.
// tangDan = array.sort(function (a, b) {return a - b;});
// Nếu giá trị trả về của hàm Function(a,b) < 0, giá trị a sẽ đứng trước b
// Nếu giá trị trả về = 0, a và b bằng nhau
// Giá trị trả về > 0, a đứng sau b
// console.log("dãy số theo thứ tự tăng dần",tangDan);

// 2.
console.log(array.sort(function(a,b){
  // return Math.abs(a)-Math.abs(b);
  if(Math.abs(a) - Math.abs(b) === 0){
    return a-b;
  }
  return Math.abs(a)-Math.abs(b);
}));








