import { memo, useState, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { Card, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useMusicSelector, shallowEqualMusic } from '@/store'
import AreaHeaderV1 from '@/components/area-header-v1'
import TopRankColHeader from '@/components/top-rank-col-header'
import { TopRankingWrapper } from './style'

interface IProps {
  children?: ReactNode
}
interface DataTypeHeader {
  key: string
  name1: [string, string]
  name2: [string, string]
  name3: [string, string]
}
interface DataType {
  key: string
  name1: [string, number]
  name2: [string, number]
  name3: [string, number]
}
const columnsHeader: ColumnsType<DataTypeHeader> = [
  {
    dataIndex: 'name1',
    key: 'name1',
    width: 1,
    render: (text: any) => (
      <div>
        <TopRankColHeader textValue={text}></TopRankColHeader>
      </div>
    ),
  },
  {
    dataIndex: 'name2',
    key: 'name2',
    width: 1,
    render: (text: any) => (
      <TopRankColHeader textValue={text}></TopRankColHeader>
    ),
  },
  {
    dataIndex: 'name3',
    key: 'name3',
    width: 1,
    render: (text: any) => (
      <TopRankColHeader textValue={text}></TopRankColHeader>
    ),
  },
]
const columns: ColumnsType<DataType> = [
  {
    dataIndex: 'name1',
    key: 'name1',
    width: 220,
    render: (text: any) => (
      <div>
        <span
          style={{
            color: text[1] >= 1 && text[1] <= 3 ? '#c10d0c' : 'inherit',
          }}
        >
          {text[1]}
        </span>
        <a style={{ color: '#000', marginLeft: 10 }}>{text[0]}</a>
      </div>
    ),
  },
  {
    dataIndex: 'name2',
    key: 'name2',
    width: 220,
    render: (text: any) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          style={{
            color: text[1] >= 1 && text[1] <= 3 ? '#c10d0c' : 'inherit',
          }}
        >
          {text[1]}
        </span>
        <a style={{ color: '#000', marginLeft: 10 }}>{text[0]}</a>
      </div>
    ),
  },
  {
    dataIndex: 'name3',
    key: 'name3',
    width: 220,
    render: (text: any) => (
      <div>
        <span
          style={{
            color: text[1] >= 1 && text[1] <= 3 ? '#c10d0c' : 'inherit',
          }}
        >
          {text[1]}
        </span>
        <a style={{ color: '#000', marginLeft: 10 }}>{text[0]}</a>
      </div>
    ),
  },
]
const TopRanking: FC<IProps> = () => {
  const [data, setData] = useState<DataType[]>()
  const [header, setHeader] = useState<DataTypeHeader[]>()
  const { rankings = [] } = useMusicSelector(
    (state) => ({
      rankings: state.recommend.rankings,
    }),
    shallowEqualMusic,
  )
  console.log('rankings', rankings)
  useEffect(() => {
    // 在rankings或其他依赖发生变化时，更新data
    setData(
      //取前10条数据
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => ({
        key: item.toString(),
        name1: [rankings[0]?.playlist?.tracks[item]?.name || '', item + 1] as [
          string,
          number,
        ], //[歌名,排名]
        name2: [rankings[1]?.playlist?.tracks[item]?.name || '', item + 1] as [
          string,
          number,
        ], //[歌名,排名]
        name3: [rankings[2]?.playlist?.tracks[item]?.name || '', item + 1] as [
          string,
          number,
        ], //[歌名,排名]
      })),
    )
  }, [rankings]) // 添加rankings为依赖
  console.log('data', data)
  useEffect(() => {
    setHeader([
      //取前10条数据
      {
        key: '0',
        name1: [
          rankings[0]?.playlist?.coverImgUrl || '',
          rankings[0]?.playlist?.name || '',
        ] as [string, string], //[封面,名称]
        name2: [
          rankings[1]?.playlist?.coverImgUrl || '',
          rankings[1]?.playlist?.name || '',
        ] as [string, string], //[封面,名称]
        name3: [
          rankings[2]?.playlist?.coverImgUrl || '',
          rankings[2]?.playlist?.name || '',
        ] as [string, string], //[封面,名称]
      },
    ])
  }, [rankings]) // 添加rankings为依赖
  console.log('header', header)
  return (
    <TopRankingWrapper>
      <Card
        title={<AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />}
        bordered={false}
        style={{ width: 709, marginTop: 20 }}
      >
        <Table
          rowClassName={(_) => {
            return 'header'
          }}
          bordered
          columns={columnsHeader}
          dataSource={header}
          pagination={false}
          showHeader={false}
        />
        <Table
          size="middle"
          bordered
          columns={columns}
          dataSource={data}
          pagination={false}
          showHeader={false}
        />
      </Card>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
