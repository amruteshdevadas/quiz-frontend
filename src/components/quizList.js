
import { QuizCard } from "./quizCard";

export function QuizList({ quizzes }) {
    return (
        <div>
            {quizzes.map((quiz) => (
                <QuizCard
                    key={quiz._id}
                    name={quiz.quiz_username}
                    category={quiz.quiz_category}
                    image={quiz.image}
                    score={quiz.quiz_score}
                    attempted={quiz.quiz_attempted_date}
                    quizId={quiz._id}
                />
            ))}
        </div>
    );
}