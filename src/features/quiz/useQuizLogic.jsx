import quizList from './quizData.json';
import { useState } from 'react';

export default function useQuizLogic() {

const [currentIndex, setCurrentIndex] = useState(0);
const [score, setScore] = useState(0);
const [isCorrect, setIsCorrect] = useState(null);
const [showPopup, setShowPopup] = useState(false);
const [selectAnswer, setSelectAnswer] = useState(null);

    const currentQuiz = quizList[currentIndex];

    //正誤判断と得点の加算
    const checkAnswer = (answer) => () => {
        if (answer === currentQuiz.correct) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        setSelectAnswer(answer);
        setShowPopup(true);
    }

    //次の問題へ
    const onNextQuestion = () => {
        if (currentIndex < quizList.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsCorrect(null);
            setShowPopup(false);
        } else {
            alert("終了です！あなたのスコアは" + score + "/" + quizList.length + "点です！");
            setCurrentIndex(0);
            setScore(0);
            setShowPopup(false);
        }

    }

    return {
        currentQuiz,
        isCorrect,
        showPopup,
        selectAnswer,
        checkAnswer,
        onNextQuestion,
    };
}

export { useQuizLogic };