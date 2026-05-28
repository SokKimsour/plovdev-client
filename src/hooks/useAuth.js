import { useState } from 'react';

export function useAuth() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken') || null
  );

  const saveToken = (token) => {
    if (token) {
      localStorage.setItem('accessToken', token);
    } else {
      localStorage.removeItem('accessToken');
    }
    setAccessToken(token);
  };

  return {
    accessToken,
    setAccessToken: saveToken,
  };
}
