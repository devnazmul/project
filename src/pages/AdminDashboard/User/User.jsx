import React, { useEffect, useState } from "react";
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
        console.log({ error });
      });
  }, [perPage, pageNo, query]);

  return (
    <div className="">
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
          handleView={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
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
