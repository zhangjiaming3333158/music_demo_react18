import styled from 'styled-components'
// import theme from '@/assets/theme'

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: ${(props)=>props.theme.palette.background.paper};
  box-shadow: 0 0 10px #ccc;

  .bar {
    position: relative;
    margin-top: -10px;
    height: 10px;
    background-color: ${(props)=>props.theme.palette.background.paper};
    .ant-slider {
      position: relative;
      top: -3px;
      width: 980px;
      .ant-slider-handle {
        width: 22px;
        height: 24px;
        border: none;
      }
    }
    .trackHoverBg {
      height: 9px;
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 100%;
  }
`

export const BarPlayerInfo = styled.div`
  flex: 1;
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 0;
      left: 8px;
      font-size: 14px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .time {
        margin-top: 10px;
        margin-left: 8px;
        font-size: 14px;
        .current {
          color: #a1a1a1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const BarControl = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    cursor: pointer;
    background-color: ${(props)=>props.theme.palette.background.paper};
  }

  .left {
    margin-right: 10px;
  }

  .right {
    margin-left: 10px;
  }
`

interface IBarOperator {
  $playmode: number
}
export const BarOperator = styled.div<IBarOperator>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  top: 3px;

  .btn {
    width: 25px;
    height: 25px;
    background-color: ${(props)=>props.theme.palette.background.paper};
  }

  .right {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 13px;
    background-position: -147px -248px;
    .sliderVolume {
      position: absolute;
      padding: 15px 5px 20px 5px;
      bottom: 25px;
      left: 13px;
      height: 100px;
      width: 28px;
      background-color: ${(props)=>props.theme.palette.background.paper};
      box-shadow: 0 0 10px #ccc;
    }

    .loop {
      margin: 0 10px 0 15px;
      background-position: ${(props) => {
        switch (props.$playmode) {
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return '-3px -344px'
        }
      }};
    }
  }
`
