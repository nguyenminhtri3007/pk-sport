import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import {
  AiOutlineUnorderedList,
  AiOutlineShop,
  AiFillMoneyCollect,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../../redux/actions/order";
import Loader from "../Layout/Loader";
import { getAllShops } from "../../redux/actions/shop";

const AdminDashboardMain = () => {
  const dispatch = useDispatch();

  const { adminOrders, adminOrderLoading } = useSelector(
    (state) => state.order
  );
  const { shop } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
    dispatch(getAllShops());
  }, []);

  const adminEarning =
    adminOrders &&
    adminOrders.reduce((acc, item) => acc + item.totalPrice * 0.1, 0);

  console.log(adminOrders);
  const adminBalance = adminEarning?.toFixed(2);

  const columns = [
    {
      title: "ID Đơn hàng",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Số lượng sản phẩm",
      dataIndex: "itemsQty",
      key: "itemsQty",
    },

    {
      title: "Thành tiền",
      dataIndex: "total",
      key: "total",
    },
    // {
    //   title: "Ngày đặt hàng",
    //   dataIndex: "createdAt",
    //   key: "createdAt",
    // },
  ];

  const row = [];
  adminOrders &&
    adminOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: item?.totalPrice + " VND",
        status: item?.status,
        // createdAt: item?.createdAt.slice(0,10),
      });
    });

  return (
    <>
      {adminOrderLoading ? (
        <Loader />
      ) : (
        <div className="w-full p-4">
          <h3 className="text-[22px] font-Poppins pb-2">Tổng quan</h3>
          <div className="w-full block 800px:flex items-center justify-between">
            <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
              <div className="flex items-center">
                <AiFillMoneyCollect
                  size={30}
                  className="mr-2"
                  fill="#00000085"
                />
                <h3
                  className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                >
                  Tổng thu nhập
                </h3>
              </div>
              <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
                {adminBalance} VND
              </h5>
            </div>

            <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
              <div className="flex items-center">
                <AiOutlineShop size={30} className="mr-2" fill="#00000085" />
                <h3
                  className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                >
                  Tất cả Shop
                </h3>
              </div>
              <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
                {shop && shop.length}
              </h5>
              <Link to="/admin-shops">
                <h5 className="pt-4 pl-2 text-[#077f9c]">Xem cửa hàng</h5>
              </Link>
            </div>

            <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
              <div className="flex items-center">
                <AiOutlineUnorderedList
                  size={30}
                  className="mr-2"
                  fill="#00000085"
                />
                <h3
                  className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                >
                  Đơn hàng
                </h3>
              </div>
              <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
                {adminOrders && adminOrders.length}
              </h5>
              <Link to="/admin-orders">
                <h5 className="pt-4 pl-2 text-[#077f9c]">Xem đơn hàng</h5>
              </Link>
            </div>
          </div>

          <br />
          <h3 className="text-[22px] font-Poppins pb-2">Đơn hàng mới nhất</h3>
          <div className="w-full min-h-[45vh] bg-white rounded">
            <Table columns={columns} dataSource={row} />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboardMain;
