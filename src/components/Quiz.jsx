import { useState } from "react";
import FinishScreen from "./FinishScreen";
import StartScreen from "./StartScreen";

const Quiz = ({questions, finishData})=>{
    const [showStart,setShowStart] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctIndex, setCorrectIndex] = useState(null);
    const [score,setScore] = useState(0);
    const [endQuiz,setEndQuiz] = useState(null);
    const [scoreLevel,setScoreLevel] = useState(0);

    const {img, choices, correctAnswer} = questions[currentQuestion];

    const onAnswerClick = (answer,index)=>{
        setSelectedIndex(index);
        if(answer === correctAnswer){
            setIsCorrect('answer');
            setScore(score+1);
        }else{
            findCorrectAnswer();
            setIsCorrect('error');
        }
        setTimeout(nextQuestion,1000)
    }
    const nextQuestion = ()=>{
        if(currentQuestion < questions.length-1){
            setCurrentQuestion(currentQuestion+1)
        }else{
            findResultData(score+1,finishData);
            setCurrentQuestion(0);
            setEndQuiz(true);
        }
        setIsCorrect(null);
        setSelectedIndex(null);
        setCorrectIndex(null);
    }
    const findCorrectAnswer = ()=>{
        for(var i = 0;i<4;i++){
            if(choices[i] === correctAnswer){
                setCorrectIndex(i);
            }
        }
    }
    const findResultData = (score,resultData)=>{
        for(var i= 0;i<resultData.length;i++){
            if(resultData[i].range.includes(score)){
                setScoreLevel(i);
            }
        }
    }

    return(
        <>
        <header>Guess the African</header>
        <div className="quiz-container">
            {endQuiz != true? <>
                {showStart? 
                <StartScreen start={showStart} setStart={setShowStart}/> 
                : 
                <>
                    <div className="number-container">
                        <span className="current-question-number">{currentQuestion + 1}</span>
                        <span className="total-question-number">/{questions.length}</span>
                    </div>
                    <img src={"/"+img} alt="" />
                    <ul className="quiz-list">
                        {
                            choices.map((answer, index)=>(
                                <li 
                                    key={index} 
                                    onClick={()=>isCorrect == null? onAnswerClick(answer,index):''} 
                                    data-class={correctIndex != null && index == correctIndex? 'answer':''}
                                    className={isCorrect !=null && index == selectedIndex?isCorrect:''}>
                                        {answer}
                                </li>
                            ))
                        }
                    </ul>
                </>
                }
            </>
                : 
            <> 
                <FinishScreen score={score} resetScore={setScore} scoreLevel={scoreLevel} finishData={finishData} restart={endQuiz} setRestart={setEndQuiz}/>
            </>}
        </div>
        </>
    );
}

export default Quiz;