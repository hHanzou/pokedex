const loginMethod = async (json: {}, saveToken: (token: string) => void) => {
  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    });

    if (!res.ok) {
      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.msg);
      }
    }

    const data = await res.json();
    saveToken(data.token);
  } catch (err) {
    console.error("Error:", err);
  }
};

export default loginMethod;
