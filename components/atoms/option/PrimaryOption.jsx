import styled from "styled-components";

export const PrimaryOption = ({ children }) => {
  return <SOption>{children}</SOption>;
};

const SOption = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
`;
