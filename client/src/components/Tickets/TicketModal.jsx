import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cancel from "../../images/cancel.png";
import {
  useAddTicketMutation,
  useEditTicketMutation,
  useGetTicketByIdQuery,
} from "../../redux/slices/ticketApi";
import { useNavigate, useParams } from "react-router-dom";

const TicketModal = () => {

  const [ticket, setTicket] = useState({
    ticket_id: 1003,
    subject: "",
    assigned: "",
    date: new Date().toLocaleDateString("en-GB"),
    status: "Inprogress",
    requirements: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();  
  const { data } = useGetTicketByIdQuery(id);
  const [editTicket] = useEditTicketMutation();
  
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      setTicket({ ...data });
    } else {
      setIsEditing(false);
    }
  }, [id, data]);

  //addTicket
  const [addTicket] = useAddTicketMutation();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setTicket({
      ...ticket,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editTicket(ticket);
      alert("Task Updated Successfully!");
    } else {
      addTicket(ticket);
      alert("Task Added Successfully!");
    }
    setIsEditing(false);
    navigate("/tickets");
  };
  const { subject, assigned, requirements, description } = ticket;
  return (
    <TICKETMODEL className="modal m-auto mt-4 w-[50%]">
      <div className="modal-content text-[#474f5e] shadow-md w-[90%] p-4 m-auto bg-[#ffffff] rounded-md">
        <div className="flex justify-end w-[90%]">
          <h2 className="text-2xl font-semibold text-[#5030E5] mr-16 mb-2">
            {isEditing ? "Edit" : "New"} Ticket
          </h2>
          <img
            src={cancel}
            className="cursor-pointer text-2xl font-medium ml-24"
            alt="Cancel"
            onClick={() => navigate("/tickets")}
          />
        </div>
        <FORM onSubmit={handleSubmit} className="flex flex-col">
          {/* Form fields */}
          <div className="flex justify-between">
            <div className="w-[50%]">
              <h1 className="text-lg">Subject</h1>
              <select name="subject" value={subject} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Lorem ipsum dolor sit">
                  Lorem ipsum dolor sit
                </option>
                <option value="Lorem ipsum dolor sit">
                  Lorem ipsum dolor sit
                </option>
                <option value="Lorem ipsum dolor sit">
                  Lorem ipsum dolor sit
                </option>
              </select>
            </div>
            <div className="w-[50%]">
              <h1 className="text-lg">Assign to</h1>
              <select name="assigned" value={assigned} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Devon Lane">Devon Lane</option>
                <option value="Floyd Miles">Floyd Miles</option>
                <option value="Guy Hawkins">Guy Hawkins</option>
                <option value="Bessie Cooper">Bessie Cooper</option>
              </select>
            </div>
          </div>
          <div>
            <h1 className="text-lg">Requirements</h1>
            <textarea
              name="requirements"
              id=""
              cols="50"
              rows="4"
              value={requirements}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <h1 className="text-lg">Description</h1>
            <textarea
              name="description"
              id=""
              cols="50"
              rows="4"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#5030E5] w-[50%] mt-4 m-auto text-lg text-[#ffff] p-2 rounded-md "
          >
            {isEditing ? "Edit" : "Create"} Ticket
          </button>
        </FORM>
      </div>
    </TICKETMODEL>
  );
  // );
};

export default TicketModal;

const FORM = styled.form`
  div {
    padding: 4px;
    text-align: left;
    select,
    input,
    textarea {
      width: 90%;
      padding: 8px;
      border-radius: 5px;
      margin-top: 5px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  }
`;

const TICKETMODEL = styled.div`
  border: 1px solid red;
`;