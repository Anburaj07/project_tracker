import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cancel from "../../images/cancel.png";
import {
  useAddProjectMutation,
  useEditProjectMutation,
  useGetProjectByIdQuery,
} from "../../redux/slices/projectApi";
import { useNavigate, useParams } from "react-router-dom";

const ProjectModal = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [project, setProject] = useState({
    title: "",
    description: "",
    percentage: isEditing ? 15 : 0,
    status: isEditing ? "In progress" : "Not started",
    task: "",
    due_date: "",
    starting_date: new Date().toISOString().slice(0, 10),
    about: "",
  });
  const { id } = useParams();
  const { data } = useGetProjectByIdQuery(id);
  const [editProject] = useEditProjectMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      setProject({ ...data });
    } else {
      setIsEditing(false);
    }
  }, [id, data]);

  const [addProject] = useAddProjectMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mutation = isEditing ? editProject : addProject;
    mutation({ id, ...project });
    const successMessage = isEditing
      ? "Project updated successfully!"
      : "Project added successfully!";
    alert(successMessage);
    setIsEditing(false);
    navigate("/");
  };

  const { title, description, task, due_date, about } = project;

  return (
    <div className="modal m-auto pb-16 w-[90%] bg-[#f5f5f5] ">
      <div className="modal-content text-[#474f5e] mt-6 shadow-md w-[50%] p-4 m-auto bg-[#ffffff] rounded-md">
        <div className="flex justify-end w-[90%] pt-2">
          <h2 className="text-2xl font-semibold text-[#5030E5] mr-16 mb-2">
            {isEditing ? "Edit" : "New"} Project
          </h2>
          <img
            src={cancel}
            className="cursor-pointer text-2xl font-medium ml-24"
            alt="Cancel"
            onClick={() => navigate("/")}
          />
        </div>
        <FORM onSubmit={handleSubmit} className="flex flex-col">
          {/* Form fields */}
          <div className="flex justify-between">
            <div className="w-[50%]">
              <h1 className="text-lg">Title</h1>
              <input
                type="text"
                value={title}
                name={"title"}
                onChange={handleChange}
                placeholder="Enter Project Title"
              />
            </div>
            <div className="w-[50%]">
              <h1 className="text-lg">Description</h1>
              <input
                type="text"
                value={description}
                name={"description"}
                onChange={handleChange}
                placeholder="Enter Project Description"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[50%]">
              <h1 className="text-lg">No.of Tasks</h1>
              <input
                type="number"
                value={task}
                name={"task"}
                onChange={handleChange}
                placeholder="Enter No.of Tasks"
              />
            </div>
            <div className="w-[50%]">
              <h1 className="text-lg">Due Date</h1>
              <input
                type="date"
                value={due_date}
                name={"due_date"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <h1 className="text-lg">About</h1>
            <textarea
              name="about"
              id=""
              cols="50"
              rows="4"
              value={about}
              onChange={handleChange}
              placeholder="Enter Project Details"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#5030E5] w-[50%] mt-4 m-auto text-lg text-[#ffff] p-2 rounded-md "
          >
            {isEditing ? "Edit" : "Create"} Project
          </button>
        </FORM>
      </div>
    </div>
  );
};

export default ProjectModal;

const FORM = styled.form`
  > div {
    padding: 10px;
    text-align: left;
    /* border: 1px solid red; */
    select,
    input,
    textarea {
      width: 90%;
      padding: 8px;
      border-radius: 5px;
      margin-top: 5px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  }
`;
