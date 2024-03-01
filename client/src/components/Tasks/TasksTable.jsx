import React from "react";
import TableRow from "./TableRow";
import styled from "styled-components";

const TasksTable = ({ data }) => {
  return (
    <TASKSTABLE className="bg-white w-[98%] mt-4 rounded">
      <div
        className="flex justify-between p-4 text-base font-bold text-center"
        id="header"
      >
        <h2>TASK NAME</h2>
        <h2>CREATED DATE</h2>
        <h2>STATUS</h2>
        <h2>LEAD NAME</h2>
      </div>
      <div>
        {data.map((el) => (
          <TableRow key={el._id} {...el} />
        ))}
      </div>
    </TASKSTABLE>
  );
};

export default TasksTable;

const TASKSTABLE = styled.div`
  #header {
    h2 {
      width: 20%;
      text-align: left;
    }
  }
`;
