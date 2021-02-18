import axios from 'axios';

const KEY = "AIzaSyA2bxsu8TiIURpAa7kPNC04HiJ7gmn-kb4";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});