import React from "react";

const TicketRow = ({ ticket_id, subject, assigned, date, status }) => {
  return (
    <div
      id="row"
      className="border-y-2 border-[#DBDBDB]-500 p-4 flex justify-between text-left"
    >
      <p className="w-[15%] text-[#FF0000] font-semibold">#Tc-{ticket_id}</p>
      <p className="w-[15%]">{subject}</p>
      <p className="w-[15%] font-semibold">{assigned}</p>
      <p className="w-[15%]">{date}</p>
      <div className="w-[15%]">
        <p
          className={`w-[50%] m-left text-center rounded-md text-white ${
            status === "Completed"
              ? "bg-[#069845]"
              : status === "Inprogress"
              ? "bg-[#FF9900]"
              : "bg-[#2400FF]"
          } `}
        >
          {status}
        </p>
      </div>
      <div className="w-[15%] flex ">
        <p className="pr-4 pl-2">edit</p>
        <p>delete</p>
      </div>
    </div>
  );
};

export default TicketRow;
