import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  padding: 2.5rem 2rem;

  margin: 0 auto;
  text-align: center;

  header {
    margin-bottom: 2.5rem;
  }

  h2 {
    margin-bottom: 15px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 1.5rem;

  label {
    font-size: 1.5rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;

    margin-top: 1rem;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;

    margin-right: 20px;

    border: 0;

    &:focus {
      outline: 0;
      box-shadow: 0 0 1px 2px var(--button-submit);
    }
  }

  button[type='submit'] {
    height: 2.5rem;
    padding: 0 2.5rem;
    border-radius: 0.25rem;

    background: var(--button-submit);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      color: #fff;
    }
  }

  @media (max-width: 720px) {
    div {
      flex-direction: column;
      align-items: center;
    }

    input {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

export const Gif = styled.img`
  width: 20rem;
`;
