import styled from "styled-components";
import { MenuItem } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  background: #0059ff7c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0059ffd3,
    #0059ff1a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0059ffd3,
    #0059ff1a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 7vh;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(MenuItem)`
  color: white !important;
`;
