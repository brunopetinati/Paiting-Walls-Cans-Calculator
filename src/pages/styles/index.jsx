import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 93vh;
  width: 100vw;
  background-color: #0059ff1a;
  color: #0059ffc5;
  font-size: 3vh;
`;

export const ContainerRoom = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 93vh;
  width: 120vw;
  background-color: #0059ff1a;
  color: #0059ffc5;
  font-size: 3vh;
`;

export const Text = styled.div`
  font-family: Tahoma, Geneva, sans-serif;
  margin-bottom: 10vh;
`;

export const Welcome = styled.div`
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 5vh;
  letter-spacing: 2.5px;
  font-style: italic;
  text-decoration: underline solid #0059ff86;
  margin-bottom: 10vh;
`;

export const WallStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 135vh;
  width: 100vw;
  background-color: #0059ff1a;
  color: #0059ffc5;
  font-size: 3vh;
`;

export const CoreStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 178vh;
  width: 100vw;
  background-color: #0059ff1a;
  color: #0059ffc5;
  font-size: 3vh;
`;

export const StyledButton = styled(Button)`
  background-color: #3a5dce !important;
  width: 15%;
  height: 5vh !important;
  border: 1px solid !important;
  color: white !important;
  &:hover {
    background-color: #3a5dcec7 !important;
  }
  @media (max-width: 1024px) {
    font-size: 10px !important;
  }
  @media (max-width: 750px) {
    font-size: 9px !important;
    width: 60%;
  }
`;

export const StyledRedButton = styled(Button)`
  background-color: #ff0000ca !important;
  width: 15%;
  height: 5vh !important;
  border: 1px solid !important;
  color: white !important;
  &:hover {
    background-color: #ff000089 !important;
  }
  @media (max-width: 1024px) {
    font-size: 10px !important;
  }
  @media (max-width: 750px) {
    font-size: 9px !important;
    width: 60%;
  }
`;

export const CoreForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 25vh;
`;

export const WallForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 15vh;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 2vh;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 4vh;
  letter-spacing: 2.5px;
  color: #3a5dce;
`;

export const StyledInput = styled(Input)``;
