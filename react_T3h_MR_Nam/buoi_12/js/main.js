var getElem = function(id){
    return document.getElementById(id);
}
    
// function validateForm(){
//     let Email = getElem('Email').value;
//     let Password = getElem('Password').value;
//     kiemTraRong(Email, Password);
//     kiemtraEmail(Email);
//     kiemTraPassword(Password)
//     // handeLogin(Email, Password)
    
// }


// // kiểm tra rỗng
// function kiemTraRong(Email, Password){
    
    
//     if(Email ===""){
//         getElem('Email-error-message').style.display = "block";
//     }else{
//         getElem('Email-error-message').style.display = "none";

//     }
//     if(Password ===""){
//         getElem('Password-error-message').style.display = "block";
//     }else{
//         getElem('Password-error-message').style.display = "none";

//     }

// }

// // kiểm tra email
// function kiemtraEmail(Email){
    
//     var mailformat = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
//     if(Email.match(mailformat)){
//        return getElem("checkEmail").style.display = "none";
//     }else{
//        return getElem("checkEmail").style.display = "block";

//     }

// }

// // kiểm tra password

// function kiemTraPassword(Password){

//     // if(Password.length > 8){
//     //     getElem("lenght_pass").style.display = "none";
//     // }else{
//     //     getElem("lenght_pass").style.display = "block";
//     // }

//     if(Password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
//         return getElem("lenght_pass").style.display = "none";
        
//     }else{
//         getElem("lenght_pass").style.display = "block";
       
//     }    

// }

// function handeLogin(){
//     let Email = getElem('Email').value;
//     let Password = getElem('Password').value;
//     if(Email ==="nvtaikma@gmail.com" && Password ==="Tai170402@"){
//         alert("đăng nhập thành công");
//         return window.location.href = "./index.html";
//         // window.location.assign("https://webvn.com/example/vi-du-ve-su-kien-onchange/")
//     }else{
//         alert("tài khoản mk sai")
//     }
// }


var checkValidation = function(){
    var valid = true;

    valid = kiemTraRong("Email","Email-error-message") & kiemTraRong("Password","Password-error-message");
    valid &= kiemTraEmail("Email","checkEmail");
    valid &= kiemTraDoDaiMatKhau("Password","lenght_pass");
    valid &= kiemTraMatKhau("Password","checkPass-errot");

    if(!valid){
        return false;
    }
    return true;
}
// kiểm tra rỗng
var kiemTraRong = function (idValue, idError) {

    var inputText = document.getElementById(idValue);

    if (inputText.value.trim() === '') {
        document.getElementById(idError).innerHTML = inputText.name + ' không được bỏ trống !';
        document.getElementById(idError).style.display = 'block';

        return false;
    } else {
        document.getElementById(idError).innerHTML = '';
        document.getElementById(idError).style.display = 'none';
        return true;
    }

}

// kiểm tra Email
var kiemTraEmail = function (selectorValue, selectorError) {
    var inputText = document.getElementById(selectorValue);
    console.log(`inputtext`, inputText);
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(inputText.value)) {
        document.getElementById(selectorError).innerHTML = '';
        document.getElementById(selectorError).style.display = 'none';
        return true;
    } else {
        document.getElementById(selectorError).innerHTML = inputText.name + ' không hợp lệ !';

        document.getElementById(selectorError).style.display = 'block';
        return false;
    }
}

//kiểm tra mật khẩu

var kiemTraDoDaiMatKhau = function (selectorValue, selectorError) {
    var inputText = document.getElementById(selectorValue);
    if (inputText.value.length >= inputText.minLength && inputText.value.length <= inputText.maxLength) {
        document.getElementById(selectorError).innerHTML = '';
        document.getElementById(selectorError).style.display = 'none';
        return true;
    } else {
        document.getElementById(selectorError).innerHTML = inputText.name + ' từ ' + inputText.minLength + ' đến ' + inputText.maxLength + ' ký tự!';
        document.getElementById(selectorError).style.display = 'block';
        return false;
    }
}

var kiemTraMatKhau = function(selectorValue, selectorError){
    regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
    var inputText = document.getElementById(selectorValue);
    if (regEx.test(inputText.value)){
        document.getElementById(selectorError).innerHTML = '';
        document.getElementById(selectorError).style.display = 'none';
        return true;
    }else {
        document.getElementById(selectorError).innerHTML = inputText.name + 'phải có ít nhất 1 kí tự HOA, kí tự thường, một số và kí tự đặc biệt';
        document.getElementById(selectorError).style.display = 'block';
        return false;
    }
}

// login
function handeLogin(){
        let Email = getElem('Email').value;
        let Password = getElem('Password').value;
        if(Email ==="nvtaikma@gmail.com" && Password ==="Tai170402@"){
            alert("đăng nhập thành công");
            return window.location.href = "./index.html";
            // window.location.assign("https://webvn.com/example/vi-du-ve-su-kien-onchange/")
        }else{
            alert("tài khoản mk sai")
        }
    }







