const { styled } = require('styled-components');

export const DeleteBtn = styled.button`
  width: 50px;
  margin-top: 10px;
  margin-left: 10px;
  padding: 2px;
  border-radius: 5px;
  border-color: #354cc0;
  cursor: pointer;

  &:hover {
    background-color: #354cc0;
    color: white;
  }
`;
