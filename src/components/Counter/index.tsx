import { useState } from "react"
import styles from "./styles.module.less"

const Counter = () => {
  const [num, setNumber] = useState<number>(0)

  const increment = () => {
    setNumber(num => num + 1)
  }

  const decrement = () => {
    setNumber(num => num - 1)
  }

  return <>
    <div className={styles.counter}>
      <button onClick={decrement}>-</button>
      <div className={styles.number}>{num}</div>
      <button onClick={increment}>+</button>
    </div>
    <button className={styles.resetbtn} onClick={() => setNumber(0)}>Reset重置</button>
  </>
}

export default Counter