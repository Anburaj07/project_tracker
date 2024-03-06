import React from "react";
import styled from "styled-components";

const Pagination = ({
  entriesPerPage,
  totalEntries,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer className="flex justify-center mt-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={number === currentPage ? "active" : ""}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  .active {
    background-color: #007bff;
    color: #fff;
  }
`;
