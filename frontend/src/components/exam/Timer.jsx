import React, { useState, useEffect } from 'react';
import { useExam } from '../../context/ExamContext';
import examService from '../../services/examService';
  import '../../assets/styles/Exam.css';

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert to seconds
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        
        // Set warning when 5 minutes left
        if (prev <= 300) {
          setIsWarning(true);
        }
        
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={`timer ${isWarning ? 'timer-warning' : ''}`}>
      <div className="timer-display">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      {isWarning && <p className="timer-alert">Time is running out!</p>}
    </div>
  );
};

export default Timer;
