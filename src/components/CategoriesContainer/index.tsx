import { Container } from './styles'

interface CategoriesContainerProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
}

export const CategoriesContainer = ({ categories, onCategoryChange }: CategoriesContainerProps) => {
  return (
    <Container>
      {categories.map((category, index) => (
        <button
          type="button"
          key={index} 
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </Container>
  )
};