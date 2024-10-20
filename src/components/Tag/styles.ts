import styled from 'styled-components'

type props = {
  tagType: string
}

export const Tag = styled.div<props>`
  margin-left: 8px;
  margin-top: 8px;
  padding: 4px 6px;
  color: white;
  background-color: ${(props) =>
    props.tagType === 'featured' ? '#e5b808' : 'red'};
  border-radius: 16px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  .discount-text {
    opacity: 0;
    width: 0;
    overflow: hidden;
    transition:
      width 0.9s ease-in-out,
      opacity 0.3s ease-in-out;
  }

  &:hover .discount-text {
    margin-left: 8px;
    opacity: 1;
    width: auto;
  }
`
