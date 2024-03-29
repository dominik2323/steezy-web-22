import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";

export const StyledBurger = styled.div`
  display: flex;
  pointer-events: all;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
  position: absolute;
  right: 0;
  /* cursor: pointer; */
  /* width: 80px; */
  width: ${({ theme }) => theme.navbarHeight};
  height: 100%;
  flex-shrink: 0;
  z-index: 9999999;
  padding: 15px;
  svg {
    width: 100%;
    height: auto;
  }
  line {
    stroke: ${colors.white};
  }
  &:hover {
    background-color: ${colors.primary400};
    line {
      stroke: ${colors.black};
    }
  }
  ${breakpoint.largeNotebook} {
    /* width: 70px; */
  }
  ${breakpoint.smallNotebook} {
    /* width: 60px; */
  }
  ${breakpoint.tabletLandscape} {
    /* width: 50px; */
  }
  ${breakpoint.phone} {
    /* width: 40px; */
    padding: 5px;
  }
`;

export const BurgerSvg = styled.svg``;
