import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID R2Wd436bsXK0eHIfmB4VqhEhgkNmHn5aDS1AtgPrYrs'
    }
});