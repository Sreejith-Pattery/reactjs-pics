import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        'Authorization':'Client-ID 0103c3b9ef4e52f0915661960563912467d30e347fac517ebd3b9e64f21fc4bb'
    }
});