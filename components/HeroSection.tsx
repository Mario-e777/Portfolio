import React from 'react';
import styled from 'styled-components';

const HeroSectionContainer = styled.section`
  display: contents;

  .info-container {
    display: contents;
    & .cover-letter-container {
      background-color: deeppink;
      grid-column: 1/9;
      grid-row: 5/6;
      /* grid-column: 1/-1;
      grid-row: 5/6; */
    }
    & .stats-data-container {
      background-color: lightcoral;
      height: fit-content;
      width: fit-content;
      align-self: center;
      grid-column: 13/-1;
      grid-row: 5/6;
      font-size: 4rem;
      /* grid-column: 1/-1;
      grid-row: 4/5; */
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionContainer>
        <div className='info-container' >
          <div className='cover-letter-container'></div>
          <div className='stats-data-container' >
          a<br/>
          a<br/>
          a<br/>
          </div>
        </div>
    </HeroSectionContainer>
  )
}
