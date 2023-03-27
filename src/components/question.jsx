import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Question = ()=>{
    const [quizState,dispatch] = useContext(QuizContext);
    return <div className="title">Devinez l'Africain</div>
}

export default Question;
