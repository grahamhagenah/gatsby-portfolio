import * as React from 'react'
import styled from 'styled-components'
import Portrait from '../assets/images/zion.jpg'
import ContactMe from '../components/ContactMe';

const AboutStyles = styled.div`

  justify-content: center;

  h1 {
    font-size: 50px;
    font-weight: 500;
    padding: 10rem 0 5rem 0;
    line-height: 1.25;
    text-align: center;

    @media screen and (max-width: 700px) {
      padding: 3rem 0 5rem 0;
    }
  }

  h2 {
    margin-top: 8rem;
    margin-bottom: 4rem;
    font-size: 30px;
  }

  section {
    max-width: 68%;
    margin: 0 auto;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }
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
            <p>Hey again! My name is Graham Hagenah. I grew up in Western Massachusetts and moved to Brooklyn in 2023. I'm currently working as a freelance web developer and looking for full-time front-end development roles.</p>
            <h2>Experience</h2>
            <p>My most recent role involved building websites and applications for the The Predictive Index, a Boston-based tech company that creates personality and cognitive evaluations for the workplace. I primarily worked in the marketing department, collaborating with designers, copywriters, creative directors, and analysts to build the company's digital presence.</p>
            <p>Before that, I worked at the Concord-based web agency, Bartlett Interactive - first as a summer intern, then transitioning into a full-time role building websites for many local nonprofits. I had the opportunity to build each project from the beginning, making decisions on the tech stack, managing the timeline and budget,  and owning the relationship with each client.</p>
            <p>I've also interned as a graphic designer for the University of Massachusetts, Amherst - my university - where I created multimedia designs for print, web, digital signage, and newsletters.</p>
            <ContactMe text="Please reach out if you have any questions!" buttonText="Email me" />
            <h2>Getting Personal</h2>
            <p>Beyond work, I enjoy hiking in our beautiful National Parks, indoor bouldering, practicing yoga, reading speculative fiction, and raving about movies with friends. </p>
            <img src={Portrait} alt="Graham on Angel's Landing in Zion National Park in 2022" />
          </section>
        </div>
      </AboutStyles>
    </>
  )
}