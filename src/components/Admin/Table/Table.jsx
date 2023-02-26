import React from "react";

export default function Table({ rows, cols, isLoading }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            {cols.map((th, i) => (
              <th key={i}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!isLoading ? (
            rows.map((data, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                {cols.map((col, j) => (
                  <td key={j}>{data[col]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center py-5" colSpan={cols?.length + 1}>
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
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
