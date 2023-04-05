import * as React from 'react'
import styled from 'styled-components'
import Portrait from '../assets/images/getty.jpg'
import ContactMe from '../components/ContactMe';

const AboutStyles = styled.div`

  justify-content: center;

  h1 {
    padding: 10rem 0 5rem 0;
    text-align: center;
    font-size: 50px;

    @media screen and (max-width: 700px) {
      padding: 3rem 0 5rem 0;
    }
  }

  section {
    max-width: 65%;
    margin: 0 auto;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }
  }

  a  {
    text-decoration: underline;
  }

  img {
    border-radius: 10px;
    margin: 4rem auto 2rem auto;
  }

`;

export default function About() {
  return (
    <>
      <AboutStyles>
        <h1><strong>About Me</strong></h1>
        <div className='about-me'>
          <section>
            <p>Hey again! My name is Graham Hagenah. I grew up in Western Massachusetts and moved to New York City in early 2023. I'm currently working as a freelance web developer and looking for full-time front-end development roles.</p>
            <img src={Portrait} alt="Me at the Getty Museum in Los Angeles" />
            <h2>Work Experience</h2>
            <p>My most recent role involved building websites and applications for <a href="https://www.predictiveindex.com" target="_blank">The Predictive Index</a>, a Boston-based tech company that creates personality and cognitive evaluations for the workplace. I primarily worked in the marketing department, collaborating with designers, copywriters, creative directors, and analysts to build the company's digital presence.</p>
            <p>Before that, I worked at the Concord-based web agency, <a href="https://www.bartlettinteractive.com" target="_blank">Bartlett Interactive</a> - first as a summer intern, then transitioning into a full-time role building websites for many local nonprofits. I had the opportunity to build each project from the beginning, making decisions on the tech stack, managing the timeline and budget,  and owning the relationship with each client.</p>
            <p>I've also interned as a graphic designer for the University of Massachusetts, Amherst where I created multimedia designs for print and web.</p>
            <h2>Beyond Work</h2>
            <p>You're likely to find me projecting routes at the rock gym, practicing yoga, reading speculative fiction, and watching horror movies with friends.</p>
            <ContactMe text="Please reach out if you have any questions!" buttonText="Email me" />
          </section>
        </div>
      </AboutStyles>
    </>
  )
}