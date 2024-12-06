import React from 'react';

type Props = { text: string };

const PageMessage = ({ text }: Props) => {
    return (
        <div className='mx-auto p-9 bg-white md:w-4/5 w-11/12 rounded-xl shadow-md'>
            <p>ここは{text}ページです。</p>
        </div>
    );
};

export default PageMessage;