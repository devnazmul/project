import React, { useEffect, useState } from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { VscBell } from "react-icons/vsc";
import Popup from "reactjs-popup";
import { apiGetAllUsers } from "../../../apis/user";
import Table from "../../../components/Admin/Table/Table";
import Pagination from "../../../components/Pagination/Pagination";

export default function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(5);
  const [pageNo, setPageNo] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [query, setQuery] = useState("");
  const [profileDropDownOpened, setProfileDropDownOpened] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleView = (id) => {
    console.log(id);
    setIsView(true);
  };
  const handleEdit = (id) => {
    console.log(id);
    setIsEdit(true);
  };
  const handleDelete = (id) => {
    console.log(id);
    setIsDelete(true);
  };

  useEffect(() => {
    setIsLoading(true);
    apiGetAllUsers(pageNo, perPage, query)
      .then((res) => {
        setIsLoading(false);
        setTotalData(res?.data?.data?.total_data);
        setUsers(res?.data?.data?.result);
        console.log(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [perPage, pageNo, query]);

  useEffect(() => {
    console.log("object");
  }, []);

  return (
    <div className="">
      <Popup
        className="userViewPopup"
        closeOnDocumentClick={false}
        onClose={() => setIsView(false)}
        open={isView}
      >
        <div>
          <button
            onClick={() => setIsView(false)}
            className="absolute top-0 right-0 sm:right-1 sm:top-1"
          >
            <RxCrossCircled className="text-2xl text-[#000] font-semibold" />
          </button>
        </div>
      </Popup>
      <Popup
        className="userEditPopup"
        closeOnDocumentClick={false}
        onClose={() => setIsEdit(false)}
        open={isEdit}
      >
        <div>
          <button
            onClick={() => setIsEdit(false)}
            className="absolute top-0 right-0 sm:right-1 sm:top-1"
          >
            <RxCrossCircled className="text-2xl text-[#000] font-semibold" />
          </button>
        </div>
      </Popup>
      <Popup
        className="deletePopup"
        closeOnDocumentClick={false}
        onClose={() => setIsDelete(false)}
        open={isDelete}
      >
        <div>
          <button
            onClick={() => setIsDelete(false)}
            className="absolute top-0 right-0 sm:right-1 sm:top-1"
          >
            <RxCrossCircled className="text-2xl text-[#000] font-semibold" />
          </button>
        </div>
      </Popup>
      <div className="header h-20 py-5 flex justify-between items-center">
        <div className="title text-3xl font-medium text-gray-500">
          User
          <br />
          <span className="text-sm">{totalData} users found</span>
        </div>
        <div className={`flex items-center justify-center gap-5`}>
          <button
            className={`bg-slate-200 w-[35px] h-[35px] rounded-lg flex justify-center items-center`}
          >
            <VscBell className={`text-2xl`} />
          </button>
          <button
            onClick={() => setProfileDropDownOpened(!profileDropDownOpened)}
            className={`flex justify-center items-center gap-1`}
          >
            <AiOutlineProfile className={`text-3xl`} />
            {!profileDropDownOpened ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
      </div>
      <div className="flex justify-end py-2">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search here"
          className="input input-bordered input-md w-full max-w-xs"
        />
      </div>
      <div className="overflow-x-auto relative">
        <Table
          isLoading={isLoading}
          rows={users}
          perPage={perPage}
          setPerPage={setPerPage}
          cols={["name", "email", "phone", "state", "city"]}
          handleView={handleView}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>

      <div className="flex justify-center mt-5">
        <Pagination
          setPageNo={setPageNo}
          itemsPerPage={perPage}
          totalItems={totalData}
        />
      </div>
    </div>
  );
}
