import React from 'react';
import { QUESTION_TYPE, DIFFICULTY_LEVEL } from '../../utils/constants';
import '../../assets/styles/Exam.css';

const QuestionCard = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  isAnswered, 
  onAnswerChange,
  userResponse 
}) => {
  const handleOptionChange = (e) => {
    const optionId = e.target.value;
    // Convert string option IDs to numbers for consistency if it's a numeric string
    const value = !isNaN(optionId) ? parseInt(optionId) : optionId;
    onAnswerChange(question.id, value);
  };

  const handleTextChange = (e) => {
    onAnswerChange(question.id, e.target.value);
  };

  const getDifficultyColor = (level) => {
    switch(level) {
      case DIFFICULTY_LEVEL.EASY: return '#10b981';
      case DIFFICULTY_LEVEL.MEDIUM: return '#f59e0b';
      case DIFFICULTY_LEVEL.HARD: return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <div className="question-meta">
          <span className="question-number">Question {questionNumber} of {totalQuestions}</span>
          <span className="question-difficulty" style={{ color: getDifficultyColor(question.difficulty) }}>
            {question.difficulty?.toUpperCase()}
          </span>
          {isAnswered && <span className="question-answered">✓ Answered</span>}
        </div>
      </div>

      <div className="question-content">
        <h3 className="question-text">{question.text}</h3>
        
        {question.description && (
          <p className="question-description">{question.description}</p>
        )}

        <div className="question-options">
          {question.type === QUESTION_TYPE.MULTIPLE_CHOICE && (
            <div className="mcq-options">
              {question.options?.map((option, index) => {
                // Handle both string array and object array formats
                const optionId = typeof option === 'string' ? index : option.id;
                const optionText = typeof option === 'string' ? option : option.text;
                
                return (
                  <label key={optionId} className="option-label">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={optionId}
                      checked={userResponse === optionId || userResponse === String(optionId)}
                      onChange={handleOptionChange}
                    />
                    <span className="option-text">{optionText}</span>
                  </label>
                );
              })}
            </div>
          )}

          {question.type === QUESTION_TYPE.TRUE_FALSE && (
            <div className="tf-options">
              <label className="option-label">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value="true"
                  checked={userResponse === 'true'}
                  onChange={handleOptionChange}
                />
                <span className="option-text">True</span>
              </label>
              <label className="option-label">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value="false"
                  checked={userResponse === 'false'}
                  onChange={handleOptionChange}
                />
                <span className="option-text">False</span>
              </label>
            </div>
          )}

          {(question.type === QUESTION_TYPE.SHORT_ANSWER || question.type === QUESTION_TYPE.ESSAY) && (
            <textarea
              className="answer-textarea"
              value={userResponse || ''}
              onChange={handleTextChange}
              placeholder={`Enter your ${question.type === QUESTION_TYPE.SHORT_ANSWER ? 'short answer' : 'essay'}`}
              rows={question.type === QUESTION_TYPE.ESSAY ? 6 : 3}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
