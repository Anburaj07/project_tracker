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
        {data.map((el) => (
          <TicketRow key={el._id} {...el} />
        ))}
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
    }
  }
`;
