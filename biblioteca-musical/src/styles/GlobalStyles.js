import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background: ${props => props.theme.colors.background.main};
    color: ${props => props.theme.colors.text.primary};
    min-height: 100vh;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.secondary.light};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary.main};
    border-radius: ${props => props.theme.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary.dark};
  }
`;

export const AppContainer = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.sm};
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: ${props => props.theme.spacing.md};
  }
`;