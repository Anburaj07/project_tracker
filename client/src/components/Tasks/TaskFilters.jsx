import React from 'react'
import search from "../../images/search.png";


const TaskFilters = () => {
  return (
    <div className="flex justify-between items-center mt-4 w-[98%] ">
    <div className="flex gap-3 ">
      <h2>Show</h2>
      <select name="" className="bg-[#E6E6E6] pl-2 pr-2 rounded">
        <option value="10">10</option>
        <option value="5">5</option>
        <option value="15">15</option>
      </select>
      <h2>entries</h2>
    </div>
    <div className="flex items-center bg-[#ffff] rounded-md p-2">
      <div>
        <img src={search} alt="" className="w-[90%]" />
      </div>
      <input type="text" placeholder="Search Task" className="pl-2 " />
    </div>
  </div>
  )
}

export default TaskFilters