import React from "react";
import styled from "styled-components";
import TaskFilters from "./TaskFilters";
import TasksTable from "./TasksTable";
import { useGetTasksQuery } from "../../redux/slices/taskApi";

const Tasks = () => {
  const { data: taskList, isLoading, isSuccess } = useGetTasksQuery();
  return (
    <TASKS className="pl-4 pr-6">
      <div className="flex justify-between p-1">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <button className=" bg-[#5030E5] rounded text-white p-1.5">
          + Add Task
        </button>
      </div>
      {isLoading && <h1>Loading...</h1>}
      {isSuccess && (
        <>
          <TaskFilters />
          <TasksTable data={taskList}/>
        </>
      )}
    </TASKS>
  );
};

export default Tasks;

const TASKS = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
`;
