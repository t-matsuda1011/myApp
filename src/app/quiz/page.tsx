import * as React from 'react';
import PageMessage from '@/components/page-message';
import QuizApp from '@/features/quiz/quizApp';

export default function Page() {
  return (
    <div className='mt-10'>
      <PageMessage text='Quiz'/>
      <div className='mt-10 mx-auto p-10 bg-white md:w-4/5 w-11/12 rounded-xl shadow-md'>
        <QuizApp/>
      </div>
    </div>
  );
}
