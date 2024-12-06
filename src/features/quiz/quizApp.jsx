"use client";

import Question from '../../components/question';
import Options from '../../components/options';
import PopUpComment from '../../components/popup-comment';
import { useQuizLogic } from './useQuizLogic';

const QuizApp = () => {
    const {
        currentQuiz,
        isCorrect,
        showPopup,
        selectAnswer,
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
            {
                showPopup && (
                    <PopUpComment
                        isCorrect={isCorrect}
                        question={currentQuiz.question}
                        correct={currentQuiz.correct}
                        answer={selectAnswer}
                        explanation={currentQuiz.explanation}
                        click={onNextQuestion}
                    />
                )   
            }
        </div>
    );
};

export default QuizApp;