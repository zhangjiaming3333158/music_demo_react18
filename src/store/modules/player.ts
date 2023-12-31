import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '@/service/modules/player'
import { ILyric, parseLyric } from '@/utils/parse-lyric'
import type { IRootState } from '@/store'

interface IThunkState {
  state: IRootState
}

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playMode: number
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: 'カゲロウ',
      id: 794267,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 20878,
          name: 'ONE OK ROCK',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 75,
      st: 0,
      rt: '',
      fee: 0,
      v: 30,
      crbt: null,
      cf: '',
      al: {
        id: 78646,
        name: 'ゼイタクビョウ',
        picUrl:
          'https://p2.music.126.net/dZq3mfGR07F4Tj4hHTFJ7Q==/109951163799994121.jpg',
        tns: [],
        pic_str: '109951163799994121',
        pic: 109951163799994130,
      },
      dt: 248000,
      h: {
        br: 320000,
        fid: 0,
        size: 9922394,
        vd: -51708,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5953453,
        vd: -51708,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3968983,
        vd: -51708,
        sr: 44100,
      },
      sq: {
        br: 912984,
        fid: 0,
        size: 28302520,
        vd: -51708,
        sr: 44100,
      },
      hr: null,
      a: null,
      cd: '1',
      no: 6,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 9007199255003136,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 30,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 663018,
      mv: 0,
      publishTime: 1193846400000,
    },
    {
      name: '起风了',
      id: 1330348068,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12085562,
          name: '买辣椒也用券',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 42,
      crbt: null,
      cf: '',
      al: {
        id: 74715426,
        name: '起风了',
        picUrl:
          'https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
        tns: [],
        pic_str: '109951163699673355',
        pic: 109951163699673360,
      },
      dt: 325868,
      h: {
        br: 320000,
        fid: 0,
        size: 13037236,
        vd: -77525,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7822359,
        vd: -74987,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5214920,
        vd: -73504,
        sr: 44100,
      },
      sq: {
        br: 985873,
        fid: 0,
        size: 40158105,
        vd: -77524,
        sr: 44100,
      },
      hr: {
        br: 2832349,
        fid: 0,
        size: 115371553,
        vd: -77475,
        sr: 88200,
      },
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 42,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10782615,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1415923,
      publishTime: 0,
    },
    {
      name: '终结孤单',
      id: 386536,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 13193,
          name: '五月天',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 80,
      st: 0,
      rt: '600902000000028840',
      fee: 8,
      v: 44,
      crbt: null,
      cf: '',
      al: {
        id: 38285,
        name: '我们是五月天',
        picUrl:
          'https://p1.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg',
        tns: [],
        pic_str: '109951164912221924',
        pic: 109951164912221920,
      },
      dt: 189000,
      h: {
        br: 320000,
        fid: 0,
        size: 7580827,
        vd: -45000,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4548533,
        vd: -42600,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3032386,
        vd: -41100,
        sr: 44100,
      },
      sq: null,
      hr: null,
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 1125899906850816,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 44,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rurl: null,
      mst: 9,
      cp: 684010,
      rtype: 0,
      mv: 5293223,
      publishTime: 1049126400000,
    },
  ],
  playSongIndex: -1,
  playMode: 2, // 0:顺序播放 1:随机播放 2:单曲循环
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    },
  },
})

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('currentSong', (id: number, { dispatch, getState }) => {
  // 准备播放某一首歌曲时, 分成两种情况
  // 1.从列表尝试是否可以获取到这首歌
  const playSongList = getState().player.playSongList
  const findIndex = playSongList.findIndex((item) => item.id === id)
  if (findIndex === -1) {
    // 没有找到相同的
    // 1.获取歌曲信息
    getSongDetail(id).then((res) => {
      // 1.获取song
      if (!res.songs.length) return
      const song = res.songs[0]

      // 2.将song放到currentSong中
      const newPlaySongList = [...playSongList]
      newPlaySongList.push(song)
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongListAction(newPlaySongList))
      dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
    })
  } else {
    // 找到了相同的item
    const song = playSongList[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(findIndex))
  }

  // 2.获取歌词数据
  getSongLyric(id).then((res) => {
    // 1.获取歌词的字符串
    const lyricString = res.lrc.lyric
    // 2.对歌词进行解析(一个个对象)
    const lyrics = parseLyric(lyricString)
    // 3.将歌词放到state中
    dispatch(changeLyricsAction(lyrics))
  })
})

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  'changemuisc',
  (isNext, { dispatch, getState }) => {
    // 1.获取state中的数据
    const player = getState().player
    const playMode = player.playMode
    const songIndex = player.playSongIndex
    const songList = player.playSongList

    // 2.根据不同的模式计算不同的下一首歌曲的索引
    let newIndex = songIndex
    if (playMode === 1) {
      // 随机播放
      newIndex = Math.floor(Math.random() * songList.length)
    } else {
      // 单曲顺序和顺序播放
      newIndex = isNext ? songIndex + 1 : songIndex - 1
      if (newIndex > songList.length - 1) newIndex = 0
      if (newIndex < 0) newIndex = songList.length - 1
    }

    // 3.获取当前的歌曲
    const song = songList[newIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(newIndex))

    // 4.请求新的歌词
    getSongLyric(song.id).then((res) => {
      // 1.获取歌词的字符串
      const lyricString = res.lrc.lyric
      // 2.对歌词进行解析(一个个对象)
      const lyrics = parseLyric(lyricString)
      // 3.将歌词放到state中
      dispatch(changeLyricsAction(lyrics))
    })
  },
)

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changePlayModeAction,
} = playerSlice.actions

export default playerSlice.reducer
