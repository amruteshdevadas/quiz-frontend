import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from './pages/layout';
import { LoginScreen } from './pages/login'
import { Quiz } from './pages/quiz'
import { QuizIndividualResult } from './pages/attemptQuiz'
import { QuizResults } from './pages/quizResults';
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='quiz' element={<Quiz />} />
          <Route path='quiz-results' element={<QuizResults />} />
          <Route path='quiz-result/:id' element={<QuizIndividualResult />}/>
        </Route>
        <Route path='/login' element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}






