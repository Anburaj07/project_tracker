import React from "react";
import search from "../../images/search.png";

const TaskFilters = ({
  entriesPerPage,
  setEntriesPerPage,
  searchKey,
  setSearchQuery,
}) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex gap-3 ">
        <h2>Show</h2>
        <select
          name="entriesPerPage"
          className="bg-[#E6E6E6] pl-2 pr-2 rounded"
          value={entriesPerPage}
          onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
        <h2>entries</h2>
      </div>
      <div className="flex items-center bg-[#ffff] rounded-md p-2">
        <div>
          <img src={search} alt="" className="w-[90%]" />
        </div>
        <input
          type="text"
          placeholder="Search Tasks"
          className="pl-2 "
          value={searchKey}
          onChange={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default TaskFilters;
