import styled from 'styled-components';

export const SearchResultsContainer = styled.section`
  background: ${props => props.theme.colors.background.card};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
  }
`;

export const SearchResultsTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing['2xl']} 0;
  gap: ${props => props.theme.spacing.md};
`;

export const LoadingMessage = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text.secondary};
  text-align: center;
  
  &::after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: ${props => props.theme.spacing.sm};
    border: 2px solid ${props => props.theme.colors.primary.main};
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing['2xl']} 0;
  gap: ${props => props.theme.spacing.md};
`;

export const ErrorMessage = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.accent.error};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const RetryButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.accent.error};
  color: ${props => props.theme.colors.text.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};

  &:hover {
    background: ${props => props.theme.colors.accent.error}dd;
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SongsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: ${props => props.theme.spacing.md};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.sm};
  }
`;

export const NoResultsMessage = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text.secondary};
  text-align: center;
  padding: ${props => props.theme.spacing['2xl']} 0;
  font-style: italic;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.md};
    padding: ${props => props.theme.spacing.xl} 0;
  }
`;