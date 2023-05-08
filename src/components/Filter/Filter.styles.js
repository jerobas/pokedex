import styled from 'styled-components';
import { typeColor } from '../../components/CardMon/Card.styles.js';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Selector = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  margin-right: 5px;
`;

export const Option = styled.option`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  color: black;
  border: none;
  background-color: ${props => typeColor[props.color]};

  & > svg {
    margin-right: 0.5rem;
  }
`;