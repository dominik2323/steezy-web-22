import styled from "styled-components";
import u from "../../../helpers/unit";
import { StyledIndex } from "../../../pagestyles/StyledIndex";
import { StyledProject } from "../../../pagestyles/StyledProject";
import { StyledStudio } from "../../../pagestyles/StyledStudio";

export const StyledHero = styled.div`
  height: 100vh;
  padding: ${({ theme }) => theme.pageMargin} 0;
  position: relative;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  z-index: 2;
  padding-top: 80px;
`;

export const HeroSocials = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeroText = styled.div`
  max-width: ${({ theme }) => u(4, theme.pageMargin)};
  margin-top: auto;
  margin-bottom: auto;
  ${StyledIndex} &, ${StyledStudio} & {
    max-width: ${({ theme }) => u(6, theme.pageMargin)};
  }
  ${StyledProject} & {
    max-width: ${({ theme }) => u(6, theme.pageMargin)};
  }
`;

export const HeroMedia = styled.div`
  position: absolute;
  right: 0;
  top: ${({ theme }) => theme.pageMargin};
  bottom: ${({ theme }) => theme.pageMargin};
  width: ${({ theme }) => u(13, theme.pageMargin)};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HeroFooterChildren = styled.div`
  margin-top: auto;
  display: flex;
  width: 100%;
`;
