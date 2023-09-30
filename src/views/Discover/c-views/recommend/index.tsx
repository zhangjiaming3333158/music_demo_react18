import { useState, ReactNode, FC, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
  AllCount
} from '@/store/count'// 引入count模块
import styles from './index.module.scss'

interface IProps {
  children?: ReactNode
}
const recommend: FC<IProps> = () => {
  const count = useSelector(selectCount)// 获取count模块的值
  const all = useSelector(AllCount)// 获取count模块的initialState
  const dispatch = useDispatch()// 获取dispatch方法
  const [incrementAmount, setIncrementAmount] = useState('2')// 设置incrementAmount的值

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}// 调用dispatch方法
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  )
}

export default memo(recommend)
