import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const AboutSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const ProfileSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImage = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const Credentials = styled.div`
  background: ${props => props.theme.colors.neutral.light};
  padding: 2rem;
  border-radius: 1rem;
  margin: 2rem 0;
`;

const CredentialsList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: "✅";
      position: absolute;
      left: 0;
    }
  }
`;

function About() {
  return (
    <AboutSection>
      <h1>About Rob Spain</h1>
      <ProfileSection>
        <ProfileImage>
          <img src="/assets/profile.jpg" alt="Rob Spain" />
        </ProfileImage>
        <div>
          <p>
            I'm Rob Spain, M.S., BCBA, IBA, a school-based behavior analyst with over 20 years 
            of experience in behavior intervention, functional assessment, and school team collaboration.
          </p>
          
          <Credentials>
            <h2>Professional Experience</h2>
            <CredentialsList>
              <li>
                <strong>Behavior Analyst in Schools (Kings Canyon Unified School District)</strong>
                <br />Leading a team of 25+ staff, conducting functional assessments, training 
                teachers, and implementing district-wide behavior systems
              </li>
              <li>
                <strong>Adjunct Faculty (Fresno Pacific University)</strong>
                <br />Teaching graduate-level courses on Behavior Analysis, Ethics, and Research Methods
              </li>
              <li>
                <strong>Consultant for Schools & Behavior Professionals</strong>
                <br />Helping districts, schools, and individual professionals improve behavior 
                systems, reduce burnout, and implement effective, sustainable intervention plans
              </li>
            </CredentialsList>
          </Credentials>

          <h2>Areas of Expertise</h2>
          <CredentialsList>
            <li>Functional Assessments & Behavior Intervention Planning</li>
            <li>ACT (Acceptance & Commitment Training) for reducing stress</li>
            <li>Creating effective, teacher-friendly behavior plans</li>
            <li>Trauma-informed & assent-based behavior strategies</li>
          </CredentialsList>

          <Button as={Link} to="/book-call">
            Book a Call with Rob
          </Button>
        </div>
      </ProfileSection>
    </AboutSection>
  );
}

export default About;
