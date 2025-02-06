import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  text-align: ${props => props.center ? 'center' : 'left'};
  margin-bottom: 2rem;
`;

export const SectionText = styled.p`
  font-size: ${props => props.large ? '1.2rem' : '1rem'};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: ${props => props.center ? 'center' : 'left'};
`;
