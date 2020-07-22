import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: ${(props) => (props.strech ? 'flex' : 'inline-block')};
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? '#ee4622' : 'white')};
  width: ${(props) => (props.large ? '300px' : '100px')};
  border: none;
  color: ${(props) => (props.primary ? '#ffff' : '#ee4622')};
  font-family: Product Sans;
  font-size: ${(props) => (props.large ? '24px' : '14px')};
  font-weight: bold;
  padding: ${(props) => (props.large ? '6px 0' : '3px 0')};
  margin-right: 20px;
  box-shadow: ${(props) =>
    props.large ? '8px 8px 16px -8px #333333;' : 'none'};

  &:hover {
    transform: scale(0.98);
    border: none;
    outline: none;
  }
`;

const Button = ({ primary, large, children, strech }) => {
  return (
    <StyledButton primary={primary} large={large} strech={strech}>
      {children}
    </StyledButton>
  );
};

export default Button;
