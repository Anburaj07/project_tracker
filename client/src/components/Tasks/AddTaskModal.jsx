import React, { useState } from "react";
import styled from "styled-components";

const AddTaskModal = ({ isOpen, onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [leadName, setLeadName] = useState("");
  // Other state variables for form fields

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data, for example, by posting it to the server
    // Reset form fields
    setTaskName("");
    setLeadName("");
    // Close the modal
    onClose();
  };
  return (
    isOpen && (
      <div className="modal mt-8">
        <div className="modal-content text-[#474f5e] shadow-md w-[40%] p-4 m-auto bg-[#ffffff] rounded-md">
          <div className="flex justify-between w-[90%] mb-4">
            <h2 className="text-2xl font-bold">Add Task</h2>
            <span className="close text-2xl font-semi-bold" onClick={onClose}>
              &times;
            </span>
          </div>
          <FORM onSubmit={handleSubmit} className="flex flex-col">
            {/* Form fields */}
            <div>
              <h1 className="text-lg">Task name</h1>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
              />
            </div>
            <div>
              <h1 className="text-lg">Lead name</h1>
              <input
                type="text"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                placeholder="Lead Name"
              />
            </div>
            <div className="flex justify-end w-[90%]" > 
            <button type="submit" className="bg-[#3182ce] text-lg text-[#ffff] p-2 rounded-md mr-2">Add Task</button>
            <button onClick={onClose} className="bg-[#edf2f7] text-lg p-2 rounded-md">Cancel</button>
            </div>
          </FORM>
        </div>
      </div>
    )
  );
};

export default AddTaskModal;

const FORM = styled.form`
  div {
    /* width: 70%; */
    margin-bottom: 20px;
    padding: 4px;
    text-align: left;
    input {
      width: 90%;
      padding: 8px;
      border-radius: 5px;
      margin-top: 5px;
      border: 1px solid blue;
    }
  }
`;
