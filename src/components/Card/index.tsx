import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Button from '../Button'

import { CardContainer } from './styles'

const Card = () => {
  const [autoPlay, setAutoPlay] = useState(false)

  return (
    <CardContainer>
      <div
        onMouseEnter={() => setAutoPlay(true)}
        onMouseLeave={() => setAutoPlay(false)}
      >
        <Carousel
          showThumbs={false}
          autoPlay={autoPlay}
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          interval={1500}
        >
          <div>
            <img src="https://placehold.co/300x220" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/300x220" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/300x220" alt="" />
          </div>
        </Carousel>
      </div>
      <div className="infos">
        <p>Nome do veículo veículo veículo veículo veículo</p>
        <p className="price">$2.200.00</p>
      </div>
      <Button type="link">TENHO INTERESSE</Button>
    </CardContainer>
  )
}

export default Card
