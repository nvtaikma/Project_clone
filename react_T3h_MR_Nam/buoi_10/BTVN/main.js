/*
BTVN_buoi_10
Xây dựng lớp Circle với 2 thuộc tính: radius, color và 2 phương thức: getRadius(), getArea().
Trong đó hàm getRadius(): trả về giá trị bán kính (radius) của lớp.
hàm getArea(): trả về giá trị diện tích của lớp (làm tròn tới 2 số sau dấu chấm phẩy động).
1. Thực hiện tạo 1 đối tượng (instance) của lớp Circle với giá trị khởi tạo.
2. log ra giá trị radius của đối tượng.
3. log ra giá trị diện tích (getArea()) của đối tượng.
4. Thực hiện tạo lớp Cylinder kế thừa lớp Circle oviws thuộc tính duy nhất height và các phương thức: getHeight(), getVollume().
	Trong đó: getHeight(): lấy ra giá trị thuộc tính height của lớp.
		  getVolume(): tính thể tích hình (getArea() * height).
5. Thực hiện tạo một đối tượng (instance) của lớp Cylinder với giá trị khởi tạo.
6. log ra từng giá trị với từng thuộc tính của lớp Cylinder.

*/
class Circle {
    constructor(radius,color){
        this.radius =radius;
        this.color =color;
    }

    get getRadius(){
        return this.radius;
    };

    getArea(){
      return this.radius*this.radius*Math.PI.toFixed(2);  
    }
}
// const circle = new Circle(12, "greenyellow")
// console.log(circle.getRadius);
// console.log(circle.getArea());

class Cylinder extends Circle {
    constructor(height, radius, color){
        super(radius,color);
        this.height = height;
    }

    get getHeight(){
        return this.height;
    }
    getVolume(){
        return super.getArea()*this.height;
    }

} 
const cyl = new Cylinder(20, 5, "greenyellow")
console.log(cyl);
console.log(cyl.getHeight);
console.log(cyl.getVolume());

