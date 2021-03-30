import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  padding: 2.5rem 2rem;

  margin: 0 auto;
  text-align: center;

  header {
    margin-bottom: 2.5rem;
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
    margin-bottom: 5px;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
  }

  button[type='submit'] {
    height: 2.5rem;
    padding: 0 2.5rem;
    border-radius: 0.25rem;

    background: var(--button-submit);

    margin-top: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      color: #fff;
    }
  }
`;

export const Gif = styled.img`
  width: 20rem;
`;
