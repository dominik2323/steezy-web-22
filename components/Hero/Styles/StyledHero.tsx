import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import u from "../../../helpers/unit";
import { StyledContact } from "../../../pagestyles/StyledContact";

export const StyledHero = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.pageMargin} 0;
  position: relative;
  display: flex;
  flex-direction: column;
  ${breakpoint.tabletLandscape} {
    min-height: unset;
  }
  ${breakpoint.tabletPortrait} {
    min-height: unset;
  }
  ${breakpoint.phone} {
    min-height: 100vh;
    padding-top: 70px;
  }
`;

export const HeroSocials = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  position: fixed;
  z-index: 99;
  bottom: ${({ theme }) => theme.pageMargin};
  ${breakpoint.largeNotebook} {
    grid-gap: 10px;
  }
  ${breakpoint.tabletLandscape} {
    display: none;
  }
`;

export const HeroText = styled.div`
  * {
    pointer-events: all;
  }
  width: ${({ theme }) => u(6, theme.pageMargin)};
  position: absolute;
  top: 50vh;
  transform: translateY(-50%);
  z-index: 1;
  display: grid;
  grid-row-gap: 30px;
  .perex {
    max-width: 300px;
  }
  ${StyledContact} & {
    width: ${({ theme }) => u(10, theme.pageMargin)};
  }
  ${breakpoint.largeNotebook} {
    width: ${({ theme }) => u(7, theme.pageMargin)};
  }
  ${breakpoint.smallNotebook} {
    width: ${({ theme }) => u(5, theme.pageMargin)};
  }
  ${breakpoint.tabletLandscape} {
    top: 50%;
  }
  ${breakpoint.tabletPortrait} {
    width: ${({ theme }) => u(8, theme.pageMargin)};
    position: static;
    transform: unset;
    margin-top: ${({ theme }) => u(-2, theme.pageMargin)};
    order: 2;
  }
  ${breakpoint.phone} {
    width: ${({ theme }) => u(15, theme.pageMargin)};
  }
`;

export const HeroMedia = styled.div`
  width: ${({ theme }) => u(13, theme.pageMargin)};
  margin-left: auto;
  ${StyledContact} & {
    width: ${({ theme }) => u(12, theme.pageMargin)};
    margin-top: ${({ theme }) => u(2, theme.pageMargin)};
    ${breakpoint.tabletPortrait} {
      width: inherit;
    }
    ${breakpoint.phone} {
      margin-top: 0;
    }
  }
  ${breakpoint.tabletPortrait} {
    width: ${({ theme }) => u(16, theme.pageMargin)};
    margin-left: unset;
    order: 1;
  }
  ${breakpoint.phone} {
  }
`;

export const HeroFooterChildren = styled.div`
  margin-top: auto;
  padding-top: 30px;
  display: flex;
  width: 100%;
  ${StyledContact} & {
    position: absolute;
    z-index: 100;
    top: ${({ theme }) => u(1, theme.pageMargin)};
    left: ${({ theme }) => u(7, theme.pageMargin, theme.pageMargin)};
    width: ${({ theme }) => u(4, theme.pageMargin)};
    ${breakpoint.largeNotebook} {
      width: ${({ theme }) => u(5, theme.pageMargin)};
    }
    ${breakpoint.tabletLandscape} {
      width: ${({ theme }) => u(6, theme.pageMargin)};
      left: unset;
      right: ${({ theme }) => u(2, theme.pageMargin)};
    }
    ${breakpoint.phone} {
      position: static;
      width: auto;
    }
  }
  ${breakpoint.tabletPortrait} {
    order: 3;
  }
`;
