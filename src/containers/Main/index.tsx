import { MainContainer } from './styles'
import ListCard from '../ListCard'
import {
  useGetVehiclesQuery,
  useGetOnSaleQuery,
  useGetFeaturedQuery
} from '../../services/api'

const Main = () => {
  const { data: allVehicles, isLoading: isLoadingAllVehicles } =
    useGetVehiclesQuery()
  const { data: onSaleVehicles, isLoading: isLoadingOnSaleVehicles } =
    useGetOnSaleQuery()
  const { data: featuredVehicles, isLoading: isLoadingFeaturedVehicles } =
    useGetFeaturedQuery()

  if (!allVehicles || allVehicles.length === 0) {
    return <p>No vehicles available</p>
  }
  return (
    <MainContainer className="container">
      <h2 className="thin">EM DESTAQUE</h2>
      <ListCard isLoading={isLoadingFeaturedVehicles} cars={featuredVehicles} />
      <h2 className="thin">PROMOÇÕES</h2>
      <ListCard isLoading={isLoadingOnSaleVehicles} cars={onSaleVehicles} />
      <h2 className="thin">TODOS OS VEÍCULOS</h2>
      <ListCard isLoading={isLoadingAllVehicles} cars={allVehicles} />
    </MainContainer>
  )
}

export default Main
