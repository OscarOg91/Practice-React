import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SongDetailContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.md};
  }
`;

export const SongDetailHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.primary.main};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-decoration: none;
  transition: ${props => props.theme.transitions.normal};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.theme.colors.primary.main};
  border-radius: ${props => props.theme.borderRadius.md};

  &:hover {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.text.white};
    transform: translateX(-4px);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.sm};
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  }
`;

export const SongDetailContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${props => props.theme.spacing['2xl']};
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing['2xl']};
  box-shadow: ${props => props.theme.shadows.lg};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xl};
    padding: ${props => props.theme.spacing.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
    gap: ${props => props.theme.spacing.lg};
  }
`;

export const AlbumImageContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const AlbumCover = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  transition: ${props => props.theme.transitions.normal};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.shadows.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: 250px;
  }
`;

export const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

export const AlbumTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['3xl']};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
    text-align: center;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const ArtistName = styled.h2`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.primary.main};
  margin: 0;
  font-weight: ${props => props.theme.fontWeights.semibold};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    text-align: center;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

export const AlbumDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.background.hover};
  border-radius: ${props => props.theme.borderRadius.md};
  border-left: 4px solid ${props => props.theme.colors.primary.main};

  p {
    margin: 0;
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.colors.text.secondary};

    strong {
      color: ${props => props.theme.colors.text.primary};
      font-weight: ${props => props.theme.fontWeights.semibold};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};

    p {
      font-size: ${props => props.theme.fontSizes.sm};
    }
  }
`;

export const AlbumDescription = styled.div`
  h3 {
    font-size: ${props => props.theme.fontSizes.xl};
    color: ${props => props.theme.colors.text.primary};
    margin: 0 0 ${props => props.theme.spacing.md} 0;
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  p {
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.colors.text.secondary};
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    h3 {
      font-size: ${props => props.theme.fontSizes.lg};
    }

    p {
      font-size: ${props => props.theme.fontSizes.sm};
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  min-height: 400px;
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  padding: ${props => props.theme.spacing.xl};
  text-align: center;

  p {
    font-size: ${props => props.theme.fontSizes.lg};
    color: ${props => props.theme.colors.accent.error};
    margin: 0;
  }
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
`;