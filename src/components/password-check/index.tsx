import React from 'react';
import { useState } from 'react';

const PasswordCheck = () => {
    const [inputPassword, setInputPassword] = useState('');
    const [result, setResult] = useState('');
    const handleCheck = () => {
        if (inputPassword === '1011') {
            setResult('パスワードが一致しました');
        } else {
            setResult('パスワードが一致しません');
        }
    }

    return (
        <div className="mt-10 mx-auto p-10 bg-white md:w-4/5 w-11/12 rounded-xl shadow-md text-center">
            <p className='md:pt-10 pt-5'>パスワードを入力してください</p>
            <input
                type='password'
                className='md:mt-5 mt-3 mr-2 p-2 border border-gray-300 rounded-md'
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
            />
            <button onClick={handleCheck} className='md:mt-5 mt-3 p-2 bg-blue-500 text-white rounded-md'>確認</button>
            <p className='mt-5'>{result}</p>
        </div>
    );
};

export default PasswordCheck;