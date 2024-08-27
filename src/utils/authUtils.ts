export const isAuthenticated = (): boolean => {
    // Implement authentication check logic
    return !!localStorage.getItem('user');
  };
  