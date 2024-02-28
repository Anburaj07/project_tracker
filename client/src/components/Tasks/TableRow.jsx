import React from "react";

const TableRow = ({ task_name, date, status, lead_name }) => {
  return (
    <div id="row" className="border-y-2 border-[#DBDBDB]-500 p-4 flex justify-around ">
      <p>{task_name}</p>
      <p>{date}</p>
      <div >
      <p 
        className={` ${
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
      <p>{lead_name}</p>
    </div>
  );
};

export default TableRow;
