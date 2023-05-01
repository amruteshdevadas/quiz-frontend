import { QuizQuestion } from "./quizResultComponent";
import { Box } from "@mui/material";

export function QuizList({quizQuestions}) {
    return (
        <Box>
            { quizQuestions?.length && quizQuestions.map((quizQuestion, index) => (
                <QuizQuestion
                    key={index}
                    question={quizQuestion.question}
                    answers={quizQuestion.answers}
                />
            ))}
        </Box>
    );
}

