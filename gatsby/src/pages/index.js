import * as React from 'react'
import styled from 'styled-components'
import ProjectList from '../components/ProjectList';
import Skills from '../components/Skills';
import { graphql } from 'gatsby'

const IntroStyles = styled.div`

  h1 {
    font-size: 70px;
    font-weight: 600;
    line-height: 1.25;

    strong {
      font-weight: 700;
    }

    @media screen and (max-width: 700px) {
      padding: 15rem 0 15rem 0;
      font-size: 42px;
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

  p {
    font-size: 23px;

    @media screen and (max-width: 700px) {
      font-size: 18px;
    }
  }

  a  {
    text-decoration: underline;

    @hover {
      color: red;
    }
  }

  h2 {
    @media screen and (max-width: 700px) {
      font-size: 28px;
    }
  }

  .skills {
    max-width: 65%;
    margin-bottom: 10rem;

    @media screen and (max-width: 700px) {
      max-width: 100%;
      margin-bottom: 10rem;
    }
  }
`;

export default function IndexPage( { data } ) {
  const projects = data.projects.nodes
  return (
    <>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1><strong>Web Developer</strong> in Brooklyn crafting elegant <em>digital</em> experiences</h1>
      </IntroStyles>
      <InfoStyles>
        <section className="skills" data-sal="fade-in" data-sal-delay="500" data-sal-easing="ease" data-sal-duration="1000">
          <p><strong>Hey there - I'm Graham.</strong> I build performant websites and intuitive user-interfaces with HTML, CSS, and JavaScript, as well as front-end libraries like React. My approach is inclusive and empathetic; I aim to create delightful applications for all users regardless of their individual needs or challenges. <a href="/about">Read more about me.</a></p>
        </section>
      </InfoStyles>
      <Skills stack={['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'WordPress', 'Accessibility']} />
      <ProjectList projects={projects} />
    </>
  )
}

export const query = graphql`
  query projectQuery {
    projects: allSanityProjects {
      nodes {
        id
        subtitle
        name
        type
        slug {
          current
        } 
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;