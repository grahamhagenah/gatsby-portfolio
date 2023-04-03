import React from 'react';
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import {PortableText} from '@portabletext/react'
import Browser from '../assets/images/browser-light.svg'
import BrowserMobile from '../assets/images/mobile-browser-light.svg'
import Skills from '../components/Skills'

const IntroStyles = styled.div`

  h1 {
    font-size: 50px;
    font-weight: 500;
    padding: 10rem 0 5rem 0;
    line-height: 1.25;

    @media screen and (max-width: 700px) {
      padding: 3rem 0 5rem 0;
    }
  }

`;

const SkillsVertical = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;

  @media screen and (max-width: 700px) {
    margin-bottom: 5rem;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;

    li {
      display: block;
      width: 150px;
      margin-left: auto;
      margin-right: auto;
      background-color: #ededed;
    }
  }

  li:last-of-type {
    margin-bottom: 0;
  }

`;

const ProjectStyles = styled.div`
  .overview {
    max-width: 60%;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }
  }

  .section-1,
  .section-4 {
    max-width: 60%;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }
  }

  .section-2,
  .section-3 {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr
    }
  }

  .project-button-links {
    margin-bottom: 4rem;

    button:hover {
      background-color: var(--black);
    }

    button:hover a {
      color: white;
    }

    button {
      background-color: white;
      color: var(--black);
      border: 2px solid var(--black);
    }
  }

  .stack-description {
    margin: auto 0;
  }

  .project-description section {
    margin: 13rem 0;

    @media screen and (max-width: 700px) {
      margin: 3rem 0;
    }
  }

  .browser-top {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .project-overview {
    margin-bottom: 10rem;
  }

  .browser-graphic {
    background-color: #f6f6f6;
    width: 100%;
  }

  .browser-view-mobile {
    max-width: 300px;
    margin: 0 auto;

    @media screen and (max-width: 700px) {
      margin: 5rem auto;
    }
  }

  .browser-view {
    margin: 10rem auto;
    max-width: 80%;

    @media screen and (max-width: 700px) {
      margin: 5rem 0;
    }
  }

  .browser-view,
  .browser-view-mobile {
    
    transition: .25s;
    border-radius: 10px;
    overflow: hidden;
    transform: scale(1);
    box-shadow:
      0.9px 1px 1.3px rgba(0, 0, 0, 0.024),
      2.1px 2.5px 4.2px rgba(0, 0, 0, 0.032),
      3.9px 4.6px 9.4px rgba(0, 0, 0, 0.037),
      6.9px 8.3px 18.5px rgba(0, 0, 0, 0.041),
      13px 15.5px 35.6px rgba(0, 0, 0, 0.045),
      31px 37px 80px rgba(0, 0, 0, 0.06);


    :hover {
      cursor: pointer;
      box-shadow:
        0.9px 2.7px 1.3px rgba(0, 0, 0, 0.024),
        2.1px 6.5px 4.2px rgba(0, 0, 0, 0.032),
        3.9px 12.3px 9.4px rgba(0, 0, 0, 0.037),
        6.9px 21.9px 18.5px rgba(0, 0, 0, 0.041),
        13px 40.9px 35.6px rgba(0, 0, 0, 0.045),
        31px 98px 80px rgba(0, 0, 0, 0.06);
      transform: scale(1.01);

      
      #project-url {
      color: var(--black);
    }
  }

  #project-url {
    position: absolute;
    margin: 0;
    font-size: 1.25rem;
    color: var(--grey);

    @media screen and (max-width: 700px) {
      font-size: 30%;
    }
  }
`;

export default function SingleProjectPage({ data: { project } }) {
  

  const desktop = getImage(project.desktop.asset)
  const mobile = getImage(project.mobile.asset)
  const stack = project.stack

  return (
    <div>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1><strong>{project.name}</strong></h1>
      </IntroStyles>
      <ProjectStyles>
        {project.url !== null &&
          <div className="project-button-links">
            <button className="mr-2"><a target="_blank" href={project.source}>View code</a></button>
            <button><a target="_blank" href={project.url}>View Site</a></button>
          </div>
        }
        <section className="overview">
          <PortableText value={project.overview} />
          {project.type !== 'story' && 
            <h3><span className="mr-1">Stack: </span><strong>{project.stack.join('  +  ')}</strong></h3>
          }
        </section>
        {project.type !== 'story' && 
          <div className="browser-view">
            <div className="browser-top">
              <p id="project-url">{project.url}</p>
              <img className="browser-graphic" src={Browser} alt="" />
            </div>
            <GatsbyImage image={desktop} alt="" />
          </div>
        }
        <div className='project-description'>
          <section className='section-1'>
            <PortableText value={project.text} />
          </section>
          <section className='section-2'>
            <SkillsVertical>
              <Skills stack={stack} />
            </SkillsVertical>
            <div className="stack-description">
              <PortableText value={project.stackDescription} />
            </div>
          </section>
          <section className='section-3'>
            <div className="stack-description">
              <PortableText value={project.why} />
            </div>
            {project.type !== 'story' && 
              <div className="browser-view-mobile">
                <div className="browser-top">
                  <img className="browser-graphic" src={BrowserMobile} alt="" />
                </div>
                <GatsbyImage image={mobile} alt="" />
              </div>
            }
          </section>
        </div>
      </ProjectStyles>
    </div>
  )
};

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug} }) {
      subtitle
      name 
      url
      source
      type
      id
      stack
      overview: _rawOverview(resolveReferences: {maxDepth: 5})
      text: _rawText(resolveReferences: {maxDepth: 5})
      why: _rawWhy(resolveReferences: {maxDepth: 5})
      stackDescription: _rawStackDescription (resolveReferences: {maxDepth: 5})
      image {
        asset {
          gatsbyImageData
        }
      }
      desktop {
        asset {
          gatsbyImageData
        }
      }
      mobile {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;