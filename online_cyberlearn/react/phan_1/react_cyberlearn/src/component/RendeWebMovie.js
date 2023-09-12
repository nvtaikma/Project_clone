import React, { Component } from "react";
import DataMovie from "./data/DataFilms.json";
export default class RendeWebMovie extends Component {
  renderFilms = () => {
    const render = DataMovie.map((item, index) => {
      return (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2" >
          <div className="card text-white bg-primary mb-3" style={{ width :"200px",height:"370px"}}>
            <img style={{width:"200px",height:"200px",objectFit:"cover"}} className="card-img-top" src={item.hinhAnh} alt={item.tenPhim} />
            <div className="card-body">
                      <h4 className="card-title" style={{height:"50px",fontSize:"17px"}}>{ item.tenPhim}</h4>
                      <p className="card-text" style={{ fontSize: "12px" }}>{item.moTa.length > 70 ? <p>{item.moTa.slice(0,70)}...</p>:<p>{item.moTa}</p>}</p>
            </div>
          </div>
        </div>
      );
    });
    return render;
  };
  //   bước 1 xây dựng giao diện
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./background/avanger.jpg)",
          height: "400vh",
          backgroundSize: "cover",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.8)", height: "400vh" }}>
          <nav
            className="navbar navbar-expand-sm navbar-dark"
            style={{ backgroundColor: "rgba(87,83,119,0.8)" }}
          >
            <a className="navbar-brand" href="#">
              Moive
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid mt-5">
            <div class="row">{this.renderFilms()}</div>
            <div class="container">
  
</div>
          </div>
        </div>
       <div className="container">
       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
       </div>
      </div>
    );
  }
}
