import axios from 'axios';

export const quizApiInstance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
});


export async function getAllQuestions() {
    try {
        const response = await quizApiInstance.get('/questions');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
export async function getRandomQuestions(payload) {
    try {
        const response = await quizApiInstance.get(`/random-questions?limit=${payload.limit}&categories=${payload.categories}`,);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function login(payload) {
    try {
        const response = await quizApiInstance.post('/login', payload);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getSingleQuestion(questionId) {
    try {
        const response = await quizApiInstance.get(`/questions/:${questionId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getQuestionCategories() {
    try {
        const response = await quizApiInstance.get('/question-category');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function saveQuizResults(payload) {
    try {
        const response = await quizApiInstance.post('/save-results', payload);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return []
    }
}

export async function getQuizResults(payload) {
    try {
        const response = await quizApiInstance.get(`/quiz-result?user_id=${payload.userId}`)
        return response.data
    }
    catch (err) {
        console.log(err)
        return []
    }
}
export async function getSingleResult(id) {
    try {
        const resposnse = await quizApiInstance.get(`quiz-result/${id}`)
        return resposnse.data
    } catch (error) {
        console.log(error)
        return false
    }
}