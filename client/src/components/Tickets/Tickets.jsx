import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TicketFilters from "./TicketFilters";
import TicketsTable from "./TicketsTable";
import { useGetTicketsQuery } from "../../redux/slices/ticketApi";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination";

const Tickets = () => {
  // Search query state
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState("");
  const [debouncedSearchKey, setDebouncedSearchKey] = useState("");

  const {
    data: ticketList,
    isLoading,
    isSuccess,
  } = useGetTicketsQuery({ searchQuery: debouncedSearchKey });

  //fields for paginations
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchKey(searchKey);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchKey]);

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
  const currentEntries = ticketList.slice(indexOfFirstEntry, indexOfLastEntry);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <TICKETS className="pl-4 pr-6">
      <div className="flex justify-between p-1">
        <h1 className="text-2xl font-semibold">Tickets</h1>
        <button
          className=" bg-[#5030E5] rounded text-white p-1.5"
          onClick={() => navigate("/tickets/add")}
        >
          + Add Ticket
        </button>
      </div>
      {isSuccess && (
        <>
          <TicketFilters
            entriesPerPage={entriesPerPage}
            setEntriesPerPage={setEntriesPerPage}
            searchKey={searchKey}
            setSearchQuery={handleChange}
          />
          <TicketsTable data={currentEntries} />
          <Pagination
            entriesPerPage={entriesPerPage}
            totalEntries={ticketList.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </TICKETS>
  );
};

export default Tickets;

const TICKETS = styled.div`
  padding-top: 10px;
  padding-bottom: 40px;
  width: 90%;
  background-color: #f5f5f5;
`;
