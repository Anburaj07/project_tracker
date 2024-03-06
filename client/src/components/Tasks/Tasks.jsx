import React, { useState } from "react";
import styled from "styled-components";
import TaskFilters from "./TaskFilters";
import TasksTable from "./TasksTable";
import { useGetTasksQuery } from "../../redux/slices/taskApi";
import AddTaskModal from "./AddTaskModal";
import Pagination from "../Pagination";

const Tasks = () => {
  const { data: taskList, isLoading, isSuccess } = useGetTasksQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //fields for paginations
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  //Loader
  if (isLoading) {
    return (
      <div className="flex justify-center items-center m-auto h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Calculate index of the first and last entries to display on the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = taskList.slice(indexOfFirstEntry, indexOfLastEntry);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <TASKS className="pl-4 pr-6 mb-2">
      <div className="flex justify-between p-1">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <button
          className=" bg-[#5030E5] rounded text-white p-1.5"
          onClick={handleOpenModal}
        >
          + Add Task
        </button>
      </div>
      {isSuccess && !isModalOpen && (
        <>
          <TaskFilters
            entriesPerPage={entriesPerPage}
            setEntriesPerPage={setEntriesPerPage}
          />
          <TasksTable data={currentEntries} />
          <Pagination
            entriesPerPage={entriesPerPage}
            totalEntries={taskList.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
      <AddTaskModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </TASKS>
  );
};

export default Tasks;

const TASKS = styled.div`
  padding-top: 10px;
  background-color: #f5f5f5;
  padding-bottom: 40px;
  width: 90%;
`;
