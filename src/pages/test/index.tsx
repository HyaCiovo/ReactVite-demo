import useStores from "@/hooks/useStores"
import { Button } from "antd"
import { observer } from "mobx-react-lite"

const TestPage = observer(() => {
  const { counter } = useStores()
  return <>
    <h1>This is Test</h1>
    <Button onClick={() => counter.reset()}>Reset</Button>
  </>
})

export default TestPage