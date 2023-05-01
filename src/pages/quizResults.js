import React, { useEffect, useState } from 'react'
import { getQuizResults } from '../apis'
import { getLoggedInUser } from '../helpers'
import { QuizList } from '../components/quizList'


let loggedInUser = getLoggedInUser()

export function QuizResults() {

    const [quizResults, setQuizResults] = useState([])
    const getResults = async () => {
        let payload = {
            userId: loggedInUser?.id,
        }

        let res = await getQuizResults(payload)
        console.log(res, "res")
        if (res?.length) setQuizResults(res)
    }

    useEffect(() => {
        getResults()
    }, [])

    return (
        <>
            {quizResults?.length &&
                <QuizList
                    quizzes={quizResults}
                />
            }
        </>
    )
}





