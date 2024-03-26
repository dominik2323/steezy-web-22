import styled from "styled-components";

export const StyledAnimateTextRows = styled.div`
  position: relative;
  overflow: hidden;
`;

export const HiddenText = styled.span`
  display: block;
  opacity: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Text = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;