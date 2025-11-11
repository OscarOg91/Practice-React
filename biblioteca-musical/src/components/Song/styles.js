import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SongContainer = styled.div`
  background: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  overflow: hidden;
  transition: ${props => props.theme.transitions.normal};
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    &:hover {
      transform: none;
    }
  }
`;

export const SongImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: ${props => props.theme.colors.background.hover};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 150px;
  }
`;

export const AlbumThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${props => props.theme.transitions.normal};

  ${SongContainer}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    ${SongContainer}:hover & {
      transform: none;
    }
  }
`;

export const SongInfo = styled.div`
  padding: ${props => props.theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SongTitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:hover h3 {
    color: ${props => props.theme.colors.primary.main};
  }
`;

export const SongTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 ${props => props.theme.spacing.xs} 0;
  transition: ${props => props.theme.transitions.fast};
  line-height: 1.3;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.md};
  }
`;

export const SongArtist = styled.p`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.text.secondary};
  margin: 0 0 ${props => props.theme.spacing.xs} 0;
  font-weight: ${props => props.theme.fontWeights.medium};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

export const SongYear = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text.light};
  margin: 0;
  font-weight: ${props => props.theme.fontWeights.normal};
`;

export const SongActions = styled.div`
  padding: ${props => props.theme.spacing.md};
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

export const AddToLibraryButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.added 
    ? props.theme.colors.accent.success 
    : `linear-gradient(135deg, ${props.theme.colors.primary.main} 0%, ${props.theme.colors.primary.dark} 100%)`
  };
  color: ${props => props.theme.colors.text.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
    background: ${props => props.added 
      ? props.theme.colors.accent.success + 'dd'
      : `linear-gradient(135deg, ${props.theme.colors.primary.dark} 0%, ${props.theme.colors.primary.main} 100%)`
    };
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  }
`;

export const DetailsButton = styled(Link)`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: transparent;
  color: ${props => props.theme.colors.primary.main};
  border: 2px solid ${props => props.theme.colors.primary.main};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  display: inline-block;

  &:hover {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.text.white};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  }
`;