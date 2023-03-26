import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function Table({
  rows,
  cols,
  isLoading,
  perPage,
  setPerPage,
  handleView,
  handleEdit,
  handleDelete,
  setPageNo,
  totalData,
}) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr className="">
            <th className="1/12"></th>
            {cols.map((th, i) => (
              <th key={i}>{th}</th>
            ))}
            <th className="">Options</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading ? (
            rows.length > 0 ? (
              rows.map((data, i) => (
                <tr
                  className="hover:bg-[#0145FE] group hover:text-white tableRowAdmin hover:overflow-hidden"
                  key={i}
                >
                  <th className="bg-white group-hover:bg-[#0145FE] w-[70px] px-2">
                    {i + 1}
                  </th>

                  {cols.map((col, j) => (
                    <td className="bg-transparent h-full" key={j}>
                      {data[col]}
                    </td>
                  ))}

                  <td className="bg-transparent h-full w-1/12">
                    <button
                      onClick={() => handleView(data?.id)}
                      title="details"
                      className="bg-[#fe7b01] p-2 rounded-full hover:btn-secondary-focus"
                    >
                      <AiOutlineEye className="text-lg text-white" />
                    </button>
                    <button
                      onClick={() => handleEdit(data?.id)}
                      title="edit"
                      className="bg-[#01fe6a] p-2 rounded-full hover:btn-primary-focus ml-2"
                    >
                      <FiEdit className="text-lg text-white" />
                    </button>
                    <button
                      onClick={() => handleDelete(data?.id)}
                      title="delete"
                      className="bg-[#fe0101] p-2 rounded-full hover:bg-opacity-80 ml-2"
                    >
                      <MdDelete className="text-lg text-white" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center py-5" colSpan={cols?.length + 2}>
                  <div className="flex justify-center items-center flex-col">
                    <h1>
                      <BiError className="text-error text-4xl" />
                    </h1>
                    <p>No Data Found!</p>
                  </div>
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td className="text-center py-5" colSpan={cols?.length + 2}>
                <div
                  className="radial-progress animate-spin"
                  style={{
                    "--value": "70",
                    "--size": "3rem",
                    "--thickness": "5px",
                  }}
                ></div>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            {cols.map((th, i) => (
              <th key={i}>{th}</th>
            ))}
            <th className="text-center">Options</th>
          </tr>
        </tfoot>
      </table>
      <div className="py-2 px-2 flex w-full flex-col justify-start items-start gap-2 mt-5">
        <label htmlFor="perPage">per page:</label>
   
        <select
          id="perPage"
          name="perPage"
          className="select select-bordered input-sm w-32 py-2 "
          onChange={(e) => setPerPage(e.target.value)}
          defaultValue={perPage} >
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
}
