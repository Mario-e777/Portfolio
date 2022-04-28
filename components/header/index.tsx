/* Modules */
import StyledComponent from 'styled-components';

const HeaderContainer = StyledComponent.header`
  grid-column: 1/16;
  grid-row: 1/4;
  display: grid;
  grid-template-columns: var(--columns-layout);
  grid-template-rows: 1.33rem 1fr 1.33rem;
  
  .brand {
    grid-column: 2/7;
    grid-row: 2/4;
    width: fit-content;
    height: fit-content;
    cursor: pointer;

    & h2 {
      font-family: PhilosopherBold;
    }
  }
  
  .options {
    grid-column: 8/15;
    grid-row: 2/4;
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-self: end;
    gap: 1.33rem
  }
`;

export default function Header() {
  return <HeaderContainer>
    <div className='brand' >
      <h2>@Mario E777 ✨</h2>
      <p>Sr. Frontend Engineer</p>
    </div>
    <div className='options' >
      <p>About me</p>
      <p>Articles</p>
      <p>Projects</p>
      <p>Let's talk</p>
    </div>
  </HeaderContainer>;
};