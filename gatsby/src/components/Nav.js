import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


const NavStyles = styled.nav`

  #logo {
    height: 35px;
    fill: rgb(46, 46, 46);
    transform: scale(1);
    transition: .5s;
    
  }

  #logo:hover {
    transform: scale(1.25);
    transition: .2s;
  }

  #logo:active {
    transform: scale(1.1);
    transition: .25s;
  }

  .sticky {
    
  }


  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    list-style: none;

    > div {
        transform: scale(1);
        transition: 1s;

        :hover {
          transform: scale(1.6);
          transition: .1s;
        }

        :active {
          transform: scale(1.4);
          transition: .1s;
        }
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <Link to="/">
        <svg id="logo" viewBox="0 0 1422 2251">
          <path d="M370 651.73C370 651.76 370 651.79 370 651.821C370.049 715.292 421.518 766.73 485 766.73H1051.7V1136.73H485C217.142 1136.73 -1.52588e-05 919.588 0 651.73V651.615L0.000137329 651.5L1.0002 0L186.025 0.229715H936.701C1204.56 0.229715 1421.7 217.372 1421.7 485.23V1388.23C1421.7 1656.09 1204.56 1873.23 936.701 1873.23H185H0V1503.23H185H936.701C1000.21 1503.23 1051.7 1451.74 1051.7 1388.23V485.23C1051.7 421.717 1000.21 370.23 936.701 370.23H370.541L370 651.73Z" />
        </svg>
      </Link>
    </NavStyles>
  )
}