import { FormEvent, useEffect, useState } from 'react';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { api } from './service/api';
import { Container, FormContainer, Gif } from './styles/App';
import { CategoriesContainer } from './components/CategoriesContainer';

import loadingGif from './img/giphy.gif';
import { JokeCard } from './components/JokeCard';

export interface Joke {
  id: string;
  icon_url: string;
  value: string;
}

export const App: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);
  
  useEffect( () => {
    api.get('jokes/categories').then(response => setCategories(response.data))
  }, [])

  const handleJokeByCategory = async (category: string) => {
    setIsLoading(true);
    try {
      const response = await api.get(`jokes/random?category=${category}`);
      setJokes([response.data]);
    } catch (error) {
      setJokes([{
        id: 'noid',
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        value: 'No joke found in this category'
      }]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.get(`jokes/search?query=${categoryInput}`);
      setJokes(response.data.result)
    } catch (error) {
      setJokes([{
        id: 'noid',
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        value: 'No joke found in this category'
      }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Container>

        <header>
          <h1>Chuck Norris Jokes</h1>
        </header>
        <CategoriesContainer 
          categories={categories}
          onCategoryChange={handleJokeByCategory}
        />

        <FormContainer onSubmit={handleSubmit}>
          <label htmlFor="categoryInput">Find Joke</label>
          <input
            id="categoryInput"
            type="text"
            value={categoryInput}
            onChange={e => setCategoryInput(e.target.value)}
            placeholder="Category"
          />

          <button 
            type="submit" 
          >
            Find joke
          </button>
        </FormContainer>

        {isLoading ? 
          <Gif src={loadingGif} alt="load"/> :
          <>
            {jokes.map((joke, index) => <JokeCard key={index} joke={joke}/>)}
          </>
        }

      </Container>
      <GlobalStyle />
    </>
  )
};