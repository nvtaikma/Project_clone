

const stateDefault = {
    mangCuocOanTuTi:[
        {ma:"bua", img:"./img/GameOanTuXi/bua.png", datCuoc: true},
        {ma:"keo", img:"./img/GameOanTuXi/keo.png", datCuoc: false},
        {ma:"bao", img:"./img/GameOanTuXi/bao.png", datCuoc: false},
    ],
    robot: {ma:"bao", img:"./img/GameOanTuXi/bua.png", datCuoc:true},
    ketQua: " chúc mừng bạn đã thắng",
    sobanThang: 0,
    soBanChoi: 0   
}

const OanTuTiReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case "DAT_CUOC":{
            let mangCuocUpdate = [...state.mangCuocOanTuTi];
            mangCuocUpdate = mangCuocUpdate.map((item, index)=>{
                return {...item, datCuoc: false}
            })

            let index = mangCuocUpdate.findIndex(maCuoc => maCuoc.ma === action.mangCuoc.ma);
            
            if( index !== -1){
                mangCuocUpdate[index].datCuoc = true;
            }
            state.mangCuocOanTuTi = mangCuocUpdate

            console.log("ok", state.mangCuocOanTuTi);
            return{...state}
            
        }
        case "PLAY_GAME":{
            let soNgauNhien = action.soNgauNhien
            state.robot = state.mangCuocOanTuTi[soNgauNhien]
            return{...state}
            // console.log("action", action);
        }
        case "END_GAME":{
            let player = state.mangCuocOanTuTi.find(item => item.datCuoc === true);
            let robot = state.robot;
            switch (player.ma) {
                case 'keo':
                    if (robot.ma === 'keo') {
                        state.ketQua = 'hòa nhau !!!';
                    } else if (robot.ma === 'bua') {
                        state.ketQua = 'thua sml !!!';
                    } else {
                        state.sobanThang += 1;
                        state.ketQua = "Thắng rồi!!!!!!!!";
                    }
                    ; break;
                case 'bua':
                    if (robot.ma === 'keo') {
                        state.sobanThang += 1;
                        state.ketQua = "Thắng rồi!!!!!!!!";
                    } else if (robot.ma === 'bua') {
                        state.ketQua = 'hòa nhau !!!';
                    } else {
                        state.ketQua = 'thua sml !!!';
                    } break;
                case 'bao':
                    if (robot.ma === 'keo') {
                        state.ketQua = 'thua sml !!!';
                    } else if (robot.ma === 'bua') {
                        state.sobanThang += 1;
                        state.ketQua = "Thắng rồi!!!!!!!!";
                    } else {
                        state.ketQua = 'hòa nhau !!!';
                    } break;
                default: 
                state.sobanThang += 1;
                state.ketQua = "Thắng rồi!!!!!!!!";
            }
            state.soBanChoi += 1;
            return { ...state }
        }


        default:
            return {...state}
    }
}
export default OanTuTiReducer;