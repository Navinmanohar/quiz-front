import { useEffect,useState,Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import QuizCard from "../../quizCard/QuizCard"




const Home = () => {
  let [catogary,setCatogary]=useState([])
  useEffect(() => {
   ( async () => {
      try {
        const {data}= await axios.get("https://quize.cyclic.app/quiz");
        setCatogary(data);
      } catch (e) {
        console.log(e);
      }
    })()
  }, []);
  return (
    <>
      <Fragment>
      <Navbar></Navbar>
        {
          catogary.map((catogary,index)=>{
            return <QuizCard catogary={catogary}  key={catogary.id}></QuizCard>
          })
        }
           </Fragment>
    </>
  );
};
export default Home;
