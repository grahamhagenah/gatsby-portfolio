import React from 'react';
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import {PortableText} from '@portabletext/react'

const IntroStyles = styled.div`

h1 {
  font-size: 50px;
  font-weight: 500;
  padding: 10rem 0 5rem 0;
  line-height: 1.25;

  @media screen and (max-width: 700px) {
    padding: 8rem 0 5rem 0;
    font-size: 40px;
  }
}

`;

const StoryStyles = styled.div`
  .overview {
    max-width: 60%;

    @media screen and (max-width: 700px) {
      max-width: 100%;
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

  .image-wrapper {
    margin: 10rem auto;
    max-width: 80%;
    border-radius: 10px;
    overflow: hidden;

    @media screen and (max-width: 700px) {
      margin: 0 0 5rem 0;
      max-width: 100%;
    }
  }

  .image-wrapper img {
    border-radius: 10px;
  }

  .story-description {
    max-width: 60%;
    margin: 0 auto;

    @media screen and (max-width: 700px) {
      max-width: 100%;
      margin: 0 auto;
    }
  }
`;

export default function SingleStoryPage({ data: { story } }) {

  const image = getImage(story.image.asset)

  return (
    <div>
      <IntroStyles data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="1000">
        <h1><strong>{story.name}</strong></h1>
      </IntroStyles>
      <StoryStyles>
        <section className="overview">
          <PortableText value={story.overview} />
        </section>
        <div className="image-wrapper">
          <GatsbyImage image={image} alt="" />
        </div>
        <div className='story-description'>
          <section>
            <PortableText value={story.text} />
          </section>
        </div>
      </StoryStyles>
    </div>
  )
};

export const query = graphql`
  query($slug: String!) {
    story: sanityProjects(slug: { current: { eq: $slug} }) {
      subtitle
      name 
      type
      id
      overview: _rawOverview(resolveReferences: {maxDepth: 5})
      text: _rawText(resolveReferences: {maxDepth: 5})
      image {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;