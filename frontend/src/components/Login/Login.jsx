import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../../server";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login success");
        navigate("/");
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <div class="h-screen flex justify-center ">
      <div
        class="hidden lg:flex w-full lg:w-1/2 bg-[url('https://images.pexels.com/photos/14815541/pexels-photo-14815541.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')]
         justify-around items-center "
      >
        <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 class="text-white font-bold text-4xl font-sans">Phung Khoang Sport</h1>
          <p class="text-white mt-1">Chào mừng bạn đến với cửa hàng</p>
          <div class="flex justify-center lg:justify-start mt-6">
            <Link
              to="/"
              class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
            >
              Đi tới trang chủ
            </Link>
          </div>
        </div>
      </div>
      <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div class="w-full px-8 md:px-32 lg:px-24">
          <form
            class="bg-white rounded-md shadow-2xl p-5"
            onSubmit={handleSubmit}
          >
            <h1 class="text-gray-800 font-bold text-2xl mb-1 text-center">
              Đăng nhập
            </h1>
            <p class="text-sm font-normal text-gray-600 mb-8 text-center">
              Vui lòng đăng nhập tài khoản của bạn
            </p>
            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl outline-none ring-blue-500 border-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                id="email"
                class=" pl-2 w-full outline-none border-none "
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Địa chỉ Email"
              />
            </div>
            <div class="flex items-center border-2 mb-4 py-2 px-3 relative rounded-2xl outline-none ring-blue-500 border-blue-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                class="pl-2 w-full outline-none border-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
            <div className={`items-center justify-between `}>
              <div className={`items-center flex ml-1`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded "
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Ghi nhớ mật khẩu
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Đăng nhập
            </button>
            <div class="flex justify-between mt-4">
              <a
                href=".forgot-password"
                class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
              >
                Quên mật khẩu?
              </a>

              <Link
                to="/sign-up"
                class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
              >
                Bạn không có tài khoản?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
