import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

export const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 70%
  );
`
