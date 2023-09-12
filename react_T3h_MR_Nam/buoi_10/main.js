class Rectangle {
   static height =0;
   width;
    constructor(height, width){
        this.height = 20;
        this.width = 20;
    }
    static dislayHeight(){
        return this.height
    }
   
}
console.log(Rectangle.dislayHeight());
// một class chỉ có 1 constructor được khởi tạo
// const rec = new Rectangle(20, 10);
// console.log(rec);
// console.log(rec.#height, rec.#width);

