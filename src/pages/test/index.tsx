import useStores from "@/hooks/useStores"
import { Button, message } from "antd"
import { observer } from "mobx-react-lite"

const TestPage = observer(() => {
  const { counter } = useStores()
  const reset = () => {
    counter.reset()
    message.info("计数器已归零")
  }
  return <>
    <h1>This is Test</h1>
    <Button onClick={reset}>Reset</Button>
  </>
})

export default TestPage