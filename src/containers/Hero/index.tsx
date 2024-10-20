import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Container, Filter, Image, Logo } from './styles'

import carousel1 from '../../media/carousel-1.jpg'
import carousel2 from '../../media/carousel-2.jpg'
import carousel3 from '../../media/carousel-3.jpg'
import logo from '../../media/ruby_logo.png'

const Hero = () => {
  return (
    <Container>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <Image src={carousel1} alt="Imagem 1" />
        </div>
        <div>
          <Image src={carousel2} alt="Imagem 2" />
        </div>
        <div>
          <Image src={carousel3} alt="Imagem 3" />
        </div>
      </Carousel>
      <Filter />
      <Logo src={logo} />
    </Container>
  )
}

export default Hero
