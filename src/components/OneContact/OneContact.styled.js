import styled from 'styled-components';

export const StyledOneContactLi = styled.li`
  background-color: lightgray;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  min-width: 120px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
`;

export const OneContactDeleteButton = styled.button`
  max-width: 150px;
  padding: 5px 10px;
  margin: auto auto 0 auto;
  background: linear-gradient(to bottom, #ff5733, #d32f2f);
  color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:active {
    opacity: 0.7;
    transform: scale(0.95);
  }
`;
