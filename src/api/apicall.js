import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wHtvmQkhhfxmjd2P6Wt6zXuTpW7DOj7dtfR-PNbHSE0'
    }
});