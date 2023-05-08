import styled from "styled-components";

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  ul{
    display: flex;
    max-width: 1200px;
    flex-wrap: wrap;
    justify-content: center;
  align-items: center;
  }
`;

export const PageItem = styled.li`
  list-style: none;
  margin: 0 2px;
`;

export const PageButton = styled.button`
  background-color: ${({ active }) => (active ? "#ed1b24" : "white")};
  color: ${({ active }) => (active ? "white" : "black")};
  border: none;
  padding: 10px;
  border-radius: 7px;
  cursor: ${({ active }) => (active ? "default" : "pointer")};

  &:hover:not(:disabled) {
    background-color: ${({ active }) => (active ? "#ed1b24" : "#ddd")};
  }

  &:disabled {
    color: #ccc;
    cursor: default;
  }
`;