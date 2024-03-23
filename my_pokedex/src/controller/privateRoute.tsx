const privateMethod = async (id: string) => {
  if (localStorage.getItem("token") !== null) {
    console.log(localStorage.getItem("token"));
    const varHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    console.log(varHeaders);
    const res = await fetch(`http://localhost:3000/trainer`, {
      method: "POST",
      headers: varHeaders,
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      throw new Error("Erro ao fazer POST");
    }

    return await res.json();
  }
};

export default privateMethod;
