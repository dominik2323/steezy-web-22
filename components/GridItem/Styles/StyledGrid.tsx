import styled from "styled-components";
import { spaces } from "../../../helpers/spaces";

export const Grid = styled.div`
  display: grid;
  row-gap: ${spaces.xs}px;
`;

export const GridRow = styled.div`
  display: grid;
  column-gap: ${spaces.xs}px;
  grid-template-columns: 9fr ${(16 * 16) / 9 / 9}fr;
  &:nth-child(2n) {
    grid-template-columns: ${(16 * 16) / 9 / 9}fr 9fr;
  }
`;
