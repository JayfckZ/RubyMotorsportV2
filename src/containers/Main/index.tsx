import { MainContainer } from './styles'
import ListCard from '../ListCard'

const Main = () => {
  return (
    <MainContainer className="container">
      <h2 className="thin">EM DESTAQUE</h2>
      <section>
        <ListCard />
      </section>
      <h2 className="thin">PROMOÇÕES</h2>
      <section></section>
      <h2 className="thin">TODOS OS VEÍCULOS</h2>
      <section></section>
    </MainContainer>
  )
}

export default Main
