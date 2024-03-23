const registerMethod = async (json: {}) => {
  try {
    const res = await fetch("http://localhost:3000/auth/register", {
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
    await res.json();
    window.location.replace("/login");
  } catch (err) {
    console.error("Error:", err);
  }
};

export default registerMethod;
