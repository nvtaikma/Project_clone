var test = [
    { id: 1, input: "https://cdn.shopify.com/e.jpg?v=15", size: 15 },
    { id: 2, input: "https://cdn.shopify.com/e.jpg?v=152", size: 27 },
    { id: 3, input: "https://cdn.shopify.com/e.jpg?v=32", size: 32 },
    { id: 4, input: "https://cdn.shopify.com/e.jpg?v=50", size: 50 },
    { id: 5, input: "https://cdn.shopify.com/e.jpg?v=24", size: 24 },
    { id: 6, input: "https://cdn.shopify.com/e.jpg?v=35", size: 35 },
  ];
  
  // Lọc và in ra phần tử có size lớn hơn 30.
console.log(test);
const result = test.filter(test => test.size >30);
console.log(result);

let forx = [];
let for2 = [];

for(var i = 0; i < test.length;i++){
    // cách 1
    // if(test[i].size > 30){
    //     forx.push(test[i]);
    // }
    // cách 2
    (test[i].size > 30) ? forx.push(test[i]) : for2.push(test[i]);
}
console.log("forx",forx);
console.log("for2",for2);
