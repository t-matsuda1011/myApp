import React from 'react';

const UnderConstruction = () => {
    return (
        <div className="mt-10 mx-auto p-10 bg-white w-4/5 rounded-xl shadow-md text-center">
            <p className='pt-10'>ページ作成中…</p>
            <img src="/underConstruction.png" alt="工事中" className='mx-auto w-5/12'/>
        </div>
    );
};

export default UnderConstruction;