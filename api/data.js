import axios from './axios';

const data = param => {
    console.log('ApiData');
    console.log('/weather?'+ param);

    return axios.get('/weather?' + param).then(response => response.data);
};

export default {
    data
}