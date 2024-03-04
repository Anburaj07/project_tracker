import React from "react";
import styled from "styled-components";
import TicketFilters from "./TicketFilters";
import TicketsTable from "./TicketsTable";
import { useGetTicketsQuery } from "../../redux/slices/ticketApi";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const { data: ticketList, isLoading, isSuccess } = useGetTicketsQuery();

  const navigate = useNavigate();

  return (
    <TICKETS className="pl-4 pr-6">
      <div className="flex justify-between p-1">
        <h1 className="text-2xl font-semibold">Tickets</h1>
        <button
          className=" bg-[#5030E5] rounded text-white p-1.5"
          onClick={() => navigate("/tickets/add")}
        >
          + Add Ticket
        </button>
      </div>
      {isLoading && <h1>Loading...</h1>}
      {isSuccess &&  (
        <>
          <TicketFilters />
          <TicketsTable data={ticketList} />
        </>
      )}
    </TICKETS>
  );
};

export default Tickets;

const TICKETS = styled.div`
  padding-top: 10px;
  padding-bottom: 40px;
  width: 90%;
  background-color: #f5f5f5;
`;
