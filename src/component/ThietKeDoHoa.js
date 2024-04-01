import Header from "./Header";

import And from "./And";

function ThietKeDoHoa() {
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
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <Header/>
            <div id="background-img">
                <img
                id="bg-image"
                src="./img/background_TKDH.jpg"
                alt="ispace"
                className="responsive-image"
                />
            </div>
            <div className="elementor-element elementor-element-6fe5b63 elementor-widget elementor-widget-text-editor" >
				<div className="elementor-widget-container">
                <h6 style={{ textAlign: "center" }}>
                        <span style={{ color: "#ff6600"}}>
                        Điểm vượt trội của iSPACE là luôn chắt lọc và cập nhật kiến thức, nền tảng mới kết hợp với thực hành thao luyện trên THAO TRƯỜNG MẠNG – Cyber Range. Học viên được trực tiếp trải nghiệm các tình huống tấn công mạng thực tế, giúp học viên thành thạo và có kinh nghiệm thực tiễn ngay khi còn ngồi trên ghế nhà trường.
                        </span>
                    </h6>
                    <h6 style={{ textAlign: "center" }}>
                        <span style={{ color: "#ff6600"}}>
                        Chương trình đào tạo “Vệ sĩ mạng” của iSPACE sẽ giúp sinh viên học được cách rà soát và khắc phục tất cả các lỗ hổng/nguy cơ tiềm ẩn gây mất ATTT trong hạ tầng CNTT của các doanh nghiệp/ tổ chức. 
                        </span>
                    </h6>						         
                </div>
                <div id="background-img">
                <img
                id="bg-image"
                src="./img/THIET-KE-DO-HOA.jpg"
                alt="ispace"
                className="responsive-image"
                />
            </div>
			</div>
            <div className="elementor-widget-container" style={{ color: "#ff6600"}}>
                <h1 className="elementor-heading-title elementor-size-default">
                    LỘ TRÌNH HỌC
                </h1>
            </div>
            <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block' , padding: "10px"  }}>
                <div className="elementor-widget-container">
                    <img
                        decoding="async"
                        width={140}
                        height={160}
                        src="./img/TKDH_HK1.png"
                        className="attachment-large size-large wp-image-9960"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "10px" }}>
                <div className="elementor-widget-container">
                    <img
                        decoding="async"
                        width={140}
                        height={160}
                        src="./img/TKDH_HK2.png"
                        className="attachment-large size-large wp-image-9960"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "10px" }}>
                <div className="elementor-widget-container">
                    <img
                        decoding="async"
                        width={140}
                        height={160}
                        src="./img/TKDH_HK3.png"
                        className="attachment-large size-large wp-image-9960"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "10px" }}>
                <div className="elementor-widget-container">
                    <img
                        decoding="async"
                        width={140}
                        height={160}
                        src="./img/TKDH_HK4.png"
                        className="attachment-large size-large wp-image-9960"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "10px" }}>
                <div className="elementor-widget-container">
                    <img
                        decoding="async"
                        width={140}
                        height={160}
                        src="./img/TKDH_HK5.png"
                        className="attachment-large size-large wp-image-9960"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "10px" }}>
                <div className="elementor-widget-container">
                    <img
                        decoding="async"
                        width={140}
                        height={160}
                        src="./img/TKDH_HK6.png"
                        className="attachment-large size-large wp-image-9960"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "10px" }}>
                <div className="elementor-widget-container">
                    <img
                        decoding="async"
                        width={140}
                        height={160}
                        src="./img/ANM_7.png"
                        className="attachment-large size-large wp-image-9960"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="elementor-widget-container" style={{ color: "#ff6600"}}>
                <h1 className="elementor-heading-title elementor-size-default">
                    NỘI DUNG CHƯƠNG TRÌNH HỌC
                </h1>
            </div>

            <div className=""  style={{ padding: "30px" }}>
                <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "30px" }}>
                    <div className="elementor-widget-container">
                        <img
                            decoding="async"
                            width={450}
                            height={85}
                            src="./img/HK_1.png"
                            className="attachment-large size-large wp-image-9960"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>- Đồ họa căn bản</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Mỹ thuật đồ họa</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Khoa học màu sắc</span>
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Photoshop cơ bản</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Trang trí đồ họa</span>
                        </p>
                    </div>
                </div>
                
                <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "30px" }}>
                    <div className="elementor-widget-container">
                        <img
                            decoding="async"
                            width={450}
                            height={85}
                            src="./img/HK_2.png"
                            className="attachment-large size-large wp-image-9960"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Nguyên lý thị giác</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Kỹ thuật nhiếp ảnh</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Illustrator</span>
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Photoshop nâng cao</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Đồ án 1</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className=""  style={{ padding: "30px" }}>
                <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "30px" }}>
                    <div className="elementor-widget-container">
                        <img
                            decoding="async"
                            width={450}
                            height={85}
                            src="./img/HK_3.png"
                            className="attachment-large size-large wp-image-9960"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– In Design</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Kỹ thuật in</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Ý tưởng sáng tạo</span>
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Digital Marketing</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Nghệ thuật chữ</span>
                        </p>
                    </div>
                </div>
                <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "30px" }}>
                    <div className="elementor-widget-container">
                        <img
                            decoding="async"
                            width={450}
                            height={85}
                            src="./img/HK_4.png"
                            className="attachment-large size-large wp-image-9960"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Thiết kế bao bì</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Thiết kế nhận dạng thương hiệu</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Thiết kế giao diện Web</span>
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Nguyên lý thiết kế đồ họa</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Đồ án 2</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className=""  style={{ padding: "30px" }}>
                <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "30px" }}>
                    <div className="elementor-widget-container">
                        <img
                            decoding="async"
                            width={450}
                            height={85}
                            src="./img/HK_5.png"
                            className="attachment-large size-large wp-image-9960"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>–  Kỹ năng nghề nghiệp</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Kỹ thuật quay phim</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Xử lý phim – Adobe Premier</span>
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Nguyên lý thiết kế nội thất</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Autocad 2D</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Dựng phối cảnh nội thất 3D – SketchUp</span>
                        </p>
                    </div>
                </div>
                <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "30px" }}>
                    <div className="elementor-widget-container">
                        <img
                            decoding="async"
                            width={450}
                            height={85}
                            src="./img/HK_6.png"
                            className="attachment-large size-large wp-image-9960"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Đồ án 3</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Thực tập tốt nghiệp</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Phân tích và Đánh giá An toàn thông tin</span>
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Chuyên đề hãng CN/DN</span>
                            <br style={{ fontSize: 16 }} />
                            <br/>
                            <br style={{ fontSize: 16 }} />
                            <br/>
                        </p>
                    </div>
                </div>
            </div>
            <div className=""  style={{ padding: "30px" }}>
                <div className="elementor-element elementor-element-30711b3 elementor-widget elementor-widget-image" data-id="30711b3" data-element_type="widget" data-widget_type="image.default" style={{ display: 'inline-block', padding: "30px" }}>
                    <div className="elementor-widget-container">
                        <img
                            decoding="async"
                            width={450}
                            height={85}
                            src="./img/HK_7.png"
                            className="attachment-large size-large wp-image-9960"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Bảo vệ đồ án tốt nghiệp</span>
                            <br style={{ fontSize: 16 }} />
                            <br/>
                        </p>
                    </div> 
                </div>
            </div>
            {/* Registration Start */}
            <div className="container-fluid bg-registration py-5" style={{ margin: "90px 0", background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../img/registration.jpg), no-repeat center center"}}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h1 className="text-orange">
                                    Đăng Ký Ngay</h1>
                                <h5
                                className="text-primary text-uppercase text-white mb-3"
                                style={{ letterSpacing: 7 }}
                                >
                                CƠ HỘI NHẬN HỌC BỔNG TOÀN PHẦN 100%
                                </h5>
                                
                            </div>
                            <ul className="list-inline text-white m-0">
                                <li className="py-2">
                                <i className="fa fa-check text-primary mr-3" />
                                Môi trường đẳng cấp
                                </li>
                                <li className="py-2">
                                <i className="fa fa-check text-primary mr-3" />
                                Việc làm sẵn có
                                </li>
                                <li className="py-2">
                                <i className="fa fa-check text-primary mr-3" />
                                Vừa học vừa làm
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Điền thông tin</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary  p-5">
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
            <And/> 
        </div>
    )
}
export default ThietKeDoHoa;