import { createGlobalStyle } from "styled-components";
import { CSSReset } from "./reset";
import { ThemeProps } from "../types";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const GlobalStyles = createGlobalStyle`

${CSSReset}

:root {
  --primary-alpha: #5964e0;
  --primary-bravo: #939bf4;

  --light-alpha: #fff;
  --light-bravo: #f4f6f8;

  --grey-alpha: #9daec2;
  --grey-bravo: #6e8098;

  --dark-alpha: #19202d;
  --dark-bravo: #121721;

}
  body {
    background: ${({ theme }: GlobalThemeProps) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  h1,
h2,
h3,
h4 {
  font-weight: 700;
}

h1 {
  font-size: 2.8rem;
  line-height: 3.4rem;
}
h2 {
  font-size: 2.4rem;
  line-height: 2.9rem;
}
h3 {
  font-size: 2rem;
  line-height: 2.4rem;
}
h4 {
  font-size: 1.4rem;
  line-height: 1.8rem;
}

`;

export const lightTheme = {
  background: "var(--light-bravo)",
  text: "var(--grey-bravo)",
  elementBackground: "var(--light-alpha)",
};
export const darkTheme = {
  background: "var(--dark-bravo)",
  text: "var(--grey-alpha)",
  elementBackground: "var(--dark-alpha)",
};
