import React from 'react';
import Question from '../../components/question';
import Options from '../../components/options';

const question = "ことわざの「急がば回れ」の語源となったのはどこでしょうか？";
const answers = ["富士山", "鳥取砂丘", "清水寺", "琵琶湖"];

const QuizApp = () => {
    return (
        <div>
            <Question text={question}/>
            <Options answers={answers}/>
        </div>
    )
};

export default QuizApp;