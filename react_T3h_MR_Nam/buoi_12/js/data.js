let data = [
    {
        id: 1,
        img: "https://lzd-img-global.slatic.net/g/ff/kf/Sdda60b08dcfd4c61ba0cdfaea259abd9H.jpg",
        Title:  "Giày New Blance NB 550 White and Green",
        description: "giày thể thao sneaker hàng chuẩn like auth, fullbox, trắng xanh cực chất",
        price: 123,
        Cost:321 ,
    },
    {
        id: 2,
        img: "https://lzd-img-global.slatic.net/g/p/ec271b3267b826a1347b0d04ee7f8b7d.jpg_720x720q80.jpg_.webp",
        Title:  "Giày Nam Nike Zoom Pegasus 25",
        description: "Giày Nam Nike Zoom Pegasus 25 Mới Nhất Thị Trường 2022",
        price: 60,
        Cost:90 ,
    },
    {
        id: 3,
        img: "https://lzd-img-global.slatic.net/g/p/b49938953f9fed3573bd7641b257c66c.jpg_720x720q80.jpg_.webp",
        Title:  "Giày Nam Nike Air Jordan 1 Low",
        description: "giày thể thao sneaker hàng chuẩn like auth, fullbox, trắng xanh cực chất",
        price: 80,
        Cost:100,
    },
    {
        id: 4,
        img: "https://lzd-img-global.slatic.net/g/ff/kf/S6e8cfca554584cf39cbb4061c83b5ae4R.jpg_720x720q80.jpg_.webp",
        Title:  "Giày Thể Thao Nam Nữ, Giày Nike AF Trắng Air Force Full Box Bill",
        description: "giày thể thao sneaker hàng chuẩn like auth, fullbox, trắng xanh cực chất",
        price: 123,
        Cost:322 ,
    },
    {
        id: 5,
        img: "https://lzd-img-global.slatic.net/g/p/c3a29243d2b4cbe6d4e56066282de727.jpg_720x720q80.jpg_.webp",
        Title:  "Giày Thể Thao Sneaker Nike Af1, Ari Forone 1 Nike Gucc1, Af1",
        description: "giày thể thao sneaker hàng chuẩn like auth, fullbox, trắng xanh cực chất",
        price: 123,
        Cost:321 ,
    },
    {
        id: 6,
        img: "https://lzd-img-global.slatic.net/g/p/cf308301d734886aa4bd243f17be9147.jpg_720x720q80.jpg_.webp",
        Title:  "Giày thể thao nam nữ AF1 logo vệt nâu, giày sneaker nam nữ mẫu hottrend năm nay",
        description: "giày thể thao sneaker hàng chuẩn like auth, fullbox, trắng xanh cực chất",
        price: 123,
        Cost:321 ,
    },
    {
        id: 7,
        img: "https://lzd-img-global.slatic.net/g/p/03cd7cb7d76484a9bc5db5d8779f09e2.jpg_720x720q80.jpg_.webp",
        Title:  " Giày thể thao chạy bộ cho nam Nike Pegasus 25",
        description: "giày thể thao sneaker hàng chuẩn like auth, fullbox, trắng xanh cực chất",
        price: 13,
        Cost:32 ,
    },
    {
        id: 8,
        img: "https://lzd-img-global.slatic.net/g/p/6b9a0314cf09391e5b4f44f01a7de1b2.jpg_720x720q80.jpg_.webp",
        Title:  "Giày Nam Mùa Hè Chạy Bộ Thời Trang Giày Thể Thao Thoáng Khí Siêu Nhẹ Chống Sốc Cho Nam",
        description: "giày thể thao sneaker hàng chuẩn like auth, fullbox, trắng xanh cực chất",
        price: 6,
        Cost:32 ,
    },
];


document.getElementById("product-container").innerHTML = renderGlasses();

function renderGlasses(){
    //         //các thẻ HTML chứa nội dung của các đối tượng kính
            let content = "";
            content = data.reduce((glContent,item,index)=>{
                console.log(item);
                //glContent = glContent (nội dung cũ) + `Nội dung mới`
                glContent += `
                        <div class="product-item">
                        <div class="img-container">
                            <img src="${item.img}" alt="">
                            <p>- 36 %</p>
                        </div>

                        <h3>${item.Title}</h3>
                        <p>${item.description}</p>
                        <div class="price">
                            <div>
                                <p>${item.price} USD</p>
                                <p>${item.Cost}</p>
                            </div>
                            <button>Buy now</button>
                        </div>
                        </div>
                `;
                return glContent;
            },'');
    
            return content;
}
renderGlasses();





