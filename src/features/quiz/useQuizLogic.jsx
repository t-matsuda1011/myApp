import quizList from './quizData.json';
import { useState } from 'react';

export default function useQuizLogic() {

const [currentIndex, setCurrentIndex] = useState(0);
const [score, setScore] = useState(0);
    const currentQuiz = quizList[currentIndex];

    //正誤判断と得点の加算
    const checkAnswer = (answer) => () => {
        if (answer === currentQuiz.correct) {
            alert("正解です！");
            setScore(score + 1);
        } else {
            alert("不正解です！");
        }

        if (currentIndex < quizList.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            alert("終了です！あなたのスコアは" + score + "/" + quizList.length + "点です！");
            setCurrentIndex(0);
            setScore(0);
        }
    }

    return {
        currentQuiz,
        checkAnswer,
    };
}

export { useQuizLogic };