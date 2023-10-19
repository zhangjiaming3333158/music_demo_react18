import styled from 'styled-components'

export const HeaderV2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h3 {
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.color.middle};
  }

  a{
    color: ${({ theme }) => theme.palette.color.middle};
    &:hover{
      text-decoration: none;
      color: ${({ theme }) => theme.palette.color.default};
    }
  }
`
