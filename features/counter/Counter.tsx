import React from 'react';
import { decrement, increment } from './counterSlice';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

const CounterContainer = styled.div`
  grid-column: 2/4;
  grid-row: 4/5;
`;

export default function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <CounterContainer>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </CounterContainer>
  )
};