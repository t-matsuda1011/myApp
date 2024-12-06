"use client";

import Question from '../../components/question';
import Options from '../../components/options';
import PopUpComment from '../../components/popup-comment';
import { useQuizLogic } from './useQuizLogic';

const QuizApp = () => {
    const {
        currentQuiz,
        isCorrect,
        checkAnswer,
        onNextQuestion,
    } = useQuizLogic();

    return (
        <div>
            <Question text={currentQuiz.question}/>
            <Options 
                answers={currentQuiz.answers} 
                correct={currentQuiz.correct}
                click={checkAnswer}
            />
            {/* <PopUpComment
                isCorrect={isCorrect}
                question={currentQuiz.question}
                correct={currentQuiz.correct}
                answer={currentQuiz.answer}
                explanation={currentQuiz.explanation}
                click={onNextQuestion}
            /> */}
        </div>
    );
};

export default QuizApp;