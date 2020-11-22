export const handleAvatar = (username) => {
  return username.charAt(0).toUpperCase();
};

export const buildHeaders = (token) => ({
  authorization: `Bearer ${token}`
});
