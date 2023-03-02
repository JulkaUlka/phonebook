import styled from 'styled-components';
import { ImPhone, ImUserPlus } from 'react-icons/im';

export const Button = styled.button`
  background: green;
  box-shadow: 0 3px 0 0 grey;
  border-radius: 2px;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  padding: 10px 15px;
  text-shadow: 0 1px #68b25b;
  &:hover,
  &:focus {
    background-color: #8bc34a;
  }
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  border: 1px solid #dbdbdb;
  margin-right: 20px;
  font-size: 0.8em;
  padding: 0.8em 0.5em;
  border-radius: 2px;
  &:hover {
    border-color: #8bc34a;
    outline: none;
  }
`;
export const Form = styled.form`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
export const Label = styled.label`
  display: block;
`;

export const ImUserPlusStyled = styled(ImUserPlus)`
  fill: #5b9962;
`;
export const ImPhoneStyled = styled(ImPhone)`
  fill: #5b9962;
`;
