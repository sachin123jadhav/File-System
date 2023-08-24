export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token; // Convert token to a boolean value
  };