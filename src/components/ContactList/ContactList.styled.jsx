import styled from 'styled-components';

export const Button = styled.button`
 {
  background-color: orange;
  border: 0;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  outline: 0;
  padding: 8px 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &.selected{
    background-color: #1D8000;
  }
  @media (min-width: 768px) {
    padding: 10px 25px;
  }

&:before {
  background-color: initial;
  background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
  border-radius: 125px;
  content: "";
  height: 50%;
  left: 4%;
  opacity: .5;
  position: absolute;
  top: 0;
  transition: all .3s;
  width: 92%;
}

&:hover {
  box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
  transform: scale(0.95);
  background-color: #1D8000;
}

@media (min-width: 768px) {
  & {
    padding: 10px 25px;
  }
}

`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
 gap: 0.5em;
`;
export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr auto auto auto ;
  grid-template-rows: 32px;
  grid-gap: 0.5em;
  border-bottom: 1px solid #dbdbdb;
  padding: 0.5em;
  font-size:0.8em;
  @media (min-width: 768px) {
    & {
      font-size:1.1em;
      grid-template-rows: 35px;
    }
`;
