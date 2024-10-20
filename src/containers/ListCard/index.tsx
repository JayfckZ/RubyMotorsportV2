import Card from '../../components/Card'
import Loader from '../../components/Loader'

import { ListContainer } from './styles'

type Props = {
  cars?: Car[]
  isLoading: boolean
}

const ListCard = ({ cars, isLoading }: Props) => {
  const getCarInfos = (car: Car) => {
    const tags: string[] = []

    if (car.featured) {
      tags.push('featured')
    }

    if (car.on_sale) {
      tags.push(`${car.discount_percentage}%`)
    }

    return tags
  }

  if (isLoading) return <Loader />

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
            infos={getCarInfos(car)}
          />
        ))}
    </ListContainer>
  )
}

export default ListCard
