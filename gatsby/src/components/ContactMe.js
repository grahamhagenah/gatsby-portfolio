import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';

const ContactMeStyles = styled.div`

  p {
    margin: 0;
    font-size: 17px;

    @media screen and (max-width: 700px) {
      display: block;
      margin-bottom: 2rem;
    }
  }

  strong {
    padding: 0 5px;
  }


  .callout {
    margin: 0;
    text-align: left;
    border-radius: 5px;
    display: block;
    padding: 10px 10px 10px 20px;
    justify-content: space-between;
    display: flex;
    flex-flow: wrap;
    line-height: 2;
    margin: 10rem 0 15rem 0;
    background-color: #f8f8f8;
    
      @media screen and (max-width: 700px) {
        justify-content: center;
        text-align: center;
        padding: 2rem;
        margin: 5rem 0;
      }

      a {
        @media screen and (max-width: 700px) {
          width: 100%;
        }
      }

      button {
        display: block;
        text-decoration: none;
        background: white;
        color: var(--black);
        border-radius: 5px;
        padding: 5px 20px;
        height: 100%;
        font-weight: 500;

        @media screen and (max-width: 700px) {
          grid-template-columns: 1fr;
          gap: 0;
          display: block;
          width: 100%;
        }

        &:hover {
          background: var(--black);
          color: white;
        }
      }
    }
  }
`;

export default function ContactMe( {boldText, text, buttonText} ) {
  return (
    <ContactMeStyles>
      <div className="callout">
        <p>{text} <strong>{boldText}</strong></p><a href="mailto:gwhagenah@gmail.com" rel="noreferrer" target="_blank"><button>{buttonText}</button></a>
      </div>
    </ContactMeStyles>
  )
}