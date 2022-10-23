import React, { useState } from 'react';
const Question = ({ title, info }) => {
  const [seeAnswer, setSeeAnswer] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <div className='btn-text' onClick={() => setSeeAnswer(!seeAnswer)}>
          {seeAnswer ? 'Hide Answer' : 'See Answer'}
        </div>
      </header>
      {seeAnswer && <p>{info}</p>}
    </article>
  );
};

export default Question;