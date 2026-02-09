import React from 'react';
import '../../assets/styles/Exam.css';

const ExamInstructions = ({ exam, onStartExam, onCancel }) => {
  return (
    <div className="instructions-modal">
      <div className="instructions-container">
        <h2>{exam.title}</h2>
        
        <div className="instructions-content">
          <h3>Exam Instructions</h3>
          
          <div className="exam-details">
            <div className="detail-row">
              <span className="label">Duration:</span>
              <span className="value">{exam.duration} minutes</span>
            </div>
            <div className="detail-row">
              <span className="label">Total Questions:</span>
              <span className="value">{exam.totalQuestions || exam.questions?.length || 0}</span>
            </div>
            <div className="detail-row">
              <span className="label">Total Marks:</span>
              <span className="value">{exam.totalMarks}</span>
            </div>
            <div className="detail-row">
              <span className="label">Passing Score:</span>
              <span className="value">{exam.passingScore}</span>
            </div>
          </div>

          <div className="instructions-list">
            <h4>Please Read Carefully:</h4>
            <ul>
              <li>You will have {exam.duration} minutes to complete the exam</li>
              <li>Once started, the timer cannot be paused</li>
              <li>You can navigate between questions using the navigation buttons</li>
              <li>Make sure to review your answers before submitting</li>
              <li>You can mark questions for review and come back later</li>
              <li>Do not close or refresh the browser window during the exam</li>
              <li>Negative marking (if applicable): {exam.negativeMarking ? 'Yes' : 'No'}</li>
              <li>All answers are final once submitted</li>
            </ul>
          </div>

          {exam.description && (
            <div className="exam-description">
              <h4>Description:</h4>
              <p>{exam.description}</p>
            </div>
          )}

          <div className="instructions-footer">
            <p className="confirmation-text">
              I have read and understand all the instructions above
            </p>
            <div className="button-group">
              <button onClick={onCancel} className="btn btn-secondary">
                Go Back
              </button>
              <button onClick={onStartExam} className="btn btn-primary">
                Start Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamInstructions;
