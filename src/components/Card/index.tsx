import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Button from '../Button'
import Tag from '../../components/Tag'

import { CardContainer } from './styles'

type CarCard = Pick<Car, 'id' | 'name' | 'price' | 'images'> & {
  infos: string[]
}

const Card = ({ id, name, price, images, infos }: CarCard) => {
  const [autoPlay, setAutoPlay] = useState(false)

  return (
    <CardContainer>
      <div
        className="images"
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
        <div className="tags">
          {infos && infos.map((info) => <Tag key={info} tagType={info} />)}
        </div>
      </div>
      <div className="infos">
        <p>{name}</p>
        <div className="prices">
          {price.old_price && <p className="old_price">{price.old_price}</p>}
          <p className="current_price">{price.current_price}</p>
        </div>
      </div>
      <Button type="link" to={id}>
        TENHO INTERESSE
      </Button>
    </CardContainer>
  )
}

export default Card
