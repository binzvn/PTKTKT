import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Logo from "../../../assets/img/Logo2.svg";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";
import "../auth.css";
import { useDispatch } from "react-redux";
import { AuthSignUp } from "../../../Redux/actions/Auth/authSignUp";
import ModalSuccess from "../../../Components/module/ModalSuccess";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const handleModalSuccess = () => {
    setOpenModalSuccess(!openModalSuccess);
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [checked, setChecked] = useState("");
  const [form, setFrom] = useState({
    fullname: "",
    email: "",
    password: ""
  });

  const signupData = {
    fullname: form.fullname,
    email: form.email,
    password: form.password,
    requisite: checked
  };

  const handleChange = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
    setChecked(e.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const handleClick = () => {
    navigate("/auth/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthSignUp({ signupData, handleModalSuccess, setErrorMessage }));
  };

  const toIndexPage = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <section className="row col-xl-4 right-section p-xl-5">
        <div className="form">
          <div onClick={toIndexPage} className="header">
            <img src={Logo} alt="" />
          </div>
          <div className="content">
            <p className="title my-3 mt-5">Đăng ký</p>
            <form onSubmit={handleSubmit}>
              <Input
                className="input-login"
                placeholder="Họ và tên"
                type="text"
                name="fullname"
                onChange={handleChange}
                value={form.fullname}
              />
              <Input
                className="input-login pt-4"
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
              />
              <div>
                <Input
                  className="input-login pt-4"
                  placeholder="Mật khẩu"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  value={form.password}
                />
                {showPassword ? (
                  <BsIcons.BsEye
                    onClick={handleShowPassword}
                    className="form-icons eye-signup position-absolute"
                  />
                ) : (
                  <BsIcons.BsEyeSlash
                    onClick={handleShowPassword}
                    className="form-icons eye-signup position-absolute"
                  />
                )}
              </div>

              {errorMessage ? (
                <p className="text-error mb-0">{errorMessage}</p>
              ) : null}
              <Button className="btn-login mt-5" type="submit">
                Đăng ký
              </Button>
            </form>
            <div className="bot-action my-3">
              <Input
                onChange={handleChange}
                value="Chấp nhận các điều khoản"
                name="checked"
                className="input-check me-2 mt-2"
                checked={checked === "Chấp nhận các điều khoản"}
                type="checkbox"
                id="checked"
              />
              <label>Chấp nhận các điều khoản</label>
            </div>
            <hr size="4" />
            <p className="text-center">Bạn đã có tài khoản?</p>
            <Button className="btn-signin" onClick={handleClick}>
              Đăng nhập
            </Button>
          </div>
        </div>
      </section>

      {openModalSuccess ? (
        <ModalSuccess
          successTitle="Đăng ký thành công!"
          successDesc="Vui lòng kiểm tra email và nhấn vào xác nhận tài khoản."
          action="Vâng, tôi đã biết"
          closeModal={handleModalSuccess}
        />
      ) : null}
    </Fragment>
  );
};

export default SignUp;
