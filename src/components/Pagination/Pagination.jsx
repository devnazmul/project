import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ itemsPerPage, totalItems, setPageNo }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const handlePageClick = (event) => {
    setPageNo(event.selected+1);
  };

  return (
    <>
      <ReactPaginate
        className={`btn-group`}
        pageLinkClassName={"btn rounded-none"}
        disabledClassName={`btn btn-disabled`}
        breakClassName={`btn btn-disabled`}
        activeLinkClassName={`btn bg-primary hover:bg-secondary`}
        previousClassName={"btn w-10"}
        nextClassName={"btn w-10"}
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
