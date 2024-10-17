import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  .slider {
    height: 220px;
  }

  img {
    border-radius: 4px;
    object-fit: cover;
  }

  .infos {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
  }

  p {
    padding: 8px 0;
    font-size: 18px;

    &.price {
      text-align: end;
      font-weight: bold;
      font-size: 20px;
    }
  }
`
