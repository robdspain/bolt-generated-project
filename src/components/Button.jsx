import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.variant === 'outline' 
    ? 'transparent' 
    : props.theme.colors.primary};
  color: ${props => props.variant === 'outline' 
    ? props.theme.colors.primary 
    : 'white'};
  border: 2px solid ${props => props.theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;

  &:hover {
    background: ${props => props.variant === 'outline' 
      ? props.theme.colors.primary 
      : props.theme.colors.earth.forest};
    color: white;
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CallToActionButton = styled(Button)`
  background: ${props => props.theme.colors.accent};
  border-color: ${props => props.theme.colors.accent};
  font-size: 1.125rem;
  padding: 1rem 2rem;
  box-shadow: ${props => props.theme.shadows.md};

  &:hover {
    background: ${props => props.theme.colors.earth.brown};
    border-color: ${props => props.theme.colors.earth.brown};
  }
`;
