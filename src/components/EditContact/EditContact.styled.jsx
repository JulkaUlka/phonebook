import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  zindex: 1;
`;
export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 20px;
  border-radius: 15px;
  boxshadow: 0 0 10px rgba(0, 0, 0, 0.5);
 
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;