import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";
import brand from "../../images/brandImg.png";
import logoShop from '../../Assests/logo-shop.png'
const Footer = () => {
  return (
    <div className="bg-[#fff] text-black">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-sky-500 py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-white">
          <span>Nhận phiếu giảm giá 10%</span> <br />
          bằng cách theo dõi chúng tôi
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Địa chỉ Email"
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-1"
          />
          <button className="bg-[#FFBB38] hover:bg-[#f1a517] duration-300 px-5 py-2.5 rounded-md text-black md:w-auto w-full">
            Theo dõi
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            // src={brand}
            src={logoShop}
            alt=""
            style={{
              width: "130px",
              objectFit: "contain",
              marginLeft: "20px",
              userSelect: "none",
            }}
          />
          <p>Nếu bạn cần những sản phẩm đẹp và chất lượng, hãy đến với chúng tôi!</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook
              size={25}
              className="cursor-pointer hover:text-[#0165E1]"
            />
            <AiOutlineTwitter
              size={25}
              className="hover:text-[#08a0e9]"
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              className="hover:text-[#8134AF]"
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              className="hover:text-[#E62117]"
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-500 hover:text-black duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-500 hover:text-black duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-500 hover:text-black duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Phung Khoang Sport. Bản quyền đã được đăng kí.</span>
        <span>Điều khoản · Chính sách bảo mật</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
