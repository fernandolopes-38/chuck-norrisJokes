import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 80%;
  margin: auto;

  .categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;

    margin: 50px 0;

    div {
      list-style: none;
      padding: 3px;
      border: 1px solid gray;
      cursor: pointer;
      background: #cccccc;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .input-group {
  }

  .joker {
    display: block;
  }
`;
