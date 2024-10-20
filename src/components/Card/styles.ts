import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  .slider {
    height: 220px;
  }

  .images {
    position: relative;

    .tags {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
    }
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
    padding: 8px;
  }

  p {
    font-size: 18px;

    &.current_price {
      text-align: end;
      font-weight: bold;
      font-size: 20px;
    }

    &.old_price {
      text-align: end;
      font-size: 13px;
      text-decoration: line-through;
      text-decoration-color: red;
    }
  }
`
