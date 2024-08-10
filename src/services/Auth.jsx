


export const checkTokenValidity = async (token) => {
  try {
    const response = await fetch('/api/check-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    return data.isValid;
  } catch (error) {
    console.error('Error checking token validity:', error);
    return false;
  }
};


const login = async (formData) => {
  try {
    
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();

    if (data.success) {
      return { success: true, userType: data.userType };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error('AuthService error:', error);
    return { success: false, message: 'An error occurred' };
  }
};

export default { login };

