import React from "react";
import styled from "styled-components";
import TicketFilters from "./TicketFilters";
import TicketsTable from "./TicketsTable";
import { useGetTicketsQuery } from "../../redux/slices/ticketApi";

const Tickets = () => {
  const { data: ticketList, isLoading, isSuccess } = useGetTicketsQuery();

  return (
    <TICKETS className="pl-4 pr-6">
      <div className="flex justify-between p-1">
        <h1 className="text-2xl font-semibold">Tickets</h1>
        <button className=" bg-[#5030E5] rounded text-white p-1.5">
          + Add Ticket
        </button>
      </div>
      {isLoading && <h1>Loading...</h1>}
      {isSuccess && (
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
  margin-top: 10px;
  margin-bottom: 40px;
`;
