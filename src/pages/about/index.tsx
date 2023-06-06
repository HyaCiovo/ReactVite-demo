import { Input } from "antd";

const AboutPage = () => {
  const list = [1, 2, 3, 4, 5]
  return (<>
    <h1>
      这是About页
    </h1>
    <div className="flex flex-nowrap w-[300px] justify-between">
      {list.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
    <Input className="m-[20px]" placeholder="请输入" />
  </>)
}
export default AboutPage;