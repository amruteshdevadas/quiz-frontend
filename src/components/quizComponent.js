import { useState } from 'react';
import {
  Paper,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  CircularProgress,
  Modal
} from '@material-ui/core';

export function QuizComponent({ questions, isOpen, handleClose, handleSubmitQuiz, setResults, setScore, score }) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsSubmitting(true);
    }
    let obj = {
      ...currentQuestion,
      user_answer: selectedAnswer
    }
    setResults((prev) => [...prev, obj])
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setIsSubmitting(false);
  };

  if (isSubmitting) {
    return (
      <Paper style={{ padding: '16px', textAlign: 'center' }}>
        <Typography variant="h6">
          Your score is {score} out of {questions.length}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleResetQuiz}>
          Restart Quiz
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmitQuiz}>
          Submit Quiz
        </Button>
      </Paper>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      {questions &&
        <Modal open={isOpen} onClose={handleClose} className='modal'>
          <Paper style={{ padding: '16px', position: 'relative' }} className='modal-paper'>
            <Typography variant="h6" gutterBottom>
              Question {currentQuestionIndex + 1}
            </Typography>
            <Typography variant="body1">{currentQuestion.question}</Typography>
            <FormControl component="fieldset">
              <RadioGroup value={selectedAnswer} onChange={handleAnswerSelect}>
                {currentQuestion.options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              disabled={!selectedAnswer}
              onClick={handleNextQuestion}
              style={{
                position: 'absolute',
                bottom: 20,
                right: 20
              }}
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
            </Button>
            {isSubmitting && (
              <CircularProgress
                size={24}
                style={{ marginTop: '16px', marginLeft: '16px' }}
              />
            )}
          </Paper>
        </Modal>}
    </>
  );
}


