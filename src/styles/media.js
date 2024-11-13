import { css } from "styled-components";
import { breakpoints } from "./breakpoints";

export const media = {
  mobile: (...args) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.desktop}) {
      ${css(...args)}
    }
  `,
};
