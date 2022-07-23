import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";
import u from "../../../helpers/unit";

export const StyledFooter = styled.footer`
  display: grid;
  grid-gap: ${({ theme }) => `calc(2 * ${theme.pageMargin})`};
  margin-top: ${({ theme }) => u(2, theme.pageMargin)};
  margin-bottom: 100px;
  ${breakpoint.tabletLandscape} {
    margin-bottom: 60px;
  }
  ${breakpoint.phone} {
    margin-top: ${({ theme }) => u(4, theme.pageMargin)};
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.pageMargin};
  ${breakpoint.phone} {
    grid-template-columns: unset;
    grid-row-gap: 30px;
  }
`;

export const DetailedContact = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  align-items: center;
  grid-gap: 60px;
  ${breakpoint.tabletPortrait} {
    grid-gap: 30px;
    justify-content: end;
  }
  ${breakpoint.phone} {
    justify-content: start;
  }
`;
