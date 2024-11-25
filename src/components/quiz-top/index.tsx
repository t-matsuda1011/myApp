import React from 'react';

const Quiztop = () => {
    return (
        <div className="w-3/5 title mx-auto p-5 bg-green-600 rounded-xl text-center text-white font-bold">
            <h1 className="title-text text-3xl">クイズ</h1>
            <form action="" className="mx-auto rounded- font-normal mt-2">
                <select name="" id="quizSelect" className="text-black w-full text-sm rounded-md text-center p-1">
                    <option value="">カテゴリーを選択してください</option>
                    <option value="0">ダイアンクイズ</option>
                    <option value="1">雑学クイズ</option>
                    <option value="2">テスト</option>
                </select>
                <div id="startBtn" className="mt-2 p-2 bg-green-500 hover:bg-green-800 rounded-md transition-all cursor-pointer font-bold">クイズスタート</div>
            </form>
        </div>
    );
};

export default Quiztop;