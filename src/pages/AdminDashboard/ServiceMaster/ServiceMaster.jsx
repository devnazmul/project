import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { apiGetAllServices } from "../../../apis/service";
import Table from "../../../components/Admin/Table/Table";
import Pagination from "../../../components/Pagination/Pagination";
import ServiceMasterModal from "./ServiceMasterModal";

export default function ServiceMaster() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(5);
  const [pageNo, setPageNo] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    apiGetAllServices(pageNo, perPage, query)
      .then((res) => {
        setIsLoading(false);
        setTotalData(res?.data?.data?.total_data);
        setServices(res?.data?.data?.result);
        console.log(res?.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [perPage, pageNo, query]);

  return (
    <section>
      <div className="flex items-center justify-between mb-5 mx-5">
        {/* The button to open modal */}
        <label
          htmlFor="serviceMasterModal"
          className="btn uppercase bg-teal-800 border-teal-700 text-white"
        >
          ADD a new service
        </label>

        {/* search box  */}
        <div className="flex flex-row gap-2">
          <input
            type="text"
            placeholder="search here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary">search</button>
        </div>
      </div>

      {/* service modal  */}
      <ServiceMasterModal />

      {/* table for Services  */}
      <div className="overflow-x-auto relative">
        <Table
          isLoading={isLoading}
          rows={services}
          perPage={perPage}
          setPerPage={setPerPage}
          cols={[
            "Service Type",
            "Service Name",
            "Service Discription",
            "Service Provide",
            "Price",
            "Picture",
          ]}
          handleView={() => {}}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
      </div>

      {/* pagination for Sevice  */}
      <div className="flex justify-center mt-5">
        <Pagination
          setPageNo={setPageNo}
          itemsPerPage={perPage}
          totalItems={totalData}
        />
      </div>
    </section>
  );
}
