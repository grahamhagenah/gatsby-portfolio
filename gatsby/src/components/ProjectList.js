import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

let delay = 0;

const ProjectGridStyles = styled.div`

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 6rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .projects-intro {
    margin: 100px 0;
    max-width: 60%;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }
  }
  
  .gatsby-image-wrapper {
    max-height: 300px;
    border-radius: 5px;
    z-index: 1;
  }
`;

const ProjectStyles = styled.div` 
  display: grid;
  overflow: hidden;

  .project-details {
    padding: 2rem 0;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }

    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }

  .project-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .single-project:hover .project-link {
    text-decoration: underline;
  }

  .single-project:hover .arrow {
    padding: 0 8px;
    transition: .25s;
  }

  .arrow {
    padding: 0 4px;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    display: inline;
    transition: .25s;
  }

  .single-project:hover img {
    transform: scale(1.05);
    transition: .25s;
  }

  .single-project img {
    transform: scale(1);
    transition: .25s !important;
  }

`;

function SingleProject( { project } ) {
  //set increasing fade-in delay for each project
  delay = delay + 1
  let isProject = true
  if(project.type === 'story') {
    isProject = false
  }

  const image = getImage(project.image.asset)

  return (
    <>
      <ProjectStyles data-sal="fade-in" data-sal-easing="ease" data-sal-duration="1000" data-sal-delay={100 * delay}>
        <Link to={`/project/${project.slug.current}`} className="single-project">
          <GatsbyImage image={image} alt={project.name} />
          <div className="project-details">
            <h3 className="project-title">{project.name}</h3>
            <p>{project.subtitle}</p>
            <p className="project-link read-more-link">{isProject ? 'View Project' : 'Read Story'}</p>
            <span className="arrow">›</span>
          </div>
        </Link>
      </ProjectStyles>
    </>
  )
}

export default function ProjectList( { projects } ) {
  return (
    <ProjectGridStyles>
      <div className="project-grid">
        {projects.map(project => (
          <SingleProject key={project.id} project={project}  />
        ))}
      </div>
    </ProjectGridStyles>
  )
}