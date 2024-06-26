import React, { useState } from 'react';

export default function QuestionBox({ currentQuestion, handleAnswer, question }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [highlighted, setHighlighted] = useState(false);

  const handleOptionClick = (isCorrect) => {
    setSelectedOption(isCorrect);
    setTimeout(() => {
      handleAnswer(isCorrect);
      setSelectedOption(null);
      setHighlighted(false);
    }, 500);
  };

  return (
    <div className="question-box">
      <h2>Question: {currentQuestion + 1} out of {question.length}</h2>
      <p className={highlighted ? 'highlighted' : ''}>{question.text}</p>
      <div className="question-options">
        {question.options.map(option => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.isCorrect)}
            disabled={selectedOption !== null}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="highlight-buttons">
        <button onClick={() => setHighlighted(true)}>Highlight</button>
        <button onClick={() => setHighlighted(false)}>Remove Highlight</button>
      </div>
    </div>
  );
}
