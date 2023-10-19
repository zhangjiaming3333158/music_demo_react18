import styled from 'styled-components'


export const PlayerWrapper = styled.div`
  .content {
    background: url(${'@/assets/img/wrap-bg.png'}) repeat-y;
    background-color: ${(props)=>props.theme.palette.background.paper};
    display: flex;
  }
`

export const PlayerLeft = styled.div`
  width: 710px;
`

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`
