import axios from 'axios';

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';

console.log('baseURL', axios.defaults.baseURL);

export default axios;