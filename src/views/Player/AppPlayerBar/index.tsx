import { memo, useState, useRef, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'
import { useMusicSelector, shallowEqualMusic, useMusicDispatch } from '@/store'
import {
  changeLyricIndexAction,
  changeMusicAction,
  changePlayModeAction,
  fetchCurrentSongAction,
} from '@/store/modules/player.ts'
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
  HeartTwoTone,
  RocketTwoTone,
  SoundTwoTone,
  ProfileTwoTone,
} from '@ant-design/icons'
import { Slider, message, ConfigProvider } from 'antd'
import { formatTime, getImageSize } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'

interface IProps {
  children?: ReactNode
}
const AppPlayerBar: FC<IProps> = () => {
  /** 组件内部定义的数据 */
  const [volume, setVolume] = useState(1) //音量[0-100]
  const [showVolumeSlider, setShowVolumeSlider] = useState(false) //是否展示音量
  const [openLyric, setOpenLyric] = useState(true) //是否展示歌词
  const [isPlaying, setIsPlaying] = useState(false) //是否播放
  const [progress, setProgress] = useState(0) //进度条
  const [duration, setDuration] = useState(0) //总时长
  const [currentTime, setCurrentTime] = useState(0) //当前播放时间
  const [isSliding, setIsSliding] = useState(false) //是否处于拖拽状态
  const audioRef = useRef<HTMLAudioElement>(null)

  /** 发起action(获取数据) */
  const dispatch = useMusicDispatch()
  useEffect(() => {
    // 使用函数来触发 dispatch
    //error: dispatch(() => fetchCurrentSongAction(167876))
    dispatch(fetchCurrentSongAction(2084366052))
  }, [])
  /** 从redux中获取数据 */
  const { currentSong, lyrics, lyricIndex, playMode } = useMusicSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode,
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
    // 3.根据当前的时间匹配对应的歌词
    // currentTime/lyrics
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }

    // 4.匹配上对应的歌词的index
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))

    // 5.展示对应的歌词
    message.open({
      content: lyrics[index].text,
      key: 'lyric',
      duration: 0,
    })
  }

  function handleTimeEnded() {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      handleChangeMusic(true)
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

  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext))
  }

  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
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

  function handleVolumeChanging(value: number) {
    setVolume(value)
    audioRef.current!.volume = value / 100
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

  //展示歌词
  function handleLyricOpen() {
    setOpenLyric(!openLyric)
    if (openLyric) {
      message.destroy('lyric')
    } else {
      message.open({
        content: lyrics[lyricIndex].text,
        key: 'lyric',
        duration: 0,
      })
    }
  }
  //展示音量
  function showVolume() {
    setShowVolumeSlider(true)
  }
  //隐藏音量
  function hideVolume() {
    setShowVolumeSlider(false)
  }
  return (
    <PlayerBarWrapper>
      <div className="bar wrap-v2">
        {/* Slider组件 */}
        <ConfigProvider
          theme={{
            components: {
              Slider: {
                controlSize: 10,
                dotActiveBorderColor: '#c3473a',
                dotBorderColor: '#c3473a',
                handleActiveColor: '#c3473a',
                handleColor: '#c3473a',
                railSize: 2,
                trackBg: '#c3473a',
                trackHoverBg: '#c3473a',
              },
            },
          }}
        >
          <Slider
            step={0.5}
            value={progress}
            tooltip={{ formatter: null }}
            onChange={handleSliderChanging}
            onAfterChange={handleSliderChanged}
          />
        </ConfigProvider>
      </div>
      <div className="content wrap-v2">
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
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarControl>
          <button className="btn">
            <HeartTwoTone
              style={{
                marginRight: 10,
                fontSize: 20,
              }}
              twoToneColor="#c3473a"
            />
          </button>
          <button className="btn left" onClick={() => handleChangeMusic(false)}>
            <LeftCircleTwoTone
              style={{ fontSize: '26px' }}
              twoToneColor="#c3473a"
            />
          </button>
          <button className="btn" onClick={handlePlayBtnClick}>
            {!isPlaying ? (
              <PlayCircleTwoTone
                style={{ fontSize: '40px' }}
                twoToneColor="#c3473a"
              />
            ) : (
              <PauseCircleTwoTone
                style={{ fontSize: '40px' }}
                twoToneColor="#c3473a"
              />
            )}
          </button>
          <button className="btn right" onClick={() => handleChangeMusic()}>
            <RightCircleTwoTone
              style={{ fontSize: '26px' }}
              twoToneColor="#c3473a"
            />
          </button>
          <button className="btn">
            <RocketTwoTone
              style={{
                marginLeft: 10,
                fontSize: 20,
              }}
              twoToneColor="#c3473a"
            />
          </button>
        </BarControl>
        <BarOperator $playmode={playMode}>
          <div className="right sprite_playbar">
            <button
              className="btn"
              onMouseEnter={showVolume}
              onMouseLeave={hideVolume}
            >
              <div
                className="sliderVolume"
                style={{ display: showVolumeSlider ? 'block' : 'none' }}
              >
                <ConfigProvider
                  theme={{
                    components: {
                      Slider: {
                        controlSize: 10,
                        dotActiveBorderColor: '#c3473a',
                        dotBorderColor: '#c3473a',
                        handleActiveColor: '#c3473a',
                        handleColor: '#c3473a',
                        railSize: 2,
                        trackBg: '#c3473a',
                        trackHoverBg: '#c3473a',
                      },
                    },
                  }}
                >
                  <Slider
                    vertical
                    defaultValue={1}
                    value={volume}
                    onChange={handleVolumeChanging}
                  />
                </ConfigProvider>
              </div>
              <SoundTwoTone
                style={{
                  marginRight: 15,
                  fontSize: 20,
                  // height: 150,
                }}
                twoToneColor="#c3473a"
              />
            </button>
            <button
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
            ></button>
            <button className="btn">
              <ProfileTwoTone
                style={{
                  fontSize: 20,
                }}
                twoToneColor="#c3473a"
              />
            </button>
            <button
              className="btn"
              style={{ fontSize: 20, marginLeft: 10 }}
              onClick={handleLyricOpen}
            >
              <p
                style={{
                  marginTop: -2,
                  color: openLyric ? '#c3473a' : '#a1a1a1',
                }}
              >
                词
              </p>
            </button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTimeEnded}
      />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
