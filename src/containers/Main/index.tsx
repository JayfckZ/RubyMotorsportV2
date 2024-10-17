import { MainContainer } from './styles'
import ListCard from '../ListCard'
import { useGetVehiclesQuery } from '../../services/api'

const Main = () => {
  const { data: allVehicles, isLoading: isLoadingAllVehicles } =
    useGetVehiclesQuery()

  if (!allVehicles || allVehicles.length === 0) {
    return <p>No vehicles available</p>
  }
  return (
    <MainContainer className="container">
      <h2 className="thin">EM DESTAQUE</h2>
      <h2 className="thin">PROMOÇÕES</h2>
      <h2 className="thin">TODOS OS VEÍCULOS</h2>
      <ListCard isLoading={isLoadingAllVehicles} cars={allVehicles} />
    </MainContainer>
  )
}

export default Main
