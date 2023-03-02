import styled from 'styled-components';

export const Button = styled.button`
background: orange;
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
 background-color :#5b9962 ;
 
}
`;


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 0.5em;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding: 0.5em;
`;
