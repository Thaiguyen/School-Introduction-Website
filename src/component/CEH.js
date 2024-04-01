import Background from "./Background";
import Header from "./Header";
import './style.css';
import And from "./And";
function CEH  () {
    return (
        <div>
            <main>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <Header/>
                <div id="background-img">
                    <img
                    id="bg-image"
                    src="./img/background_CEH.jpg"
                    alt="ispace"
                    className="responsive-image"
                    />
                </div>
                <section className="content">
                    <div className="Wrapper">
                        <div className="text-box">
                            <div
                                style={{
                                    background: "rgb(255, 233, 233)",
                                    borderRadius: 2,
                                    border: "1px solid rgb(251, 196, 196)",
                                    boxSizing: "border-box",
                                    color: "#de5959",
                                    float: "none",
                                    fontFamily: "Arial, sans-serif",
                                    fontSize: 15,
                                    margin: "0px auto",
                                    outline: 0,
                                    padding: "15px 20px",
                                    verticalAlign: "baseline"
                                }}>
                                <div className="cf-title-01">
                                    <h1
                                    style={{
                                        textAlign: "center",
                                        color: "#F68836",
                                        width: "100%",
                                        height: "99.9 px"
                                    }}
                                    >
                                    <b>THÔNG TIN KHÓA HỌC</b>
                                    </h1>
                                </div>
                                <ul style={{ fontSize: 22, color: "black" }}>
                                    <li>
                                    <strong>Tên khóa học:</strong> CEH (V12) Certified Ethical Hacker
                                    </li>
                                    <li>
                                    <strong>Giảng viên:</strong> Thầy <b>Trương Phạm Hoài Thương</b>
                                    </li>
                                    <li>
                                    <strong>Thời lượng:</strong> 40h, mỗi buổi 2h
                                    </li>
                                    <li>
                                    <strong>Hình thức:</strong> online/offline
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img
                            style={{ width: "40%", height: 300 }}
                            src="/img/Group.jpg"
                            alt="Hình ảnh"
                        />
                    </div>
                    <h1 style={{ textAlign: "center", color: "#F68836" }}>
                        <b>ĐỐI TƯỢNG HỌC VIÊN</b>
                    </h1>
                    <div className="column-wrapper">
                        <div className="column" style={{ fontSize: 22 }}>
                            <ul>
                                <li>Nhân viên và học viên bảo mật mạng.</li>
                                <li>Chuyên viên công nghệ thông tin.</li>
                                <li>Chuyên viên quản trị hệ thống mạng + máy chủ.</li>
                                <li>Người quản trị Website + Forum.</li>
                            </ul>
                        </div>
                        <div className="column" style={{ fontSize: 22 }}>
                            <ul>
                                <li>
                                    Quản lý các doanh nghiệp, nhân viên kinh doanh, quản lý tài chính có
                                    liên quan đến CNTT
                                </li>
                                <li>Các đối tượng yêu thích công việc về bảo mật, an ninh mạng.</li>
                                <li>
                                    Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <h1 style={{ textAlign: "center", color: "#F68836" }}>
                            <b>VÌ SAO BẠN NÊN HỌC CEH?</b>
                        </h1>
                        <ul style={{ textAlign: "left", fontSize: 22 }}>
                            <li>
                            CEH là chứng chỉ bảo mật thông tin hàng đầu thế giới, được công nhận
                            rộng rãi và có giá trị cao trên thị trường.
                            </li>
                            <li>
                            Giúp bạn hiểu rõ về các kỹ thuật tấn công và phòng thủ mạng, trang bị
                            cho bạn các kiến thức, kỹ năng cần thiết để bảo vệ mạng của tổ chức,
                            doanh nghiệp.
                            </li>
                            <li>
                            Chứng chỉ CEH được các tổ chức uy tín trên thế giới, như DoD 8570,
                            ANSI và NICE, công nhận và đánh giá cao, giúp bạn nâng cao cơ hội tìm
                            kiếm việc làm, thăng tiến trong sự nghiệp.
                            </li>
                            <li>
                            Giúp bạn có thể phát triển mạng lưới quan hệ và kết nối với các chuyên
                            gia bảo mật thông tin khác trên toàn thế giới.
                            </li>
                            <li>
                            Giúp bạn nắm bắt được những xu hướng mới nhất trong lĩnh vực bảo mật
                            thông tin, từ đó giúp bạn trở thành một chuyên gia bảo mật thông tin
                            hàng đầu.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div>
                        <h1 style={{ textAlign: "center", color: "#F68836" }}>
                            <b>LỢI THẾ KHI HỌC CEH TẠI iSPACE CENTER</b>
                        </h1>
                        <div className="row" style={{ textAlign: "left" }}>
                            <div className="column1">
                                <li>Được cung cấp tài liệu mới update mới nhất (CEH v12).</li>
                                <li>
                                    Được cấp giấy chứng nhận khi hoàn thành khóa học tại trường khi tham
                                    gia đầy đủ các buổi học và vượt qua bài thi cuối kỳ.
                                </li>
                                <li>Được hướng dẫn cách đăng ký thi khi kết thúc khóa học.</li>
                                </div>
                                <div className="column1">
                                <li>
                                    Được học với giảng viên có chuyên môn,kinh nghiệm về an ninh mạng.{" "}
                                </li>
                                <li>Cơ sở vật chất đáp ứng nhu cầu thực hành của học viên.</li>
                                <li>
                                    Được học hoàn toàn bằng tiếng Việt(tài liệu và thi bằng tiếng Anh).
                                </li>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        <h1 style={{ textAlign: "center", color: "#F68836" }}>
                            <b>GIÁ TRỊ NHẬN ĐƯỢC SAU KHÓA HỌC</b>
                        </h1>
                        <div className="Wrapper">
                            <div className="text-box" style={{ fontSize: 22 }}>
                                <ul>
                                    <li>
                                    Học viên được trang bị các kiến thức từ cơ bản đến chuyên sâu về
                                    bảo mật.
                                    </li>
                                    <li>
                                    Sử dụng thành thạo các công cụ và phương thức tấn công của các
                                    Hacker, có khả năng ngăn chặn, phòng chống các hành vi xâm nhập
                                    trái phép và phá hoại hệ thống mạng.
                                    </li>
                                    <li>
                                    Có kiến thức về quản trị việc đăng nhập nâng cao dùng cho việc đảm
                                    bảo thông tin và cho phép bạn quản lý bảo mật thông tin một cách
                                    rõ ràng hơn.
                                    </li>
                                    <li>
                                    Có đủ kiến thức và kỹ năng trở thành chuyên gia an toàn thông tin,
                                    kiểm toán hệ thống thông tin, tư vấn an toàn thông tin…cho các
                                    doanh nghiệp
                                    </li>
                                </ul>
                            </div>
                            <img src="/img/amazon-w.jpg" alt="Hình ảnh" />
                        </div>
                    </div>
                    <div>
                        <h1 style={{ textAlign: "center", color: "#F68836" }}>
                            <b>THÔNG TIN GIẢNG VIÊN</b>
                        </h1>
                        <div className="Wrapper">
                            <aside className="profile-card">
                                <header>
                                    {/* Hình của bạn */}
                                    <img src="/img/ceh.jpg" />
                                    {/* Tên của bạn */}
                                    <h1>Trương Phạm Hoài Thương</h1>
                                </header>
                                {/* Thêm thông tin của bạn */}
                                <div className="profile-bio">
                                    <p>
                                    Giảng viên tại khoa An ninh mạng ở trường iSPACE, đảm nhận việc
                                    giảng dạy các môn học chuyên ngành về an toàn thông tin, chia sẻ
                                    kiến thức và kinh nghiệm thực tiễn cho sinh viên….
                                    </p>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div>
                        <h1 style={{ textAlign: "center", color: "#F68836" }}>
                            <b>HỌC PHÍ KHÓA HỌC</b>
                        </h1>
                        <p style={{ textAlign: "center", fontSize: 22 }}>
                            Học phí trọn khóa: <b>6.500.000 VND</b> (chưa bao gồm lệ phí thi)
                        </p>
                        <div style={{ textAlign: "center" }}>
                            <a href="https://forms.gle/EqjpkEfFGgD1EmrdA">
                            {" "}
                            <button
                                type="button"
                                style={{
                                width: 164,
                                height: 64,
                                border: 1,
                                backgroundColor: "#F68836"
                                }}
                            >
                                Đăng kí ngay
                            </button>
                            </a>
                        </div>
                    </div>
                    <div>
                    <br />
                        <h1 style={{ textAlign: "center", color: "#F68836" }}>
                            <b>NỘI DUNG CHƯƠNG TRÌNH HỌC</b>
                        </h1>
                    <br />
                    <br />
                        <div style={{ textAlign: "left" }}>
                                <div
                                style={{
                                    borderStyle: "solid",
                                    borderWidth: 5,
                                    borderColor: "#F68836"
                                }}
                                >
                                <div className="row" style={{ textAlign: "left" }}>
                                    <div className="column1">
                                        <img src="/img/1.jpg" alt="" />
                                        <img src="/img/3.jpg" alt="" />
                                        <img src="/img/5.jpg" alt="" />
                                        <img src="/img/77.jpg" alt="" />
                                        <img src="/img/9.jpg" alt="" />
                                        <img src="/img/11.jpg" alt="" />
                                        <img src="/img/13.jpg" alt="" />
                                        <img src="/img/15.jpg" alt="" />
                                        <img src="/img/17.jpg" alt="" />
                                        <img src="/img/19.jpg" alt="" />
                                    </div>
                                    <div className="column1">
                                        <img src="/img/2.jpg" alt="" />
                                        <img src="/img/4.jpg" alt="" />
                                        <img src="/img/6.jpg" alt="" />
                                        <img src="/img/8.jpg" alt="" />
                                        <img src="/img/10.jpg" alt="" />
                                        <img src="/img/12.jpg" alt="" />
                                        <img src="/img/14.jpg" alt="" />
                                        <img src="/img/16.jpg" alt="" />
                                        <img src="/img/18.jpg" alt="" />
                                        <img src="/img/20.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </section>
            </main>
            <And/>
        </div>
    )
}
export default CEH;