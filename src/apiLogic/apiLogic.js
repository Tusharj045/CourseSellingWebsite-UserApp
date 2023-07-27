import axios from 'axios';

const BACKEND_URL = 'https://course-backend-olive.vercel.app'; //'http://localhost:3000';

const getAllCourses = async () => {
    const reqBody = {
        method: 'GET',
        url: `${BACKEND_URL}/users/courses`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        console.log(result);
        return result.data;
    } catch(err) {
        console.log(err);
        return [];
    }
}

const getPurchasedCourses = async () => {
    const reqBody = {
        method: 'GET',
        url: `${BACKEND_URL}/users/purchasedCourses`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        console.log(result);
        return result.data.purchasedCourses;
    } catch(err) {
        console.log(err);
        return [];
    }
}

const getCourseById = async (courseId) => {
    const reqBody = {
        method: 'GET',
        url: `${BACKEND_URL}/admin/course/${courseId}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        const result = await axios(reqBody);
        return result.data.Course;
    } catch(err) {
        console.log(err);
        return [];
    }
}

const getUserDetails = async () => {
    const reqBody = {
        method: 'GET',
        url: `${BACKEND_URL}/users/me`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        return result.data.userDetails;
    } catch(err) {
        console.log(err);
        return null;
    }
}

const buyCourse = async (courseId) => {
    const reqBody = {
        method: 'POST',
        url: `${BACKEND_URL}/users/courses/${courseId}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        console.log(result);
        return result;
    } catch(err) {
        console.log(err);
    }
}

const loginUser = async (email, password, rememberLogin) => {
    const reqBody = {
        method: 'POST',
        url: `${BACKEND_URL}/users/login`,
        data: {
            username: email, 
            password
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        localStorage.setItem('token', result.data.token)
        console.log(result);
        return {message: result.data.message, severity: 'success'};
    } catch(err) {
        console.log(err);
        return {message: err.response.data.message, severity: 'error' };
    }
}

const signupUser = async (name, email, password) => {
    const reqBody = {
        method: 'POST',
        url: `${BACKEND_URL}/users/signup`,
        data: {
            name,
            username: email, 
            password
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        console.log(reqBody)
        const result = await axios(reqBody);
        localStorage.setItem('token', result.data.token)
        console.log(result);
        return {message: result.data.message, severity: 'success'};
    } catch(err) {
        console.log(err);
        return {message: err.response.data.message, severity: 'error' };
    }
}



export default {
    loginUser,
    signupUser,
    getAllCourses,
    buyCourse,
    getUserDetails,
    getCourseById,
    getPurchasedCourses,
};