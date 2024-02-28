import React from "react";
import TableRow from "./TableRow";
import styled from "styled-components";

const TasksTable = () => {
  return (
    <TASKSTABLE className="bg-white w-[98%] mt-4 rounded">
      <div
        className="flex justify-around p-4 text-base font-semibold text-center"
        id="header"
      >
        <h2>TASK NAME</h2>
        <h2>CREATED AT</h2>
        <h2>STATUS</h2>
        <h2>LEAD NAME</h2>
      </div>
      <div>
        <TableRow
          task_name={"Lorem ipsum dolor sit"}
          status={"Active"}
          date={"12/03/2021"}
          lead_name={"Darlene Robertson"}
        />
      </div>
    </TASKSTABLE>
  );
};

export default TasksTable;

const TASKSTABLE = styled.div`
  #header {
    border: 1px solid red;
    h2 {
      width: 18%;
      border: 1px solid red;
      text-align: left;
    }
  }
  #row > {
    width: 18%;
    text-align: left;
    border: 1px solid red;
  }
`;
