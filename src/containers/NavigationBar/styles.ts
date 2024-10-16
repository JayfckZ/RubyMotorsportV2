import styled from 'styled-components'

export const Bar = styled.div`
  background-color: #3a0000;
  color: white;
  border-bottom: 4px solid #ae0606;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  li {
    list-style: none;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    width: 33%;
    text-align: center;
    padding: 12px 0;
    transition: all ease 0.3s;

    /* &.center {
      border-left: 1px solid white;
      border-right: 1px solid white;
    } */

    &:hover {
      background-color: rgba(200, 200, 200, 0.2);
    }
  }
`
