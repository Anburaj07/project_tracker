import React from "react";

const TableRow = ({ task_name, date, status, lead_name }) => {
  return (
    <div
      id="row"
      className="border-y-2 border-[#DBDBDB]-500 p-4 flex justify-between text-left"
    >
      <p className="w-[20%]">{task_name}</p>
      <p className="w-[20%]">{date}</p>
      <div className="w-[20%]">
      <p
        className={`w-[50%] m-left text-center rounded-md text-white ${
          status === "Active"
            ? "bg-[#069845]"
            : status === "Assigned"
            ? "bg-[#FF9900]"
            : status === "Inprogress"
            ? "bg-[#FF7C8B]"
            : "bg-[#2400FF]"
        } `}
      >
        {status}
      </p>
      </div>
      <p className="w-[20%] font-semibold">{lead_name}</p>
    </div>
  );
};

export default TableRow;
