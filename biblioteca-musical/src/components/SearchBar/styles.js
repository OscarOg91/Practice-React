import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  background: ${props => props.theme.colors.background.card};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  margin-bottom: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  flex: 1;
  gap: ${props => props.theme.spacing.sm};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.theme.colors.secondary.main};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.md};
  background: ${props => props.theme.colors.background.card};
  color: ${props => props.theme.colors.text.primary};
  transition: ${props => props.theme.transitions.normal};

  &:focus {
    border-color: ${props => props.theme.colors.primary.main};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    background-color: ${props => props.theme.colors.background.hover};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.light};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

export const SearchButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xl};
  background: ${props => props.disabled 
    ? props.theme.colors.text.light 
    : `linear-gradient(135deg, ${props.theme.colors.primary.main} 0%, ${props.theme.colors.primary.dark} 100%)`
  };
  color: ${props => props.theme.colors.text.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: ${props => props.theme.transitions.normal};
  white-space: nowrap;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;