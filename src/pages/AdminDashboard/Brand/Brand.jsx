import React, { useState } from "react";
import BrandModal from "./BrandModal";
import Table from "../../../components/Admin/Table/Table";
import Pagination from "../../../components/Pagination/Pagination";
import { useEffect } from "react";
import { apiGetAllBrands } from "../../../apis/brand";

export default function Brand() {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [perPage, setPerPage] = useState(5);
  const [pageNo, setPageNo] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    apiGetAllBrands(pageNo, perPage, query)
      .then((res) => {
        setIsLoading(false);
        setTotalData(res?.data?.data?.total_data);
        setBrands(res?.data?.data?.result);
        console.log(res?.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [perPage, pageNo, query]);

  return (
    <section>
      {/* The button to open modal */}
      <label
        htmlFor="addBrand"
        className="btn mb-4 bg-teal-800 border-teal-700 text-white"
      >
        Add Brand
      </label>

      {/* Put this part before </body> tag */}
      <BrandModal />

      {/* table for brand  */}
      <div className="overflow-x-auto relative">
        <Table
          isLoading={isLoading}
          rows={brands}
          perPage={perPage}
          setPerPage={setPerPage}
          cols={["name", "logo"]}
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
    </section>
  );
}
