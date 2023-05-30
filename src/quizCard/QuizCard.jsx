const QuizCard =({catogary})=>{
return <>
    <div className="">
        <div className="image">
            <img src={catogary.images} alt="subject-img"/>
        </div>
        <div className="">
            <h1 className="title">{catogary.title}</h1>
        </div>
        <div className="">
            <span className="discription">{catogary.discriptio}</span>
        </div>
        <button className="btn">play Now</button>
    </div>
</>
}
export default QuizCard;