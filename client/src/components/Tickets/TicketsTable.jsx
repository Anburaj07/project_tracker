import React from "react";
import styled from "styled-components";
import TicketRow from "./TicketRow";

const TicketsTable = ({ data }) => {
  return (
    <TICKETSTABLE className="bg-white w-[98%] mt-4 rounded">
      <div
        className="flex justify-between p-4 text-base font-bold text-center"
        id="header"
      >
        <h2>TICKET ID</h2>
        <h2>SUBJECT</h2>
        <h2>ASSIGNED</h2>
        <h2>CREATED DATE</h2>
        <h2>STATUS</h2>
        <h2>ACTIONS</h2>
      </div>
      <div>
        <TicketRow
          ticket_id={"#Tc-0002"}
          subject={"Lorem ipsum dolor sit"}
          assigned={"Darlene Robertson"}
          date={"12/03/2021"}
          status="Inprogress"
        />
      </div>
    </TICKETSTABLE>
  );
};

export default TicketsTable;

const TICKETSTABLE = styled.div`
  #header {
    h2 {
      width: 15%;
      text-align: left;
      border: 1px solid red;
    }
  }
`;
