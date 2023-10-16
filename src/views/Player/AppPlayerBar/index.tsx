import { memo, useState, useRef, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'
import { useMusicSelector, shallowEqualMusic, useMusicDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player.ts'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper,
} from './style'
import {
  LeftCircleTwoTone,
  RightCircleTwoTone,
  PlayCircleTwoTone,
  PauseCircleTwoTone,
} from '@ant-design/icons'
import { Slider } from 'antd'
import { formatTime, getImageSize } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'

interface IProps {
  children?: ReactNode
}
const AppPlayerBar: FC<IProps> = () => {
  /** 组件内部定义的数据 */
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  //
  // const [playMode, setPlayMode] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  /** 发起action(获取数据) */
  const dispatch = useMusicDispatch()
  useEffect(() => {
    // 使用函数来触发 dispatch
    //error: dispatch(() => fetchCurrentSongAction(167876))
    dispatch(fetchCurrentSongAction(2084366052))
  }, [])
  /** 从redux中获取数据 */
  const { currentSong } = useMusicSelector(
    (state) => ({
      currentSong: state.player.currentSong,
    }),
    shallowEqualMusic,
  )

  /** 组件内的副作用操作 */
  useEffect(() => {
    // 1.播放音乐
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    // audioRef.current
    //   ?.play()
    //   .then(() => {
    //     setIsPlaying(true)
    //     console.log('歌曲播放成功')
    //   })
    //   .catch((err) => {
    //     setIsPlaying(false)
    //     console.log('歌曲播放失败:', err)
    //   })

    // 2.获取音乐的总时长
    setDuration(currentSong.dt)
  }, [currentSong])

  /** 音乐播放的进度处理 */
  function handleTimeUpdate() {
    // 1.获取当前的播放时间
    const currentTime = audioRef.current!.currentTime * 1000

    // 2.计算当前歌曲进度
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }
  }

  /** 组件内部的事件处理 */
  function handlePlayBtnClick() {
    // 1.控制播放器的播放/暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 2.改变isPlaying的状态
    setIsPlaying(!isPlaying)
  }

  function handleSliderChanging(value: number) {
    // 0.目前是处于拖拽状态
    setIsSliding(true)

    // 1.设置progress
    setProgress(value)

    // 2.获取value对应位置的时间
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  function handleSliderChanged(value: number) {
    // 1.获取点击位置的时间
    const currentTime = (value / 100) * duration

    // 2.设置当前播放的时间
    audioRef.current!.currentTime = currentTime / 1000

    // 3.currentTime/progress
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(false)
  }
  return (
    // className="sprite_playbar"
    <PlayerBarWrapper>
      <div className="content wrap-v2">
        <BarControl>
          <button
            className="btn left"
            // onClick={() => handleChangeMusic(false)}
          >
            <LeftCircleTwoTone
              style={{ fontSize: '26px' }}
              twoToneColor="#c3473a"
            />
          </button>
          <button
            className="btn"
            onClick={handlePlayBtnClick}
          >
            {!isPlaying ? (
              <PlayCircleTwoTone
                style={{ fontSize: '40px' }}
                twoToneColor="#c3473a"
              />
            ) : (
              <PauseCircleTwoTone
                style={{ fontSize: '40px'}}
                twoToneColor="#c3473a"
              />
            )}
          </button>
          <button
            className="btn right"
            // onClick={() => handleChangeMusic()}
          >
            <RightCircleTwoTone
              style={{ fontSize: '26px' }}
              twoToneColor="#c3473a"
            />
          </button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src={getImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              {/* Slider组件 */}
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
                onChange={handleSliderChanging}
                onAfterChange={handleSliderChanged}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator $playmode={1}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              // onClick={handleChangePlayMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        // onEnded={handleTimeEnded}
      />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)