import { Input } from "antd";

const AboutPage = () => {
  const list = [1, 2, 3, 4, 5]
  return (<>
    <h1>
      This is About Page
    </h1>
    <div className="flex flex-nowrap w-[300px] justify-between">
      {list.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
    <Input className="m-[20px]" placeholder="Please enter your question" />
  </>)
}
export default AboutPage;