import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const Block = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  width: 100%;
  border: 1px solid #dbdbdb;
  font-size: 0.8em;
  padding: 0.8em 0.5em;
  border-radius: 2px;
  
  &:hover {
    border-color: #8bc34a;
    outline: none;

`;

export const ImSearchStyled = styled(ImSearch)`
  fill: #5b9962;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
