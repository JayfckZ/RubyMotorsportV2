import styled from 'styled-components'

export const CardContainer = styled.div`
  img {
    border-radius: 4px;
  }

  .infos {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    justify-content: space-between;
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
