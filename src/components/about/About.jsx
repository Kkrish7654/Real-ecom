import { useSelector } from "react-redux";

const About = () => {
  const products = useSelector((state)=>state)
  console.log(products)
  return (
    <>
    </>
  )
}
export default About;
