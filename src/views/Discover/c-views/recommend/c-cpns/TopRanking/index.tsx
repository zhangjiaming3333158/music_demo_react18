import { memo, useState, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { Card, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useMusicSelector, shallowEqualMusic } from '@/store'
import AreaHeaderV1 from '@/components/area-header-v1'
import TopRankColHeader from '@/components/top-rank-col-header'
import { TopRankingWrapper } from './style'
import TopTankColBody from '@/components/top-tank-col-body'

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
  name1: [string, number | null]
  name2: [string, number | null]
  name3: [string, number | null]
}
const columnsHeader: ColumnsType<DataTypeHeader> = [
  {
    dataIndex: 'name1',
    key: 'name1',
    width: 1,
    render: (text: any) => (
      <TopRankColHeader textValue={text}></TopRankColHeader>
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
    render: (text: any) => <TopTankColBody text={text}></TopTankColBody>,
  },
  {
    dataIndex: 'name2',
    key: 'name2',
    width: 220,
    render: (text: any) => <TopTankColBody text={text}></TopTankColBody>,
  },
  {
    dataIndex: 'name3',
    key: 'name3',
    width: 220,
    render: (text: any) => <TopTankColBody text={text}></TopTankColBody>,
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
  // body数据
  useEffect(() => {
    const newState: DataType = {
      key: '10',
      name1: ['查看全部>', null],
      name2: ['查看全部>', null],
      name3: ['查看全部>', null],
    }
    // 取前10条数据
    const newData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (item) =>
        ({
          key: item.toString(),
          name1: [rankings[0]?.playlist?.tracks[item]?.name || '', item + 1],
          name2: [rankings[1]?.playlist?.tracks[item]?.name || '', item + 1],
          name3: [rankings[2]?.playlist?.tracks[item]?.name || '', item + 1],
        }) as DataType,
    )
    // 如果 newData 不为空，将 newState 添加到末尾
    setData((_) => (newData.length > 0 ? [...newData, newState] : [newState]))
  }, [rankings])
  // header数据
  useEffect(() => {
    setHeader([
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
          rowClassName={(_, index) => {
            if (index % 2 === 1) {
              return 'even'
            } else {
              return 'odd'
            }
          }}
          size="small"
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
