import React from 'react';
import styled from 'styled-components';

const CallSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CallHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin: 0 auto 3rem;

  h1 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
`;

const CallDescription = styled.div`
  text-align: left;
  background: ${props => props.theme.colors.neutral.light};
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CalendlyWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  background: white;
  min-width: 320px;
  height: 700px;
`;

function BookCall() {
  return (
    <CallSection>
      <CallHeader>
        <h1>Book a Call with Rob Spain</h1>
        <CallDescription>
          <p>
            I'm diving deep into research to better understand the real struggles professionals like you are facing. What's your biggest challenge right now?
          </p>
          <p>
            Your insights won't just help me—they'll help shape the next chapter of the Behavior School Community, creating resources and support systems that actually make a difference. If you've been waiting for the right time to invest in yourself and get the support you deserve, this is it. Let's build something powerful together. Drop a comment or DM me—I'd love to hear from you!
          </p>
        </CallDescription>
      </CallHeader>
      <CalendlyWrapper>
        <div 
          className="calendly-inline-widget"
          data-url="https://calendly.com/robspain/chat-with-rob"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </CalendlyWrapper>
    </CallSection>
  );
}

export default BookCall;
