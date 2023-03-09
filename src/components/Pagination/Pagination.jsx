import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ itemsPerPage, totalItems, setPageNo }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const handlePageClick = (event) => {
    setPageNo(event.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        className={`btn-group shadow-lg`}
        pageLinkClassName={"btn rounded-none bg-white text-gray-300 hover:bg-[#638dff] border-white border-2 hover:border-[#0145FE]"}
        disabledClassName={`btn btn-disabled bg-gray-300  border-white border-2 `}
        breakClassName={`btn btn-disabled bg-gray-300 border-white border-2`}
        activeLinkClassName={`btn text-white bg-[#0145FE] border-white border-2`}
        previousClassName={"btn bg-[#0145FE] hover-bg-[#638dff] w-0 text-white border-white border-2 hover:border-[#0145FE]"}
        nextClassName={"btn bg-[#0145FE] hover-bg-[#638dff] w-0 text-white border-white border-2 hover:border-[#0145FE]"}
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        previousLabel="<"
        nextLabel=">"
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </>
  );
}
