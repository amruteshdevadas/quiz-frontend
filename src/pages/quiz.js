import React, { useEffect, useState } from 'react'
import { Button, Grid, TextField, touchRippleClasses } from '@mui/material'
import { MultiSelect } from '../components'
import { getQuestionCategories, getRandomQuestions, saveQuizResults } from '../apis'
import { QuizComponent } from '../components/quizComponent'
import { getLoggedInUser } from '../helpers'

export function Quiz() {

  const [questionCategories, setQuestionCategories] = useState([])
  const [selectedNames, setSelectedNames] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [takeTest, setTakeTest] = useState(false)
  const [questions, setQuestions] = useState([])
  const [results, setResults] = useState([])
  const [score, setScore] = useState(0);
  let loggedInUser = getLoggedInUser(localStorage.getItem('token'))

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!phone || !email || !name) window.alert("Enter the name,email,phone credentials..!!")
    let payload = {
      categories: selectedNames,
      limit: 2
    }
    let res = await getRandomQuestions(payload)
    setQuestions(res)
    setTakeTest(true)
  };

  const handleSubmitQuiz = async () => {
    //save results to db

    let quizResults = results.map((item) => {
      return {
        question: item.question,
        correct_answer: item.answer,
        user_answer: item.user_answer,
        is_correct: item.answer == item.user_answer
      }
    })

    let payload = {
      quiz_user_id: loggedInUser?.id,
      quiz_category: selectedNames,
      quiz_score: score,
      quiz_questions: quizResults,
      quiz_username: name,
      quiz_email: email,
      quiz_user_phone_number: phone
    }

    await saveQuizResults(payload)

  }

  const questionCategory = async () => {
    let data = await getQuestionCategories()
    if (!data?.config_value?.length === 0
    ) return []
    setQuestionCategories(data.config_value)
  }

  useEffect(() => {
    if (!questionCategories.length) questionCategory()
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ paddingLeft: "50px", paddingTop: "20px" }}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Grid>
          {questionCategories?.length &&
            <MultiSelect
              names={questionCategories}
              selectedNames={selectedNames}
              setSelectedNames={setSelectedNames}
              placeHolder={"Select Topics"}
            />}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Take Quiz
            </Button>
          </Grid>
        </Grid>
      </form>
      {takeTest && <QuizComponent
        questions={questions}
        isOpen={takeTest}
        handleClose={() => setTakeTest(false)}
        handleSubmitQuiz={handleSubmitQuiz}
        setResults={setResults}
        score={score}
        setScore={setScore}
      />}
    </>
  )
}