import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Quiz = ()=>{
    const [quizState,dispatch] = useContext(QuizContext);

    return(
        <div>
            <div className="score">
                question {quizState.currentQuestionIndex +1}/{quizState.questions.length}
            </div>
        </div>
    );
};

export default Quiz;