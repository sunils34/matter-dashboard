import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
`;

const Button = ({ children, onClick }) => (
  <button onClick={onClick} >
    <Wrapper>{children}</Wrapper>
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
