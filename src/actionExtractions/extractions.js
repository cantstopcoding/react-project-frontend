export const accountData = (data) => {
  return {
    first_name: data.firstName,
    last_name: data.lastName,
    username: data.username,
    email: data.email,
  };
};

export const itemData = (data) => {
  return {
    name: data.name,
    description: data.description,
    price: data.price,
    image_url: data.imageUrl,
  };
};

export const postOrPatch = (data, method) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: method,
    body: JSON.stringify(data),
  };
};
