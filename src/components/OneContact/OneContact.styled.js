import styled from 'styled-components';

export const OneContactDeleteButton = styled.button`
  max-width: 150px;
  padding: 5px 10px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #ff5733, #d32f2f);
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:active {
    opacity: 0.7;
    transform: scale(0.95);
  }
`;
