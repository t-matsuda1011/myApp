import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

const PageContents = ({ children }: Props) => {
    return (
        <div className='mx-auto p-10 bg-white md:w-4/5 w-11/12 rounded-xl shadow-md'>
            {children}
        </div>
    );
};

export default PageContents;