import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getSingleResult } from '../apis';
import { Results } from '../components/quizResults';

export function QuizIndividualResult() {

  const [quizResult, setQuizResult] = useState([])
  const { id } = useParams();
  const getResult = async (id) => {
    let res = await getSingleResult(id)
    if (!res) return
    setQuizResult(res.quiz_questions)
  }
  useEffect(() => {
    if (!id) return
    getResult(id)
  }, [id])

  return (
    <>
      {
        quizResult?.length && <Results
          results={quizResult}
        />
      }
    </>
  )
}
