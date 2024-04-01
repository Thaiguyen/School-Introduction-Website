import React, { useState } from 'react';
import Header from '../component/Header';



function Dangkykhoahoc() {
  function Submit(e) {
    const formEle = document.querySelector("form")
    e.preventDefault()
    console.log("Submitted")
    const formData = new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbxGM6-aqduOBoNtezwVS_AR3XuPhioXTIWfUmVShXPtIrMzrx3roicpM5QL5eLUWc9G/exec", {
      method: "POST",
      body: formData
    }).then((res) => res.json()).then((data) =>{
      console.log(data)
    }).catch((error) => console.log(error));
  }
  const handleReset = () => {
    window.location.reload(); // Reload the page
  };
  
  
  return (
    <div>
      <Header/> 
      <div id="background-img">
        <img
          id="bg-image"
          src="./img/lienhe.jpg"
          alt="ispace"
          className="responsive-image"
        />
      </div>
      {/* Đăng ký */}
      <section className="h-150 bg-white">
          <div className="container py-5 h-150">
            <div className="row d-flex justify-content-center align-items-center h-150">
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img
                        src="./img/logo_ispace_01.png"
                        alt="Sample photo"
                        className="img-fluid"
                        style={{
                          borderTopLeftRadius: ".25rem",
                          borderBottomLeftRadius: ".25rem"
                        }}
                      />
                      <div className="col-lg-7">
                          <div className="text-left mb-4 row">
                            <p>
                              <i className="fa fa-map-marker-alt mr-2" />
                              Địa Chỉ
                            </p>
                            <p>
                              <i className="fa  mr-2" />
                              Số 9A Tô Vĩnh Diện, P. Linh Chiểu, Tp. Thủ Đức, Tp. Hồ Chí Minh
                            </p>
                          </div>
                          
                          <div className="text-left mb-4 row">
                            <p>
                              <i className="fa fa-phone-alt mr-2" />
                              Điện thoại
                            </p>
                            <p>
                              <i className="fa  mr-2" />
                              (028) 62 678 999
                            </p>
                          </div>
                      
                      
                          <div className="text-left mb-4 row">
                            <p>
                              <i className="fa fa-envelope mr-2" />
                              Email
                            </p>
                            <p>
                              <i className="fa  mr-2" />
                              lienhe@ispace.edu.vn
                            </p>
                          </div>
                      
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body  text-black">
                        <h1 className="mb-5 text-orange">Đăng Ký Học</h1>
                        <div className="card-body rounded-bottom bg-primar  p-5">
                                  <form autoComplete='off' onSubmit={(e) => Submit(e)} >
                                      <div className="form-group">
                                        <input type="text" name="Name" className="form-control border-0 p-4" placeholder="Họ và Tên" required="required"/>
                                      </div>
                                      <div className="form-group">
                                        <input type="text" name="Phone" className="form-control border-0 p-4" placeholder="Số điện thoại" required="required"/>
                                      </div>
                                      <div className="form-group">
                                        <input type="email" name="Email" className="form-control border-0 p-4" placeholder="Email của bạn" required="required"/>
                                      </div>
                                      <div className="form-group">
                                        <select className="custom-select border-0 px-4" name="Option" style={{ height: 47 }} placeholder="Ngành học">
                                        <option selected="">Ngành học</option>
                                          <option>An Ninh Mạng</option>
                                          <option>Phát Triển Phần Mềm</option>
                                          <option>Thiết kế đồ Họa</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <select className="custom-select border-0 px-4" name="Object" style={{ height: 47 }} placeholder="Email của bạn">
                                          <option selected="">Đối Tượng Đăng Ký</option>
                                          <option>Học sinh đang học 12(đăng ký giữ chỗ)</option>
                                          <option>Học sinh tốt nghiệp THPT</option>
                                          <option>Sinh viên</option>
                                          <option>Người đi làm</option>
                                        </select>
                                      </div>
                                      
                                      <div>
                                          <button className="btn btn-dark btn-block border-0 py-3" onClick={handleReset} type="submit">
                                            Đăng ký ngay
                                          </button>
                                      </div>
                                  </form>
                              </div>
                          
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="overlay-container" style={{background: "#f55 url('./img/registration.jpg')" }}>
          <div className="overlay-text" style={{backgroundColor: "rgb(255, 255, 255, 0)" }}>
            <h3 className="overlay-title">Bạn muốn là chuyên gia An Ninh Mạng?</h3>
              <p className="overlay-content">
                Hãy đến với chúng tôi - Trường Cao đẳng An ninh mạng iSPACE!
              </p>
              <a className="overlay-title">
                <a className="btn btn-outline-light btn-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-square mr-2" href="https://www.facebook.com/ispace.vn"><i class="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-square mr-2" href="https://www.youtube.com/user/ispacechannel"><i class="fa-brands fa-youtube"></i></a>
              </a>
          </div>
        </div>
    </div>
    
  );
};
  
export default Dangkykhoahoc;
