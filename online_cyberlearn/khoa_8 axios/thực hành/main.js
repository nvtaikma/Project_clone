console.log("a");

setTimeout( () => {
    console.log("b");
}, 2000);

console.log("c");

// setTimeout hàm bất đồng bộ, khi đó sẽ log ra a và c đợi 2s sau mới log ra b