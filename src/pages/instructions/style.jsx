import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  justify-content: center;
  height: 80vh;
  width: 100vw;
  background-color: #a8dadc;
  @media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
  }
`;
