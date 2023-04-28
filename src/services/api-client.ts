import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fb8e659c70c04edd90dae3f9e1c49e31'
    }
});

export default apiClient;