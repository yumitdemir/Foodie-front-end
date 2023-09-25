
const api = (url, options = {}) => {
    options.headers = {
        ...options.headers,
    };
    return fetch(import.meta.env.VITE_APP_BACKEND_API_URL + url, options);
};

export default api;