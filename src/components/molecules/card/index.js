import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 225px;
  padding: 15px;
  margin: 10px;
  border-radius: 20px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Card;
