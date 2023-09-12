
const stateDefault = {
    taiXiu: '',
    mangXucXac: [
        {ma:1,hinhAnh:"./img/1.png"},
        {ma:1,hinhAnh:"./img/1.png"},
        {ma:1,hinhAnh:"./img/2.png"},
    ],
    soBanThang: 0,
    tongSoBanChoi:0
}

const TaiXiuReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHON_TAI_XIU": {
            state.taiXiu = action.taixiu
            return {...state}
        }
        case "PLAY_GAME": {
            
            // tạo mảng xúc xắc mới
            let mangXucXacNgauNhien = []

            for (let i = 0; i < 3; i++){
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacNgauNhien = { ma: soNgauNhien, hinhAnh: `./img/${soNgauNhien}.png` }
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            // gán state mảng xúc xắc bằng mangXucXacNgauNhien
            state.mangXucXac = mangXucXacNgauNhien;

            // tổng số bằn chơi
            state.tongSoBanChoi += 1;

            // số bàn thắng
            
            let tongDiem = state.mangXucXac.reduce((tongDiem, mangXucXac, index) => {
                return tongDiem += mangXucXac.ma;
            }, 0)
            
            if ((tongDiem > 11 && state.taiXiu === true) || (tongDiem <= 11 && state.taiXiu === false)) {
                state.soBanThang += 1;
            }

            

            return {...state}
        }

        default: return{...state}
    }
}

export default TaiXiuReducer;