import { Container } from './styles';
import { Joke } from '../../App';

interface JokeCardProps {
  joke: Joke;
}

export const JokeCard = ({ joke }: JokeCardProps) => {
  return (
    <Container>
      <img src={joke.icon_url} alt={joke.value}/>
      <h3>{joke.value}</h3>
    </Container>
  )
}
