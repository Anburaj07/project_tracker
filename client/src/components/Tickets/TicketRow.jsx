import React from "react";
import edit from "../../images/edit.png";
import deleteIcon from "../../images/delete.png";
import { useDeleteTicketMutation } from "../../redux/slices/ticketApi";
import { useNavigate } from "react-router-dom";

const TicketRow = ({ _id, ticket_id, subject, assigned, date, status }) => {
  const navigate = useNavigate();
  const [deleteTicket] = useDeleteTicketMutation();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete the ticket?");
    if (confirmDelete) {
      deleteTicket(id);
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "Completed":
        return "bg-[#069845]";
      case "Inprogress":
        return "bg-[#FF9900]";
      default:
        return "bg-[#2400FF]";
    }
  };

  return (
    <div className="border-y-2 border-[#DBDBDB]-500 p-4 flex justify-between text-left">
      <p className="w-[15%] text-[#FF0000] font-semibold">#Tc-{ticket_id}</p>
      <p className="w-[15%]">{subject}</p>
      <p className="w-[15%] font-semibold">{assigned}</p>
      <p className="w-[15%]">{date}</p>
      <div className="w-[15%]">
        <p className={`w-[50%] m-left text-center rounded-md text-white ${getStatusColor()}`}>
          {status}
        </p>
      </div>
      <div className="w-[8%] mr-20 p-1 rounded-md flex justify-around border border-400-[#DBDBDB]">
        <img
          className="cursor-pointer"
          src={edit}
          alt=""
          onClick={() => navigate(`/tickets/edit/${_id}`)}
        />
        <img
          className="cursor-pointer"
          src={deleteIcon}
          alt=""
          onClick={() => handleDelete(_id)}
        />
      </div>
    </div>
  );
};

export default TicketRow;
