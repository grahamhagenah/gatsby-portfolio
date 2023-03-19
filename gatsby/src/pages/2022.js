import * as React from 'react'
import styled from 'styled-components'
import ContactMe from '../components/ContactMe';
import ProjectList from '../components/ProjectList';
import Skills from '../components/Skills';
import { graphql } from 'gatsby'

const IntroStyles = styled.div`

  h1 {
    font-size: 65px;
    font-weight: 500;
    line-height: 1.25;

    strong {
      font-weight: 700;
    }

    @media screen and (max-width: 700px) {
      padding: 3rem 0 5rem 0;
      font-size: 30px;
    }
  }

`;

const InfoStyles = styled.div`

  ul {
    display: grid;
    list-style: none;
    margin: 0 0 3rem 0;
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  .skills {
    max-width: 60%;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }
  }
`;

export default function TwentyTwentyTwoPage( { data } ) {
  const projects = data.projects.nodes
  return (
    <>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1>I'm Graham, a Web Developer living in Los Angeles.</h1>
      </IntroStyles>
      <InfoStyles>
        <ul>
          <li>
            <p>I've built websites for a wide variety of clients including artists, authors, small businesses, and non-profits.</p>
          </li>
          <li>
            <p>Most recently, I worked for an HR-tech company called <strong><a className="link" target="_blank" href="https://www.predictiveindex.com/">The Predictive Index</a></strong>, the leaders of talent optimization.</p>
          </li>
          <li>
            <p>When I'm not on the web, I'm climbing, practicing yoga, taking photos, cycling, and raving about movies with friends.</p>
          </li>
        </ul>
      </InfoStyles>
      <ContactMe text="Want to make something together?" buttonText="Email me"/>
      <InfoStyles>
        <section className="skills">
          <h2>More about my skills</h2>
          <p>I'm a frontend software engineer with roots in design and digital marketing. I focus on the user-facing end of websites — the visual interface - but I've also delved deep into backend development with frameworks like Remix and languages like PHP. I build powerful, lightweight applications with libraries like React, as well as speedy, highly-discoverable static websites, and user-friendly, bespoke themes for WordPress. </p>
        </section>
      </InfoStyles>
      <Skills stack={['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'WordPress', 'Accessibility']} />
      <ProjectList projects={projects} />
    </>
  )
}

export const query = graphql`
  query archiveQuery {
    projects: allSanityProjects {
      nodes {
        id
        name
        subtitle
        type
        slug {
          current
        } 
        image {
          asset {
            gatsbyImageData(layout: CONSTRAINED, width: 900)
          }
        }
      }
    }
  }

`;

