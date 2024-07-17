import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { getAllShops } from "../../redux/actions/shop";
import { Link } from "react-router-dom";
import { Button, Table } from "antd";

const AllShops = () => {
  const dispatch = useDispatch();
  const { shop } = useSelector((state) => state.shop);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(getAllShops());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await axios
      .delete(`${server}/shop/delete-shop/${id}`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
      });

    dispatch(getAllShops());
  };

  const columns = [
    {
      title: "Shop ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Địa chỉ Shop",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "joined At",
      dataIndex: "joinedAt",
      key: "joinedAt",
    },
    {
      title: "Preview Shop",
      dataIndex: "preview",
      key: "preview",
      render: (_, record) => (
        <>
          <Link to={`/shop/preview/${record.id}`}>
            <Button>
              <AiOutlineEye size={20} />
            </Button>
          </Link>
        </>
      ),
    },
    {
      title: "Delete Shop",
      dataIndex: "",
      key: "",
      render: (_, record) => (
        <>
          <Button onClick={() => setUserId(record.id) || setOpen(true)}>
            <AiOutlineDelete size={20} />
          </Button>
        </>
      ),
    },
  ];

  const row = [];
  shop &&
    shop?.forEach((item) => {
      row.push({
        id: item._id,
        name: item?.name,
        email: item?.email,
        joinedAt: item.createdAt.slice(0, 10),
        address: item.address,
      });
    });

  return (
    <div className="w-full flex justify-center pt-5">
      <div className="w-[97%]">
        <h3 className="text-[22px] font-Poppins pb-2">All Shops</h3>
        <div className="w-full min-h-[45vh] bg-white rounded">
          <Table columns={columns} dataSource={row} />
        </div>
        {open && (
          <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
            <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
              <div className="w-full flex justify-end cursor-pointer">
                <RxCross1 size={25} onClick={() => setOpen(false)} />
              </div>
              <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
                Are you sure you wanna delete this user?
              </h3>
              <div className="w-full flex items-center justify-center">
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
                  onClick={() => setOpen(false)}
                >
                  cancel
                </div>
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                  onClick={() => setOpen(false) || handleDelete(userId)}
                >
                  confirm
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default AllShops;
