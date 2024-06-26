import React from 'react';

export default function Result({ score, totalQuestions }) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div>
      <h2>Your Result</h2>
      <p>You scored {score} out of {totalQuestions}.</p>
      <p>Percentage: {percentage}%</p>
    </div>
  );
}
