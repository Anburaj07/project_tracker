import React, { useState } from "react";
import styled from "styled-components";
import TaskFilters from "./TaskFilters";
import TasksTable from "./TasksTable";
import { useGetTasksQuery } from "../../redux/slices/taskApi";
import AddTaskModal from "./AddTaskModal";

const Tasks = () => {
  const { data: taskList, isLoading, isSuccess } = useGetTasksQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TASKS className="pl-4 pr-6 min-h-lvh">
      <div className="flex justify-between p-1">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <button
          className=" bg-[#5030E5] rounded text-white p-1.5"
          onClick={handleOpenModal}
        >
          + Add Task
        </button>
      </div>
      {isLoading && <h1>Loading...</h1>}
      {isSuccess && !isModalOpen && (
        <>
          <TaskFilters />
          <TasksTable data={taskList} />
        </>
      )}
      <AddTaskModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </TASKS>
  );
};

export default Tasks;

const TASKS = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
`;
