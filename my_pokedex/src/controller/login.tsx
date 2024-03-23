const loginMethod = async (json: {}) => {
  const res = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });

  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.msg);
  }

  const data = await res.json();
  return data;
};

export default loginMethod;
