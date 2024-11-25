import React from 'react';

type Props = { text: string };

const PageMessage = ({ text }: Props) => {
    return (
        <div className='mx-auto p-10 bg-white w-4/5 rounded-xl shadow-md'>
            <p>ここは{text}ページです。</p>
        </div>
    );
};

export default PageMessage;