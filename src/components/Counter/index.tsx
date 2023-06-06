import { useState } from "react"
import styles from "./styles.module.less"
import { Button } from "antd"

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
      <Button onClick={decrement}>-</Button>
      <div className={styles.number}>{num}</div>
      <Button onClick={increment}>+</Button>
    </div>
    <Button className={styles.resetbtn} onClick={() => setNumber(0)}>Reset重置</Button>
  </>
}

export default Counter