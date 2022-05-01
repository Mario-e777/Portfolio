import React from 'react';
import styled from 'styled-components';

const HeroSectionContainer = styled.section`
  display: contents;

  .info-container {
    display: contents;
    & .cover-letter-container {
      background-color: #ff14919f;
      grid-column: 1/11;
      grid-row: 5/6;
      display: flex;
      flex-direction: column;
      row-gap: 1.33rem;
      padding: 2.66rem;
      border-radius: 0 7px 7px 0;
      box-shadow: 0.3px 0.5px 0.7px rgb(10 10 10 / 20%),
        0.4px 0.8px 1px -1.2px rgb(10 10 10 / 20%),
        1px 2px 2.5px -2.5px rgb(10 10 10 / 20%),
        1px 2px 2.5px -2.5px rgb(10 10 10 / 20%);
      /* grid-column: 1/-1;
      grid-row: 5/6; */

      & .title-container {
        & h1 {
          font-size: 2.3rem;
          font-family: Philosopher;
        }
      }

      & .buttons-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.33rem;

        button {
          background-color: rgba(255,255,255, 0.4);
          border: none;
          padding: 0.9rem;
          font-size: 1.1rem;
          border-radius: 5px;
        }
      }
      & p {
        font-size: 1.42rem;
      }
    }
    & .stats-data-container {

      width: fit-content;
      grid-column: 13/-1;
      grid-row: 5/6;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & p {
        font-size: 1.44rem;
      }

      & .data-point {
        font-size: 3.6rem;
        line-height: 3.8rem;
      }

      /* height: 100%; */
      /* align-self: center; */
      /* grid-column: 1/-1;
      grid-row: 4/5; */
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionContainer>
      <div className='info-container' >
        <div className='cover-letter-container'>
          <span className='title-container' >
            <h1>Web Technologies, Crypto and Design</h1>
            <p>Let’s talk and create cool things for the web</p>
          </span>
          <p style={{ maxWidth: '40rem' }} >
            I’m a software engineer specializing in building (and
            occasionally designing) exceptional digital experiences.
            Currently, I’m focused on building accessible,
            human-centered products at Upstatement.
          </p>
          <div className='buttons-container' >
            <button>See my work</button>
            <button>Contact</button>
          </div>
        </div>
        <div className='stats-data-container' >
          <span>
            <p className='data-point'>179</p>
            <p>Projects done</p>
          </span>
          <span>
            <p className='data-point'>100%</p>
            <p>Success rate</p>
          </span>
          <span>
            <p className='data-point'>7+</p>
            <p>Years of experience</p>
          </span>
        </div>
      </div>
    </HeroSectionContainer>
  )
}
