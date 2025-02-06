import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}10, ${props => props.theme.colors.neutral.light});
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
    line-height: 1.2;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
  }
`;

const WelcomeBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.accent}20;
  color: ${props => props.theme.colors.accent};
  border-radius: 2rem;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const StyledSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Feature = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
  }
`;

const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    
    &:before {
      content: "✅";
      margin-right: 0.75rem;
      font-size: 1.2rem;
    }
  }
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProblemList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: ${props => props.theme.colors.neutral.light};
    border-radius: 0.5rem;
    transition: transform 0.2s ease;

    &:before {
      content: "❌";
      margin-right: 0.75rem;
      font-size: 1.2rem;
    }

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const SolutionList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: ${props => props.theme.colors.primary}10;
    border-radius: 0.5rem;
    transition: transform 0.2s ease;

    &:before {
      content: "✅";
      margin-right: 0.75rem;
      font-size: 1.2rem;
    }

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
  background: ${props => props.theme.colors.neutral.light};
  padding: 4rem;
  border-radius: 1rem;
  margin: 4rem 0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

const ProfileImage = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const ProfileContent = styled.div`
  h2 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const Credentials = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const CredentialCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.sm};

  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
  }
`;

const CTAButton = styled(Button)`
  font-size: 1.25rem;
  padding: 1rem 2.5rem;
  background: ${props => props.theme.colors.accent};
  border-color: ${props => props.theme.colors.accent};

  &:hover {
    background: ${props => props.theme.colors.earth.brown};
    border-color: ${props => props.theme.colors.earth.brown};
  }
`;

function Home() {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <WelcomeBadge>👋 Welcome to Behavior School</WelcomeBadge>
          <h1>Transform Your School's Behavior Management</h1>
          <p>
            Create structured, trauma-informed, and compassionate behavior systems 
            that actually work—without the stress, frustration, or constant "putting out fires."
          </p>
          <CTAButton as={Link} to="/book-call">
            Book a Free Call
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <StyledSection>
        <h2>What is Behavior School?</h2>
        <p>
          A structured system designed to help school-based behavior analysts overcome 
          burnout and implement effective, trauma-informed behavior interventions.
        </p>
        <CheckList>
          <li>Practical frameworks for functional assessments and easy-to-follow behavior plans</li>
          <li>Tools to streamline data collection & intervention tracking</li>
          <li>Training on ACT for managing stress (yours and your students')</li>
          <li>Strategies to get teacher buy-in so your plans don't get ignored</li>
          <li>A step-by-step process to remove overwhelm and create lasting change</li>
        </CheckList>
      </StyledSection>

      <StyledSection>
        <h2>Problems We Solve</h2>
        <ComparisonGrid>
          <div>
            <h3>Common Challenges</h3>
            <ProblemList>
              <li>Teachers ignore behavior plans or push back on implementation</li>
              <li>Students' challenging behaviors persist despite traditional strategies</li>
              <li>Overwhelming caseloads & endless paperwork lead to burnout</li>
              <li>Lack of structured systems makes it hard to track progress</li>
              <li>Resistance from others when trying to implement changes</li>
              <li>Feeling isolated with no real support system in place</li>
            </ProblemList>
          </div>
          <div>
            <h3>How We Help</h3>
            <SolutionList>
              <li>Structured, easy-to-follow behavior systems that actually get implemented</li>
              <li>Trauma-informed, student-centered behavior plans that work long-term</li>
              <li>Teacher buy-in strategies that make your job easier</li>
              <li>ACT-based stress management techniques for yourself and your students</li>
              <li>Clear framework for conducting functional assessments</li>
              <li>Reduced burnout and increased professional confidence</li>
            </SolutionList>
          </div>
        </ComparisonGrid>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <CTAButton as={Link} to="/book-call">
            Let's Solve This Together
          </CTAButton>
        </div>
      </StyledSection>

      <StyledSection>
        <AboutSection>
          <ProfileImage>
            <img src="/assets/profile.jpg" alt="Rob Spain" />
          </ProfileImage>
          <ProfileContent>
            <h2>Meet Rob Spain</h2>
            <p>
              I'm Rob Spain, M.S., BCBA, IBA, a school-based behavior analyst with over 20 years 
              of experience in behavior intervention, functional assessment, and school team collaboration.
            </p>
            <p>
              My mission is to help school-based BCBAs and mental health professionals move from 
              overwhelmed to confident, structured, and effective.
            </p>
            <Credentials>
              <CredentialCard>
                <h4>Behavior Analyst in Schools</h4>
                <p>Leading 25+ staff at Kings Canyon Unified School District</p>
              </CredentialCard>
              <CredentialCard>
                <h4>Adjunct Faculty</h4>
                <p>Teaching at Fresno Pacific University</p>
              </CredentialCard>
              <CredentialCard>
                <h4>Professional Consultant</h4>
                <p>Helping schools implement effective behavior systems</p>
              </CredentialCard>
            </Credentials>
            <CheckList>
              <li>Functional Assessments & Behavior Intervention Planning</li>
              <li>ACT (Acceptance & Commitment Training) for reducing stress</li>
              <li>Creating effective, teacher-friendly behavior plans</li>
              <li>Trauma-informed & assent-based behavior strategies</li>
            </CheckList>
            <CTAButton as={Link} to="/book-call">
              Book a Call with Rob
            </CTAButton>
          </ProfileContent>
        </AboutSection>
      </StyledSection>
    </>
  );
}

export default Home;
