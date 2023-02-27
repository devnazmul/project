import React, { useEffect, useState } from "react";
import { apiGetAllCities } from "../../../apis/citiy";
import Table from "../../../components/Admin/Table/Table";
import Pagination from "../../../components/Pagination/Pagination";
import CityMasterModal from "./CityMasterModal";

export default function CityMaster() {
  const [cityMaster, setCityMaster] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(5);
  const [pageNo, setPageNo] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    apiGetAllCities(pageNo, perPage, query)
      .then((res) => {
        setIsLoading(false);
        setTotalData(res?.data?.data?.total_data);
        setCityMaster(res?.data?.data?.result);
        console.log(res?.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [perPage, pageNo, query]);

  return (
    <div className="">
      {/* The button to open modal */}
      <label
        htmlFor="addCity"
        className="btn mb-4 bg-teal-800 border-teal-700 text-white"
      >
        Add a new City
      </label>

      {/* Put this part before </body> tag */}
      <CityMasterModal />

      {/* table for brand  */}
      <div className="overflow-x-auto relative">
        <Table
          isLoading={isLoading}
          rows={cityMaster}
          perPage={perPage}
          setPerPage={setPerPage}
          cols={["City Name", "State Name", "Service Status"]}
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
}
