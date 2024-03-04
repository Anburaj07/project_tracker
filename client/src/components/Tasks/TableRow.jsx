import React from "react";

const TableRow = ({ task_name, date, status, lead_name }) => {
  const getStatusColor = () => {
    switch (status) {
      case "Active":
        return "bg-[#069845]";
      case "Assigned":
        return "bg-[#FF9900]";
      case "Inprogress":
        return "bg-[#FF7C8B]";
      default:
        return "bg-[#2400FF]";
    }
  };

  return (
    <div
      id="row"
      className="border-y-2 border-[#DBDBDB]-500 p-4 flex justify-between text-left"
    >
      <p className="w-[20%]">{task_name}</p>
      <p className="w-[20%]">{date}</p>
      <div className="w-[20%]">
        <p
          className={`w-[50%] m-left text-center rounded-md text-white ${getStatusColor()}`}
        >
          {status}
        </p>
      </div>
      <p className="w-[20%] font-semibold">{lead_name}</p>
    </div>
  );
};

export default TableRow;
