import * as React from 'react'
import styled from 'styled-components'
import ProjectList from '../components/ProjectList';
import Skills from '../components/Skills';
import { graphql } from 'gatsby'

const IntroStyles = styled.div`

  h1 {
    font-size: 70px;
    font-weight: 500;
    line-height: 1.25;
    padding: 20rem 0 30rem 0;

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

export default function IndexPage( { data } ) {
  const projects = data.projects.nodes
  return (
    <>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1><strong>Web Developer</strong> in Brooklyn crafting elegant <em>digital</em> experiences</h1>
      </IntroStyles>
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