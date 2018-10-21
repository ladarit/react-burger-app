import axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://rect-burger-app.firebaseio.com/'
});

export default instanse;