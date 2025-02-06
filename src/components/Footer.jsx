import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { PiButterfly } from 'react-icons/pi';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.neutral.light};
  padding: 4rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.neutral.medium}20;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.25rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Navigation</h3>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/knowledge-base">Knowledge Base</NavLink>
          </NavLinks>
        </FooterSection>

        <FooterSection>
          <h3>Connect</h3>
          <SocialLinks>
            <SocialLink 
              href="https://x.com/behavior_school" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaXTwitter /> X (Twitter)
            </SocialLink>
            <SocialLink 
              href="https://bsky.app/profile/behaviorschool.bsky.social" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <PiButterfly /> BlueSky
            </SocialLink>
            <SocialLink 
              href="https://www.youtube.com/@BehaviorSchool" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaYoutube /> YouTube
            </SocialLink>
            <SocialLink 
              href="https://www.instagram.com/behaviorschool" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaInstagram /> Instagram
            </SocialLink>
            <SocialLink 
              href="https://www.facebook.com/profile.php?id=61564836345571" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaFacebook /> Facebook
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/company/behavior-school/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
