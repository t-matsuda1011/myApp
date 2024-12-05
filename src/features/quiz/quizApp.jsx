"use client";
import React, { useState } from 'react';
import Question from '../../components/question';
import Options from '../../components/options';
import quizList from './quizData.json';

const QuizApp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuiz = quizList[currentIndex];

    const checkAnswer = (answer) => () => {
        if (answer === currentQuiz.correct) {
            alert("正解です！");
        } else {
            alert("不正解です！");
        }

        if (currentIndex < quizList.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            alert("終了です！");
            setCurrentIndex(0);
        }
    }

    return (
        <div>
            <Question text={currentQuiz.question}/>
            <Options 
                answers={currentQuiz.answers} 
                correct={currentQuiz.correct}
                click={checkAnswer}
            />
        </div>
    )
};

export default QuizApp;