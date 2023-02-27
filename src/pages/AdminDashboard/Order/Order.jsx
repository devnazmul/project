import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apiGetAllOrders } from "../../../apis/orders";
import Table from "../../../components/Admin/Table/Table";
import Pagination from "../../../components/Pagination/Pagination";

const Order = () => {
  const [oders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(5);
  const [pageNo, setPageNo] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    apiGetAllOrders(pageNo, perPage, query)
      .then((res) => {
        setIsLoading(false);
        setTotalData(res?.data?.data?.total_data);
        setOrders(res?.data?.data?.result);
        console.log(res?.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [perPage, pageNo, query]);

  return (
    <div className="">
      {/* table for brand  */}
      <div className="overflow-x-auto relative">
        <Table
          isLoading={isLoading}
          rows={oders}
          perPage={perPage}
          setPerPage={setPerPage}
          cols={[
            "Order ID",
            "Customer Name",
            "Mobile Number",
            "Service",
            "Service Status",
          ]}
          handleView={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
      </div>

      {/* pagination for brand  */}
      <div className="flex justify-center mt-5">
        <Pagination
          setPageNo={setPageNo}
          itemsPerPage={perPage}
          totalItems={totalData}
        />
      </div>
    </div>
  );
};

export default Order;
