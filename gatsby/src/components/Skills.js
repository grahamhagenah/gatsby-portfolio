import React, { useState } from 'react';
import styled from 'styled-components'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'
import { FaUniversalAccess } from 'react-icons/fa'
import { FaWordpress } from 'react-icons/fa'
import { SiNetlify } from 'react-icons/si'
import { SiGatsby } from 'react-icons/si'
import { SiGraphql } from 'react-icons/si'
import { SiCoderwall } from 'react-icons/si'

let delay = 0;

const SkillsStyles = styled.div`

  .skills {
    margin-bottom: 175px;
  }

  .skills p {
    max-width: 60%;

    @media screen and (max-width: 700px) {
      max-width: 100%;
    }
  }

  .skills-grid {
    margin: 10rem 0 200px 0;
  }

  #html-skill {
    background-color: #e8940038;
    background-color: #fef1ed;
  }

  #css-skill {
    background-color: #d0331438;
    background-color: #feeff0;
  }

  #javascript-skill  {
    background-color: #8ed01438;
    background-color: #fdecf3;
  }

  #react-skill {
    background-color: #14d0a338;
    background-color: #f4f1f6;
  }

  #php-skill {
    background-color: #1420d038;
    background-color: #edf5f9;
  }

  #wordpress-skill {
    background-color: #b414d038;
    background-color: #ecf7f9;
  }

  #accessibility-skill {
    background-color: #e0eaf1;
    background-color: #ecfaf7;
  }

  #netlify-skill {
    background-color: #e0eaf1;
  }

  #graphql-skill {
    background-color: #14d0a338;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;

    @media screen and (max-width: 700px) {
      display: block;
    }
  }

  .skills-grid li:hover {
    transform: scale(1.05);
    transition: .5s;
  }

  .skill-icon {
    height: 2rem;
  }

  #about-me-link:hover + .arrow {
    padding: 0 8px;
    transition: 1s;
  }

  #about-me-link:hover {
    text-decoration: underline;
  }

  #about-me-link arrow {
    padding: 0 4px;
    transition: 1s;
  }

  li svg {
    transform: translateY(4px);
    padding-right: 0.75rem;
    font-size: 20px;
  }

  li {
    display: inline-block;
    font-weight: 500;
    padding: 1rem 2.5rem;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 2rem;

    @media screen and (max-width: 700px) {
      display: block;
      margin: 2rem auto;
      max-width: 250px;
    }
  }

`;

export default function SkillsList( {stack} ) {
  return (
    <SkillsStyles>
      <ul className='skills-grid'>
        {stack.map(skill => (
          <SingleSkill skill={skill} key={skill} />
        ))}
      </ul>
    </SkillsStyles>
  )
}

function SingleSkill( {skill} ) {
  //set increasing fade-in delay for each project
  delay = delay + 50
  let id = skill.toLowerCase() + '-skill'
  let icon

  switch(skill) {
    case 'HTML':
      icon = <FaHtml5 />
      break;
    case 'CSS':
      icon = <FaCss3Alt />
      break;
    case 'JavaScript':
      icon = <SiJavascript />
      break;
    case 'React':
      icon = <FaReact />
      break;
    case 'PHP':
      icon = <FaDatabase />
      break;
    case 'WordPress':
      icon = <FaWordpress />
      break;
    case 'Accessibility':
      icon = <FaUniversalAccess />
      break;
    case 'Netlify':
      icon = <SiNetlify />
      break;
    case 'Gatsby':
      icon = <SiGatsby />
      break;
    case 'GraphQL':
      icon = <SiGraphql />
      break;
    default:
      icon = <SiCoderwall />
  }

  return (
    <>
      <li id={id} data-sal='slide-up' data-sal-delay={delay} data-sal-easing='ease' data-sal-duration='1000'>{icon}{skill}</li>
    </>
  )
}