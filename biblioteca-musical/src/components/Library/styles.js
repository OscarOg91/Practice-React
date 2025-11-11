import styled from 'styled-components';

export const LibraryContainer = styled.section`
  background: ${props => props.theme.colors.background.card};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
  }
`;

export const LibraryTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${props => props.theme.spacing.sm};
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary.main} 0%, ${props => props.theme.colors.primary.dark} 100%);
    border-radius: ${props => props.theme.borderRadius.sm};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

export const LibrarySongsContainer = styled.div`
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

export const EmptyLibraryMessage = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text.secondary};
  text-align: center;
  padding: ${props => props.theme.spacing['2xl']} 0;
  font-style: italic;
  background: ${props => props.theme.colors.background.hover};
  border-radius: ${props => props.theme.borderRadius.md};
  border: 2px dashed ${props => props.theme.colors.secondary.main};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.md};
    padding: ${props => props.theme.spacing.xl} 0;
  }
`;

export const LibraryStats = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background.hover};
  border-radius: ${props => props.theme.borderRadius.md};
  border-left: 4px solid ${props => props.theme.colors.primary.main};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

export const LibraryStatsText = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text.secondary};
  font-weight: ${props => props.theme.fontWeights.medium};

  strong {
    color: ${props => props.theme.colors.primary.main};
    font-weight: ${props => props.theme.fontWeights.semibold};
  }
`;