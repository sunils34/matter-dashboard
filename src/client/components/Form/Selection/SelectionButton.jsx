import React from 'react';
import styled from 'styled-components';

const SelectionButtonElt = styled.button`
  padding: 10px;
  background: ${props => (props.selected ? '#CCCCCC' : '#F8F8F8')};
  margin: 10px;
  color: #A8A8A8;
  cursor: pointer;

  &:hover {
    background:#E8E8E8;
  }

  outline: none;
  border: none;
`;

const SelectionButton = ({ children, onClick, selected }) => (
  <SelectionButtonElt selected={selected} onClick={onClick}>{children}</SelectionButtonElt>
);

SelectionButton.defaultProps = {
  onClick: React.PropTypes.func,
};

SelectionButton.propTypes = {
  selected: React.PropTypes.bool.isRequired,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default SelectionButton;
