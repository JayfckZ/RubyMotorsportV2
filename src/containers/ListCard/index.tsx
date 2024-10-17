import Card from '../../components/Card'
import { ListContainer } from './styles'

type Props = {
  cars?: Car[]
  isLoading: boolean
}

const ListCard = ({ cars, isLoading }: Props) => {
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <ListContainer>
      {cars &&
        cars.map((car) => (
          <Card
            key={car.id}
            id={car.id}
            name={car.name}
            price={car.price}
            images={car.images}
            discount_percentage={car.discount_percentage}
          />
        ))}
    </ListContainer>
  )
}

export default ListCard
