import React from 'react'
import styled from 'styled-components';
import Resume from '../assets/documents/Graham-Hagenah-Resume.pdf'

const FooterStyles = styled.footer`

  footer {
    margin-top: 175px;

    @media screen and (max-width: 700px) {
      margin-top: 8rem;
    }
  }

  ul {
    font-size: 17px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    list-style: none;

    li {
      &:nth-child(2):before,
      &:nth-child(3):before,
      &:nth-child(4):before {
        content: "/";
        padding: 0 15px;
        opacity: .25;
      }
    }
  }

  p {
    text-align: center;
    font-size: 14px;
    color: #9b9b9b;
    margin: 30px 0;
  }
`;


export default function Footer() {
  return (
    <FooterStyles>
      <footer>
        <ul>
          <li>
            <a href="mailto:gwhagenah@gmail.com" rel="noreferrer" target="_blank">Email</a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hagenah/" rel="noreferrer" target="_blank">LinkedIn</a> 
          </li>
          <li>
            <a href="https://github.com/grahamhagenah/portfolio" rel="noreferrer" target="_blank">Source Code</a>
          </li>
        </ul>
        <p>Graham Hagenah © {(new Date().getFullYear())}</p>
      </footer>
    </FooterStyles>
  )
}