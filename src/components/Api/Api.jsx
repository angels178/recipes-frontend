const api = "Production"
? "https://recipes-backend-practice.onrender.com"
: import.meta.env.VITE_API;

export default api