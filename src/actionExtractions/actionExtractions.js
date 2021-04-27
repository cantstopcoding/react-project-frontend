export const accountData = (data) => {
  return {
    first_name: data.firstName,
    last_name: data.lastName,
    username: data.username,
    email: data.email,
  };
};
