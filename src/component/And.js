import React from 'react';
import { Link } from 'react-router-dom'

const And = () => {
    return (
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
    );
  };
  export default And;