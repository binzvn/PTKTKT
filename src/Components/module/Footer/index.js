import React from "react";
import logo from "../../../assets/img/lilplane.png";
import google from "../../../assets/img/apple-app-store-travel-awards-globestamp-7 2.svg";
import app from "../../../assets/img/apple-app-store-travel-awards-globestamp-7 3.svg";
import twitter from "../../../assets/img/twitter.svg";
import facebook from "../../../assets/img/facebook.svg";
import instagram from "../../../assets/img/instagram.svg";
import youtube from "../../../assets/img/youtube.svg";
import pin from "../../../assets/img/map-pin.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer d-none d-md-flex justify-content-around p-3 h-100 mt-5">
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight">
            <img src={logo} alt="" />
            <span className="ms-3 fs-5 fw-bolder">Ankasa</span>
            <p className="mt-3 text-secondary">
              Tìm kiếm chuyến bay của bạn <br></br>
              Nhanh chóng và tiện lợi, tận hưởng trọn vẹn đường đi.
            </p>
          </div>
          <p className="text-secondary bd-highlight mt-6">
            © Ankasa. All Rights Reserved.
          </p>
        </div>
        <div className="">
          <p className="fw-bolder">Tính năng</p>
          <p className="text-secondary">Tìm kiếm chuyến bay</p>
          <p className="text-secondary">Vé của tôi</p>
          <p className="text-secondary">Hỗ trợ</p>
          <p className="text-secondary">Thông báo</p>
        </div>
        <div className="d-flex flex-column">
          <p className="fw-bolder">Tải App Angkasa</p>
          <img src={google} alt="" />
          <img className="mt-2" src={app} alt="" />
        </div>
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight">
            <p className="fw-bolder">Theo dõi chúng tôi</p>
            <div className="d-flex">
              <img className="" src={facebook} alt="" />
              <img className="mx-3" src={twitter} alt="" />
              <img className="" src={instagram} alt="" />
              <img className="mx-3" src={youtube} alt="" />
            </div>
          </div>
          <div className="mb-3">
            <img src={pin} alt="" />
            <span className="text-secondary bd-highlight ms-2">
              Jakarta Indonesia
            </span>
          </div>
        </div>
      </div>
      {/* Responsive */}
      <div className="footer d-md-none justify-content-around p-3 h-100 mt-5">
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight">
            <img src={logo} alt="" />
            <span className="ms-3 fs-5 fw-bolder">Ankasa</span>
            <p className="mt-4 text-secondary lh-base">
              Tìm kiếm chuyến bay của bạn<br></br>
              Nhanh chóng và tiện lợi, tận hưởng trọn vẹn đường đi.
            </p>
          </div>
        </div>
        <p className="fw-bolder mt-3">Tính năng</p>
        <div className="d-flex justify-content-between">
          <p className="text-secondary">Tìm kiếm chuyến bay</p>
          <p className="text-secondary">Vé của tôi</p>
          <p className="text-secondary">Hỗ trợ</p>
          <p className="text-secondary">Thông báo</p>
        </div>
        <p className="fw-bolder mt-5">Tải app Ankasa</p>
        <div className="d-flex">
          <img src={google} alt="" />
          <img className="ms-3" src={app} alt="" />
        </div>
        <div className="d-flex flex-column bd-highlight">
          <div className="mb-auto bd-highlight mt-5">
            <p className="fw-bolder">Theo dõi chúng tôi</p>
            <div className="d-flex">
              <img className="" src={facebook} alt="" />
              <img className="mx-3" src={twitter} alt="" />
              <img className="" src={instagram} alt="" />
              <img className="mx-3" src={youtube} alt="" />
            </div>
          </div>
          <div className="mt-5">
            <img src={pin} alt="" />
            <span className="text-secondary bd-highlight ms-2">
              HaNoi Vietnam
            </span>
            <p className="text-secondary bd-highlight mt-3">
              © Ankasa. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
