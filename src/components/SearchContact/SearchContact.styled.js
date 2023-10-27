import styled from 'styled-components';

export const StyledSearchWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledContactsHeader = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

export const StyledSearchLabel = styled.label`
  font-size: 20px;
  margin: 0 auto;
`;

export const StyledInputSearchWrapper = styled.div`
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

export const StyledSearchInput = styled.input`
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
