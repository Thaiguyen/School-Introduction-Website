import Header from "./Header";

import And from "./And";

function PhatTrienPhanMem() {
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
                src="./img/background_PTPM.jpg"
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
                src="./img/LAP-TRINH.jpg"
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
                        src="./img/LTW_HK1.png"
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
                        src="./img/LTW_HK2.png"
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
                        src="./img/LTW_HK3.png"
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
                        src="./img/LTW_HK4.png"
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
                        src="./img/LTW_HK5.png"
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
                        src="./img/LTW_HK6.png"
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
                            <span style={{ fontSize: 16 }}>- Đại cương về CNTT</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Nhập môn lập trình</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Toán ứng dụng tin học</span>
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Mạng căn bản</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>–  Kiến trúc máy tính và nguyên lý Hệ điều hành</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}></span>
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
                            <span style={{ fontSize: 16 }}>– Kỹ thuật lập trình</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Lập trình hướng đối tượng</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}></span>
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Ngôn ngữ lập trình C#/Java/PHP</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Cơ sở dữ liệu</span>
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
                            <span style={{ fontSize: 16 }}>– Cấu trúc dữ liệu và giải thuật</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Lập trình Web 1</span>
                            <br style={{ fontSize: 16 }} />
                            <br/>
                            
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Thiết kế Web 1</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Nhập môn Công nghệ phần mềm</span>
                            <br style={{ fontSize: 16 }} />
                            
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
                            <span style={{ fontSize: 16 }}>– Thiết kế Web 2</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Lập trình Web 2</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}></span>
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Phân tích và thiết kế phần mềm</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Kiểm thử phần mềm</span>
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
                            <span style={{ fontSize: 16 }}>– Nhập môn Trí tuệ nhân tạo</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Kỹ năng nghề nghiệp</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}></span>
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Lập trình Web 3</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Bảo mật Web và ứng dụng</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>–Đồ án 3</span>
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
                            <span style={{ fontSize: 16 }}>– Thực tập tốt nghiệp</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Chuyên đề hãng CN/DN</span>
                            <br style={{ fontSize: 16 }} />
                            <br/>
                            
                        </p>
                    </div>
                    <div className="elementor-widget-container">
                        <p style={{ textAlign: "left" }}>
                            <span style={{ fontSize: 16 }}>– Thực tập tốt nghiệp</span>
                            <br style={{ fontSize: 16 }} />
                            <span style={{ fontSize: 16 }}>– Chuyên đề hãng CN/DN</span>
                            <br style={{ fontSize: 16 }} />
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
export default PhatTrienPhanMem;