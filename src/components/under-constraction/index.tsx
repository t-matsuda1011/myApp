import React from 'react';
import Image from 'next/image';

const UnderConstruction = () => {
    return (
        <div className="mt-10 mx-auto p-5 bg-white md:w-4/5 w-11/12 rounded-xl shadow-md text-center">
            <p className='md:pt-10 pt-5'>ページ作成中…</p>
            <Image src="/underConstruction.png" alt="工事中" className='mx-auto md:w-5/12 w-3/6' width={500} height={500}/>
        </div>
    );
};

export default UnderConstruction;