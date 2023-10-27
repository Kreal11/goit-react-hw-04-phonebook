import styled from 'styled-components';

export const StyledAddContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const StyledAddContactInput = styled.input`
  max-width: 200px;
`;

export const StyledAddContactLabel = styled.label`
  font-size: 25px;
`;

export const StyledAddContactButton = styled.button`
  max-width: 150px;
  padding: 10px;
  margin: 0 auto;
  border: none;
  color: #fff;
  background-image: ${props =>
    props.disabled
      ? 'linear-gradient(30deg, gray, #333333)'
      : 'linear-gradient(30deg, #0400ff, #4ce3f7)'};
  border-radius: 20px;
  background-size: 100% auto;
  font-family: inherit;
  font-size: 17px;
  padding: 0.6em 1.5em;
  transition: transform 0.2s;

  &:active:not(:disabled) {
    opacity: 0.7;
    transform: scale(0.95);
  }
  &:hover:not(:disabled) {
    background-position: right center;
    background-size: 200% auto;
    -webkit-animation: pulse 2s infinite;
    animation: pulse512 1.5s infinite;
  }

  @keyframes pulse512 {
    0% {
      box-shadow: 0 0 0 0 #05bada66;
    }

    70% {
      box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
    }

    100% {
      box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
    }
  }
`;
