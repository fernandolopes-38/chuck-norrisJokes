import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  button {
    flex: 1 1 6rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--button);

    border-radius: 0.25rem;

    margin: 0.2rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
