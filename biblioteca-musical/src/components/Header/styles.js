import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary.main} 0%, ${props => props.theme.colors.primary.dark} 100%);
  color: ${props => props.theme.colors.text.white};
  text-align: center;
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%);
    pointer-events: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.md};
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.sm};
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

export const HeaderTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['4xl']};
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
  font-weight: ${props => props.theme.fontWeights.bold};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

export const HeaderSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  margin: 0;
  opacity: 0.9;
  font-weight: ${props => props.theme.fontWeights.light};
  position: relative;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;