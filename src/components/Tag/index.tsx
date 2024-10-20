import * as S from './styles'

export type props = {
  tagType: string
}

const Tag = ({ tagType }: props) => {
  if (tagType == 'featured') {
    return (
      <S.Tag tagType={tagType}>
        <i className="bi bi-star"></i>
      </S.Tag>
    )
  }

  return (
    <S.Tag tagType={tagType}>
      <i className="bi bi-percent"></i>
    </S.Tag>
  )
}

export default Tag
