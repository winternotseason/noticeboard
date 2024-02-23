import styled from "styled-components";

const ErrorContainer = styled.div`
  border: 1px solid red;
`;

const Error: React.FC<{ message: string }> = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default Error;
