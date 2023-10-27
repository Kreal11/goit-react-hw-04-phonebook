import styled from 'styled-components';

export const StyledAddContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const StyledAddContactLabel = styled.label`
  font-size: 25px;
`;

export const StyledAddContactInputWrapper = styled.div`
  margin: 0 auto;
  width: 210px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    rgb(227, 213, 255),
    rgb(255, 231, 231)
  );
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
`;

export const StyledAddContactInput = styled.input`
  height: 40px;
  border: none;
  outline: none;
  caret-color: rgb(255, 81, 0);
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  padding-left: 35px;
  letter-spacing: 0.8px;
  color: rgb(19, 19, 19);
  font-size: 13.4px;
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
      : 'linear-gradient(to bottom,rgb(227, 213, 255),rgb(255, 231, 231))'};
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