import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;

  border: 0;
  border-radius: 4px;

  background: #8bddff;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & + div {
    margin-top: 10px;
  }
`;
