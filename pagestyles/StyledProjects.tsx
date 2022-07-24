import styled from "styled-components";
import { breakpoint } from "../helpers/consts";
import u from "../helpers/unit";

export const StyledProjects = styled.div``;

export const ProjectsHero = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.pageMargin} 0;
  ${breakpoint.tabletPortrait} {
    height: auto;
    padding: 20% 0;
  }
  ${breakpoint.phone} {
    padding: 30% 0;
  }
`;
export const ProjectsHeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
  margin: auto 0;
  // optical correction
  transform: translateY(5%);
  ${breakpoint.phone} {
    grid-template-columns: unset;
  }
`;

export const ProjectsHeroFilters = styled.div``;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: ${({ theme }) => theme.pageMargin};
  row-gap: ${({ theme }) => u(1, theme.pageMargin)};
  ${breakpoint.phone} {
    grid-template-columns: unset;
  }
`;

export const ProjectsGridColumn = styled.div`
  &.odd {
    /* transform: translateY(${({ theme }) => u(-4, theme.pageMargin)}); */
    margin-top: ${({ theme }) => u(-4, theme.pageMargin)};
  }
`;

export const ProjectsGridItem = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => u(1, theme.pageMargin)};
    ${breakpoint.phone} {
      margin-bottom: ${({ theme }) => u(2, theme.pageMargin)};
    }
  }
`;
