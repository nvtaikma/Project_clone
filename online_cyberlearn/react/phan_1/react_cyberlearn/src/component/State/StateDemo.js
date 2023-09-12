import React, { Component } from 'react'

export default class StateDemo extends Component {

  //state là thuộc tính có sẵn của react class giúp định nghĩa những nội dung có thể thay đổi khi người dùng thao tác sự kiện
// setState là phương thức có sẵn của react class component  giúp thay đổi giá trị state và render lại
  state = {
    status: false,
  }

  userLogin = {
    name : "Nguyen Tai"
  }
  login = () => {

    // this.state.status = true không sét giá trị trực tiếp trên state mà phải thông qua phương thức setState
    let newSate = {
      status : true
    }

    //  gọi phương thức setState và truyền vào state mới
    this.setState(newSate);
  }

  renderUserLogin() {
    if (this.state.status) {
      return <div>
        {this.userLogin.name}
      </div>
    }
    return <button type="" onClick={()=>{this.login()}}>login</button>
  }
  
  render() {
    return (
      <div>
        {this.renderUserLogin()}

      </div>
    )
  }
}
