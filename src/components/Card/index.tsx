import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Button from '../Button'

import { CardContainer } from './styles'

type CarCard = Pick<
  Car,
  'id' | 'name' | 'price' | 'images' | 'discount_percentage'
>
const Card = ({ id, name, price, images, discount_percentage }: CarCard) => {
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
          <div className="slider">
            <img
              src={
                typeof images === 'object'
                  ? images.image1
                  : 'https://placehold.co/300x220'
              }
              alt=""
            />
          </div>
          <div className="slider">
            <img
              src={
                typeof images === 'object'
                  ? images.image2
                  : 'https://placehold.co/300x220'
              }
              alt=""
            />
          </div>
          <div className="slider">
            <img
              src={
                typeof images === 'object'
                  ? images.image3
                  : 'https://placehold.co/300x220'
              }
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <div className="infos">
        <p>{name}</p>
        <p className="price">{price.current_price}</p>
      </div>
      <Button type="link" to={id}>
        TENHO INTERESSE
      </Button>
    </CardContainer>
  )
}

export default Card
