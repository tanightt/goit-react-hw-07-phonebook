import { styled } from 'styled-components';

export const StyledForm = styled.form`
  width: 300px;
  padding: 0 15px 15px 15px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 5px;
`;
export const StyledBtn = styled.button`
  width: 100px;
  margin-top: 15px;
  padding: 2px;
  margin-left: auto;
  border-radius: 5px;
  border-color: #354cc0;
  cursor: pointer;

  &:hover {
    background-color: #354cc0;
    color: white;
  }
`;
