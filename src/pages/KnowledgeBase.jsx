import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const StyledSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const ComparisonTable = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 3rem 0;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  background: #065f46;
  color: white;
  
  h3 {
    margin: 0;
    text-align: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.neutral.medium};
  
  &:last-child {
    border-bottom: none;
  }

  &:nth-child(even) {
    background: ${props => props.theme.colors.neutral.light};
  }
`;

const ProblemSolution = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 3rem 0;
  
  h2 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 2rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background: ${props => props.theme.colors.accent};
      border-radius: 2px;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 1.5rem;
    padding: 1rem 1rem 1rem 3rem;
    position: relative;
    background: ${props => props.type === 'problem' 
      ? props.theme.colors.neutral.light 
      : '#fff'};
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: 1px solid ${props => props.type === 'problem' 
      ? props.theme.colors.earth.sage 
      : props.theme.colors.primary};
    
    &:before {
      content: "${props => props.type === 'problem' ? '❌' : '✅'}";
      position: absolute;
      left: 1rem;
      font-size: 1.2rem;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.md};
      background: ${props => props.type === 'problem' 
        ? props.theme.colors.neutral.light 
        : props.theme.colors.neutral.light};
    }
  }
`;

const SectionContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform 0.3s ease;
  border: 1px solid ${props => props.theme.colors.earth.sage};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const CenteredContent = styled.div`
  text-align: center;
  margin-top: 3rem;

  h2 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

function KnowledgeBase() {
  return (
    <StyledSection>
      <h2>What Makes Behavior School Different?</h2>
      <ComparisonTable>
        <TableHeader>
          <h3>Traditional Behavior Training</h3>
          <h3>Behavior School</h3>
        </TableHeader>
        <TableRow>
          <div>Generic, one-size-fits-all advice</div>
          <div>Custom strategies tailored for school environments</div>
        </TableRow>
        <TableRow>
          <div>Focuses only on student behavior</div>
          <div>Addresses BOTH student behavior and YOUR burnout</div>
        </TableRow>
        <TableRow>
          <div>Limited teacher involvement</div>
          <div>Strategies to get full teacher buy-in</div>
        </TableRow>
        <TableRow>
          <div>No focus on professional well-being</div>
          <div>Uses ACT techniques to help YOU manage stress</div>
        </TableRow>
        <TableRow>
          <div>Rigid, outdated behavior plans</div>
          <div>Flexible, assent-based, student-centered approaches</div>
        </TableRow>
      </ComparisonTable>

      <ProblemSolution>
        <SectionContainer>
          <h2>Common Challenges</h2>
          <List type="problem">
            <li>Teachers ignore behavior plans or push back on implementation</li>
            <li>Students' challenging behaviors persist despite traditional strategies</li>
            <li>Overwhelming caseloads & endless paperwork lead to burnout</li>
            <li>Lack of structured systems makes it hard to track progress</li>
            <li>Resistance from others when trying to implement changes</li>
            <li>Feeling isolated with no real support system in place</li>
          </List>
        </SectionContainer>
        
        <SectionContainer>
          <h2>How We Help</h2>
          <List type="solution">
            <li>Structured, easy-to-follow behavior systems that actually get implemented</li>
            <li>Trauma-informed, student-centered behavior plans that work long-term</li>
            <li>Teacher buy-in strategies that make your job easier</li>
            <li>ACT-based stress management techniques for yourself and your students</li>
            <li>Clear framework for conducting functional assessments</li>
            <li>Reduced burnout and increased professional confidence</li>
          </List>
        </SectionContainer>
      </ProblemSolution>

      <CenteredContent>
        <h2>Ready to Transform Your Practice?</h2>
        <p>Book a call to discuss how we can help you create lasting change in your school.</p>
        <Button as={Link} to="/book-call">
          Schedule Your Free Call
        </Button>
      </CenteredContent>
    </StyledSection>
  );
}

export default KnowledgeBase;
