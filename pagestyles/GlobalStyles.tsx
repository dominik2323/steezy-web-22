import { createGlobalStyle, DefaultTheme } from "styled-components";
import { colors } from "../helpers/consts";

export const GlobalStyle = createGlobalStyle`
  html,
  body
  {
    width:100%;
    height:100%
  }
  body {
      padding: ${({ theme }) => theme.pageMargin} !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      background-color:#23272A;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "agrandir", Arial, Helvetica, sans-serif;
  } 
  a {
    color: inherit;
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
  body {
    background-color: ${colors.primary300}; // important flag for Radix dialog
  }
  @font-face {
    font-family: "migra-italic";
    src: url("/fonts/MigraItalic-Italic.woff");
    font-weight: 400;
  }
  @font-face {
    font-family: "migra-italic";
    src: url("/fonts/MigraItalic-ExtraboldItalic.woff");
    font-weight: 600;
  }
  @font-face {
    font-family: "agrandir";
    src: url("/fonts/PPAgrandir-Medium.woff");
    font-weight: 500;
  } 
  @font-face {
    font-family: "agrandir";
    src: url("/fonts/PPAgrandir-Light.woff");
    font-weight: 300;
  } 
  html.has-scroll-smooth {
  position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  overflow: hidden; 
}

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.has-scroll-smooth body {
  overflow: hidden; }

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh; }

[data-scroll-direction="horizontal"] [data-scroll-container] {
  height: 100vh;
  display: inline-block;
  white-space: nowrap; }

[data-scroll-direction="horizontal"] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%; }

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0; }
  .c-scrollbar:hover {
    transform: scaleX(1.45); }
  .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
    opacity: 1; }
  [data-scroll-direction="horizontal"] .c-scrollbar {
    width: 100%;
    height: 10px;
    top: auto;
    bottom: 0;
    transform: scaleY(1); }
    [data-scroll-direction="horizontal"] .c-scrollbar:hover {
      transform: scaleY(1.3); }

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab; }
  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing; }
  [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
    right: auto;
    bottom: 0; }
`;
