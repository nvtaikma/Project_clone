/*
Bài 1: Giải phương trình bậc 1. (ax + b)
	Gợi ý: 
    + TH1: a !== 0
    + TH2: a === 0
*/
function phuongTrinhBac1(a,b){
    if(a === 0){
        console.log('phuong trinh vo nghiem');
    }else{
       x = -b/a;
        console.log('nghiem cua phuong trinh la',x);
    }
}
phuongTrinhBac1(2,3);